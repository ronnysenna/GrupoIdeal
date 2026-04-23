(function() {
  'use strict';

  let sitesConfig = null;
  let currentCity = 'palmacia';

  // Carrega config
  fetch('../sites.config.json')
    .then(r => r.json())
    .then(data => {
      sitesConfig = data;
      initCity();
    })
    .catch(err => console.error('Erro ao carregar config:', err));

  function initCity() {
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get('cidade');
    
    if (cityParam && sitesConfig.cities.find(c => c.id === cityParam)) {
      currentCity = cityParam;
      document.querySelectorAll('.city-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === currentCity);
      });
    }
    
    updateCityData();
  }

  // Seletores de cidade
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('city-btn')) {
      currentCity = e.target.dataset.city;
      document.querySelectorAll('.city-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      updateCityData();
    }

    if (e.target.classList.contains('footer-city-link')) {
      e.preventDefault();
      currentCity = e.target.dataset.city;
      document.querySelectorAll('.city-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.city === currentCity);
      });
      updateCityData();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  function updateCityData() {
    if (!sitesConfig) return;
    
    const city = sitesConfig.cities.find(c => c.id === currentCity);
    if (!city) return;

    // Atualiza textos com nome da cidade
    const cityNameElements = document.querySelectorAll('#cityNamePlans, #cityNameAbout');
    cityNameElements.forEach(el => {
      el.textContent = city.titleCity;
    });

    // Atualiza Central do Assinante
    const centralLinks = ['#btnCentral', '#btnCentralMobile', '#btnCentralAbout'];
    centralLinks.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.href = city.centralUrl;
    });

    // Atualiza WhatsApp
    const whatsappMsg = encodeURIComponent(`Olá! Vim pelo site Ideal NET ${city.titleCity} e gostaria de mais informações sobre os planos.`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${city.whatsappPhoneParam}&text=${whatsappMsg}`;
    
    const whatsappLinks = ['#btnWhatsappHero', '#whatsappFloat', '#contactWhatsapp'];
    whatsappLinks.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.href = whatsappUrl;
    });

    // Atualiza contato
    document.getElementById('contactPhone').textContent = city.whatsappDisplay;
    document.getElementById('contactEmail').textContent = city.email;
    document.getElementById('contactAddress').textContent = city.address;

    // Atualiza redes sociais
    document.getElementById('socialFacebook').href = city.facebookUrl;
    document.getElementById('socialInstagram').href = city.instagramUrl;

    // Atualiza preços (exemplo — ajuste conforme necessário)
    updatePrices(city.id);
  }

  function updatePrices(cityId) {
    const prices = {
      palmacia: { 50: 79, 100: 99, 200: 129, 400: 179, radio10: 59, radio20: 79 },
      pacoti: { 50: 79, 100: 99, 200: 129, 400: 179, radio10: 59, radio20: 79 },
      ibicuitinga: { 50: 75, 100: 95, 200: 125, 400: 175, radio10: 55, radio20: 75 }
    };

    const cityPrices = prices[cityId] || prices.palmacia;
    
    document.querySelectorAll('[data-price]').forEach(el => {
      const priceKey = el.dataset.price;
      if (cityPrices[priceKey]) {
        el.textContent = cityPrices[priceKey];
      }
    });
  }

  // Tabs de planos
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const type = this.dataset.type;
      
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('.plans-grid').forEach(grid => grid.classList.add('hidden'));
      
      if (type === 'fibra') {
        document.getElementById('planosFibra').classList.remove('hidden');
      } else if (type === 'radio') {
        document.getElementById('planosRadio').classList.remove('hidden');
      } else if (type === 'empresarial') {
        document.getElementById('planosEmpresarial').classList.remove('hidden');
      }
    });
  });

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
  document.getElementById('formContact').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!sitesConfig) {
      alert('Erro ao carregar configuração');
      return;
    }

    const city = sitesConfig.cities.find(c => c.id === currentCity);
    if (!city) return;

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const mensagem = `Olá! Vim pelo site Ideal NET ${city.titleCity}.

*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*E-mail:* ${data.email}
*Plano:* ${data.plano}
${data.mensagem ? `\n*Mensagem:* ${data.mensagem}` : ''}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${city.whatsappPhoneParam}&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
    
    this.reset();
  });

  // Mobile menu
  document.getElementById('btnMenu').addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
  });

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        const menu = document.getElementById('mobileMenu');
        if (menu.style.display === 'flex') {
          menu.style.display = 'none';
        }
      }
    });
  });
})();
