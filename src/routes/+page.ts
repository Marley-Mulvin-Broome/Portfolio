import type { PageLoad } from "./$types";
import { skills } from "$lib/skillsdb";
import { timelineEvents } from "$lib/timelinedb";
import { socialLinks } from "$lib/socialLinksdb";
import type { Post } from "$lib/types/post";

export const load = (async ({fetch}) => {
    const posts = await fetch("api/blog");
    const postsJson: Post[] = await posts.json();

    return {
        skills,
        timelineEvents,
        posts: postsJson.slice(0, 3)
    };
}) satisfies PageLoad;