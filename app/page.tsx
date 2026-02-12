import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import contentData from "@/data/content.json";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero restaurant={contentData.restaurant} />
        <About restaurant={contentData.restaurant} />
        <Menu menu={contentData.menu} />
        <Gallery gallery={contentData.gallery} />
        <Testimonials testimonials={contentData.testimonials} />
        <Contact restaurant={contentData.restaurant} />
      </main>
      <Footer restaurant={contentData.restaurant} />
    </>
  );
}
