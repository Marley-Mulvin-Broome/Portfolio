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
    import type { PageData } from "./$types";
	import Contact from "$lib/components/Contact.svelte";
    import Footer from "$lib/components/Footer.svelte";
	import ScrollProgressTracker from "$lib/components/ScrollProgressTracker.svelte";
	import BottomModal from "$lib/components/BottomModal.svelte";
	import PostsView from "$lib/components/blog/PostsView.svelte";

    export let data: PageData;

    let scrollY = 0;

    const projectItems: IListItem[] = [
        {
            name: "JSpeak",
            description: "An anki addon that generates TTS audio on the fly.",
            video: "JSpeak.webm",
            image: "JSpeak.png",
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
            image: "Plantopia.png",
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
            image: "electrontimer.png",
            tags: [
                "Electron",
                "JavaScript",
                "Tool",
                "Open Source"
            ]
        }
    ];

</script>

<svelte:head>
    <title>Marley Mulvin Broome</title>
    <meta name="description" content="Marley Mulvin Broome is a web developer and current student at the University of New South Wales. Fluent in both Japanese and English.">
    <meta name="keywords" content="marley, mulvin, broome, web, web developer, programmer, hire web, hire developer, website creation, app, dev, github, github stats, hire dev, junior">
    <meta name="author" content="Marley Mulvin Broome, marley.developer@gmail.com">
    <meta name="language" content="en">
    <meta name="robots" content="index,follow">
    <meta name="revised" content="Sunday, October 16th, 2023, 17:20 pm">
    <meta charset="utf-8">
    
    <meta name="og:title" content="Web Developer Marley Mulvin Broome's Profile">
    <meta name="og:description" content="Marley Mulvin Broome is a web developer and current student at the University of New South Wales. Fluent in both Japanese and English.">
    <meta name="og:image" content="https://avatars.githubusercontent.com/u/20318132?v=4">
    <meta name="og:email" content="marley.developer@gmail.com">
</svelte:head>

<svelte:window bind:scrollY />

<ScrollProgressTracker />

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
        <div class="my-5 text-center">
            <LinkButton externalLink={false} href="/projects">See more...</LinkButton>
        </div>
    </div>
</Section>

<Section>
    <a href="/blog" id="blog" slot="title" class="hover:underline">Blog</a>
    <span slot="subtitle">Click on a post to read</span>
    <div slot="content" class="mt-10 flex flex-col">
        <PostsView size="sm" posts={data.posts}/>

        <div class="my-5 text-center">
            <LinkButton externalLink={false} href="/blog">Read more...</LinkButton>
        </div>
    </div>
    
</Section>

<Section>
    <span class="flex flex-row gap-2" slot="title">Stats <img class="lg:w-10 lg:h-10 w-8 h-8 my-auto lg:mt-5" src="github-mark-white.svg" alt="Github">  </span>
    <div class="p-4" slot="content">
        <GithubStats/>
    </div>
</Section>

<Section classes="mb-80">
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
        <Contact />
    </div>
</Section>


<!-- {#if scrollY >= 400}
    <BottomModal />
{/if} -->

