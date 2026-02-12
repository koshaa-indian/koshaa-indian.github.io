import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fb923c" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
