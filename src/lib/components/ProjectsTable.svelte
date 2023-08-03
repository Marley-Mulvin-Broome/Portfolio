<script lang="ts">
	import type { Project } from "$lib/types/project";

    export let projects: Project[] = [];

    let sortingKey: keyof Project = "date";

    function sortProjects(a: Project, b: Project) {
        switch(sortingKey) {
            case "date":
                return b.date.getTime() - a.date.getTime();
            case "name":
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
        
    }
</script>


<table class="mx-auto w-full text-left">
    <thead class="">
        <tr class="text-2xl bg-emerald-600">
            <th scope="col" class="font-medium px-6 py-3 cursor-pointer select-none" on:click={() => { sortingKey = "name"}}>Name {#if sortingKey === "name"}&dArr;{/if}</th>
            <th scope="col" class="font-medium px-6 py-3 cursor-pointer select-none" on:click={() => { sortingKey = "date"}}>Date {#if sortingKey === "date"}&dArr;{/if}</th>
            <th scope="col" class="font-medium px-6 py-3 cursor-default select-none">Description</th>
        </tr>
    </thead>
    <tbody>
        {#key sortingKey}
            {#each projects.sort(sortProjects) as project}
                <tr class="text-xl text-left hover:bg-emerald-600">
                    <th scope="row" class="px-6 py-4 ">
                        {#if project.link}
                            <a class="underline text-emerald-500" target="_blank" rel="noopener noreferrer" href={project.link}>{project.name}</a>
                        {:else}
                            {project.name}
                        {/if}
                    </th>
                    <td class="px-6 py-4">{project.date.toISOString().split('T')[0]}</td>
                    <td class="px-6 py-4 ">{project.description}</td>
                </tr>
            {/each}
        {/key}
    </tbody>
</table>
