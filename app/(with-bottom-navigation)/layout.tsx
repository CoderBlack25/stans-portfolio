import type { ReactNode } from "react";
import { BottomNavigation } from "@/components/bottom-navigation";

type BottomNavigationLayoutProps = {
  children: ReactNode;
};

export default function BottomNavigationLayout({
  children,
}: BottomNavigationLayoutProps) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}