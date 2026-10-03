
const products = [
  {
    "name": "Customized T-Shirts",
    "description": "Premium custom tees for teams, brands and events.",
    "category": "T-Shirts",
    "image": "assets/images/products/product-01.png"
  },
  {
    "name": "Polo T-Shirts",
    "description": "Smart, durable polos for corporate and casual use.",
    "category": "T-Shirts",
    "image": "assets/images/products/product-02.png"
  },
  {
    "name": "Embroidered T-Shirts",
    "description": "Premium embroidery for a professional finish.",
    "category": "T-Shirts",
    "image": "assets/images/products/product-03.png"
  },
  {
    "name": "Sports Jerseys & Shorts",
    "description": "Performance apparel for clubs, teams and events.",
    "category": "Sports",
    "image": "assets/images/products/product-04.png"
  },
  {
    "name": "Track Suits",
    "description": "Comfortable coordinated sets for teams and activewear.",
    "category": "Sports",
    "image": "assets/images/products/product-05.png"
  },
  {
    "name": "Hoodies & Sweatshirts",
    "description": "Warm, customizable layers for brands and groups.",
    "category": "Sports",
    "image": "assets/images/products/product-06.png"
  },
  {
    "name": "Chef Uniforms",
    "description": "Professional uniforms designed for comfort and durability.",
    "category": "Uniforms",
    "image": "assets/images/products/product-07.png"
  },
  {
    "name": "Lab Coats",
    "description": "Clean, practical coats for medical and laboratory settings.",
    "category": "Uniforms",
    "image": "assets/images/products/product-08.png"
  },
  {
    "name": "Work Wear / Overalls",
    "description": "Durable workwear built for demanding environments.",
    "category": "Uniforms",
    "image": "assets/images/products/product-09.png"
  },
  {
    "name": "Corporate Uniforms",
    "description": "Professional staff wear that strengthens brand identity.",
    "category": "Uniforms",
    "image": "assets/images/products/product-10.png"
  },
  {
    "name": "School & University Apparel",
    "description": "Custom apparel for students, clubs and institutions.",
    "category": "Uniforms",
    "image": "assets/images/products/product-11.png"
  },
  {
    "name": "Custom Bulk Orders",
    "description": "Flexible production for special requirements and bulk orders.",
    "category": "Custom",
    "image": "assets/images/products/product-12.png"
  }
];
const catalogue = document.querySelector('#catalogue');
const filters = document.querySelectorAll('.filter');
const whatsapp = '94703503912';

function renderProducts(category='All') {
  const list = category === 'All' ? products : products.filter(p => p.category === category);
  catalogue.innerHTML = list.map(p => `
    <article class="product">
      <img src="${p.image}" alt="${p.name} sample product image" loading="lazy">
      <div class="product-body">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <a class="btn btn-red" target="_blank" rel="noopener"
           href="https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi WEVON Apparel, I'm interested in ${p.name}. Could you share more details?`)}">
          Enquire on WhatsApp
        </a>
      </div>
    </article>`).join('');
}
renderProducts();

filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(btn.dataset.filter);
}));

document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.navlinks').classList.toggle('open');
});
document.querySelectorAll('.navlinks a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('.navlinks').classList.remove('open');
}));


// Hero slider
(function() {
  const slider = document.getElementById('hero-slider');
  const slides = document.querySelectorAll('#hero-slider .slide');
  const dots = document.querySelectorAll('#slider-dots .dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  if (!slider || !slides.length) return;

  let current = 0;
  let timer;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startAuto();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAuto();
    });
  }

  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);
  slider.addEventListener('touchstart', stopAuto, {passive: true});
  slider.addEventListener('touchend', startAuto, {passive: true});

  showSlide(0);
  startAuto();
})();


// Quote form modal and WhatsApp message generation
(function() {
  const modal = document.getElementById('quote-modal');
  const openButton = document.getElementById('open-quote-modal');
  const form = document.getElementById('quote-form');
  const closeButtons = document.querySelectorAll('[data-close-quote-modal]');
  const firstField = document.getElementById('quote-name');
  const requiredDate = document.getElementById('quote-date');
  const wevonWhatsapp = '94703503912';

  if (!modal || !openButton || !form) return;

  // Do not allow selecting a date in the past.
  if (requiredDate) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
    requiredDate.min = localToday;
  }

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('quote-modal-open');
    setTimeout(() => firstField && firstField.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('quote-modal-open');
    openButton.focus();
  }

  openButton.addEventListener('click', openModal);

  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const name = formData.get('name').trim();
    const company = formData.get('company').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();
    const product = formData.get('product').trim();
    const quantity = formData.get('quantity').trim();
    const dateValue = formData.get('requiredDate').trim();
    const decoration = formData.get('decoration').trim();
    const requirements = formData.get('requirements').trim();

    let formattedDate = dateValue;
    if (dateValue) {
      const [year, month, day] = dateValue.split('-');
      formattedDate = `${day}/${month}/${year}`;
    }

    const messageLines = [
      'Hi WEVON Apparel, I would like to request a quotation.',
      '',
      `Name: ${name}`,
      ...(company ? [`Company/Organization: ${company}`] : []),
      `Phone/WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Product: ${product}`,
      `Quantity: ${quantity}`,
      `Required Date: ${formattedDate}`,
      `Printing or Embroidery: ${decoration}`,
      ...(requirements ? [`Additional Requirements: ${requirements}`] : []),
      '',
      'Please let me know the quotation and any additional details required.'
    ];

    const whatsappUrl =
      `https://wa.me/${wevonWhatsapp}?text=${encodeURIComponent(messageLines.join('\n'))}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
})();
