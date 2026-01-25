
// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));

  // Navbar Scroll Effect and Hero Parallax
  const navbar = document.querySelector('.navbar');
  const heroImage = document.querySelector('.image-wrapper');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar
    if (scrollY > 50) {
      navbar.style.background = 'rgba(5, 5, 5, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    } else {
      navbar.style.background = 'rgba(5, 5, 5, 0.8)';
      navbar.style.boxShadow = 'none';
    }

    // Hero Image Parallax & Fade
    if (heroImage) {
      // Calculate opacity: starts at 1, goes to 0 as you scroll 700px
      const opacity = Math.max(0, 1 - scrollY / 700);

      // Calculate scale: starts at 1, shrinks slightly to 0.9
      const scale = Math.max(0.9, 1 - scrollY / 2000);

      // Calculate translateY: parallax effect, moves slower than scroll
      const translateY = scrollY * 0.3;

      heroImage.style.opacity = opacity;
      heroImage.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }
  });

  // Smooth Scroll for Anchor Links (Backup for CSS smooth-scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax Effect for Orbs (Subtle)
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelector('.orb-1').style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    document.querySelector('.orb-2').style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
  });
});
