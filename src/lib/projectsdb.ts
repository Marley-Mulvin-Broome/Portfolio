import type { Project } from "./types/project";

export const projects: Project[] = [
    {
        name: "Portfolio",
        date: new Date("2023-08-03"),
        description: "This portfolio website, built with SvelteKit and Tailwind CSS.",
        source: "https://github.com/Marley-Mulvin-Broome/Portfolio"
    },
    {
        name: "Plantopia",
        date: new Date("2023-06-23"),
        description: "A game made in Unity, where you must run a farm and grow plants."
    },
    {
        name: "JSpeak",
        date: new Date("2023-07-25"),
        description: "An addon to the popular flashcard program Anki, allowing the user to generate TTS on the fly.",
        link: "https://github.com/Marley-Mulvin-Broome/JSpeak",
        source: "https://github.com/Marley-Mulvin-Broome/JSpeak"
    },
    {
        name: "Electron Timer",
        date: new Date("2023-02-23"),
        description: "A capable timer app built with Electron and vanilla JS.",
        link: "https://github.com/Marley-Mulvin-Broome/electron-timer",
        source: "https://github.com/Marley-Mulvin-Broome/electron-timer"
    },
    {
        name: "Japanese Frequency Processor",
        date: new Date("2022-03-30"),
        description: "A python library which allows for the easy analysis of Japanese text, and the generation of frequency lists.",
        link: "https://github.com/Marley-Mulvin-Broome/JapaneseFrequencyProcessor",
        source: "https://github.com/Marley-Mulvin-Broome/JapaneseFrequencyProcessor"
    },
    {
        name: "Marley Tutoring",
        date: new Date("2023-05-26"),
        description: "A website for my tutoring business, built with SvelteKit and TypeScript.",
        link: "https://www.marley-tutor.au/",
        source: "https://github.com/Marley-Mulvin-Broome/tutoring-site"
    }
]