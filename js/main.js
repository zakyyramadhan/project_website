// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
document.querySelector('.hamburger')?.addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('nav').classList.toggle('nav-open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.hamburger')?.classList.remove('active');
    document.getElementById('nav')?.classList.remove('nav-open');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Section reveal observer
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.service-card, .project-table tr, .pillar, .contact-item'
  ).forEach(el => {
    el.classList.add('reveal-init');
    observer.observe(el);
  });
}

// Contact form — async Formspree submission
const form = document.getElementById('contactForm');
if (form && !form.dataset.nojs) {
  form.addEventListener('submit', async (e) => {
    // Allow native Formspree redirect on slow connections
    if (!navigator.onLine) return;

    e.preventDefault();

    const submitBtn = document.getElementById('formSubmitBtn');
    const feedback = document.getElementById('formFeedback');
    const originalText = submitBtn.textContent;

    // Validate required
    let hasError = false;
    form.querySelectorAll('[required]').forEach(f => {
      if (!f.value.trim()) { f.classList.add('error'); hasError = true; }
      else f.classList.remove('error');
    });
    if (hasError) {
      feedback.textContent = 'Harap isi semua field yang wajib diisi.';
      feedback.className = 'form-feedback show error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> MENGIRIM...';
    feedback.className = 'form-feedback';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) {
        feedback.textContent = 'Terima kasih! Kami akan menghubungi Anda dalam 1x24 jam.';
        feedback.className = 'form-feedback show success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      feedback.textContent = 'Terjadi kesalahan. Silakan kirim email langsung ke info@steelflow.co.id.';
      feedback.className = 'form-feedback show error';
    }

    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });

  // Clear error state
  form.querySelectorAll('input, textarea').forEach(f => {
    f.addEventListener('input', () => f.classList.remove('error'));
  });
}
