<script lang="ts">
	import ProjectsTable from "$lib/components/ProjectsTable/ProjectsTable.svelte";
	import SectionTitle from "$lib/components/SectionTitle.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Marley's Projects</title>

    <meta name="description" content="Marley Mulvin Broome's list of projects in software engineering.">
    <meta name="keywords" content="marley, mulvin, broome, web, web developer, programmer, hire web, hire developer, website creation, app, dev, github, projects, project, portfolio">
    <meta name="author" content="Marley Mulvin Broome, marley.developer@gmail.com">
    <meta name="language" content="en">
    <meta name="robots" content="index,follow">
    <meta name="revised" content="Sunday, October 16th, 2023, 17:20 pm">
    <meta charset="utf-8">
</svelte:head>

<!-- <Backbutton target="/#projects" /> -->

<div class="text-center mt-5">
    <SectionTitle>
        Projects
    </SectionTitle>
    
    
    <div class="md:w-4/6 w-5/6 mx-auto mt-16 relative overflow-x-auto shadow-md rounded-lg">
        <ProjectsTable projects={data.projects} />

    </div>
</div>
