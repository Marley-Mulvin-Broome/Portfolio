import { getUserDetails } from '$lib/components/github/githubDb.js';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    console.log(url.searchParams);
    const username = url.searchParams.get('username') ?? "torvalds";

    const user = await getUserDetails(username) ?? {};

    return json(user);
}