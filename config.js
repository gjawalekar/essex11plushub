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
//    4. Update STRIPE_SECRET_KEY secret in Cloudflare Worker
// ============================================================

const E11CONFIG = {

  // ----------------------------------------------------------
  //  BUSINESS DETAILS
  // ----------------------------------------------------------
  business: {
    name:        'Essex 11 Plus Hub',
    url:         'https://essex11plushub.co.uk',
    email:       'essex11plushub@gmail.com',
    ordersEmail: 'orders@essex11plushub.co.uk',   // Resend sender address
    tagline:     'Premium 11+ practice papers for Essex grammar school entrance',
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
    mode: 'sandbox',   // ← change to 'live' when ready
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
      price:        37.00,
      priceLabel:   '£37',
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1TjQnVP7sVaFxbJFpjOCY3m7',   // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK',   // ← add after creating in Stripe
    },
    {
      id:           'intermediate',
      name:         'FSCE Practice Pack — Intermediate Level',
      subtitle:     'Set of 5 Papers',
      description:  'Five practice papers for developing exam technique and building on foundation skills.',
      badge:        'Intermediate',
      badgeColor:   '#E3F2FD',
      emoji:        '📘',
      price:        41.00,
      priceLabel:   '£41',
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1TjQrsP7sVaFxbJFJmbl604m',   // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK',
    },
    {
      id:           'advanced',
      name:         'FSCE Practice Pack — Advanced Level',
      subtitle:     'Set of 5 Papers',
      description:  'Five challenging papers for final exam preparation. Matches the highest FSCE difficulty level.',
      badge:        'Advanced',
      badgeColor:   '#FFF3E0',
      emoji:        '📙',
      price:        45.00,
      priceLabel:   '£45',
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1TjQu3P7sVaFxbJFndb20dJr',   // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK',
    },
    {
      id:           'combo',
      name:         'FSCE Combo Practice Pack',
      subtitle:     'Set of 5 Papers — All Levels',
      description:  'The complete preparation pack. Five papers spanning Foundation to Advanced — everything in one purchase.',
      badge:        'Best Value',
      badgeColor:   '#F3E5F5',
      emoji:        '📦',
      price:        55.00,
      priceLabel:   '£55',
      delivery:     'instant',
      customFields: [],
      stripePriceId: 'price_1TjQySP7sVaFxbJFXnH6CU4M',   // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK',
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
      priceLabel:   '£25',
      delivery:     'manual',
      customFields: ['Topic 1', 'Topic 2', 'Difficulty Level'],   // collected at Stripe checkout
      stripePriceId: 'price_1TkmMEP7sVaFxbJFl8vlRKB7',          // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK_MINI',     // ← add after creating in Stripe
    },
    {
      id:           'writing-standard',
      name:         'Writing Assessment — Standard Pack',
      subtitle:     'Creative & Continuous Writing',
      description:  'Expert assessment of your child\'s writing. Submit via email. Detailed scored feedback within 24 hours.',
      badge:        'Standard',
      badgeColor:   '#E8EAF6',
      emoji:        '✍️',
      price:        20.00,
      priceLabel:   '£20',
      delivery:     'manual',
      customFields: [],
      stripePriceId: 'price_1TkmNBP7sVaFxbJFLmzzaH3o',          // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK_WRITING_STD',
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
      priceLabel:   '£45',
      delivery:     'manual',
      customFields: [],
      stripePriceId: 'price_1TkmNfP7sVaFxbJFe9PGwZuq',          // sandbox
      paymentLink:   'REPLACE_WITH_STRIPE_PAYMENT_LINK_WRITING_PREM',
    },
  ],

  // ----------------------------------------------------------
  //  HELPERS
  // ----------------------------------------------------------
  getProductByPriceId(priceId) {
    return this.products.find(p => p.stripePriceId === priceId) || null;
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
