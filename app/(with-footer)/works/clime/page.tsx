import { CaseStudy } from "@/components/case-study/case-study";
import { climeCaseStudy } from "@/data/case-studies/clime";

export default function ClimePage() {
  return <CaseStudy project={climeCaseStudy} />;
}
