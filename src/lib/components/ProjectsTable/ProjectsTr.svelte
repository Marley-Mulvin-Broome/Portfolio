<script lang="ts">
    import type { Project } from "$lib/types/project";

    export let project: Project;

    const padding = "px-2 py-2 md:px-6 md:py-4";
</script>

<tr class="text-xl text-left hover:bg-emerald-600">
    <th scope="row" class="{padding}">
        {#if project.link}
            <a class="underline text-emerald-500" target="_blank" rel="noopener noreferrer" href={project.link}>{project.name}</a>
        {:else}
            {project.name}
        {/if}
    </th>
    <td class="{padding}">{project.date.toISOString().split('T')[0]}</td>
    <td class="{padding}">{project.description}</td>
</tr>