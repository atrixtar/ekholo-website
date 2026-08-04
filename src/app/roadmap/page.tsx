import type { Metadata } from "next";
import { RoadmapView } from "./RoadmapView";

export const metadata: Metadata = {
  title: "Your Roadmap",
  description: "A personalised four-step roadmap built from your diagnostic answers.",
};

export default function RoadmapPage() {
  return <RoadmapView />;
}
