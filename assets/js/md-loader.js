// Loads Markdown into any element with data-md-src
(async () => {
  const targets = document.querySelectorAll('[data-md-src]');
  for (const el of targets) {
    const src = el.getAttribute('data-md-src');
    try {
      const res = await fetch(src, { cache: 'no-store' });
      if (!res.ok) throw new Error(`${src} ${res.status}`);
      const md = await res.text();
      el.innerHTML = marked.parse(md);
    } catch (err) {
      el.innerHTML = `<p>Couldn’t load content: ${src}</p>`;
      console.error(err);
    }
  }
})();
