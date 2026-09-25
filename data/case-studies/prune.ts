import type { CaseStudyData } from "@/components/case-study/case-study";

export const pruneCaseStudy: CaseStudyData = {
  title: "Prune Payment",
  description: [
    {
      parts: [
        {
          text: "Led the end-to-end design of multi-currency wallets and international remittance experiences on the Prune Payments product team. ",
        },
        {
          text: "Designed frictionless, compliant cross-border payment flows and transaction tracking interfaces",
          bold: true,
          color: "text-white",
        },
        {
          text: " that simplified global money transfers from corridors like the UK to West Africa, significantly reducing user drop-off during complex international verification stages.",
        },
      ],
    },
  ],
  meta: [
    { label: "Role", value: "Lead Designer" },
    { label: "Platform", value: "Web & Mobile" },
    {
      label: "Important Links",
      value: "View Live Website",
      href: "https://prunepayments.com",
    },
  ],
  productVertical: {
    description:
      "Prune Payment serves different end user through dual product verticals which include the Prune B2B Web Portal, and the Mobile App.",
    items: [
      { label: "Prune B2B Web Portal", href: "https://prunepayments.com" },
      { label: "Prune Admin Portal | Back office", disabled: true },
      { label: "Mobile Application", disabled: true },
    ],
  },
  sections: [],
};
