import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study";
import { climeCaseStudy } from "@/data/case-studies/clime";

export const metadata: Metadata = {
  title: "Clime Payment",
  description: climeCaseStudy.description as string,
  alternates: { canonical: "/works/clime" },
};

export default function ClimePage() {
  return <CaseStudy project={climeCaseStudy} />;
}
