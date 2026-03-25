(() => {
  const menu = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  const openBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const menuLinks = document.querySelectorAll('.mobile-menu-item');

  const openMenu = () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();