// ============================================================
//  ESSEX 11 PLUS HUB — CENTRAL CONFIG
//  Single source of truth for the entire site and worker.
//
//  TO UPDATE A PRICE:
//    1. Change price number below
//    2. Update in Stripe Dashboard
//    3. Push to GitHub — done
//
//  TO GO LIVE:
//    1. Change stripeMode to 'live'
//    2. Replace sandbox stripePriceId values with live ones
//    3. Replace paymentLink values with live Payment Links
//    4. Update STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET
//       secrets in Cloudflare Worker (wrangler secret put)
// ============================================================

const E11CONFIG = {

  // ----------------------------------------------------------
  //  BUSINESS DETAILS
  // ----------------------------------------------------------
  business: {
    name:         'Essex 11 Plus Hub',
    url:          'https://essex11plushub.co.uk',
    supportEmail: 'support@essex11plushub.co.uk',   // customer-facing: support, writing submissions
    ordersEmail:  'orders@essex11plushub.co.uk',    // Resend sender address (transactional)
    tagline:      'Premium 11+ practice papers for Essex grammar school entrance',
  },

  // ----------------------------------------------------------
  //  INFRASTRUCTURE
  //  Worker URL used by success page to trigger downloads
  // ----------------------------------------------------------
  worker: {
    url: 'https://essex11plus-worker.essex11plushub.workers.dev',
  },

  // ----------------------------------------------------------
  //  STRIPE
  //  Switch stripeMode to 'live' when going live
  // ----------------------------------------------------------
  stripe: {
    mode: 'live',   // ← change to 'live' when ready
  },

  // ----------------------------------------------------------
  //  PRODUCTS
  //
  //  delivery: 'instant' = PDF password-encrypted, auto download
  //  delivery: 'manual'  = GJ delivers by email within 24 hours
  //
  //  customFields: list of fields collected at Stripe checkout
  //  (only for manual delivery products)
  // ----------------------------------------------------------
  products: [
    {
      id:           'foundation',
      name:         'FSCE Practice Pack — Foundation Level',
      subtitle:     'Set of 5 Papers',
      description:  'Five practice papers matched to the new FSCE format. Ideal for early preparation and building core skills.',
      badge:        'Foundation',
      badgeColor:   '#E8F5E9',
      emoji:        '📗',
      price:        33.00,
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1ToWEE07MJnmvxd4KVOTkYUz',   // sandbox — replace with live ID at go-live
      paymentLink:   'https://buy.stripe.com/bJebIT3Ux9T0blYb0H7Re06',   // ← create in Stripe → copy link here
    },
    {
      id:           'intermediate',
      name:         'FSCE Practice Pack — Intermediate Level',
      subtitle:     'Set of 5 Papers',
      description:  'Five practice papers for developing exam technique and building on foundation skills.',
      badge:        'Intermediate',
      badgeColor:   '#E3F2FD',
      emoji:        '📘',
      price:        35.00,
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1ToWFh07MJnmvxd4fEjV7rUp',   // sandbox
      paymentLink:   'https://buy.stripe.com/5kQcMX3Uxd5cblYecT7Re05',   // ← create in Stripe → copy link here
    },
    {
      id:           'advanced',
      name:         'FSCE Practice Pack — Advanced Level',
      subtitle:     'Set of 5 Papers',
      description:  'Five challenging papers for final exam preparation. Matches the highest FSCE difficulty level.',
      badge:        'Advanced',
      badgeColor:   '#FFF3E0',
      emoji:        '📙',
      price:        37.00,
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1ToWHA07MJnmvxd4G5OnpLsz',   // sandbox
      paymentLink:   'https://buy.stripe.com/fZu5kv62Fgho3Twb0H7Re04',   // ← create in Stripe → copy link here
    },
    {
      id:           'combo',
      name:         'FSCE Combo Practice Pack',
      subtitle:     'Set of 5 Papers — All Levels',
      description:  'The complete preparation pack. Five papers spanning Foundation to Advanced — everything in one purchase.',
      badge:        'Best Value',
      badgeColor:   '#F3E5F5',
      emoji:        '📦',
      price:        39.00,
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1ToWIS07MJnmvxd4ax48ee7e',   // sandbox
      paymentLink:   'https://buy.stripe.com/eVq8wHcr3e9gfCeecT7Re03',
    },
    {
      id:           'mini-paper',
      name:         'Curated Mini Practice Paper',
      subtitle:     'On Demand',
      description:  'A handpicked practice paper tailored to your child\'s current level. Delivered to your email within 24 hours.',
      badge:        'On Demand',
      badgeColor:   '#E0F7FA',
      emoji:        '📄',
      price:        25.00,
      delivery:     'manual',
      customFields: ['Topic 1', 'Topic 2', 'Difficulty Level'],
      stripePriceId: 'price_1TmJeM07MJnmvxd42EQMjBRf',          // sandbox
      paymentLink:   'https://buy.stripe.com/aFa4grezb4yGcq20m37Re07',     // ← create in Stripe → copy link here
    },
    {
      id:           'writing-standard',
      name:         'Writing Assessment — Standard Pack',
      subtitle:     'Creative & Continuous Writing',
      description:  'Expert assessment of your child\'s writing. Submit via email. Detailed scored feedback within 24 hours.',
      badge:        'Standard',
      badgeColor:   '#E8EAF6',
      emoji:        '✍️',
      price:        25.00,
      delivery:     'manual',
      assessmentCount: 8,
      customFields: [],
      stripePriceId: 'price_1TmJe807MJnmvxd4fQXj0my5',          // sandbox
      paymentLink:   'https://buy.stripe.com/7sYaEP8aNe9gfCe9WD7Re01',
    },
    {
      id:           'writing-premium',
      name:         'Writing Assessment — Premium Pack',
      subtitle:     'Creative & Continuous Writing',
      description:  'Comprehensive expert assessment with detailed marking and improvement guidance. Submit via email. Delivered within 24 hours.',
      badge:        'Premium',
      badgeColor:   '#FCE4EC',
      emoji:        '✍️',
      price:        45.00,
      delivery:     'manual',
      assessmentCount: 20,
      customFields: [],
      stripePriceId: 'price_1TmJdq07MJnmvxd4xorpfp3m',          // sandbox
      paymentLink:   'https://buy.stripe.com/4gMbITcr32qy61EfgX7Re02',
    },
  ],

  // ----------------------------------------------------------
  //  HELPERS
  // ----------------------------------------------------------
  getProductByPriceId(priceId) {
    return this.products.find(p => p.stripePriceId === priceId) || null;
  },
  formatPrice(price) {
    return `£${Number(price).toFixed(2).replace(/\.00$/, '')}`;
  },
  getInstantProducts() {
    return this.products.filter(p => p.delivery === 'instant');
  },
  getManualProducts() {
    return this.products.filter(p => p.delivery === 'manual');
  },

};

// Browser
if (typeof window !== 'undefined') window.E11CONFIG = E11CONFIG;
// Node.js / Cloudflare Worker
if (typeof module !== 'undefined') module.exports = E11CONFIG;
