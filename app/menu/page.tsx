import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import contentData from "@/data/content.json";

export const metadata = {
  title: `${contentData.pages.menu.title} | ${contentData.restaurant.name}`,
  description: contentData.seo.description,
};

export default function MenuPage() {
  const { restaurant, menu, pages } = contentData;
  const pdfUrl = menu.pdfUrl ?? "/menu.pdf";

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <PageHeader
          title={pages.menu.title}
          subtitle={pages.menu.subtitle}
        />

        <section className="flex justify-center py-12">
          <div className="container w-full px-4">
            <div className="flex w-full justify-center">
              <div className="w-full max-w-4xl overflow-hidden rounded-lg border bg-muted/30 shadow-sm">
                <iframe
                  src={`${pdfUrl}#toolbar=1`}
                  title={`${restaurant.name} menu`}
                  className="h-[calc(100vh-12rem)] w-full min-h-[600px]"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button asChild size="default">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Menu
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Can&apos;t view the menu?{" "}
                <Link
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Open in new tab
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer restaurant={restaurant} footer={contentData.footer} />
    </>
  );
}
