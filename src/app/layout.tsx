import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { PageProvider } from "@/contexts/pageContext";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "ORg4AjUWIQA/Gnt2U1hhQlJBfVZdWHxLflFyVWVTf1l6d1BWESFaRnZdRl1rSXhSdkVmWXpac3xc"
);

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FMSCA Viewer",
  description: "Spotter ai Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PageProvider>
        <body className={`${montserrat.className} bg-gray-200 py-8 `}>
          {children}
        </body>
      </PageProvider>
    </html>
  );
}
