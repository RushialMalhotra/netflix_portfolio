import { GraphQLClient, gql } from "graphql-request";
import { TimelineItem } from "../types";

const client = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_READONLY_TOKEN}`,
  },
});

export async function getTimeline(): Promise<TimelineItem[]> {
  const query = gql`
    {
      allTimelineItems(orderBy: displayOrder_ASC) {
        name
        timelinetype
        title
        summarypoints
        techstack
        dateRange
        displayOrder
      }
    }
  `;

  try {
    const data = (await client.request(query)) as {
      allTimelineItems: {
        name: string;
        timelinetype: string;
        title: string;
        summarypoints: string;
        techstack: string;
        dateRange: string;
        displayOrder: number;
      }[];
    };

    if (!data.allTimelineItems) {
      console.warn("⚠️ No timeline data found or schema mismatch", data);
      return [];
    }

    return data.allTimelineItems.map((item) => ({
      name: item.name,
      timelineType:
        item.timelinetype?.toLowerCase() === "education" ? "education" : "work",
      title: item.title,
      techStack: item.techstack || "",
      summaryPoints: item.summarypoints
        ? item.summarypoints.split("\n").filter((p) => p.trim() !== "")
        : [],
      dateRange: item.dateRange || "",
      displayOrder: item.displayOrder ?? 0,
    }));
  } catch (err) {
    console.error("🔥 DatoCMS request failed:", err);
    return [];
  }
}
