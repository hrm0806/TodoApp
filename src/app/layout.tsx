import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "src/styles/globals.css";
import classes from "./layout.module.scss";
import { SideBar } from "@/components/organisms/SideBar";
import AppBar from "@/components/organisms/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={classes.backgroundColor}>
        <AppBar />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
