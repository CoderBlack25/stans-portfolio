import { CaseStudy } from "@/components/case-study/case-study";
import { pruneCaseStudy } from "@/data/case-studies/prune";

export default function PrunePage() {
  return <CaseStudy project={pruneCaseStudy} />;
}
