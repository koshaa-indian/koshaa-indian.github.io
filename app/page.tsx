import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
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
      </main>
      <Footer restaurant={contentData.restaurant} footer={contentData.footer} />
    </>
  );
}
