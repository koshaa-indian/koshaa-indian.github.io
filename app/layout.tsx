import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import contentData from "@/data/content.json";

export const metadata: Metadata = {
  title: contentData.seo.title,
  description: contentData.seo.description,
  keywords: contentData.seo.keywords,
  openGraph: {
    title: contentData.seo.title,
    description: contentData.seo.description,
    type: "website",
    locale: "en_CA",
    siteName: contentData.restaurant.name,
  },
  twitter: {
    card: "summary_large_image",
    title: contentData.seo.title,
    description: contentData.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeName = (contentData as { theme?: { name?: string } }).theme?.name ?? "Koshaa";

  return (
    <html lang="en" className="theme-koshaa" data-theme-name={themeName} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c9a227" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
