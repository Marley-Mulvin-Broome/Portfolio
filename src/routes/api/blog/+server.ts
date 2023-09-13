import { getBlogCount, getBlogs } from "$lib/prisma/blogs";
import type { BlogSearchResult } from "$lib/types/blogSearchResult";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET = (async ({ url }) => {
    const limit = parseInt(url.searchParams.get("limit") ?? "10");

    const [ blogs, max ] = await Promise.allSettled([
        getBlogs(limit),
        getBlogCount()
    ]);

    if (blogs.status === "rejected" || max.status === "rejected") {
        throw error(500, "Failed to fetch blog posts");
    }

    const pageCount = Math.ceil(max.value / limit);

    const response: BlogSearchResult = {
        blogs: blogs.value,
        pageCount
    }

    return json(response);

}) satisfies RequestHandler;