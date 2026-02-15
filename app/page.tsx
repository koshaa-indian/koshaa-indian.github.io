import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BannerPopover } from "@/components/banner-popover";
import contentData from "@/data/content.json";

export default function Home() {
  return (
    <>
      <BannerPopover banner={contentData.banner} />
      <Header />
      <main id="main-content">
        <Hero restaurant={contentData.restaurant} />
        <Testimonials
          testimonials={contentData.testimonials}
          googleReviews={
            (contentData as { googleReviews?: { url: string; label: string } }).googleReviews ?? null
          }
        />
        <Contact restaurant={contentData.restaurant} />
      </main>
      <Footer restaurant={contentData.restaurant} footer={contentData.footer} />
    </>
  );
}
