import type { Metadata } from "next";
import Playground from "@/components/playground";

export const metadata: Metadata = {
  title: "Playground",
  description: "Design experiments and explorations by Stanley Chukwuma.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage() {
  return <Playground />;
}
