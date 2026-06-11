import type { Metadata } from "next";
import { site } from "@/lib/site-data";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_MY",
      type: "website"
    }
  };
}
