import type { PageLoad } from './$types';
import { skills } from '$lib/skillsdb';
import { timelineEvents } from '$lib/timelinedb';
import { socialLinks } from '$lib/socialLinksdb';

export const load = (() => {
	return {
		skills,
		timelineEvents,
		socialLinks
	};
}) satisfies PageLoad;
