import type { PageLoad } from "./$types";
import { projects } from "$lib/projectsdb";

export const load = (() => {
    return {
        projects 
    };
}) satisfies PageLoad;