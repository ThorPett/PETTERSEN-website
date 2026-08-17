/* ===========================================================================
   PETTERSEN Website — único JavaScript del sitio.
   Mejora progresiva: sin este archivo la página se lee y se navega entera.
   Hace dos cosas: estado del header al hacer scroll y menú mobile.
   Sin dependencias, sin cookies, sin terceros.
   =========================================================================== */
(function () {
  'use strict';

  /* --- Header transparente sobre el hero ------------------------------- */
  var header = document.querySelector('[data-header]');
  if (header) {
    var setTop = function () {
      header.setAttribute('data-top', window.scrollY > 24 ? '0' : '1');
    };
    setTop();
    window.addEventListener('scroll', setTop, { passive: true });
  }

  /* --- Menú mobile ------------------------------------------------------ */
  var burger = document.querySelector('[data-burger]');
  var menu = document.querySelector('[data-mobile-menu]');

  if (burger && menu) {
    var iconOpen = burger.querySelector('[data-burger-open]');
    var iconClose = burger.querySelector('[data-burger-close]');

    var setOpen = function (open) {
      menu.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      if (iconOpen) iconOpen.hidden = open;
      if (iconClose) iconClose.hidden = !open;
    };

    burger.addEventListener('click', function () {
      setOpen(menu.hidden);
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) {
        setOpen(false);
        burger.focus();
      }
    });
  }
})();
