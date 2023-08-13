<script lang="ts">
	import Emphasis from "$lib/components/Emphasis.svelte";
	import LinkButton from "$lib/components/LinkButton.svelte";
	import List from "$lib/components/List.svelte";
	import Section from "$lib/components/Section.svelte";
	import SkillList from "$lib/components/SkillList/SkillList.svelte";
	import Timeline from "$lib/components/Timeline.svelte";
    import Title from "$lib/components/Title.svelte";
	import GithubStats from "$lib/components/github/GithubStats.svelte";
    import type { IListItem } from "$lib/types/listItem";
    import type { PageData, ActionData } from "./$types";
	import Contact from "$lib/components/Contact.svelte";
    import Footer from "$lib/components/Footer.svelte";

    export let data: PageData;

    const projectItems: IListItem[] = [
        {
            name: "JSpeak",
            description: "An anki addon that generates TTS audio on the fly.",
            video: "JSpeak.webm",
            tags: [
                "Python",
                "Anki",
                "TTS",
                "Tool",
                "Open Source"
            ]
        },
        {
            name: "Plantopia",
            description: "A game where you manage a farm.",
            video: "plantopia.webm",
            tags: [
                "Unity",
                "C#",
                "Game Development"
            ]
        },
        {
            name: "Electron Timer",
            description: "A capable timer app built with Electron.",
            video: "electrontimer.webm",
            tags: [
                "Electron",
                "JavaScript",
                "Tool",
                "Open Source"
            ]
        }
    ];

    export let form: ActionData;
</script>

<svelte:head>
    <title>Marley Mulvin Broome</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
    <div>
        <Title>
            <span slot="title">Marley Mulvin Broome</span>
            <span slot="description">Creating software that is <Emphasis>accessible</Emphasis>, <Emphasis>usable</Emphasis>, and <Emphasis>beautiful</Emphasis>.</span>
        </Title>
    </div>
    
</div>

<Section>
    <span id="projects" slot="title">Projects</span>
    <span slot="subtitle">Click on a project to see more</span>

    <div slot="content" class="mt-10 text-center">
        <List items={projectItems} />
        <div class="my-5">
            <LinkButton externalLink={false} href="/projects">See more...</LinkButton>
        </div>
    </div>
</Section>

<Section>
    <span class="flex flex-row gap-2" slot="title">Stats <img class="lg:w-10 lg:h-10 w-8 h-8 my-auto lg:mt-5" src="github-mark-white.svg" alt="Github">  </span>
    <div slot="content">
        <GithubStats/>
    </div>
</Section>

<Section>
    <span slot="title">Skills</span>
    <div slot="content">
        <SkillList skills={data.skills}/>
    </div>
</Section>

<Section>
    <span slot="title">Experience</span>
    <div slot="content">
        <Timeline events={data.timelineEvents}/>
    </div>
</Section>

<Section>
    <span slot="title">Contact</span>
    <div class="pt-4" slot="content">
        <Contact {form} />
    </div>
</Section>

<Footer socialLinks={data.socialLinks} />