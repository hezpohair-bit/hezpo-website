import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hezpo Malaysia Hair Care & Hair Styling Products",
    template: "%s | Hezpo"
  },
  description: site.description,
  keywords: [
    "Hezpo",
    "hair spray Malaysia",
    "hair clay Malaysia",
    "hair styling products Malaysia",
    "salon hair products Malaysia",
    "hair care wholesale Malaysia"
  ],
  openGraph: {
    title: "Hezpo Malaysia Hair Care & Hair Styling Products",
    description: site.description,
    url: site.url,
    siteName: "Hezpo",
    locale: "en_MY",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
