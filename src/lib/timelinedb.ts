import type { ITimelineEvent } from "./types/timelineEvent";

function stringToDate(stringDate: string): Date {
    const [month, year] = stringDate.split(" ");
    // Add the 1 there for the day of month, otherwise won't parse
    return new Date(`${month} 1, ${year}`);
    
}

export const timelineEvents: ITimelineEvent[] = [
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
        text: "Completed the HSC at Cherrybrook Technology High School, obtaining an ATAR of 90."
    },
    {
        date: "March 2022",
        title: "Started Educator role at the Powerhouse Museum",
        text: "Teaching IT skills to students of various backgrounds, including those with learning disabilities such as autism and ADD. Utilised my programming knowledge to help teach various technologies such as Python, C#, and Unity."
    }
].sort((a, b) => {
    // Make sure to sort by date
    return stringToDate(b.date).getTime() - stringToDate(a.date).getTime();
});