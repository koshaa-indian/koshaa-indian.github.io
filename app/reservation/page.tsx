import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
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
        <PageHeader
          title={pages.reservation.title}
          subtitle={pages.reservation.subtitle}
        />

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
