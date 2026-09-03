// scroll progress bar
  const progress = document.getElementById('progress');
  function updateProgress(){
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + '%';
  }
  document.addEventListener('scroll', updateProgress);
  updateProgress();

  // scrollspy nav
  const sections = document.querySelectorAll('section.qsec, section.kesimpulan');
  const navLinks = document.querySelectorAll('[data-nav]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));

  // hero node/line entrance animation (single orchestrated moment)
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero-figure .node').forEach((n, i) => {
      setTimeout(() => n.classList.add('play'), 120 + i*90);
    });
    document.querySelectorAll('.hero-figure .link').forEach((l, i) => {
      setTimeout(() => l.classList.add('play'), 80 + i*80);
    });
    setTimeout(() => {
      document.querySelector('.case-card').style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
      document.querySelector('.case-card').style.transform = 'translateY(0)';
    }, 200);
  });