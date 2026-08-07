'use strict';
/* ============================================================
   SHE CAN FOUNDATION — Premium JS v3
   Custom Cursor · Typed Text · Counters · Drag Scroll
   Lightbox · Page Transitions · Micro-interactions
   ============================================================ */

// ────────────────────────────────────────────────────────────
// NAV HTML
// ────────────────────────────────────────────────────────────
const NAV_HTML = `
<div id="scrollProgress"></div>

<!-- Custom cursor -->
<div class="cursor-dot"  id="cursorDot"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- Page loader -->
<div id="pageLoader">
  <div class="loader-logo-wrap">
    <img src="logo.png" class="loader-logo" alt="She Can Foundation" />
  </div>
  <div class="loader-progress"><div class="loader-fill"></div></div>
  <p class="loader-label">She Can Foundation</p>
</div>

<!-- Navigation -->
<header id="siteNav" class="transparent">
  <div class="wrap nav-inner">

    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="She Can Foundation Logo" />
      <div class="nav-brand">
        <strong>She Can Foundation</strong>
        <small>Est. 2015 · Registered NGO</small>
      </div>
    </a>

    <ul class="nav-links-list">
      <li><a href="index.html"     data-p="index"     class="nav-link">Home</a></li>
      <li><a href="about.html"     data-p="about"     class="nav-link">About</a></li>
      <li><a href="work.html"      data-p="work"      class="nav-link">Our Work</a></li>
      <li><a href="campaign.html"  data-p="campaign"  class="nav-link">Campaign</a></li>
      <li><a href="gallery.html"   data-p="gallery"   class="nav-link">Gallery</a></li>
      <li><a href="volunteer.html" data-p="volunteer" class="nav-link">Volunteer</a></li>
    </ul>

    <div class="nav-cta">
      <a href="donate.html" class="btn btn-clay" style="padding:11px 24px;font-size:0.85rem;">Donate</a>
      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile drawer -->
<nav class="mobile-drawer" id="mobileDrawer">
  <a href="index.html"     data-p="index"     class="mobile-drawer-link">Home</a>
  <a href="about.html"     data-p="about"     class="mobile-drawer-link">About</a>
  <a href="work.html"      data-p="work"      class="mobile-drawer-link">Our Work</a>
  <a href="campaign.html"  data-p="campaign"  class="mobile-drawer-link">Campaign</a>
  <a href="gallery.html"   data-p="gallery"   class="mobile-drawer-link">Gallery</a>
  <a href="volunteer.html" data-p="volunteer" class="mobile-drawer-link">Volunteer</a>
  <div class="mobile-drawer-footer">
    <a href="donate.html" class="btn btn-clay" style="width:100%;justify-content:center;display:flex;">Donate Now</a>
    <p style="margin-top:16px;font-size:0.78rem;color:var(--muted-light);">© 2024 She Can Foundation</p>
  </div>
</nav>
`;

// ────────────────────────────────────────────────────────────
// FOOTER HTML
// ────────────────────────────────────────────────────────────
const FOOTER_HTML = `
<!-- Marquee ticker -->
<div class="marquee-wrap">
  <div class="marquee-track">
    ${Array(8).fill([
      '<div class="marquee-item">EduShe <span class="marquee-sep">·</span></div>',
      '<div class="marquee-item">Community Circles <span class="marquee-sep">·</span></div>',
      '<div class="marquee-item">Food & Care <span class="marquee-sep">·</span></div>',
      '<div class="marquee-item">SkillUp She <span class="marquee-sep">·</span></div>',
      '<div class="marquee-item">Period Power <span class="marquee-sep">·</span></div>',
      '<div class="marquee-item">12,000+ Lives Touched <span class="marquee-sep">·</span></div>',
    ].join('')).join('')}
  </div>
</div>

<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <img src="logo.png" alt="She Can Foundation" class="footer-logo" />
        <p class="footer-tagline">"Empowering women, educating communities, transforming India — one life at a time."</p>
        <div class="footer-social">
          <a href="#" class="footer-social-btn" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" class="footer-social-btn" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="footer-social-btn" aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Explore</p>
        <nav class="footer-nav">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="work.html">Our Work</a>
          <a href="campaign.html">Campaign</a>
          <a href="gallery.html">Gallery</a>
        </nav>
      </div>
      <div>
        <p class="footer-col-title">Get Involved</p>
        <nav class="footer-nav">
          <a href="volunteer.html">Volunteer</a>
          <a href="donate.html">Donate</a>
          <a href="work.html#edushe">EduShe Program</a>
          <a href="work.html#skillup">SkillUp She</a>
          <a href="campaign.html">Period Power</a>
        </nav>
      </div>
      <div>
        <p class="footer-col-title">Stay Connected</p>
        <p style="font-size:0.88rem;color:rgba(250,247,242,0.4);margin-bottom:16px;line-height:1.65;">Impact stories and field updates delivered to your inbox.</p>
        <div class="footer-newsletter">
          <input type="email" id="nlEmail" placeholder="your@email.com" />
          <button id="nlSubmit" type="button">→</button>
        </div>
        <p style="margin-top:20px;font-size:0.74rem;color:rgba(250,247,242,0.2);line-height:1.7;">Reg. No. S-62765 · NGO Darpan<br/>80G Tax Exemption Available</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 She Can Foundation. All rights reserved.</p>
      <p>Made with care, for every woman who dares to dream.</p>
    </div>
  </div>
</footer>

<button id="backTop" aria-label="Back to top">↑</button>

<!-- Lightbox -->
<div id="lightbox" class="lb">
  <button id="lbClose" class="lb-close">×</button>
  <div class="lb-content">
    <img id="lbImg" class="lb-img" src="" alt="" />
    <p id="lbCaption" class="lb-caption"></p>
  </div>
</div>
`;

// ────────────────────────────────────────────────────────────
// INJECT
// ────────────────────────────────────────────────────────────
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

// ────────────────────────────────────────────────────────────
// PAGE LOADER
// ────────────────────────────────────────────────────────────
const loader = document.getElementById('pageLoader');
window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('out'), 500);
  setTimeout(() => loader.remove(), 1300);
});

// ────────────────────────────────────────────────────────────
// CUSTOM CURSOR (desktop only)
// ────────────────────────────────────────────────────────────
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

if (window.matchMedia('(hover: hover)').matches && dot && ring) {
  let dx = 0, dy = 0;
  let rx = 0, ry = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    dx = e.clientX;
    dy = e.clientY;
    dot.style.left  = dx + 'px';
    dot.style.top   = dy + 'px';
  });

  function animRing() {
    rx += (dx - rx) * 0.12;
    ry += (dy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(animRing);
  }
  animRing();

  // Cursor states
  const addHover = el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  };

  document.querySelectorAll('a, button, [role="button"], .card, .vol-card, .gallery-item').forEach(addHover);

  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-text'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-text'));
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '0.6';
  });
}

// ────────────────────────────────────────────────────────────
// SCROLL PROGRESS
// ────────────────────────────────────────────────────────────
const scrollProg = document.getElementById('scrollProgress');

// ────────────────────────────────────────────────────────────
// NAVIGATION SCROLL STATE
// ────────────────────────────────────────────────────────────
const nav      = document.getElementById('siteNav');
const backTop  = document.getElementById('backTop');
const hasHero  = !!document.querySelector('.hero');

function updateNav() {
  const sy  = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;

  // Progress bar
  if (scrollProg) scrollProg.style.width = (sy / max * 100) + '%';

  // Back to top
  if (backTop) backTop.classList.toggle('visible', sy > 600);

  // Nav class
  if (nav) {
    if (hasHero) {
      const isFrosted = sy > 80;
      nav.classList.toggle('transparent', !isFrosted);
      nav.classList.toggle('frosted',     isFrosted);
      nav.classList.toggle('on-hero',     !isFrosted);
      nav.classList.toggle('on-frosted',  isFrosted);
    } else {
      nav.classList.remove('transparent', 'on-hero');
      nav.classList.add('frosted', 'on-frosted');
    }
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // Initial call

// ────────────────────────────────────────────────────────────
// ACTIVE NAV LINK
// ────────────────────────────────────────────────────────────
const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
document.querySelectorAll('[data-p]').forEach(el => {
  if (el.dataset.p === page) el.classList.add('is-active');
});

// ────────────────────────────────────────────────────────────
// HAMBURGER / DRAWER
// ────────────────────────────────────────────────────────────
const hamburger    = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
let drawerOpen     = false;

function openDrawer() {
  drawerOpen = true;
  hamburger.classList.add('open');
  mobileDrawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawerOpen = false;
  hamburger.classList.remove('open');
  mobileDrawer.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', () => drawerOpen ? closeDrawer() : openDrawer());
if (mobileDrawer) mobileDrawer.querySelectorAll('.mobile-drawer-link').forEach(a => a.addEventListener('click', closeDrawer));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawerOpen) closeDrawer(); });

// ────────────────────────────────────────────────────────────
// BACK TO TOP
// ────────────────────────────────────────────────────────────
if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ────────────────────────────────────────────────────────────
// TYPED TEXT EFFECT
// ────────────────────────────────────────────────────────────
const typedEl = document.getElementById('typedText');
if (typedEl) {
  const words  = typedEl.dataset.words ? JSON.parse(typedEl.dataset.words) : [];
  let wIdx     = 0;
  let cIdx     = 0;
  let deleting = false;
  let paused   = false;

  function typeStep() {
    if (paused) return;
    const word     = words[wIdx];
    const display  = deleting ? word.substring(0, cIdx - 1) : word.substring(0, cIdx + 1);
    typedEl.textContent = display;
    cIdx = deleting ? cIdx - 1 : cIdx + 1;

    let delay = deleting ? 55 : 100;

    if (!deleting && cIdx === word.length + 1) {
      paused = true;
      setTimeout(() => { paused = false; deleting = true; }, 2200);
      delay = 0;
    }

    if (deleting && cIdx === 0) {
      deleting = false;
      wIdx     = (wIdx + 1) % words.length;
      delay    = 350;
    }

    setTimeout(typeStep, delay);
  }
  typeStep();
}

// ────────────────────────────────────────────────────────────
// INTERSECTION OBSERVER — REVEAL ANIMATIONS
// ────────────────────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('anim-in');
      obs.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });

document.querySelectorAll('[data-anim], .clip-reveal, .line-stagger').forEach(el => revealObs.observe(el));

// ────────────────────────────────────────────────────────────
// STATS COUNTER (easeOutExpo)
// ────────────────────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (!target) return;
  const dur    = 2400;
  const start  = performance.now();

  function step(now) {
    const t  = Math.min((now - start) / dur, 1);
    const e  = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
    const v  = Math.floor(e * target);
    el.textContent = v.toLocaleString('en-IN');
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('en-IN');
  }
  requestAnimationFrame(step);
}

const counterObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.stats-strip').forEach(el => counterObs.observe(el));

// ────────────────────────────────────────────────────────────
// STAT CELL BAR ANIMATION
// ────────────────────────────────────────────────────────────
const statCellObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('anim-in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stat-cell').forEach(el => statCellObs.observe(el));

// ────────────────────────────────────────────────────────────
// PARALLAX
// ────────────────────────────────────────────────────────────
const parallaxEls = document.querySelectorAll('[data-parallax]');
if (parallaxEls.length) {
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    parallaxEls.forEach(el => {
      const s = parseFloat(el.dataset.parallax) || 0.08;
      el.style.transform = `translateY(${sy * s}px)`;
    });
  }, { passive: true });
}

// ────────────────────────────────────────────────────────────
// DRAG-TO-SCROLL (Horizontal tracks)
// ────────────────────────────────────────────────────────────
document.querySelectorAll('.hz-track').forEach(track => {
  let isDown = false, startX = 0, sl = 0;

  track.addEventListener('mousedown',  e => { isDown = true; track.style.cursor = 'grabbing'; startX = e.pageX - track.offsetLeft; sl = track.scrollLeft; });
  track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mouseup',    () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mousemove',  e => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - track.offsetLeft - startX) * 1.8;
    track.scrollLeft = sl - walk;
  });
});

// ────────────────────────────────────────────────────────────
// GALLERY LIGHTBOX
// ────────────────────────────────────────────────────────────
(function() {
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lbImg');
  const lbCap   = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  if (!lb) return;

  function openLb(src, cap) {
    lbImg.src           = src;
    lbCap.textContent   = cap || '';
    lb.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lb.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 400);
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const cap = item.querySelector('.gallery-caption');
      openLb(img?.src || '', cap?.textContent || '');
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('show')) closeLb(); });
})();

// ────────────────────────────────────────────────────────────
// AMOUNT BUTTON TOGGLE (Donate page)
// ────────────────────────────────────────────────────────────
document.querySelectorAll('.amount-grid').forEach(grid => {
  const btns     = grid.querySelectorAll('.amount-btn');
  const card     = grid.closest('.donate-card-wrap');
  const customWrap = card?.querySelector('.custom-input-wrap');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (customWrap) {
        customWrap.classList.toggle('show', btn.dataset.v === 'custom');
      }
    });
  });
});

// ────────────────────────────────────────────────────────────
// FORM HANDLING
// ────────────────────────────────────────────────────────────
function shakeEl(el) {
  if (!el) return;
  el.style.animation = 'formShake 0.4s ease';
  el.addEventListener('animationend', () => el.style.animation = '', { once: true });
}

// Inject shake keyframe once
const shakeStyle = document.createElement('style');
shakeStyle.textContent = '@keyframes formShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}';
document.head.appendChild(shakeStyle);

function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

// Generic form handler
function bindForm(formId, successId, onSuccess) {
  const form = document.getElementById(formId);
  const succ = document.getElementById(successId);
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nameEl  = form.querySelector('[data-v="name"]');
    const emailEl = form.querySelector('[data-v="email"]');
    let valid = true;

    if (nameEl && !nameEl.value.trim())           { shakeEl(nameEl);  valid = false; }
    if (emailEl && !validateEmail(emailEl.value)) { shakeEl(emailEl); valid = false; }
    if (!valid) return;

    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    setTimeout(() => {
      if (succ) {
        form.style.display = 'none';
        succ.style.display = 'block';
      }
      if (onSuccess) onSuccess();
    }, 1200);
  });
}

bindForm('joinForm',   'joinSuccess');
bindForm('donateForm', 'donateSuccess');

// ────────────────────────────────────────────────────────────
// NEWSLETTER
// ────────────────────────────────────────────────────────────
const nlSubmit = document.getElementById('nlSubmit');
if (nlSubmit) {
  nlSubmit.addEventListener('click', () => {
    const inp = document.getElementById('nlEmail');
    if (!inp || !validateEmail(inp.value)) {
      shakeEl(inp);
      inp?.focus();
      return;
    }
    nlSubmit.textContent = '✓';
    nlSubmit.style.background = '#16a34a';
    inp.value = '';
    setTimeout(() => {
      nlSubmit.textContent = '→';
      nlSubmit.style.background = '';
    }, 4000);
  });
}

// ────────────────────────────────────────────────────────────
// SMOOTH ANCHOR SCROLL
// ────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
  });
});

// ────────────────────────────────────────────────────────────
// FAQ ACCORDION (native details styling fix)
// ────────────────────────────────────────────────────────────
document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', () => {
    const sum  = d.querySelector('summary .faq-arrow');
    if (sum) sum.style.transform = d.open ? 'rotate(45deg)' : 'rotate(0)';
  });
});

// ────────────────────────────────────────────────────────────
// IMAGE HOVER: Magnetic effect on cards (subtle)
// ────────────────────────────────────────────────────────────
document.querySelectorAll('.card, .vol-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) / (rect.width  / 2);
    const dy   = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `translateY(-8px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
    card.style.perspective = '800px';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.perspective = '';
  });
});

// ────────────────────────────────────────────────────────────
// STAGGER CHILD ANIMATIONS
// ────────────────────────────────────────────────────────────
const staggerObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      Array.from(e.target.children).forEach((child, i) => {
        child.style.transitionDelay = (i * 0.1) + 's';
        child.classList.add('anim-in');
      });
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-stagger]').forEach(el => {
  Array.from(el.children).forEach(child => {
    child.setAttribute('data-anim', 'up');
  });
  staggerObs.observe(el);
});
