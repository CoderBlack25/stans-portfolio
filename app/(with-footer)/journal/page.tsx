import type { Metadata } from "next";
import { ArticlesSection } from "@/components/articles-section";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes and writing by Stanley Chukwuma on design and product.",
  alternates: { canonical: "/journal" },
};

export default function AboutPage() {
  return (
    <main className="">
      <ArticlesSection />
    </main>
  );
}
