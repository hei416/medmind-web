/**
 * include.js — loads shared HTML partials (navbar, footer) into placeholder elements.
 *
 * Fixes the original bug where fetch('navbar.html') used a page-relative path and had
 * no error handling. That broke when opened via file:// (fetch is blocked under the
 * file protocol), when pages lived at different folder depths, and it failed silently
 * with no fallback if the request errored.
 *
 * Fix: resolve partial paths from the site root, wait for DOMContentLoaded so target
 * elements exist, and handle errors explicitly.
 */
(function () {
  function loadPartial(targetId, url) {
    const target = document.getElementById(targetId);
    if (!target) return;

    fetch(url, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        target.innerHTML = html;
        target.dispatchEvent(new CustomEvent('partial:loaded', { detail: { url } }));
      })
      .catch((err) => {
        console.error(err);
        target.innerHTML = '<!-- failed to load partial: ' + url + ' -->';
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadPartial('navbar', '/components/navbar.html');
    loadPartial('footer-placeholder', '/components/footer.html');
  });
})();
