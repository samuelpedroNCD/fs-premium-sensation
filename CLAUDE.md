# Premium Sensation — Website Build Brief

You are building the **Premium Sensation** brand website. Read this entire file before writing a single line of code. It contains everything you need: brand brief, visual direction, design system, technical rules, and page-by-page structure.

---

## 1. What Is This Project

**Premium Sensation** is the luxury event management brand of Sensation Group — a Portuguese premium event production company with operations in Portugal and New York.

- **Sensation Group site** (sibling site): `/Users/samuelpedro/fs/` — reference this for design patterns
- **This project**: `/Users/samuelpedro/fs-premium-sensation/`
- **Domain placeholder**: `https://premiumsensation.com`
- **Footer credit**: Built by [No-Code District](https://nocodedistrict.com) · Copyright © 2026 Premium Sensation. All Rights Reserved.

**Premium Sensation is not a technical brand.** It is the brand clients hire when they want someone else to think of everything. Total experience management. End-to-end luxury.

---

## 2. Brand Brief

### Positioning
> Not just sound and light. Not just organisation. Total experience management.

Premium Sensation handles everything from concept to execution for demanding clients who want perfection without involvement in the logistics.

### Target Clients
- Demanding couples (destination weddings, luxury celebrations)
- Luxury companies (brand launches, private galas, executive dinners)
- Premium brands (exclusive activations, product launches)
- International clients (cross-border events, destination experiences)

### Services
1. **Conceito Criativo** — Creative concept development
2. **Produção Completa** — Full production management
3. **Coordenação de Fornecedores** — Vendor coordination
4. **Gestão Logística** — End-to-end logistics
5. **Experiências Internacionais** — International event experiences
6. **Curadoria Exclusiva** — Exclusive curation

### Brand Differentials
- Exclusive network of premium partners
- Integral management (one point of contact)
- Obsessive attention to detail
- Full confidentiality
- International presence (Portugal + New York)

### Tone of Voice
- **Minimal text, maximum impact** — every word earns its place
- **Emotional, not functional** — focus on experience, not logistics
- **Sophisticated, not cold** — personal but never casual
- **Exclusive, naturally** — content that filters clients, not attracts everyone
- Confidentiality is a feature, not a formality

---

## 3. Key Copy

### English
- **Hero headline:** We Create Extraordinary Experiences.
- **Hero subheadline:** Full event management, from concept to execution.
- **Primary CTA:** Request Private Consultation
- **Nav CTA:** Start Your Experience
- **Final section CTA:** Let's Design Something Extraordinary.
- **Process label:** How We Work

### Portuguese
- **Hero headline:** Criamos Experiências Extraordinárias.
- **Hero subheadline:** Organização e produção de eventos premium, do conceito à execução.
- **Primary CTA:** Solicitar Proposta Privada
- **Nav CTA:** Começar
- **Final section CTA:** Vamos Criar Algo Extraordinário.

### Process Steps (5 steps)
1. Discovery
2. Concept Design
3. Production Planning
4. Execution
5. Experience Delivery

---

## 4. Pages to Build (9 pages)

### Navigation Order
Home → A Experiência → Casamentos Premium → Eventos Corporativos → Portfólio → Parceiros & Destinos → Sobre → Contacto Privado

### Page Descriptions

**index.html — Home**
- Cinematic full-screen hero (video or strong editorial image)
- "A Experiência Premium" — emotional text section explaining total management
- "O Que Inclui" — 6 service blocks (elegant, minimal cards)
- "Quem Nos Procura" — 4 client types
- "Eventos Selecionados" — 2–3 portfolio previews (editorial presentation)
- "O Nosso Processo" — 5-step process (Discovery → Experience Delivery)
- "Diferenciais" — differentials section
- Testimonials — short, experience-focused
- Final CTA — "Let's Design Something Extraordinary" + "Request Private Consultation"

**experiencia.html — A Experiência**
- Philosophy page — conceptual, editorial
- Brand approach and involvement level
- Total personalisation explained
- What sets Premium Sensation apart

**casamentos.html — Casamentos Premium**
- Destination weddings
- Full experience management
- Travel and accommodation coordination
- End-to-end coordination

**eventos-corporativos.html — Eventos Corporativos de Luxo**
- Brand launches
- Private events and dinners
- Galas
- Exclusive activations

**portfolio.html — Portfólio**
- Few projects (3–5 max). Very well presented.
- Cinematic images. No clutter.
- Each links to `portfolio-item.html?id=slug`
- No filter bar — quality over quantity positioning

**portfolio-item.html — Template page**
- Reads `?id=` from URL, loads from `data/portfolio.json`
- Cinematic hero image
- Story, concept, experience created
- Photo gallery
- Testimonial (if exists)
- Related projects

**parceiros.html — Parceiros & Destinos**
- International venues
- Premium vendors
- Strategic partners
- Logo grid + name + description

**sobre.html — Sobre**
- More personal, more human, but sophisticated
- Team/founders
- Story
- Values
- Connection to Sensation Group

**contacto.html — Contacto Privado**
- Lead-qualifying form (not a generic contact form)
- Fields: Event type, Estimated budget, Date, Location, Expectations, Name, Email, Phone
- Tone: Private consultation, not customer service
- Office addresses: Lisboa + New York

**Legal pages:** privacidade.html, termos.html, cookies.html

---

## 5. Visual Direction

### Reference Site
https://demo.divi-pixel.com/photography/ — Study this for aesthetic reference.

### Aesthetic
**Luxury minimalism.** Black, white, and champagne gold. Photography as the primary design element. Zero visual clutter. White space is not empty — it is intentional.

### Key Visual Rules
1. **Full-screen hero** — cinematic, text overlay, strong editorial image
2. **Photography-first** — large, full-bleed images, no heavy filters, natural integrity
3. **Generous spacing** — 80–120px between sections minimum
4. **Center-aligned section intros** — single powerful sentence, then content
5. **Minimal buttons** — thin borders, understated hover states
6. **Portfolio: editorial weight** — 1 image per project taking full attention
7. **Typography as design** — large, confident headlines. Short body copy.
8. **Gold accent sparingly** — only on decorative lines, hover states, key highlights — never as background
9. **Section transitions** — clean cuts, no gradients between sections
10. **No icons competing with photography** — keep it text + image

### Premium Sensation vs Sensation Group (Visual Differences)
| Element | Sensation Group | Premium Sensation |
|---------|----------------|-------------------|
| Hero | Bold, dynamic | Cinematic, still |
| Portfolio | Grid of cards | Editorial, full-width |
| Colour accent | None | Champagne gold `#C9A96E` |
| Spacing | Standard (100px) | More generous (120px+) |
| Copy density | Informative | Minimal, emotional |
| Form | Standard contact | Lead-qualifying, private |

---

## 6. Design System (Inherit from Sensation Group)

### CSS Variables — Copy Exactly, Add Gold Accent
```css
:root {
  /* Inherited from Sensation Group */
  --black:      #0A0A0A;
  --white:      #FFFFFF;
  --off-white:  #F7F6F3;
  --gray-50:    #FAFAF8;
  --gray-100:   #EFEFEC;
  --gray-200:   #DDDDD9;
  --gray-400:   #9A9A96;
  --gray-600:   #5A5A56;
  --nav-height: 72px;

  /* Premium Sensation brand accent */
  --accent:     #C9A96E;   /* champagne gold — use sparingly */
  --accent-dim: rgba(201, 169, 110, 0.15);
}
```

### Typography — Identical to Sensation Group
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```
- **Headings/Display:** `'Syne'` — weights 700, 800
- **Body/UI:** `'Inter'` — weights 300, 400, 500, 600
- Font smoothing: `-webkit-font-smoothing: antialiased`

### Spacing Scale (8px base)
4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 88, 100, 120, 160px

### Breakpoints
- Tablet: `1024px`
- Mobile: `768px`
- Small mobile: `480px`

### Reveal Animation — Copy Exactly
```css
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }
```

### Components to Inherit from `/Users/samuelpedro/fs/assets/css/components.css`
Copy these component patterns exactly:
- `.page-hero` — page hero with background image + overlay
- `.section-wrap` and variants (--dark, --off, --white, --gray)
- `.section-label` — 10px uppercase tracking
- `.section-title` — clamp typography
- `.section-num` — numbered labels
- `.btn` and variants (--dark, --outline, --outline-white)
- `.text-link` and `.text-link--white`
- `.form-group`, `.form-label`, `.form-input`, `.form-textarea`, `.form-select`
- `.cta-section` + `.cta-card` (--dark, --light)
- `.h-rule` and `.h-rule--dark`
- `.breadcrumb`

Add these new Premium Sensation components:
```css
/* Accent line — used to mark sections with brand colour */
.accent-line {
  width: 40px;
  height: 1px;
  background: var(--accent);
  margin-bottom: 32px;
}

/* Gold highlight for key words */
.text-accent { color: var(--accent); }

/* Full-screen editorial image section */
.editorial-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}

/* Portfolio editorial card */
.portfolio-editorial {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.portfolio-editorial-img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  transition: transform 0.8s ease;
}
.portfolio-editorial:hover .portfolio-editorial-img {
  transform: scale(1.03);
}
```

---

## 7. Navigation HTML Pattern

Copy this nav structure (adapt links for Premium Sensation):

```html
<nav class="nav" id="nav" role="navigation" aria-label="Principal">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="assets/img/[PS-LOGO-FILE]" alt="Premium Sensation" class="logo-img">
    </a>

    <ul class="nav-links" role="list">
      <li><a href="experiencia.html">A Experiência</a></li>
      <li><a href="casamentos.html">Casamentos</a></li>
      <li><a href="eventos-corporativos.html">Eventos</a></li>
      <li><a href="portfolio.html">Portfólio</a></li>
      <li><a href="parceiros.html">Parceiros</a></li>
      <li><a href="sobre.html">Sobre</a></li>
    </ul>

    <div class="lang-switcher" aria-label="Selecionar idioma">
      <button data-lang-btn="pt" class="active">PT</button>
      <button data-lang-btn="en">EN</button>
      <button data-lang-btn="fr">FR</button>
      <button data-lang-btn="es">ES</button>
    </div>

    <a href="contacto.html" class="nav-cta">Solicitar Proposta</a>

    <button class="nav-hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

---

## 8. Footer HTML Pattern

```html
<footer class="footer" role="contentinfo">
  <div class="footer-top">
    <div>
      <img src="assets/img/[PS-LOGO-FILE]" alt="Premium Sensation" class="logo-img footer-logo">
      <p class="footer-tagline">Gestão total de eventos premium, do conceito à execução.</p>
      <p class="footer-locations">PT · EUA</p>
    </div>
    <nav class="footer-col">
      <p class="footer-col-title">Serviços</p>
      <ul>
        <li><a href="experiencia.html">A Experiência</a></li>
        <li><a href="casamentos.html">Casamentos Premium</a></li>
        <li><a href="eventos-corporativos.html">Eventos Corporativos</a></li>
        <li><a href="portfolio.html">Portfólio</a></li>
      </ul>
    </nav>
    <nav class="footer-col">
      <p class="footer-col-title">Empresa</p>
      <ul>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="parceiros.html">Parceiros</a></li>
        <li><a href="contacto.html">Contacto Privado</a></li>
      </ul>
    </nav>
    <div class="footer-col">
      <p class="footer-col-title">Contacto</p>
      <ul>
        <li><a href="mailto:hello@premiumsensation.com">hello@premiumsensation.com</a></li>
        <li><a href="#">Lisboa, Portugal</a></li>
        <li><a href="#">New York, USA</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">Premium Sensation is part of <a href="https://sensationgroup.com" target="_blank" rel="noopener">Sensation Group</a> · Built by <a href="https://nocodedistrict.com" target="_blank" rel="noopener">No-Code District</a> · Copyright © 2026 Premium Sensation. All Rights Reserved.</p>
    <nav class="footer-legal">
      <a href="privacidade.html">Privacidade</a>
      <a href="termos.html">Termos</a>
      <a href="cookies.html">Cookies</a>
    </nav>
    <nav class="footer-socials">
      <a href="#" aria-label="Instagram">Instagram</a>
      <a href="#" aria-label="LinkedIn">LinkedIn</a>
    </nav>
  </div>
</footer>
```

---

## 9. i18n System

Copy `/Users/samuelpedro/fs/assets/js/i18n.js` exactly. Change storage key from `sg-lang` to `ps-lang`.

- PT pre-filled in HTML (SEO-safe for Googlebot)
- All user-facing text uses `data-i18n="key"` attributes
- Translation JSON at `./data/translations/{lang}.json`
- 4 languages: PT, EN, FR, ES

---

## 10. Content Loader System

Copy `/Users/samuelpedro/fs/assets/js/content.js` exactly. This handles:
- Portfolio grid rendering from `data/portfolio.json`
- Portfolio item detail page (`?id=slug`)
- `./data/` relative fetch paths (important — must be relative, not absolute)

---

## 11. JS Main File

Copy `/Users/samuelpedro/fs/assets/js/main.js` exactly. Handles:
- Nav scroll state (`.scrolled` class)
- Hamburger menu toggle
- `IntersectionObserver` for `.reveal` animations
- Stores `_revealObserver` on `window` for content.js to reuse

---

## 12. SEO Head Template (all pages)

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] — Premium Sensation</title>
  <meta name="description" content="[Page description]">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://premiumsensation.com/[page]">
  <link rel="alternate" hreflang="pt" href="https://premiumsensation.com/[page]">
  <link rel="alternate" hreflang="en" href="https://premiumsensation.com/[page]">
  <link rel="alternate" hreflang="fr" href="https://premiumsensation.com/[page]">
  <link rel="alternate" hreflang="es" href="https://premiumsensation.com/[page]">
  <link rel="alternate" hreflang="x-default" href="https://premiumsensation.com/[page]">
  <meta property="og:type" content="website">
  <meta property="og:title" content="[Page Title] — Premium Sensation">
  <meta property="og:description" content="[Page description]">
  <meta property="og:image" content="https://premiumsensation.com/assets/img/og-[page].jpg">
  <meta property="og:url" content="https://premiumsensation.com/[page]">
  <meta property="og:locale" content="pt_PT">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[Page Title] — Premium Sensation">
  <meta name="twitter:description" content="[Page description]">
  <meta name="twitter:image" content="https://premiumsensation.com/assets/img/og-[page].jpg">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium Sensation",
    "url": "https://premiumsensation.com",
    "logo": "https://premiumsensation.com/assets/img/[PS-LOGO-FILE]",
    "description": "Luxury event management — from concept to execution.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Sensation Group",
      "url": "https://sensationgroup.com"
    }
  }
  </script>
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <!-- CSS -->
  <link rel="stylesheet" href="assets/css/base.css">
  <link rel="stylesheet" href="assets/css/nav.css">
  <link rel="stylesheet" href="assets/css/footer.css">
  <link rel="stylesheet" href="assets/css/components.css">
</head>
```

---

## 13. Portfolio JSON Shape

```json
{
  "items": [
    {
      "id": "gala-Lisboa-2024",
      "category": "corporate",
      "categoryLabel": { "pt": "Corporativo", "en": "Corporate", "fr": "Corporate", "es": "Corporativo" },
      "featured": true,
      "client": "Confidencial",
      "date": "2024-11",
      "image": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=90",
      "gallery": ["url1", "url2", "url3"],
      "title": { "pt": "Gala Anual — Lisboa", "en": "Annual Gala — Lisbon", "fr": "Gala Annuel — Lisbonne", "es": "Gala Anual — Lisboa" },
      "description": { "pt": "...", "en": "...", "fr": "...", "es": "..." },
      "testimonial": { "text": { "pt": "...", "en": "..." }, "author": "Nome", "company": "Empresa" }
    }
  ]
}
```

---

## 14. File Structure

```
/Users/samuelpedro/fs-premium-sensation/
├── index.html
├── experiencia.html
├── casamentos.html
├── eventos-corporativos.html
├── portfolio.html
├── portfolio-item.html
├── parceiros.html
├── sobre.html
├── contacto.html
├── privacidade.html
├── termos.html
├── cookies.html
├── sitemap.xml
├── robots.txt
├── CLAUDE.md                    ← this file
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── nav.css
│   │   ├── footer.css
│   │   └── components.css
│   ├── js/
│   │   ├── main.js
│   │   ├── i18n.js
│   │   └── content.js
│   └── img/
│       └── [logo files here]
└── data/
    ├── portfolio.json
    ├── partners.json
    └── translations/
        ├── pt.json
        ├── en.json
        ├── fr.json
        └── es.json
```

---

## 15. What NOT to Include

- No "Marcas" page (this is a single brand site)
- No "Areas" group page
- No "Eventos" listing page (events are part of portfolio)
- No "Insights/Blog" section (not in brief)
- No "Careers" page (not in brief)
- No Floor Sensation or Sound & Lights references anywhere
- No group nav — this is a standalone brand site
- No filter bars on portfolio (few items, no need to filter)

---

## 16. Important Technical Rules

1. **Fetch paths must be relative** — use `./data/` not `/data/` (fails on file:// protocol)
2. **PT text pre-filled in HTML** — other languages injected by i18n.js
3. **All user-facing text** must have `data-i18n="key"` attributes
4. **Responsive** — test at 320px, 480px, 768px, 1024px, 1440px
5. **No external dependencies** except Google Fonts and Unsplash images
6. **Images** — use Unsplash for placeholders: `https://images.unsplash.com/photo-[ID]?w=1200&q=90`
7. **Logo placeholder** — the logo file will be added to `assets/img/` — use `[PS-LOGO-FILE]` as placeholder in comments, make img tags easy to update
8. **Accessibility** — semantic HTML, ARIA labels on interactive elements, alt text on all images
9. **Scripts at bottom of body** — load `main.js`, `i18n.js`, `content.js` before `</body>`
