import type { BlogSearchResult } from "$lib/types/blogSearchResult";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const prerender = true;

const PAGE_SIZE = 10;

export const load = (async ({ fetch }) => {
    const searchParms = new URLSearchParams();
    searchParms.set("limit", PAGE_SIZE.toString());

    const result = await fetch(`/api/blog?${searchParms.toString()}`);

    if (!result.ok) {
        throw error(result.status, "Failed to fetch blog posts");
    }

    const response = await result.json() as BlogSearchResult;

    return {
        blogs: response.blogs,
        pageCount: response.pageCount
    }
}) satisfies PageServerLoad;