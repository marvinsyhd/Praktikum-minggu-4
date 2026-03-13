document.addEventListener('DOMContentLoaded', () => {

  const darkToggleBtn = document.getElementById('dark-toggle');
  const htmlElement = document.documentElement;


  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
  } else {


    htmlElement.setAttribute('data-theme', 'dark');
    updateButtonText('dark');
  }


  darkToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
  });

  function updateButtonText(theme) {
    if (theme === 'dark') {
      darkToggleBtn.textContent = '☀️ Light Mode';
    } else {
      darkToggleBtn.textContent = '🌙 Dark Mode';
    }
  }

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const btn = contactForm.querySelector('button');


      if (name === '' || email === '' || message === '') {
        alert('Mohon lengkapi semua kolom!');
        return;
      }


      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Format email tidak valid!');
        return;
      }


      btn.textContent = 'Mengirim...';
      btn.disabled = true;

      setTimeout(() => {
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
        contactForm.reset();
        btn.textContent = 'Kirim Pesan';
        btn.disabled = false;
      }, 1500);
    });
  }


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});