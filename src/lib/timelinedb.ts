import type { ITimelineEvent } from "./types/timelineEvent";

function stringToDate(stringDate: string): Date {
    const [month, year] = stringDate.split(" ");
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
        text: "Completed the HSC at Cherrybrook Technology High School, obtaining an ATAR of 90. Finishing tied first in both normal and extension Japanese, I also obtained a band 6 in Chinese continuers."
    },
].sort((a, b) => {
    // Make sure to sort by date
    return stringToDate(b.date).getTime() - stringToDate(a.date).getTime();
});