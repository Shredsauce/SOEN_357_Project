// Loads Markdown into any element with data-md-src, wrapped in a centered container
(async () => {
  const targets = document.querySelectorAll('[data-md-src]');
  for (const el of targets) {
    const src = el.getAttribute('data-md-src');
    try {
      const res = await fetch(src, { cache: 'no-store' });
      if (!res.ok) throw new Error(`${src} ${res.status}`);
      const md = await res.text();
      const html = marked.parse(md);
      el.innerHTML = `<div class="container">${html}</div>`;
    } catch (err) {
      el.innerHTML = `<div class="container"><p>Couldn’t load content: ${src}</p></div>`;
      console.error(err);
    }
  }
})();
