import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { DotPattern } from "@/components/ui/dot-pattern";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.stanchiqa.com";

const description =
  "I help startups and enterprise businesses turn complex ideas into simple, scalable digital products. Product Designer and Design Engineer portfolio spanning AI, B2B SaaS, fintech, digital banking, lending, and healthcare.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Stanley Chukwuma (Stanchiqa) — Product Designer & Design Engineer",
    template: "%s | Stanchiqa",
  },
  description,
  applicationName: "Stanchiqa",
  keywords: [
    "Stanley Chukwuma",
    "Stanchiqa",
    "Product Designer",
    "Design Engineer",
    "Product Design Portfolio",
    "UI/UX Design",
    "Digital Product Design",
    "Fintech Product Design",
    "Design Engineering",
    "User Experience Design",
  ],
  authors: [{ name: "Stanley Chukwuma", url: siteUrl }],
  creator: "Stanley Chukwuma",
  publisher: "Stanley Chukwuma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Stanchiqa",
    title: "Stanley Chukwuma (Stanchiqa) — Product Designer & Design Engineer",
    description,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanley Chukwuma (Stanchiqa) — Product Designer & Design Engineer",
    description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="isolate min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stanley Chukwuma",
              url: siteUrl,
              jobTitle: "Product Designer & Design Engineer",
              description,
              image: `${siteUrl}/images/home/profile-image.webp`,
              sameAs: [
                "https://github.com/Chiqa-Design",
                "https://x.com/chiqastanley",
                "https://www.linkedin.com/in/stanley-chukwuma-89a9b8202/",
                "https://medium.com/@stanchiqa",
              ],
            }),
          }}
        />
        <ThemeProvider>
          <DotPattern
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[-1]"
            dotColor="color-mix(in oklab, var(--muted-foreground) 18%, transparent)"
            dotSize={1}
            gap={28}
            interactive={false}
            speed={0}
          />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
