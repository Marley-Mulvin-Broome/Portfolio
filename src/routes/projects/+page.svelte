<script lang="ts">
	import Backbutton from "$lib/components/Backbutton.svelte";
	import ProjectsTable from "$lib/components/ProjectsTable.svelte";
	import SectionTitle from "$lib/components/SectionTitle.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Backbutton target="/#projects" />

<div class="text-center mt-5">
    <SectionTitle>
        Projects
    </SectionTitle>
    
    
    <div class="w-4/6 mx-auto mt-3 relative overflow-x-auto shadow-md rounded-lg">
        <ProjectsTable projects={data.projects} />

    </div>
</div>
