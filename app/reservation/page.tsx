import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReservationForm } from "@/components/reservation-form";
import contentData from "@/data/content.json";

export const metadata = {
  title: `${contentData.pages.reservation.title} | ${contentData.restaurant.name}`,
  description: contentData.seo.description,
};

export default function ReservationPage() {
  const { restaurant, pages } = contentData;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        {/* Page header */}
        <section className="border-b border-border/50 bg-muted/20 py-8 md:py-10">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
                {pages.reservation.title}
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                {pages.reservation.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-12">
          <div className="container w-full px-4">
            <div className="flex w-full flex-col items-center">
              <ReservationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer restaurant={restaurant} footer={contentData.footer} />
    </>
  );
}
