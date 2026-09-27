import { createElement } from "react";
import type { CaseStudyData } from "@/components/case-study/case-study";
import { CaseStudyImage } from "@/components/case-study/case-study-image";

export const pruneCaseStudy: CaseStudyData = {
  /**LEFT-SIDE */

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

  /**RIGHT-SIDE */

  /**HERO VIDEO AND TEXT */
  heroIntro: {
    title: "Prune Payment API Solution",
    lines: [
      {
        parts: [
          {
            text: "Prune Payment API is a developer-first, API-as-a-Service platform that enables businesses to create and manage multi-currency virtual bank accounts at scale.",
          },
        ],
        className: "text-xs text-(--color-muted) sm:text-sm",
      },
    ],
  },
  hero: {
    src: "/videos/prune-video.mp4",
    alt: "Prune payment",
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

    /**INTRODUCTION */
    {
      type: "text",
      id: "introduction",
      title: "Introduction",
      lines: [
        {
          parts: [
            {
              text: "Prune Payment API is a developer-first, API-as-a-Service platform that enables businesses to create and manage multi-currency virtual bank accounts at scale. Built for fintechs, marketplaces, and digital banks operating across emerging and global markets, the platform currently supports Euro (EUR) and British Pound (GBP), Nigerian Naira (NGN), US Dollar (USD), Ghanaian Cedi (GHS), Canadian Dollar (CAD), with Australian Dollar (AUD), Indian Rupee (INR), and Swiss Franc (CHF) already in active development and rollout.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Through a secure and scalable API layer, Prune delivers:",
              bold: true,
              color: "text-foreground",
              underline: true,
            },
          ],
        },
        {
          parts: [
            { text: "• " },
            {
              text: "Virtual bank account issuance for individuals and businesses",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },
            {
              text: "Seamless cross-border payments and payouts",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },
            {
              text: "Real-time web-hooks for deposits, transaction updates, and account activity",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },
            {
              text: "A full developer dashboard for API key management, environment control, and monitoring",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },
            {
              text: "Region-specific KYC and compliance workflows",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• " },
            {
              text: "A production-grade sandbox for safe, rapid integration",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Prune bridges regulated banking infrastructure with modern developer experience, helping companies launch compliant financial products faster and with greater confidence.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "prune1",
      src: "/images/prune/image1.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "prune-divider1",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-muted) dark:bg-(--color-surface-muted)",
      }),
    },

    /**ONBOARDING */
    {
      type: "text",
      id: "onboarding",
      title: "Streamlining Onboarding for the Prune payment API",
      lines: [
        {
          parts: [
            {
              text: "Our objective was to design an intuitive and compliant onboarding experience for new businesses utilizing the Prunepayment API.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/prune/image2.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        /**SOLUTION */
        {
          parts: [{ text: "Solution:" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "We designed a structured, step-by-step onboarding flow for the Prunepayment API, focusing on:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "1. ", bold: true, color: "text-foreground" },
            {
              text: "Simplifying Information Gathering: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: `Breaking down "Business Information", "Documents", "Directors", and "Shareholders" into distinct, manageable stages.`,
            },
          ],
          className: "mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "2. ", bold: true, color: "text-foreground" },
            {
              text: "Improving Usability of Uploads: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Implementing clear drag-and-drop zones for essential documents (e.g., CAC Certificate, AML Framework), reducing confusion.",
            },
          ],
          className: "mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "3. ", bold: true, color: "text-foreground" },
            {
              text: "Providing In-Context Help: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: `Integrating "Quick Tips" directly within the interface to guide users on optimal data entry and document preparation.`,
            },
          ],
          className: "mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "4. ", bold: true, color: "text-foreground" },
            {
              text: "Enabling Service Customization: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Allowing businesses to proactively select desired API services (e.g., Account, Payout, Lookup) from the onset.",
            },
          ],
          className: "tmt-4 ext-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "5. ", bold: true, color: "text-foreground" },
            {
              text: "Ensuring Transparency: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: `Clear presentation of "Terms of Use" and real-time application status updates.`,
            },
          ],
          className: "mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [{ text: "Impact:" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "This design aims to significantly improve the user's first impression and completion rate for the Prune payment API, transforming a potentially daunting task into a straightforward and efficient process.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/prune/image3.png",
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
      id: "prune-divider2",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**ACCOUNT SERVICE */
    {
      type: "text",
      id: "account-service",
      title: "Account Service",
      lines: [
        {
          parts: [
            {
              text: "The account service provides endpoints that allow for creating and managing accounts. There are two types of accounts that can be created.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [{ text: "1. Individual/user account and" }],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [{ text: "2. Organizational/ Cooperate account" }],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Financial account management, especially for businesses, involves a multitude of critical functions from account creation and status tracking to transaction monitoring and fund transfers. The challenge was to consolidate these complex functionalities into a user-friendly and efficient interface that caters to both individual and corporate account needs.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/prune/image4.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },

        {
          parts: [{ text: "My Approach & Key Contributions" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "As the Lead UI/UX designer for the Prunepayment API Account Service, we translated a broad set of backend API functionalities into a clean, functional, and intuitive user interface. My objective was to make complex financial operations simple, actionable, and efficient for end users.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [{ text: "Centralized Account Overview" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "We designed a comprehensive Accounts dashboard that provides a high-level summary of all issued accounts, including key data points like account type, balance, creation date, and recent activity. This allows users to quickly assess their financial standing at a glance.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [{ text: "Modular and Granular Insights" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Each account expands into a detailed view featuring distinct sections for:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Account Details⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Transactions⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Statistics⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Documents⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "This modular layout ensures that users can access deep insights without being overwhelmed by information.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [{ text: "Intuitive Navigation for Core Functions" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "I structured the left-hand navigation panel to streamline access to all critical features:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Accounts – List and manage issued accounts⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Account Requests – Track individual and corporate account creation workflows⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Payouts & Debt Requests – View and manage outgoing or incoming fund requests⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Transactions – Monitor all account-related financial activities⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [{ text: "Financial Visualization" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "The Statistics section uses charts and visual indicators to present transaction metrics and trends in an easily digestible format, supporting fast decision-making for business users.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [{ text: "Action-Oriented Design" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "Prominent placement of high-utility features like the Send Money button enables users to execute core actions directly from the account view, reducing friction and improving workflow efficiency.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [{ text: "Full API Endpoint Coverage" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "The UI was carefully mapped to support and reflect the full spectrum of backend API capabilities, including:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Account Creation and Management: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Request Individual/Corporate Account, Track and Update Requests⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Issued Accounts: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "List and View Accounts⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Financial Transactions: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Check Balances, Initiate Transfers, Validate IBANs⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Transaction Oversight: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "View and Track Transactions⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Compliance Support: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Fetch Acceptable IDs for KYC⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },

        {
          parts: [{ text: "Outcome" }],
          className: "mt-8 text-sm sm:text-base font-medium text-foreground",
        },
        {
          parts: [
            {
              text: "The final interface empowers businesses to manage their financial operations with clarity, speed, and confidence. By transforming complex backend services into a streamlined, user-friendly frontend experience, I contributed to a product that elevates financial management while supporting scalability and user growth.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },

        {
          content: createElement(CaseStudyImage, {
            src: "/images/prune/image5.png",
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
      id: "prune-divider3",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**API KEY GENERATION */
    {
      type: "text",
      id: "api-key",
      title: "API Key Generation & Management",
      lines: [
        {
          parts: [
            {
              text: "We also designed a secure and user-friendly interface for managing Live and Test API keys within the Prune payment dashboard. Key features include:",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Separate sections for live and test environments⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Masked keys with one-click view, copy, and reset options⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Real-time feedback and error handling⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• Web-hook URL configuration for event and callback notifications⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "• API usage tracking with total API call display⁠⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "This feature empowers developers to manage integrations efficiently while maintaining high security standards",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "prune6",
      src: "/images/prune/image6.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "prune-divider4",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**PRUNE PAYOUT */
    {
      type: "text",
      id: "payout",
      title: "Prune Payout API Service",
      lines: [
        {
          parts: [{ text: "Detailed Transaction reports." }],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "The " },
            { text: "payout ", bold: true, color: "text-foreground" },
            {
              text: "feature enables businesses to **disburse funds to recipients** via API or dashboard in multiple currencies like ",
            },
            {
              text: "EUR, GBP, and NGN.",
              bold: true,
              color: "text-foreground",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [{ text: "Core Capabilities", color: "text-foreground" }],
          className: "text-xs sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Fund Disbursement: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Initiate payouts from virtual accounts using the endpoint⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Fund Disbursement: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Initiate payouts from virtual accounts using the endpoint⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Live Tracking: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Check disbursement status via API or dashboard.⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Account Overview: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "View account balance, transaction history, and beneficiary details.⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Go Live Option: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Schedule a go-live date post-integration testing.⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Secure & Scalable: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Designed for business-grade financial operations with real-time visibility and access control.⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Perfect for companies needing fast, cross-border fund transfers in a secure and developer-friendly environment.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "prune7",
      src: "/images/prune/image7.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "prune-divider5",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**SANDBOX TESTING */
    {
      type: "text",
      id: "sandbox",
      title: "Sandbox Testing Interface",
      lines: [
        {
          parts: [
            {
              text: "The Sandbox Environment provides developers with a safe, isolated space to test API functionality without impacting real data or transactions.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Payout Service Sandbox",
              bold: true,
              color: "text-foreground",
              underline: true,
            },
          ],
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Simulate Account Deposit: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Test adding funds to an issued account.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Simulate Transaction Confirmation: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Test successful transaction processing.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Simulate Transaction Failure: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Test failed or rejected transactions.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "Account Service Sandbox",
              bold: true,
              color: "text-foreground",
              underline: true,
            },
          ],
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Simulate Account Issuance Approval: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Test account approval flow.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            { text: "• ", bold: true, color: "text-foreground" },
            {
              text: "Simulate Account Issuance Rejection: ",
              bold: true,
              color: "text-foreground",
            },
            {
              text: "Test rejection scenarios for account requests.⁠⁠",
            },
          ],
          className: "ml-4 mt-4 text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },

    {
      type: "image",
      id: "prune8",
      src: "/images/prune/image8.png",
      alt: "",
      width: 1400,
      height: 900,
    },

    {
      type: "custom",
      id: "prune-divider6",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**USER MANAGEMENT */
    {
      type: "text",
      id: "user-management",
      title: "User Management (Roles and permission)",
      lines: [
        {
          parts: [
            { text: "The Challenge:", bold: true, color: "text-foreground" },
          ],
        },
        {
          parts: [
            {
              text: "In a financial SaaS environment, granular control over user access is paramount for security, compliance, and efficient team collaboration. The primary challenge was to design an intuitive interface that allows administrators to easily create custom roles and assign specific permissions across various API functionalities without overwhelming complexity.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "My Approach & Key Contributions:",
              bold: true,
              color: "text-foreground",
            },
          ],
        },
        {
          parts: [
            {
              text: "I designed the user interface for the Prune payment API's User Management module, focusing on clarity, control, and ease of administration for business users.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/prune/image9.png",
            alt: "",
            width: 1400,
            height: 900,
            className: "mt-8",
          }),
        },
        {
          parts: [
            {
              text: "The designed User Management and Roles & Permissions interface provides a robust and user-friendly solution for organizations to control and secure access within the Prunepayment API. By simplifying the creation and assignment of roles with granular permissions, I contributed to a more secure, compliant, and efficiently managed financial platform.",
            },
          ],
          className: "mt-8 text-xs text-(--color-muted) sm:text-sm",
        },
        {
          content: createElement(CaseStudyImage, {
            src: "/images/prune/image10.png",
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
      id: "prune-divider7",
      content: createElement("div", {
        className:
          "my-10 h-[0.5px] w-full bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)",
      }),
    },

    /**KEY LEARNINGS */
    {
      type: "text",
      id: "prune-learnings",
      title: "Key Learnings",
      lines: [
        {
          parts: [
            {
              text: "Designing the Prune payment API platform was an opportunity to translate complex financial operations into a seamless, intuitive user experience. I focused on building a scalable, developer-friendly interface that simplifies everything from account creation and transaction monitoring to API key management and web-hook configuration.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
        {
          parts: [
            {
              text: "By aligning design with technical functionality, I created a dashboard that empowers both developers and business users to confidently manage their financial workflows. This project reflects my ability to design for clarity, efficiency, and real-world usability in the fintech space.",
            },
          ],
          className: "text-xs text-(--color-muted) sm:text-sm",
        },
      ],
    },
  ],
};
