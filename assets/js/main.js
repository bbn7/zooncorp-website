// Main frontend interactions (robust, accessible)
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('main-nav');

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      try {
        const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('open', !isOpen);
      } catch (err) {
        console.error('Menu toggle failed', err);
      }
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuToggle.getAttribute('aria-expanded') === 'true') {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }

  // Smooth scroll for anchor links (only for in-page anchors)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact Form Handling (UI only — server handles actual submission)
  document.addEventListener('submit', function(e) {
    if (e.target.matches('#contact-form')) {
      const btn = e.target.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = 'Sending…';

        // Keep a short UI lock; do not assume success — user should test server response
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalText || 'Send Message';
        }, 3000);
      }
    }
  });

  // Intersection Observer for fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with staggered animations
  document.querySelectorAll('.fade-in, .service-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // Scroll-triggered animations
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.slide-in-left, .slide-in-right, .scale-in, .rotate-in').forEach(el => {
    scrollObserver.observe(el);
  });

  // Staggered card animations
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150); // Stagger delay
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cardObserver.observe(card);
  });

  // Add 'appeared' class to hero title when observed for better entrance
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    // small timeout to allow paint
    setTimeout(() => heroTitle.classList.add('appeared'), 120);
  }

  // Header scroll effect (guarded)
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        header.style.boxShadow = 'var(--shadow)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
      }
    });
  }

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Stats observer (guarded selectors)
  let statsAnimated = false;
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        // animate counters if they exist
        entry.target.querySelectorAll('[data-counter]').forEach(el => {
          const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
          animateCounter(el, target);
        });
      }
    });
  });

  const statsSection = document.querySelector('section[aria-label="stats"], section.stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Select styling fallback
  const selectElements = document.querySelectorAll('select');
  selectElements.forEach(select => {
    select.addEventListener('focus', function() {
      this.style.borderColor = 'var(--primary)';
      this.style.boxShadow = '0 0 0 3px rgba(46,107,79,0.1)';
    });
    select.addEventListener('blur', function() {
      this.style.borderColor = 'var(--border)';
      this.style.boxShadow = 'none';
    });
  });

  // Parallax Background Images
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  parallaxElements.forEach(el => {
    const bgImage = el.getAttribute('data-bg-image');
    if (bgImage) {
      el.style.backgroundImage = `url(${bgImage})`;
    }
  });

  function updateParallax() {
    parallaxElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const translateY = scrollPercent * 100;
      el.style.backgroundPositionY = `${translateY}%`;
    });
  }

  window.addEventListener('scroll', updateParallax);
  updateParallax(); // Initial call

  // Seasonal Image Rotations
  function getSeason() {
    const month = new Date().getMonth() + 1; // getMonth() returns 0-11
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
  }

  function applySeasonalTheme() {
    const season = getSeason();
    const heroImage = document.querySelector('.hero-carousel img');

    if (heroImage) {
      // Define seasonal image mappings (you would need to add these images)
      const seasonalImages = {
        spring: 'assets/img/hero-spring.jpg',
        summer: 'assets/img/hero-summer.jpg',
        autumn: 'assets/img/hero-autumn.jpg',
        winter: 'assets/img/hero-1.jpg' // default winter image
      };

      const seasonalImage = seasonalImages[season];
      if (seasonalImage) {
        // Resolve to an absolute URL based on the current document base
        const seasonalURL = new URL(seasonalImage, document.baseURI).href;

        if (heroImage.src !== seasonalURL) {
          // Add fade transition
          heroImage.style.transition = 'opacity 1s ease-in-out';
          heroImage.style.opacity = '0';

          setTimeout(() => {
            heroImage.src = seasonalURL;
            heroImage.style.opacity = '1';
          }, 500);
        }
      }
    }

    // Apply seasonal color themes
    const root = document.documentElement;
    const seasonalColors = {
      spring: { primary: '#4CAF50', tan: '#FFEB3B' },
      summer: { primary: '#2196F3', tan: '#FFC107' },
      autumn: { primary: '#FF5722', tan: '#FF9800' },
      winter: { primary: '#2E6B4F', tan: '#C9A66B' }
    };

    const colors = seasonalColors[season];
    if (colors) {
      root.style.setProperty('--primary', colors.primary);
      root.style.setProperty('--tan', colors.tan);
    }
  }

  // Apply seasonal theme on load
  applySeasonalTheme();

  // Update theme daily (optional - could be weekly/monthly)
  setInterval(applySeasonalTheme, 24 * 60 * 60 * 1000); // Check daily
});
