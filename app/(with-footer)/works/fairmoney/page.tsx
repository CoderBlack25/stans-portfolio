import { CaseStudy } from "@/components/case-study/case-study";
import { fairMoneyCaseStudy } from "@/data/case-studies/fairmoney";

export default function FairMoneyPage() {
  return <CaseStudy project={fairMoneyCaseStudy} />;
}
