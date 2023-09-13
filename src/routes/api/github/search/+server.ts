import { searchUsers } from '$lib/components/github/githubDb.js';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const username = url.searchParams.get('searchString') ?? 'Search';
	let limit: number = parseInt(url.searchParams.get('limit') as string) ?? 3;

	if (isNaN(limit)) {
		limit = 3;
	}

	const users = (await searchUsers(username, limit)) ?? {};

	return json(users);
}
