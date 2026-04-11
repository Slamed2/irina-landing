// Mobile menu toggle
document.querySelector('.mobile-toggle')?.addEventListener('click', function() {
  document.querySelector('.nav-links')?.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(27,42,74,0.98)';
    navbar.style.padding = '10px 0';
  } else {
    navbar.style.background = 'rgba(27,42,74,0.95)';
    navbar.style.padding = '16px 0';
  }
});
