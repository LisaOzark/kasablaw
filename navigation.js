/* Native disclosures preserve keyboard and touch support. */
(() => {
  const menus = Array.from(document.querySelectorAll('.about-menu'));
  function closeAboutMenus() { menus.forEach(menu => { menu.open = false; }); }
  document.addEventListener('click', event => {
    menus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
    if (event.target.closest('.about-options a')) closeAboutMenus();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    menus.forEach(menu => {
      if (menu.open && menu.contains(document.activeElement)) menu.querySelector('summary').focus();
    });
    closeAboutMenus();
  });
  document.addEventListener('focusin', event => {
    menus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
  });
  document.querySelector('#burger')?.addEventListener('click', closeAboutMenus);
  const language = document.querySelector('#language-select');
  function updateLanguageLabel() {
    language.setAttribute('aria-label', {en:'Language', he:'שפה', ar:'اللغة'}[document.documentElement.lang] || 'Language');
  }
  if (language) { updateLanguageLabel(); language.addEventListener('change', updateLanguageLabel); }
})();
