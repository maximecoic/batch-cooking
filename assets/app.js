/* Batch Cooking — visionneuse des menus Markdown */
(() => {
  'use strict';

  const TAB_LABELS = {
    '01-plats': '🍽️ Les plats',
    '02-courses': '🛒 Courses',
    '03-session': '⏱️ Session',
    '04-verification': '✅ Vérification'
  };

  const els = {
    weekSelect: document.getElementById('week-select'),
    tabs: document.getElementById('tabs'),
    status: document.getElementById('status'),
    doc: document.getElementById('doc'),
    wakelock: document.getElementById('wakelock-btn'),
    reset: document.getElementById('reset-checks')
  };

  let index = [];
  let current = { week: null, slug: null };

  /* ---------- Utilitaires ---------- */

  const slugOf = (file) => file.replace(/\.md$/, '');

  function formatWeek(week) {
    const d = new Date(week + 'T00:00:00');
    if (Number.isNaN(d.getTime())) return week;
    return 'Semaine du ' + d.toLocaleDateString('fr-FR', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  function showStatus(message, isError) {
    els.status.textContent = message;
    els.status.classList.toggle('error', Boolean(isError));
    els.status.hidden = false;
    els.doc.hidden = true;
  }

  /* ---------- Cases à cocher persistantes ---------- */

  const storageKey = () => `bc:checks:${current.week}:${current.slug}`;

  function loadChecks() {
    try {
      return JSON.parse(localStorage.getItem(storageKey()) || '[]');
    } catch {
      return [];
    }
  }

  function saveChecks(list) {
    try {
      localStorage.setItem(storageKey(), JSON.stringify(list));
    } catch { /* quota ou mode privé : on ignore */ }
  }

  function wireCheckboxes() {
    const boxes = els.doc.querySelectorAll('.task-list-item input[type="checkbox"]');
    const saved = new Set(loadChecks());

    boxes.forEach((box, i) => {
      box.disabled = false;
      box.checked = saved.has(i);
      box.setAttribute('aria-label', (box.parentElement.textContent || '').trim().slice(0, 120));
      box.parentElement.classList.toggle('done', box.checked);

      box.addEventListener('change', () => {
        box.parentElement.classList.toggle('done', box.checked);
        const checked = [];
        boxes.forEach((b, j) => { if (b.checked) checked.push(j); });
        saveChecks(checked);
      });
    });
  }

  /* ---------- Sommaire cliquable ---------- */

  const slugify = (text) => text
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';

  function buildToc() {
    const headings = [...els.doc.querySelectorAll('h2, h3')];
    if (headings.length < 3) return;

    const used = new Set();
    const details = document.createElement('details');
    details.className = 'toc';
    details.open = window.matchMedia('(min-width: 900px)').matches;

    const summary = document.createElement('summary');
    summary.textContent = `Sommaire — ${headings.length} sections`;
    details.appendChild(summary);

    const list = document.createElement('ul');
    headings.forEach((h) => {
      let id = slugify(h.textContent);
      let n = 2;
      while (used.has(id)) id = `${slugify(h.textContent)}-${n++}`;
      used.add(id);
      h.id = id;

      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = h.textContent.trim();
      a.addEventListener('click', (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (!details.open) return;
        if (!window.matchMedia('(min-width: 900px)').matches) details.open = false;
      });

      const li = document.createElement('li');
      li.className = h.tagName === 'H3' ? 'toc-sub' : 'toc-main';
      li.appendChild(a);
      list.appendChild(li);
    });

    details.appendChild(list);
    els.doc.prepend(details);
  }

  /* ---------- Bouton « Copier » sur les blocs de code ---------- */

  function linesOf(pre) {
    // textContent, jamais innerText : innerText dépend du rendu (scroll horizontal
    // du bloc, retour à la ligne) et peut fusionner les lignes en un seul bloc sur
    // iOS Safari — Rappels ne crée une tâche par ligne que si chaque ligne est
    // séparée par un simple \n, sans ligne vide ni \r résiduel.
    return pre.textContent
      .split(/\r\n|\r|\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .join('\n');
  }

  function wireCopyButtons() {
    els.doc.querySelectorAll('pre').forEach((pre) => {
      const wrap = document.createElement('div');
      wrap.className = 'code-block';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = 'Copier';
      btn.addEventListener('click', async () => {
        const text = linesOf(pre);
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          // Safari iOS hors contexte sécurisé, ou permission refusée.
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch { /* rien de plus à tenter */ }
          ta.remove();
        }
        btn.textContent = 'Copié ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copier';
          btn.classList.remove('copied');
        }, 1800);
      });
      wrap.appendChild(btn);
    });
  }

  /* ---------- Rendu ---------- */

  function render(markdown) {
    const html = marked.parse(markdown, { gfm: true, breaks: false });
    // Le Markdown vient du dépôt, mais on assainit quand même avant injection.
    els.doc.innerHTML = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

    els.doc.querySelectorAll('table').forEach((table) => {
      const wrap = document.createElement('div');
      wrap.className = 'table-scroll';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });

    els.doc.querySelectorAll('li').forEach((li) => {
      const first = li.firstElementChild;
      if (first && first.tagName === 'INPUT' && first.type === 'checkbox') {
        li.classList.add('task-list-item');
      }
    });

    els.doc.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });

    wireCopyButtons();
    buildToc();
    wireCheckboxes();
    els.status.hidden = true;
    els.doc.hidden = false;
  }

  async function loadDoc(week, slug) {
    current = { week, slug };
    showStatus('Chargement…');
    try {
      const res = await fetch(`menus/${week}/${slug}.md`, { cache: 'no-cache' });
      if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
      render(await res.text());
      window.scrollTo({ top: 0 });
    } catch (err) {
      showStatus(`Impossible de charger menus/${week}/${slug}.md — ${err.message}`, true);
    }
  }

  /* ---------- Navigation ---------- */

  function buildTabs(week) {
    const entry = index.find((w) => w.week === week);
    els.tabs.replaceChildren();

    entry.files.map(slugOf).forEach((slug) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tab';
      btn.textContent = TAB_LABELS[slug] || slug;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(slug === current.slug));
      btn.addEventListener('click', () => { location.hash = `#/${week}/${slug}`; });
      els.tabs.appendChild(btn);
    });
  }

  function route() {
    const parts = location.hash.replace(/^#\//, '').split('/');
    const wantedWeek = index.some((w) => w.week === parts[0]) ? parts[0] : index[0].week;
    const entry = index.find((w) => w.week === wantedWeek);
    const slugs = entry.files.map(slugOf);
    const wantedSlug = slugs.includes(parts[1]) ? parts[1] : slugs[0];

    els.weekSelect.value = wantedWeek;
    current = { week: wantedWeek, slug: wantedSlug };
    buildTabs(wantedWeek);
    loadDoc(wantedWeek, wantedSlug);
  }

  /* ---------- Écran allumé (utile pendant la cuisine) ---------- */

  let sentinel = null;

  async function toggleWakeLock() {
    if (!('wakeLock' in navigator)) {
      els.wakelock.disabled = true;
      els.wakelock.title = 'Non disponible sur ce navigateur';
      return;
    }
    if (sentinel) {
      await sentinel.release().catch(() => {});
      sentinel = null;
      els.wakelock.setAttribute('aria-pressed', 'false');
      return;
    }
    try {
      sentinel = await navigator.wakeLock.request('screen');
      sentinel.addEventListener('release', () => {
        sentinel = null;
        els.wakelock.setAttribute('aria-pressed', 'false');
      });
      els.wakelock.setAttribute('aria-pressed', 'true');
    } catch {
      els.wakelock.setAttribute('aria-pressed', 'false');
    }
  }

  /* ---------- Démarrage ---------- */

  els.wakelock.addEventListener('click', toggleWakeLock);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' &&
        els.wakelock.getAttribute('aria-pressed') === 'true' && !sentinel) {
      toggleWakeLock();
    }
  });

  els.reset.addEventListener('click', () => {
    localStorage.removeItem(storageKey());
    els.doc.querySelectorAll('.task-list-item input[type="checkbox"]').forEach((box) => {
      box.checked = false;
      box.parentElement.classList.remove('done');
    });
  });

  els.weekSelect.addEventListener('change', () => {
    location.hash = `#/${els.weekSelect.value}`;
  });

  window.addEventListener('hashchange', route);

  fetch('menus/index.json', { cache: 'no-cache' })
    .then((r) => {
      if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
      return r.json();
    })
    .then((data) => {
      index = (data.weeks || []).filter((w) => w.files && w.files.length);
      if (!index.length) {
        showStatus('Aucun menu trouvé dans menus/.', true);
        return;
      }
      index.forEach((w) => {
        const opt = document.createElement('option');
        opt.value = w.week;
        opt.textContent = formatWeek(w.week);
        els.weekSelect.appendChild(opt);
      });
      route();
    })
    .catch((err) => showStatus(`Index des menus introuvable — ${err.message}`, true));
})();
