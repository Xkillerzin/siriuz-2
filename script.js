// JS PROFISSIONAL PARA SITE DO SIRIUZ SUGE

document.addEventListener('DOMContentLoaded', () => {
  // Menu Scroll Fix (ativa highlight ou coloração no menu ao rolar)
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll suave ao clicar nos links do menu
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animações quando os elementos entram na tela (fade-up)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.section, .music-item, .hero-content').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });

  // Ação do botão "Ouça Agora" (abre link externo ou toca música)
  const playBtn = document.querySelector('.btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      window.open('https://open.spotify.com/artist/XXXXXXXX', '_blank'); // troque pelo link correto
    });
  }
});

// Estilos para animações (adicionar isso no CSS também):
// .hidden { opacity: 0; transform: translateY(20px); transition: 0.6s ease; }
// .show { opacity: 1; transform: translateY(0); }
