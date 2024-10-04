import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "src/styles/globals.css";
import { SideBar } from "@/components/organisms/SideBar";
import AppBar from "@/components/organisms/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <AppBar />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
