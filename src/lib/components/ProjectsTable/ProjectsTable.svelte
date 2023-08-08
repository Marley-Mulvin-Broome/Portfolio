<script lang="ts">
	import type { Project } from "$lib/types/project";
	import type { SortingDirection } from "$lib/types/sortingDirection";
    import ProjectsTh from "./ProjectsTh.svelte";
	import ProjectsTr from "./ProjectsTr.svelte";

    export let projects: Project[] = [];

    let sortingKey: keyof Project = "date";
    let sortingDirection: SortingDirection = "ascending";
    $: sortingDetails = sortingKey + sortingDirection;

    function sortProjects(a: Project, b: Project) {
        switch(sortingKey) {
            case "date":
                if (sortingDirection === "ascending") {
                    return a.date.getTime() - b.date.getTime();
                } else {
                    return b.date.getTime() - a.date.getTime();
                }
            case "name":
                if (sortingDirection === "ascending") {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            default:
                return 0;
        }
        
    }

    const setSortingKey = (event: any) => {
        sortingKey = event.detail.key;
        sortingDirection = event.detail.direction;
    }
</script>


<table class="mx-auto w-full text-left">
    <thead class="">
        <tr class="text-2xl bg-emerald-600">
            <ProjectsTh {sortingKey} key="name" on:click={setSortingKey}>Name</ProjectsTh>
            <ProjectsTh {sortingKey} key="date" on:click={setSortingKey}>Date</ProjectsTh>
            <ProjectsTh {sortingKey} sortable={false} key="description" on:click={setSortingKey}>Description</ProjectsTh>
        </tr>
    </thead>
    <tbody>
        {#key sortingDetails}
            {#each projects.sort(sortProjects) as project}
                <ProjectsTr {project} />
            {/each}
        {/key}
    </tbody>
</table>
