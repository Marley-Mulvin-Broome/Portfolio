import type { PageLoad } from "./$types";
import { skills } from "$lib/skillsdb";
import { timelineEvents } from "$lib/timelinedb";

export const load = (() => {
    return {
        skills,
        timelineEvents
    };
}) satisfies PageLoad;