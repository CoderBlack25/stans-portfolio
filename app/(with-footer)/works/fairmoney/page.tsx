import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/case-study";
import { fairMoneyCaseStudy } from "@/data/case-studies/fairmoney";

export const metadata: Metadata = {
  title: "FairMoney MFB",
  description: "Case study: FairMoney microfinance bank mobile application redesign.",
  alternates: { canonical: "/works/fairmoney" },
};

export default function FairMoneyPage() {
  return <CaseStudy project={fairMoneyCaseStudy} />;
}
