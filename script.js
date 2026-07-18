  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
  const navLinks = document.querySelectorAll('nav a');
  const scrollSections = document.querySelectorAll('main[id], section[id]');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isActive);
      });
    });
  }, { threshold: 0.55 });
  scrollSections.forEach((section) => activeObserver.observe(section));
