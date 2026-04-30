/* =============================================================
   content.js — Premium Sensation content loader
   Used by template pages (portfolio-item) and listing pages
   (portfolio.html) to render dynamic content.
============================================================= */

const ContentLoader = {

  // -----------------------------------------------------------
  // Get ?id= slug from current URL
  // -----------------------------------------------------------
  getSlug() {
    return new URLSearchParams(window.location.search).get('id');
  },

  // -----------------------------------------------------------
  // Get current language (falls back to 'pt')
  // -----------------------------------------------------------
  getLang() {
    return localStorage.getItem('ps-lang') || 'pt';
  },

  // -----------------------------------------------------------
  // Translate a multilingual field { pt, en, fr, es }
  // Returns the string as-is if it is already a plain string.
  // -----------------------------------------------------------
  t(field) {
    if (!field || typeof field === 'string') return field || '';
    const lang = this.getLang();
    return field[lang] || field['pt'] || '';
  },

  // -----------------------------------------------------------
  // Format a date string (YYYY-MM-DD or YYYY-MM) for display
  // -----------------------------------------------------------
  formatDate(dateStr, lang) {
    if (!dateStr) return '';
    const months = {
      pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
      es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    };
    const [year, month, day] = dateStr.split('-');
    const m = months[lang || this.getLang()] || months['pt'];
    return day
      ? `${parseInt(day)} ${m[parseInt(month) - 1]} ${year}`
      : `${m[parseInt(month) - 1]} ${year}`;
  },

  // -----------------------------------------------------------
  // Fetch a JSON data file from ./data/
  // -----------------------------------------------------------
  async fetchData(file) {
    try {
      const res = await fetch(`./data/${file}.json`);
      if (!res.ok) throw new Error(`Failed to fetch ${file}.json`);
      return await res.json();
    } catch (e) {
      console.error(e);
      return null;
    }
  },

  // ── PORTFOLIO ───────────────────────────────────────────────

  async renderPortfolioGrid(containerId, filterValue = 'all') {
    const data = await this.fetchData('portfolio');
    if (!data) return;
    const container = document.getElementById(containerId);
    if (!container) return;
    const lang = this.getLang();
    const items = filterValue === 'all'
      ? data.items
      : data.items.filter(i => i.category === filterValue);

    container.innerHTML = items.map(item => `
      <article class="portfolio-editorial reveal" data-category="${item.category}">
        <a href="portfolio-item.html?id=${item.id}" class="portfolio-editorial">
          <div class="portfolio-editorial-img-wrap">
            <img src="${item.image}" alt="${this.t(item.title)}" class="portfolio-editorial-img" loading="lazy">
          </div>
          <div class="portfolio-editorial-label">
            <p class="portfolio-editorial-cat">${this.t(item.categoryLabel) || item.category}</p>
            <h3 class="portfolio-editorial-title">${this.t(item.title)}</h3>
          </div>
        </a>
      </article>
    `).join('');

    // Re-init reveal observer for newly added elements
    if (window._revealObserver) {
      container.querySelectorAll('.reveal').forEach(el => window._revealObserver.observe(el));
    }
  },

  async renderPortfolioItem(data) {
    const slug = this.getSlug();
    if (!slug) { window.location.href = 'portfolio.html'; return; }
    const item = data.items.find(i => i.id === slug);
    if (!item) { window.location.href = 'portfolio.html'; return; }
    const lang = this.getLang();

    document.title = `${this.t(item.title)} — Premium Sensation`;

    this._fill('item-title', this.t(item.title));
    this._fill('item-client', item.client);
    this._fill('item-date', this.formatDate(item.date, lang));
    this._fill('item-category', this.t(item.categoryLabel) || item.category);
    this._fill('item-description', this.t(item.description));

    // Hero image
    const heroImg = document.getElementById('item-hero-img');
    if (heroImg) heroImg.style.backgroundImage = `url('${item.image}')`;

    // Gallery
    const gallery = document.getElementById('item-gallery');
    if (gallery && item.gallery && item.gallery.length) {
      gallery.innerHTML = item.gallery.map(url => `
        <div class="gallery-img" style="background-image:url('${url}')"></div>
      `).join('');
    }

    // Testimonial
    if (item.testimonial) {
      this._fill('item-testimonial-text', this.t(item.testimonial.text));
      this._fill('item-testimonial-author', item.testimonial.author);
      if (item.testimonial.company) {
        this._fill('item-testimonial-company', item.testimonial.company);
      }
    }

    // Related — 3 others
    const related = data.items
      .filter(i => i.id !== slug)
      .slice(0, 3);
    const relatedEl = document.getElementById('item-related');
    if (relatedEl) {
      relatedEl.innerHTML = related.map(r => `
        <a href="portfolio-item.html?id=${r.id}" class="portfolio-editorial">
          <div class="portfolio-editorial-img-wrap">
            <img src="${r.image}" alt="${this.t(r.title)}" class="portfolio-editorial-img" loading="lazy">
          </div>
          <div class="portfolio-editorial-label">
            <p class="portfolio-editorial-cat">${this.t(r.categoryLabel) || r.category}</p>
            <h4 class="portfolio-editorial-title">${this.t(r.title)}</h4>
          </div>
        </a>
      `).join('');
    }
  },

  // ── PARTNERS ────────────────────────────────────────────────

  async renderPartners() {
    const data = await this.fetchData('partners');
    if (!data) return;
    const lang = this.getLang();
    ['venues', 'vendors', 'strategic', 'international'].forEach(group => {
      const el = document.getElementById(`partners-${group}`);
      if (!el || !data[group]) return;
      el.innerHTML = data[group].map(p => `
        <div class="partner-item">
          <p class="partner-name">${p.name}</p>
          ${p.description ? `<p class="partner-desc">${this.t(p.description) || p.description}</p>` : ''}
        </div>
      `).join('');
    });
  },

  // ── UTILITY ─────────────────────────────────────────────────

  _fill(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  },
};

window.ContentLoader = ContentLoader;
