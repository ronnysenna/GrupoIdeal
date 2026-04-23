(function() {
  'use strict';

  // Mobile menu
  const btnMenu = document.getElementById('btnMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (btnMenu && mobileMenu) {
    btnMenu.addEventListener('click', function() {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      const wasActive = item.classList.contains('active');
      
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });

  // Formulário de contato
  const formContact = document.getElementById('formContact');
  if (formContact) {
    formContact.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      let mensagem = `Olá! Vim pelo site Teralink e gostaria de mais informações.

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Plano:* ${data.plano}`;

      if (data.endereco) {
        mensagem += `\n*Endereço:* ${data.endereco}`;
      }

      if (data.mensagem) {
        mensagem += `\n\n*Mensagem:* ${data.mensagem}`;
      }

      const whatsappUrl = `https://api.whatsapp.com/send?phone=5585984330586&text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
      
      this.reset();
    });
  }

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        if (mobileMenu && mobileMenu.style.display === 'flex') {
          mobileMenu.style.display = 'none';
        }
      }
    });
  });
})();
