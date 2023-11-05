import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ne Zaman Askeriyeye Gidiyorum?",
  description:
    "The answer to the popular question asked to me by everyone everyday.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*<!-- Google tag (gtag.js) -->*/}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2MTL12V5KQ"
          strategy="afterInteractive"
        ></Script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2MTL12V5KQ');`}
        </Script>
      </head>

      <body className={inter.className}>
        {children}

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
