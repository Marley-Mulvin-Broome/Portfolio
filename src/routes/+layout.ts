import { socialLinks } from '$lib/socialLinksdb.js';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject( {mode: dev ? 'development' : 'production'});

export function load({ url }) {
    return {
      url: url.pathname,
      socialLinks: socialLinks
    }
  }
  