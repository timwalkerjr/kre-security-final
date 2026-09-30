export const SITE = {
  name: 'KRE Security LLC',
  title: 'Security Services in Pennsylvania | KRE Security',
  description: 'KRE Security provides armed and unarmed guards, patrols, investigations, and training across Pennsylvania. Contact our Hamburg team for 24-hour support.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://kre-security.netlify.app',
  twitterHandle: '@kresecurity',
  socials: {
    facebook: 'https://www.facebook.com/KRE-Security-LLC-105764734683407',
    facebookInvestigations: 'https://www.facebook.com/KREsecinvestigations/',
  },
} as const;

export type SiteConfig = typeof SITE;
