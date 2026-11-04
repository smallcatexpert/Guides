/* Keep the compatibility source as plain Markdown, including cell-note links. */
function colorMediaPlayerCompatibility() {
  const heading = document.getElementById('media-player-compatibility');
  if (!heading) return;
  const article = heading.closest('article');
  article.classList.add('media-player-compatibility');
  const statuses = {Y: 'yes', N: 'no', '?': 'unknown'};
  article.querySelectorAll('table td').forEach((cell) => {
    const value = cell.cloneNode(true);
    value.querySelectorAll('sup').forEach((note) => note.remove());
    const status = statuses[value.textContent.trim()];
    if (status) cell.dataset.compatibility = status;
  });
}

/* Material emits this event for initial loads and instant navigation. */
if (typeof document$ !== 'undefined') {
  document$.subscribe(colorMediaPlayerCompatibility);
} else {
  colorMediaPlayerCompatibility();
}
