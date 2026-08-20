/**
 * solutions-tabs.js — tab switching for the solutions page.
 * Extracted from an inline <script> that relied on the global `event` object,
 * which is deprecated/non-standard. Now takes the clicked button explicitly.
 */
function showTab(id, btn) {
  document.querySelectorAll('.solution-block').forEach((el) => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach((el) => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
