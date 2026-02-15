import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
        {/* Page header */}
        <section className="border-b border-border/50 bg-muted/20 py-8 md:py-10">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
                {pages.menu.title}
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                {pages.menu.subtitle}
              </p>
              <Button asChild className="mt-5" size="lg">
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Menu
                </a>
              </Button>
            </div>
          </div>
        </section>

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
            <p className="mt-4 flex justify-center text-sm text-muted-foreground">
              Can&apos;t view the menu?{"  "}
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
        </section>
      </main>
      <Footer restaurant={restaurant} footer={contentData.footer} />
    </>
  );
}
