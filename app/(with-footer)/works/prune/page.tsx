import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study";
import { pruneCaseStudy } from "@/data/case-studies/prune";

export const metadata: Metadata = {
  title: "Prune Payment",
  description: "Case study: Prune payment API solution and onboarding.",
  alternates: { canonical: "/works/prune" },
};

export default function PrunePage() {
  return <CaseStudy project={pruneCaseStudy} />;
}
