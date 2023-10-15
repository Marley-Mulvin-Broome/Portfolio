import * as config from '$lib/config'
import type { Post } from '$lib/types/post.js'
import { escapeXml } from '$lib/util.js';

export const prerender = true;

export async function GET({ fetch }) {
	const response = await fetch('/api/blog');
	const posts: Post[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${escapeXml(config.title)}</title>
				<description>${escapeXml(config.description)}</description>
				<link>${escapeXml(config.url)}</link>
				<atom:link href="${escapeXml(config.url)}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${escapeXml(post.title)}</title>
							<description>${escapeXml(post.description)}</description>
							<link>${escapeXml(config.url)}/blog/${escapeXml(post.slug)}</link>
							<guid isPermaLink="true">${config.url}/blog/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
