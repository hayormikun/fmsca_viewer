import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageProvider } from "@/contexts/pageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FMSCA Viewer",
  description: "Mk400 Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PageProvider>
        <body className={`${inter.className} pt-8 `}>{children}</body>
      </PageProvider>
    </html>
  );
}
