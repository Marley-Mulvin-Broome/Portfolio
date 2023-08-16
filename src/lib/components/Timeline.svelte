<script lang="ts">
	import type { ITimelineEvent } from "$lib/types/timelineEvent";

    export let events: ITimelineEvent[];
</script>

<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    {#each events as event}
        <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-500">{event.date}</time>
            <h3 class="text-lg font-semibold text-white">{event.title}</h3>
            <p class="mb-4 text-base font-normal text-gray-400">{event.text}</p>
        </li>
    {/each}
</ol>
