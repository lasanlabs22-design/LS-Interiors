(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  /* Header: solid background once the hero is scrolled past */
  const header = $('[data-header]');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  const setMenu = open => {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) menu.removeAttribute('inert'); else menu.setAttribute('inert', '');
  };
  toggle.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); toggle.focus(); } });
  window.matchMedia('(min-width: 1025px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  /* Hero slideshow: the indicator's progress animation drives the timing */
  const hero = $('[data-hero]');
  const slides = $$('[data-slide]', hero);
  const dots = $$('[data-slide-to]', hero);
  const pauseBtn = $('[data-hero-pause]', hero);
  let current = 0;
  const show = i => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === current));
    dots.forEach((d, k) => {
      d.classList.remove('is-active');
      d.setAttribute('aria-pressed', String(k === current));
    });
    void dots[current].offsetWidth; // restart the progress animation
    dots[current].classList.add('is-active');
  };
  dots.forEach((d, k) => {
    d.addEventListener('click', () => show(k));
    $('.ind-bar i', d).addEventListener('animationend', () => { if (!reduceMotion && k === current) show(current + 1); });
  });
  const setPaused = paused => {
    hero.classList.toggle('is-paused', paused);
    pauseBtn.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
  };
  pauseBtn.addEventListener('click', () => setPaused(!hero.classList.contains('is-paused')));
  if (reduceMotion) { setPaused(true); }

  /* Reveal on scroll */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => io.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* Subtle parallax */
  const parallax = $$('[data-parallax]');
  if (!reduceMotion && parallax.length) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parallax.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const offset = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax);
        const target = el.querySelector('img, video') || el;
        target.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* Services: active on hover, focus or tap. The section fits one screen, so no scroll trigger
     (it used to make you scroll the image half out of view to reach the first row). */
  const serviceItems = $$('[data-service]', $('.service-list'));
  const count = $('[data-service-count]');
  const activate = item => {
    serviceItems.forEach(s => s.classList.toggle('is-active', s === item));
    $$('[data-service-image]').forEach(f => f.classList.toggle('is-active', f.dataset.serviceImage === item.dataset.service));
    count.textContent = String(serviceItems.indexOf(item) + 1).padStart(2, '0');
    syncServiceVideos();
  };
  // Only the video of the active service plays (desktop panel, or the phone thumbnail); the rest stay paused.
  function syncServiceVideos() {
    $$('[data-service-video]').forEach(v => {
      const box = v.closest('.sv-frame, .service');
      const show = !reduceMotion && box.classList.contains('is-active') && v.offsetParent !== null;
      if (show) v.play().catch(() => {}); else v.pause();
    });
  }
  syncServiceVideos();
  window.addEventListener('resize', syncServiceVideos, { passive: true });
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => activate(item));
    item.addEventListener('focusin', () => activate(item));
    item.addEventListener('click', () => activate(item));
  });

  /* Enquiry prefill helpers */
  const form = $('#enquiry-form');
  const choose = value => {
    const radio = $$('input[name="service"]', form).find(r => r.value === value);
    if (radio) radio.checked = true;
  };
  $$('[data-prefill]').forEach(a => a.addEventListener('click', () => choose(a.dataset.prefill)));
  $$('[data-prefill-message]').forEach(a => a.addEventListener('click', () => { if (!form.elements.message.value) form.elements.message.value = a.dataset.prefillMessage; }));

  /* Background videos (3D design, studio arch): respect reduced motion */
  if (reduceMotion) $$('[data-ambient-video]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });

  /* Spaces: filters */
  const gallery = $('[data-gallery]');
  const cards = $$('.space-card', gallery);
  $$('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    $$('[data-filter]').forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    gallery.classList.toggle('is-filtered', f !== 'all');
    cards.forEach(c => { c.hidden = f !== 'all' && c.dataset.category !== f; if (!c.hidden) c.classList.add('is-visible'); });
  }));

  /* Spaces: lightbox */
  const lb = $('#lightbox');
  let lbIndex = 0;
  const visibleCards = () => cards.filter(c => !c.hidden);
  const fill = card => {
    const list = visibleCards();
    lbIndex = list.indexOf(card);
    const img = $('#lb-image');
    img.src = card.dataset.full;
    img.alt = $('img', card).alt;
    $('#lb-label').textContent = card.dataset.label;
    $('#lb-title').textContent = card.dataset.title;
    $('#lb-text').textContent = card.dataset.text;
    $('#lb-count').textContent = `${String(lbIndex + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}`;
    lb.dataset.service = card.dataset.service;
    lb.dataset.title = card.dataset.title;
    $$('.lb-nav', lb).forEach(b => { b.hidden = list.length < 2; });
  };
  const step = dir => { const list = visibleCards(); fill(list[(lbIndex + dir + list.length) % list.length]); };
  cards.forEach(card => card.addEventListener('click', () => {
    fill(card);
    lb.showModal();
    root.classList.add('dialog-open');
  }));
  lb.addEventListener('close', () => root.classList.remove('dialog-open'));
  $('[data-lb-close]', lb).addEventListener('click', () => lb.close());
  $('[data-lb-prev]', lb).addEventListener('click', () => step(-1));
  $('[data-lb-next]', lb).addEventListener('click', () => step(1));
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  $('[data-lb-enquire]', lb).addEventListener('click', () => {
    choose(lb.dataset.service);
    form.elements.message.value = `I love the "${lb.dataset.title}" direction and would like something similar for my space.`;
    lb.close();
  });

  /* Enquiry form: validate, then open WhatsApp with the message ready */
  const errorBox = $('#form-error');
  const fail = (field, msg) => {
    errorBox.textContent = msg;
    if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); }
  };
  $$('input, textarea', form).forEach(el => el.addEventListener('input', () => { el.removeAttribute('aria-invalid'); errorBox.textContent = ''; }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const { name, phone, message } = form.elements;
    const service = $('input[name="service"]:checked', form);
    const digits = phone.value.replace(/\D/g, '');
    if (!name.value.trim()) return fail(name, 'Please tell us your name.');
    if (!/^[+0-9()\s-]+$/.test(phone.value.trim()) || digits.length < 10 || digits.length > 13) return fail(phone, 'Please enter a valid phone number.');
    if (!service) return fail($('input[name="service"]', form), 'Please choose what you are planning.');
    const text = [
      'Hello LS Interiors!',
      '',
      `My name is ${name.value.trim()}.`,
      `Phone: ${phone.value.trim()}`,
      `Interested in: ${service.value}`,
      message.value.trim() ? `\nProject details: ${message.value.trim()}` : '',
      '',
      'I would like to discuss my interiors with you.',
    ].join('\n');
    const url = `https://wa.me/919281197901?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    const status = $('#form-status');
    status.replaceChildren(document.createTextNode('Your enquiry is ready. '));
    const link = Object.assign(document.createElement('a'), { href: url, target: '_blank', rel: 'noopener noreferrer', textContent: 'Open WhatsApp to send it' });
    status.append(link);
  });

  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
