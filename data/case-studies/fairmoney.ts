import { createElement } from "react";
import type { CaseStudyData } from "@/components/case-study/case-study";
import { CaseStudyImage } from "@/components/case-study/case-study-image";

export const fairMoneyCaseStudy: CaseStudyData = {
  /**LEFT-SIDE */

  title: "Fairmoney micro finance Bank",

  description: [
    {
      parts: [
        {
          text: "Led the design of scalable lending and high-yield savings experiences on the FairMoney product team during a period of massive hyper-growth. Formulated design strategies, user flows, and core interfaces that supported over ",
        },
        {
          text: "₦150B",
          bold: true,
          color: "text-foreground",
        },
        {
          text: " in loan disbursements and scaled deposit systems, directly contributing to a ",
        },
        {
          text: "155% YoY",
          bold: true,
          color: "text-foreground",
        },
        {
          text: " net profit surge (",
        },
        {
          text: "₦9.7B",
          bold: true,
          color: "text-foreground",
        },
        {
          text: ") and over ",
        },
        {
          text: "₦7B",
          bold: true,
          color: "text-foreground",
        },
        {
          text: " in user interest payouts.",
        },
      ],
    },
  ],

  meta: [
    {
      label: "Role",
      value: "Senior Designer",
    },
    {
      label: "Platform",
      value: "Web & Mobile",
    },
    {
      label: "Important Links",
      value: "View Live Website",
      href: "https://fairmoney.io",
    },
  ],

  productVertical: {
    description:
      "FairMoney serves different user groups through multiple product verticals, including the Merchant Portal, Mobile App, Sales Application, and POS Platform, each designed to support a specific user and their unique needs, and here are the once i supported in.",
    items: [
      { label: "Mobile Application", href: "https://fairmoney.io" },
      { label: "Sales App", disabled: true },
      { label: "POS Platform", disabled: true },
    ],
  },

  /**RIGHT-SIDE*/

  /**HERO VIDEO AND TEXT */
  heroIntro: {
    title: "Mobile Application",
    lines: [
      {
        parts: [
          {
            text: "The FairMoney mobile application was designed for business owners who prioritize ",
          },
          {
            text: "mobility, flexibility, and ease of use,",
            bold: true,
            color: "text-foreground",
          },
          {
            text: " enabling them to manage and carry out their business activities seamlessly, wherever they are.",
          },
        ],
        className: "text-xs text-(--color-muted) sm:text-sm",
      },
    ],
  },
  hero: {
    src: "/videos/fairmoney-video.mp4",
    alt: "FairMoney mobile application",
    width: 1200,
    height: 900,
    type: "video",
  },

  sections: [
    {
      type: "custom",
      id: "hero-divider",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**INTRODUCTION AND IMAGE */
    {
      type: "text",
      id: "introduction",
      title: "Introduction",
      lines: [
        {
          parts: [
            {
              text: "FairMoney Business has grown into a merchant-focused banking and financial services app supporting onboarding/KYC, payments (transfers & bill payments), savings/deposits, and ",
            },
            {
              text: "Merchant lending (The most important aspect of the product). ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "As capabilities expanded over time, the experience became less cohesive across modules. The redesign initiative was launched to modernize the app and create a consistent, intuitive, scalable experience that improves usability, engagement, and retention while strengthening competitive positioning.⁠",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "fairmoney1",
      src: "/images/fairmoney/image1.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "solution-divider5",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    {
      type: "text",
      id: "problem-statement",
      title: "Challenge / Problem Statement",
      lines: [
        {
          parts: [
            {
              text: "Despite offering a broad suite of services, the current app experience created friction that made it harder for merchants to complete everyday banking tasks quickly and confidently. Key problems included:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Fragmented experience ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "caused by inconsistent UI patterns, navigation, layouts, interaction models, and visual styling across modules (built at different times), resulting in a disconnected product experience.",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Declining engagement/retention signals, ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "including an approximate 11% MAU decline over the last 5 months (per the redesign document), suggesting usability and experience issues may be contributing to disengagement.",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Customer insight validating UX as a churn driver: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "a survey of churned users found 68% cited “better user experience” as the major reason for switching to competitors.",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Competitor parity gaps, ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "where competitor apps offered experience patterns and features FairMoney lacked (e.g., stronger interactivity, clearer summaries, and more consistent design systems), raising the bar for “expected” usability.",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "fairmoney2",
      src: "/images/fairmoney/image2.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "solution-divider4",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**DISCOVERY & STAKEHOLDER ALIGNMENT AND IMAGE */
    {
      type: "text",
      id: "stakeholder-alignment",
      title: "Discovery and Stakeholder Alignment",
      lines: [
        {
          parts: [
            {
              text: "Discovery focused on building shared clarity on what is broken, where, and why it matters, and aligning Product/Design/Engineering plus go-to-market stakeholders on scope and success metrics. This alignment included:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Product audit of the existing app experience ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "to identify core pain points (e.g., inconsistent patterns, navigation friction, transaction-history usability issues, outdated UI).⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Cross-functional definition of redesign scope ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "(what will change vs what won’t) and explicit exclusions (e.g., not introducing new financial products, not rebuilding backend services unless required).⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Launch and readiness alignment ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "across Product, Engineering, QA, Design for rollout phases, exit criteria, and monitoring requirements.",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Go-to-market alignment ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "(Marketing/Comms/Support) that communications should begin only after the redesigned app reaches full rollout and passes stability checks; plus defining segmentation, suppression rules, and contact policy principles.⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "fairmoney3",
      src: "/images/fairmoney/image3.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "solution-divider3",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**RESEARCH & INSIGHT */
    {
      type: "text",
      id: "research",
      title: "Research & Insights",
      lines: [
        {
          parts: [
            {
              text: "The Research was done by the research team. The research inputs and insights used to justify and shape the redesign included:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Quantitative product signals: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "declining MAU/usage trends and the need to improve retention and engagement.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Qualitative feedback: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "customer issues associated with UX friction, plus churn survey insight showing UX as a major switching reason.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Competitive benchmark: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "parity review vs competitors (e.g., gaps in interaction design patterns and experience capabilities).⁠ ",
            },
            {
              text: "Moniepoint MFB⁠ ",
              bold: true,
              color: "text-foreground",
              underline: true,
            },
            { text: "and " },
            {
              text: "Opay MFB⁠ ",
              bold: true,
              color: "text-foreground",
              underline: true,
            },
            { text: "was a major subject for analysis." },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Operational learnings for adoption: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "the plan acknowledges the risk of users being unfamiliar with the new UI and mitigates via beta/pilot, phased rollout, onboarding modals, and comms/education.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "fairmoney4",
      src: "/images/fairmoney/image4.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "solution-divider2",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**THE SOLUTION */
    {
      type: "text",
      id: "solution",
      title: "The Solution (what the redesign delivers)",
      lines: [
        {
          parts: [
            {
              text: "A comprehensive redesign to create a more consistent, intuitive, and scalable experience across the FairMoney Business app, with emphasis on usability and discoverability—without changing core product logic.⁠ Solution scope highlights include:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        /**SOLUTION 1 */
        {
          parts: [
            { text: "1. ", bold: true, color: "text-foreground" },
            {
              text: "Design system & unified UI patterns to eliminate inconsistency across modules.",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },

        {
          parts: [
            {
              text: "We standardized core components, layouts, navigation, typography, spacing, and interaction patterns into a unified design system, creating a consistent experience across existing modules while providing a scalable foundation for future features.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image5.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 2 */
        {
          parts: [
            { text: "2. ", bold: true, color: "text-foreground" },
            {
              text: "Home | Dashboard (the control centre)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },

        {
          parts: [
            { text: "• " },

            {
              text: "Redesign the Home dashboard with clear information hierarchy: balance, quick actions, primary banner(s), and recent transactions.⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Consolidate multiple banners (KYC, Loans, etc.) into a consistent banner component with prioritization and scrolling.⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Add personalization: business name display and customizable shortcuts/top features.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image6.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 3 */
        {
          parts: [
            { text: "3. ", bold: true, color: "text-foreground" },
            {
              text: "Transaction History & Transaction Details (tracking money clearly)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },

        { parts: [{ text: "Transaction History" }] },

        {
          parts: [
            { text: "• " },

            {
              text: "Improve readability and navigation: clearer credit vs debit distinction, better descriptions, fee visibility on cards, grouping by day.⁠⁠​⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Add stronger search and filter patterns and better browsing of activity.⁠⁠⁠​⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Introduce a transaction summary concept (inflows/outflows over a period) to help merchants understand performance quickly.⁠⁠⁠​⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        { parts: [{ text: "Transaction Details / Receipts" }] },

        {
          parts: [
            { text: "• " },

            {
              text: "Improve information hierarchy (what matters first).⁠⁠​⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Add clarity features like balance before/after, transaction breakdown, and more copyable details.⁠⁠⁠​⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Enable quick repeat actions like Repeat transfer where relevant.⁠⁠⁠⁠​⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image7.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 4 */
        {
          parts: [
            { text: "4. ", bold: true, color: "text-foreground" },
            {
              text: "Transfers Flow (send money faster, with fewer errors)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Redesign transfer flow with progressive disclosure and stronger information hierarchy (show the right fields at the right time).⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true },

            {
              text: "Improve beneficiary experience:⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-foreground sm:text-sm",
        },
        {
          parts: [
            {
              text: "Automatic bank matching after account input⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Beneficiary name display⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Suggested beneficiaries where appropriate⁠⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true },

            {
              text: "Strengthen trust and clarity:⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-foreground sm:text-sm",
        },
        {
          parts: [
            {
              text: "Clearer status on receipts⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Better error messages and inline validation⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Visibility into relevant network/status information⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Reduce friction (fewer unnecessary steps) and make narration/inputs more usable (e.g., character limits, numeric keyboard behavior where needed).⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image8.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 5 */
        {
          parts: [
            { text: "5. ", bold: true, color: "text-foreground" },
            {
              text: "Bill Payments (repeat purchases, fewer taps, more confidence)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },
        {
          parts: [
            { text: "• ", bold: true },

            {
              text: "Redesign bill-pay journeys (airtime/data/utilities/etc.) with:⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-foreground sm:text-sm",
        },
        {
          parts: [
            {
              text: "Pre-filled phone number where applicable⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Better contact display⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Persisting numeric keyboards for number-heavy inputs⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "“Recent bills” to repurchase quickly⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Cash-back visibility where applicable⁠⁠",
            },
          ],
          className: "ml-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Improve bill-payment history/logs and states so users can confirm outcomes and resolve failures faster.⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image8.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 6 */
        {
          parts: [
            { text: "6. ", bold: true, color: "text-foreground" },
            {
              text: "Savings (discoverability & clearer actions and history)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Improve savings information architecture and discoverability (so savings isn’t hidden behind navigation complexity).⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Provide more complete history and clearer lifecycle actions (create/top up/withdraw).⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Incorporate autosave flows during savings creation where relevant.⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image9.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 7 */
        {
          parts: [
            { text: "7. ", bold: true, color: "text-foreground" },
            {
              text: "Loans | Lending surfaces (make lending easier to find, understand, and act on)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "While the redesign does not aim to change core lending logic, it improves the lending experience across ",
            },
            {
              text: "loan offer and acceptance flow, Active loan flow with upcoming repayment, Repayment Schedule, Loan Agreement, loan history, loan schedule, and the different loan states like overdue etc ",
              bold: true,
              color: "text-foreground ",
            },
            { text: "by:" },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Using Home banners/entry points to make loan actions and prompts more discoverable and consistent with other modules.⁠⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Applying consistent UI patterns (states, hierarchy, messaging) so loan-related steps feel clearer and less “different” from transfers/bills/savings.⁠⁠⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },

            {
              text: "In FMB, lending is a core pillar⁠⁠⁠⁠⁠⁠⁠",
              bold: true,
              color: "text-foreground",
            },
            {
              text: ", so the redesign supports the goal of improving how merchants apply, track, and repay by reducing UX friction across the app experience.",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image10.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION 8 */
        {
          parts: [
            { text: "8. ", bold: true, color: "text-foreground" },
            {
              text: "In-app guidance for adoption (so users understand what changed)",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "mt-8 text-sm font-medium text-foreground",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Add first-launch onboarding modals to highlight improvements (home, transactions, transfers, bills) and reduce confusion after upgrade.⁠⁠⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },

            {
              text: "Rollout plan supports adoption via beta → readiness review → phased rollout → migration → force upgrade, to ensure stability and smooth user transition.⁠⁠⁠⁠⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/fairmoney/image11.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
      ],
    },

    {
      type: "custom",
      id: "solution-divider",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**KEY LEARNINGS */
    {
      type: "text",
      id: "learnings",
      title: "Key Learnings",
      lines: [
        {
          parts: [
            { text: "1. " },
            { text: "UX consistency is a business lever" },
          ],
          className: "ml-2 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Inconsistencies across navigation, layouts, and interactions made the product feel fragmented. A unified experience is not just visual polish—it can directly influence usability, trust, and retention.",
            },
          ],
          className: "ml-2 text-xs sm:text-sm font-medium text-(--color-muted)",
        },
        {
          parts: [
            { text: "2. " },
            { text: "UX can be a significant churn driver" },
          ],
          className: "ml-2 mt-4 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Customer feedback showed that users were willing to switch products because competitors offered a better experience. This reinforced the importance of treating UX as a core product and business concern.",
            },
          ],
          className: "ml-2 text-xs sm:text-sm font-medium text-(--color-muted)",
        },
        {
          parts: [
            { text: "3. " },
            { text: "Users benchmark experiences, not just features" },
          ],
          className: "ml-2 mt-4 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Competitive research showed that users bring expectations from leading fintech products. Clearer interactions, stronger information hierarchy, and consistent patterns increasingly define the baseline for a good banking experience.",
            },
          ],
          className: "ml-2 text-xs sm:text-sm font-medium text-(--color-muted)",
        },
        {
          parts: [
            { text: "4. " },
            { text: "A redesign is also a change-management exercise" },
          ],
          className: "ml-2 mt-4 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Improving the product is only half the job. Beta testing, education, phased rollout, and clear communication were necessary to help users understand and adopt the new experience.",
            },
          ],
          className: "ml-2 text-xs sm:text-sm font-medium text-(--color-muted)",
        },
        {
          parts: [
            { text: "5. " },
            { text: "Real tasks reveal more than opinions" },
          ],
          className: "ml-2 mt-4 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "The most useful validation came from testing everyday banking journeys rather than simply asking users whether they liked the redesign. Task-based feedback exposed usability gaps and areas where expectations weren't being met.",
            },
          ],
          className: "ml-2 text-xs sm:text-sm font-medium text-(--color-muted)",
        },
        {
          parts: [
            { text: "6. " },
            { text: "Design systems create leverage beyond the redesign" },
          ],
          className: "ml-2 mt-4 text-sm font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "The biggest long-term value was establishing reusable patterns and components that could keep the product consistent and make future features faster and easier to scale.",
            },
          ],
          className: "ml-2 text-xs sm:text-sm font-medium text-(--color-muted)",
        },
      ],
    },
  ],
};
