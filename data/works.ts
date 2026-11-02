import type { ImageProps } from "next/image";
import fairmoney from "@/public/images/works/fairmoney.webp";
import fairmoneyFeatured from "@/public/images/works/fairmoney-featured.png";
import prune from "@/public/images/works/prune.webp";
import pruneFeatured from "@/public/images/works/prune-featured.png";
import clime from "@/public/images/works/clime.webp";
import climeFeatured from "@/public/images/works/clime-featured.png";

type Work = {
  href: string;
  title: string;
  description: string;
  src: ImageProps["src"];
  featuredSrc: ImageProps["src"];
  year: string;
  featured: boolean;
};

export const works = [
  {
    href: "/works/fairmoney",
    title: "Fairmoney Microfinance",
    description:
      "Business Banking system that gives businesses access to tools, funding and support to scale",
    src: fairmoney,
    featuredSrc: fairmoneyFeatured,
    year: "2026",
    featured: true,
  },
  {
    href: "/works/prune",
    title: "Prune payment",
    description:
      "Fintech platform for international money transfers and remittances, plus business payouts, virtual accounts, & SaaS offerings",
    src: prune,
    featuredSrc: pruneFeatured,
    year: "2025",
    featured: true,
  },
  {
    href: "/works/clime",
    title: "Clime payment ltd",
    description:
      "Remittance-focused fintech enabling fast, low/no-fee GBP-to-Naira transfers (personal and business) to Nigeria",
    src: clime,
    featuredSrc: climeFeatured,
    year: "2026",
    featured: true,
  },
] satisfies Work[];
