import type { ReactNode } from "react";
import { Footer } from "@/components/footer";

type BottomNavigationLayoutProps = {
  children: ReactNode;
};

export default function BottomNavigationLayout({
  children,
}: BottomNavigationLayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
