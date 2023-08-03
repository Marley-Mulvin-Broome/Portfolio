import type { PageLoad } from "./$types";
import { skills } from "$lib/skillsdb";

export const load = (() => {
    return {
        skills 
    };
}) satisfies PageLoad;