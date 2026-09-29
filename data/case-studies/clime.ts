import { createElement } from "react";
import type { CaseStudyData } from "@/components/case-study/case-study";
import { CaseStudyImage } from "@/components/case-study/case-study-image";

export const climeCaseStudy: CaseStudyData = {
  /**LEFT-SIDE */

  title: "Clime Payment Ltd",
  description:
    "Remittance-focused fintech enabling fast, low/no-fee GBP-to-Naira transfers (personal and business) to Nigeria",
  meta: [
    { label: "Role", value: "Lead Designer" },
    { label: "Platform", value: "Website & Mobile" },
    {
      label: "Important Links",
      value: "View Live Website",
      href: "https://climepayment.com",
    },
    { label: "Scope", value: "End-to-end product experience" },
  ],

  /**RIGHT-SIDE*/

  /**HERO VIDEO AND TEXT */
  hero: {
    src: "/videos/clime-videoV2.mp4",
    alt: "FairMoney mobile application",
    width: 1200,
    height: 900,
    type: "video",
  },

  sections: [
    {
      type: "custom",
      id: "clime-custom-1",
      content: createElement("div", {
        className:
          "h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-1)",
      }),
    },

    /**INTRODUCTION */
    {
      type: "text",
      id: "clime-text-1",
      title: "Introduction",
      lines: [
        {
          parts: [
            {
              text: "Clime is a global financial platform built around fast cross-border payments. I designed the mobile product and supporting web experience across the complete customer journey — from discovering Clime and opening an account to verifying identity, sending money, managing recipients, tracking transactions, earning rewards, and managing account security.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
      ],
    },

    {
      type: "image",
      id: "clime-image-1",
      src: "/images/clime/image1.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "clime-custom-2",
      content: createElement("div", {
        className:
          "h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-1)",
      }),
    },

    /**THE CHALLENGE */
    {
      type: "text",
      id: "clime-text-2",
      title: "The Challenge",
      lines: [
        {
          parts: [
            {
              text: "International payments are powerful, but rarely feel simple.",
            },
          ],
          className: "text-sm text-foreground font-medium",
        },
        {
          parts: [
            {
              text: "Sending money across borders introduces a lot of complexity. Users have to think about currencies, exchange rates, fees, recipient banking details, verification, payment methods, and whether their money has actually arrived.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "At the same time, financial products have very little room for ambiguity. When people move money, they need to know exactly what they are doing, what it costs, and what happens next.",
            },
          ],
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "The challenge was therefore bigger than designing a transfer flow.",
            },
          ],
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "We needed to create an experience where:",
            },
          ],
          className: "mt-4 text-sm text-foreground font-medium",
        },
        {
          parts: [
            {
              text: "• Complexity stays underneath the interface.",
            },
          ],
          className: "ml-1 text-xs font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Users shouldn't need to understand the financial infrastructure behind a transfer.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "• Trust stays visible.",
            },
          ],
          className: "ml-1 text-xs font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Rates, fees, recipient information and transaction status should never feel hidden.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "• Security doesn't become friction.",
            },
          ],
          className: "ml-1 text-xs font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Verification and authentication need to protect users without making every interaction feel difficult.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "• The experience continues after the transaction.",
            },
          ],
          className: "ml-1 text-xs font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Users need tools to manage recipients, track transfers, resolve problems and control their accounts.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "The design question",
            },
          ],
          className: "mt-8 text-sm text-foreground font-medium",
        },
        {
          content: createElement(
            "blockquote",
            {
              className:
                "bg-(--color-surface-dark) p-4 italic text-xs text-foreground rounded-lg",
            },
            "How might we make cross-border banking feel as simple and predictable as sending money locally?",
          ),
        },
      ],
    },

    {
      type: "image",
      id: "clime-image-2",
      src: "/images/clime/image2.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "clime-custom-3",
      content: createElement("div", {
        className:
          "h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-1)",
      }),
    },

    /**RESEARCH & INSIGHTS */
    {
      type: "text",
      id: "clime-text-3",
      title: "Research & Insights",
      lines: [
        {
          parts: [
            {
              text: "I approached Clime as a complete financial ecosystem, mapping the moments where users could experience uncertainty or friction. Five principles guided the design:",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "1. Simplify the decision, not the information: ",
              color: "text-foreground",
              bold: true,
            },
            {
              text: "Users don't need to understand how transfers work; they need to confidently answer send, receive, rate, cost.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "2. Transparency is part of the experience: ",
              color: "text-foreground",
              bold: true,
            },
            {
              text: "Rates, charges, and transaction status are surfaced exactly when users need them, not buried.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "3. Onboarding should feel progressive: ",
              color: "text-foreground",
              bold: true,
            },
            {
              text: "A single long form becomes focused steps (email → phone → OTP → details → password → identity → address → passcode), each with one clear action.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "4. The first transaction shouldn't define every transaction: ",
              color: "text-foreground",
              bold: true,
            },
            {
              text: "Saved recipients mean the product gets faster to use as a user's network grows.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "5. The happy path isn't the whole product: ",
              color: "text-foreground",
              bold: true,
            },
            {
              text: "Every state — in progress, failed, reversed — gets a clear meaning and next step, across transfers, onboarding, and verification.",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
      ],
    },

    {
      type: "image",
      id: "clime-image-3",
      src: "/images/clime/image3.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "clime-custom-4",
      content: createElement("div", {
        className:
          "h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-1)",
      }),
    },

    /**THE SOLUTION */
    {
      type: "text",
      id: "clime-text-4",
      title: "The Solution",
      lines: [
        {
          parts: [
            {
              text: "We designed to create a more consistent, intuitive, and scalable experience across the Clime Payment application, with emphasis on usability and discoverability. Solution scope highlights include:",
            },
          ],
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "1. A Consistent Design Language",
          bold: true,
          color: "text-foreground",
          className: "mt-8 text-sm",
        },
        {
          text: "We built the design system ensuring reusable patterns for inputs, cards, modals, status indicators, and financial summaries meant users never had to relearn the product moving between Send Money, Recipients, or Security.",
          className: "text-xs text-(--color-muted)",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image4.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          text: "2. Onboarding (Identity & Address Verification)",
          bold: true,
          color: "text-foreground",
          className: "mt-8 text-sm",
        },
        {
          text: "The transfer experience sits at the centre of Clime, designed to reduce the cognitive load of currencies, exchange rates, fees, and recipient details.",
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "The journey: ",
              color: "text-foreground",
            },
            {
              text: "Choose amount → Select recipient → Choose payment method → Review → Authenticate → Complete",
            },
          ],
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          text: "The Home screen doubles as a lightweight currency calculator, letting users gauge value before committing. The transfer summary then keeps all critical info together, amount sent, amount received, currencies, exchange rate, and charges, so users never have to do the math themselves.",
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          text: "KYC is woven into the product rather than feeling like a separate compliance detour. Identity and address verification each have their own guided flow, and successful verification is reflected back through notifications and account status — making compliance feel connected, not bolted on.",
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image5.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          text: "3. Send Money",
          bold: true,
          color: "text-foreground",
          className: "mt-8 text-sm",
        },
        {
          text: "The transfer experience sits at the centre of Clime, designed to reduce the cognitive load of currencies, exchange rates, fees, and recipient details.",
          className: "text-xs text-(--color-muted)",
        },
        {
          parts: [
            {
              text: "The journey: ",
              color: "text-foreground",
            },
            {
              text: "Choose amount → Select recipient → Choose payment method → Review → Authenticate → Complete",
            },
          ],
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          text: "The Home screen doubles as a lightweight currency calculator, letting users gauge value before committing. The transfer summary then keeps all critical info together, amount sent, amount received, currencies, exchange rate, and charges, so users never have to do the math themselves.",
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image6.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          text: "4. Recipients",
          bold: true,
          color: "text-foreground",
          className: "mt-8 text-sm",
        },
        {
          text: "Recipients aren't just details for one transfer, they're a reusable network. Users can add, search, and manage beneficiaries, view their history, and reuse them for future transfers. The principle: the more you use Clime, the less work each transfer takes.",
          className: "text-xs text-(--color-muted)",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image7.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          text: "5. Transactions",
          bold: true,
          color: "text-foreground",
          className: "mt-8 text-sm",
        },
        {
          text: "A transfer doesn't end at Send. Every transaction has a clear status (successful, in progress, failed, reversed) and a detailed view with sender/recipient info, fees, reference number, and processing timeline — so users always know where their money is, not just that it was sent.",
          className: "text-xs text-(--color-muted)",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image8.png",
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
      id: "clime-custom-5",
      content: createElement("div", {
        className:
          "h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-1)",
      }),
    },

    /**WEBSITE UI */
    {
      type: "text",
      id: "clime-text-5",
      title: "Website UI",
      lines: [
        {
          text: "I created a marketing experience built around clarity, confidence and conversion.",
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "The homepage introduces Clime through a simple proposition, then progressively communicates the product's benefits, features and value before leading users toward creating an account.",
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "The supporting About experience gives the brand more context, helping users understand the company behind the product and reinforcing credibility.",
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "From discovery to product",
          className: "font-medium text-foreground underline text-xs",
        },
        {
          text: "The website wasn't designed as a standalone marketing asset. It was designed as the front door to the Clime ecosystem",
          className: "text-xs text-(--color-muted)",
        },
        {
          content: createElement("video", {
            src: "/videos/clime-video2.mp4",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            controls: false,
            preload: "auto",
            className: "mt-8 h-auto w-full object-cover",
          }),
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image9.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image10.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image11.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/clime/image12.png",
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
      id: "clime-custom-6",
      content: createElement("div", {
        className:
          "h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-1)",
      }),
    },

    /**REFLECTION */
    {
      type: "text",
      id: "clime-text-6",
      title: "Reflection",
      lines: [
        {
          text: "Simplicity is not about removing information. It is about removing unnecessary decisions.",
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "Designing Clime reinforced how important clarity and control are in financial products. A cross-border payment can involve significant complexity behind the scenes, but users shouldn't have to navigate that complexity to complete a simple task.",
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "Throughout the project, I kept coming back to one question:",
          className: "mt-4 text-xs text-foreground font-medium",
        },
        {
          content: createElement(
            "blockquote",
            {
              className:
                "bg-(--color-surface-dark) p-4 italic text-xs text-foreground rounded-lg",
            },
            "What does the user need to know right now?",
          ),
        },
        {
          text: "That question shaped key decisions across the product, from the transfer calculator and onboarding flow to transaction states, recipient management, verification, and security.",
          className: "mt-4 text-xs text-(--color-muted)",
        },
        {
          text: "The key takeaway",
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          text: "Hide the complexity, not the control.",
          className: "text-xs text-(--color-muted)",
        },
        {
          text: "Clime taught me that good financial UX doesn't necessarily mean showing users less. It means giving them the right information at the right moment, so they can move money with confidence while still feeling in control of what is happening.",
          className: "mt-4 text-xs text-(--color-muted)",
        },
      ],
    },
  ],
};
