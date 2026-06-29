import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sell Out Faster | wowdesign",
  description:
    "Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who's ready to buy.",
  metadataBase: new URL("https://www.wowdesign.io"),
  openGraph: {
    title: "Sell Out Faster | wowdesign",
    description:
      "Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who's ready to buy.",
    url: "https://www.wowdesign.io",
    siteName: "wowdesign",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Out Faster | wowdesign",
    description:
      "Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who's ready to buy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
