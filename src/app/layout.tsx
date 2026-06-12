import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
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
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Script id="metricool-tracking" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
              c=document.createElement("script");
              c.type="text/javascript";
              c.src="https://tracker.metricool.com/resources/be.js";
              c.onreadystatechange=a;
              c.onload=a;
              b.appendChild(c);
            }
            loadScript(function(){
              beTracker.t({hash:"ed852a430f7ae487df737e1aabe2e5c7d"});
            });
          `}
        </Script>
      </body>
    </html>
  );
}
