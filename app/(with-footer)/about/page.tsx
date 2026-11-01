import type { Metadata } from "next";
import { About } from "@/components/about";

export const metadata: Metadata = {
  title: "About",
  description: "About Stanley Chukwuma (Stanchiqa), Product Designer and Design Engineer.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="">
      <About />
    </main>
  );
}
