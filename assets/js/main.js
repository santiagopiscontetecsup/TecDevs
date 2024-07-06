/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  // Módulo para cargar detalles del proyecto
  function loadProjectDetails() {
    function getQueryParams() {
      const params = new URLSearchParams(window.location.search);
      return {
        id: params.get('id')
      };
    }

    const queryParams = getQueryParams();
    const projectId = queryParams.id;

    // Datos de ejemplo de proyectos (en un caso real, esto puede venir de una API o un archivo JSON)
    const projects = {
      tecsana: {
        title: "Tecsana",
        description: "Página web para gestión de clínica médica. Incluye portal de pacientes con reserva de citas online, acceso a historiales médicos y una interfaz para que los médicos registren consultas y recetas. Diseño moderno y funcional con énfasis en la experiencia del usuario y la seguridad de la información médica.",
        url: "http://tecsana.com",
        images: [
          "assets/img/masonry-portfolio/web-tecsana.png",
          "assets/img/masonry-portfolio/web-tecsana2.png",
          "assets/img/masonry-portfolio/web-tecsana3.png"
        ]
      },
      gassmart: {
        title: "GasSmart",
        description: "Página web de datos estadísticos para distribuidores de gas. Los usuarios pueden acceder a informes detallados sobre la demanda de gas en diferentes regiones, precios de mercado, tendencias de consumo y más.",
        url: "http://gassmart.com",
        images: [
          "assets/img/masonry-portfolio/web-gassmart.png",
          "assets/img/masonry-portfolio/web-gassmart2.png"
        ]
      },
      lacubeta: {
        title: "La Cubeta",
        description: "Sitio web interactivo para una licorería, que permite a los clientes consultar precios de productos con un solo clic. Al seleccionar el botón de compra, los usuarios son dirigidos directamente al WhatsApp personal de la licorería para una atención inmediata y personalizada. Además, el sitio web proporciona la ubicación exacta del local y enlaces directos a sus perfiles en Instagram, Facebook y WhatsApp, facilitando la interacción y el acceso a la información para los clientes.",
        url: "http://lacubeta.com",
        images: [
          "assets/img/masonry-portfolio/web-lacubeta.png",
          "assets/img/masonry-portfolio/web-lacubeta2.png"
        ]
      },
      flarppyshop: {
        title: "Flarppy Shop",
        description: "Página web de compra y venta de articulos. En esta página web se pueden encontrar productos de diferentes categorías, como ropa, accesorios, tecnología, entre otros. Los usuarios pueden registrarse, iniciar sesión, agregar productos a su carrito de compras y realizar pagos en línea. Además, los vendedores pueden crear una cuenta y publicar sus productos para que los usuarios interesados puedan comprarlos. La página web también cuenta con un sistema de calificación y comentarios para que los usuarios puedan compartir sus opiniones sobre los productos y la experiencia de compra.",
        url: "http://flarppyshop.com",
        images: [
          "assets/img/masonry-portfolio/web-flarppyshop.png",
          "assets/img/masonry-portfolio/web-flarppyshop2.png",
          "assets/img/masonry-portfolio/web-flarppyshop3.png"
        ]
      }
    };

    const project = projects[projectId];

    if (project) {
      // Actualiza el contenido de la página con los detalles del proyecto
      document.querySelector('.portfolio-description h2').innerText = project.title;
      document.querySelector('.portfolio-description p').innerText = project.description;

      // Actualiza el slider con las imágenes del proyecto
      const sliderWrapper = document.querySelector('.swiper-wrapper');
      sliderWrapper.innerHTML = project.images.map(image => `
        <div class="swiper-slide">
          <img src="${image}" alt="${project.title}">
        </div>
      `).join('');

      // Reinicia Swiper (si es necesario)
      if (window.Swiper) {
        new Swiper('.portfolio-details-slider', JSON.parse(document.querySelector('.swiper-config').textContent));
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Llamada a la función de carga de detalles del proyecto
    if (document.querySelector('.portfolio-details-slider')) {
      loadProjectDetails();
    }
  });

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'fitRows';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();