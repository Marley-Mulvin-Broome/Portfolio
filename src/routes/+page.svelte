<script lang="ts">
	import Emphasis from "$lib/components/Emphasis.svelte";
	import LinkButton from "$lib/components/LinkButton.svelte";
	import List from "$lib/components/List.svelte";
	import Section from "$lib/components/Section.svelte";
	import Timeline from "$lib/components/Timeline.svelte";
    import Title from "$lib/components/Title.svelte";
	import GithubStats from "$lib/components/github/GithubStats.svelte";
    import type { IListItem } from "$lib/types/listItem";
	import type { ITimelineEvent } from "$lib/types/timelineEvent";
	import { fade } from "svelte/transition";
    import { queryParam } from "sveltekit-search-params";


    const username = queryParam('username');
    $username = "Marley-Mulvin-Broome";


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
            image: "https://www.economist.com/img/b/1190/670/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
            tags: [
                "Unity",
                "C#",
                "Game Development"
            ]
        },
        {
            name: "Electron Timer",
            description: "A capable timer app built with Electron.",
            image: "https://www.economist.com/img/b/1190/670/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
            tags: [
                "Electron",
                "JavaScript",
                "Tool",
                "Open Source"
            ]
        }
    ];

    const timelineEvents: ITimelineEvent[] = [
        {
            date: "June 2023",
            title: "Began work at Ichiriyama Imai Hospital",
            text: "Started work maintaining the Ichiriyama Imai Hospital's homepage, alongside making improvements and change to the websites content and codebase."
        },
        {
            date: "September 2022",
            title: "Enrolled at UNSW",
            text: "Started a bachelor of Science (Computer Science) at UNSW."
        },
        {
            date: "December 2021",
            title: "Obtained ATAR of 90",
            text: "Completed the HSC at Cherrybrook Technology High School, obtaining an ATAR of 90. Finishing tied first in both normal and extension Japanese, I also obtained a band 6 in Chinese continuers."
        },
    ]

</script>

<div class="snap-y snap-mandatory" in:fade>
    <div class="flex flex-col items-center justify-center h-screen snap-center">
        <div>
            <Title>
                <span slot="title">Marley Mulvin Broome</span>
                <span slot="description">Creating software that is <Emphasis>accessible</Emphasis>, <Emphasis>usable</Emphasis>, and <Emphasis>beautiful</Emphasis>.</span>
            </Title>
        </div>
        
    </div>
    
    <Section>
        <span slot="title">Projects</span>

        <span slot="subtitle">Click on a project to see more</span>
    
        <div slot="content" class="mt-10 text-center">
            <List items={projectItems} />
            <div class="my-5">
                <LinkButton href="https://github.com/Marley-Mulvin-Broome?tab=repositories&q=&type=public&language=&sort=stargazers">See more...</LinkButton>

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
    </Section>

    <Section>
        <span slot="title">Experience</span>
        <div slot="content">
            <Timeline events={timelineEvents}/>
        </div>
    </Section>
</div>

