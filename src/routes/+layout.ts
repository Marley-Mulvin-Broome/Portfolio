import { socialLinks } from '$lib/socialLinksdb.js';

export function load({ url }) {
    return {
      url: url.pathname,
      socialLinks: socialLinks
    }
  }
  