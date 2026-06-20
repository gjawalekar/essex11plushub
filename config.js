// ============================================================
//  ESSEX 11 PLUS HUB — CENTRAL CONFIG
//  This is your single source of truth.
//  Update prices, names, or links HERE only.
//  All pages on your website read from this file automatically.
// ============================================================

const E11CONFIG = {

  // ----------------------------------------------------------
  //  BUSINESS DETAILS
  // ----------------------------------------------------------
  business: {
    name:       'Essex 11 Plus Hub',
    url:        'https://essex11plushub.co.uk',
    email:      'essex11plushub@gmail.com',
    tagline:    'Premium 11+ practice papers for Essex grammar school entrance',
  },

  // ----------------------------------------------------------
  //  STRIPE SETTINGS
  //  Switch stripeMode to 'live' when you go live.
  //  Replace paymentLink values with your real Stripe Payment Links
  //  (create these in Stripe Dashboard → Payment Links).
  // ----------------------------------------------------------
  stripe: {
    mode: 'sandbox',   // change to 'live' when ready
  },

  // ----------------------------------------------------------
  //  PRODUCTS
  //  delivery: 'instant'  = PDF password-protected, auto download
  //  delivery: 'manual'   = you deliver within 24hrs by email
  //
  //  To update a price:
  //    1. Change the price number below
  //    2. Update the price in your Stripe Dashboard
  //    3. Save and push to GitHub — done
  // ----------------------------------------------------------
  products: [
    {
      id:          'foundation',
      name:        'FSCE Practice Pack — Foundation Level',
      subtitle:    'Set of 5 Papers',
      description: 'Five practice papers matched to the new FSCE format. Ideal for early preparation and building core skills.',
      badge:       'Foundation',
      badgeColor:  '#E8F5E9',
      emoji:       '📗',
      price:       37.00,
      priceLabel:  '£37',
      delivery:    'instant',
      stripePriceId:  'price_1TjQnVP7sVaFxbJFpjOCY3m7',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK',   // add after creating in Stripe
    },
    {
      id:          'intermediate',
      name:        'FSCE Practice Pack — Intermediate Level',
      subtitle:    'Set of 5 Papers',
      description: 'Five practice papers for developing exam technique and building on foundation skills.',
      badge:       'Intermediate',
      badgeColor:  '#E3F2FD',
      emoji:       '📘',
      price:       41.00,
      priceLabel:  '£41',
      delivery:    'instant',
      stripePriceId:  'price_1TjQrsP7sVaFxbJFJmbl604m',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK',
    },
    {
      id:          'advanced',
      name:        'FSCE Practice Pack — Advanced Level',
      subtitle:    'Set of 5 Papers',
      description: 'Five challenging papers for final exam preparation. Matches the highest FSCE difficulty level.',
      badge:       'Advanced',
      badgeColor:  '#FFF3E0',
      emoji:       '📙',
      price:       45.00,
      priceLabel:  '£45',
      delivery:    'instant',
      stripePriceId:  'price_1TjQu3P7sVaFxbJFndb20dJr',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK',
    },
    {
      id:          'combo',
      name:        'FSCE Combo Practice Pack',
      subtitle:    'Set of 5 Papers — All Levels',
      description: 'The complete preparation pack. Five papers spanning Foundation to Advanced — everything in one purchase.',
      badge:       'Best Value',
      badgeColor:  '#F3E5F5',
      emoji:       '📦',
      price:       55.00,
      priceLabel:  '£55',
      delivery:    'instant',
      stripePriceId:  'price_1TjQySP7sVaFxbJFXnH6CU4M',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK',
    },
    {
      id:          'mini-paper',
      name:        'Curated Mini Practice Paper',
      subtitle:    'On Demand',
      description: 'A handpicked practice paper tailored to your child\'s current level. Delivered to your email within 24 hours.',
      badge:       'On Demand',
      badgeColor:  '#E0F7FA',
      emoji:       '📄',
      price:       25.00,
      priceLabel:  '£25',
      delivery:    'manual',
      stripePriceId:  'price_1TkLUlP7sVaFxbJFgoPplBTK',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK_MINI_PAPER',
    },
    {
      id:          'writing-standard',
      name:        'Writing Assessment — Standard Pack',
      subtitle:    'Creative & Continuous Writing',
      description: 'Expert assessment of your child\'s writing. Submit via email or WhatsApp. Detailed feedback delivered within 24 hours.',
      badge:       'Standard',
      badgeColor:  '#E8EAF6',
      emoji:       '✍️',
      price:       20.00,
      priceLabel:  '£20',
      delivery:    'manual',
      stripePriceId:  'price_1TkLWSP7sVaFxbJFRXc5loZZ',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK_STANDARD_18',
    },
    {
      id:          'writing-premium',
      name:        'Writing Assessment — Premium Pack',
      subtitle:    'Creative & Continuous Writing',
      description: 'Comprehensive expert assessment with detailed marking and improvement guidance. Submit via email or WhatsApp. Delivered within 24 hours.',
      badge:       'Premium',
      badgeColor:  '#FCE4EC',
      emoji:       '✍️',
      price:       45.00,
      priceLabel:  '£45',
      delivery:    'manual',
      stripePriceId:  'price_1TkLX3P7sVaFxbJFUxOtW361',   // sandbox
      paymentLink:    'REPLACE_WITH_STRIPE_PAYMENT_LINK_PREMIUM_40',
    },
  ],

  // ----------------------------------------------------------
  //  HELPER — find product by Stripe Price ID
  //  Used by the Cloudflare Worker to identify purchases.
  // ----------------------------------------------------------
  getProductByPriceId(priceId) {
    return this.products.find(p => p.stripePriceId === priceId) || null;
  },

  // ----------------------------------------------------------
  //  HELPER — get all instant-download products
  // ----------------------------------------------------------
  getInstantProducts() {
    return this.products.filter(p => p.delivery === 'instant');
  },

  // ----------------------------------------------------------
  //  HELPER — get all manual-delivery products
  // ----------------------------------------------------------
  getManualProducts() {
    return this.products.filter(p => p.delivery === 'manual');
  },

};

// Make available globally when loaded in a browser page
if (typeof window !== 'undefined') window.E11CONFIG = E11CONFIG;
// Make available in Node.js / Cloudflare Worker environment
if (typeof module !== 'undefined') module.exports = E11CONFIG;
