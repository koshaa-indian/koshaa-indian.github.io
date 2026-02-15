import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/contact";
import contentData from "@/data/content.json";

export const metadata = {
  title: `${contentData.pages.contact.title} | ${contentData.restaurant.name}`,
  description: contentData.seo.description,
};

export default function ContactPage() {
  const { restaurant, pages } = contentData;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <PageHeader
          title={pages.contact.title}
          subtitle={pages.contact.subtitle}
        />
        <Contact restaurant={contentData.restaurant} showHeading={false} />
      </main>
      <Footer restaurant={restaurant} footer={contentData.footer} />
    </>
  );
}
