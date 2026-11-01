import type { Metadata } from "next";
import Works from "@/components/works";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected product design and design engineering case studies by Stanley Chukwuma.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return <Works />;
}
