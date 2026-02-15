import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import contentData from "@/data/content.json";

export const metadata = {
  title: `${contentData.pages.about.title} | ${contentData.restaurant.name}`,
  description: contentData.seo.description,
};

type AboutContent = {
  pages: {
    about: {
      title: string;
      subtitle: string;
      restaurant: {
        heading: string;
        intro: string;
        koshaaMeaning: {
          intro: string;
          layers: string[];
          philosophy: string;
        };
        menuNote: string;
        image: string;
        imageAlt: string;
      };
      chef: {
        heading: string;
        name: string;
        role: string;
        image: string;
        imageAlt: string;
        intro: string;
        career: string;
        education: string;
      };
    };
  };
  restaurant: { name: string };
};

export default function AboutPage() {
  const data = contentData as AboutContent;
  const { restaurant, pages } = data;
  const about = pages.about;
  const { restaurant: restaurantSection, chef: chefSection } = about;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <PageHeader title={about.title} subtitle={about.subtitle} />

        {/* About the Restaurant */}
        <section className="py-16 md:py-24" aria-labelledby="about-restaurant-heading">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
                <div className="order-2 md:order-1">
                  <SectionHeading
                    id="about-restaurant-heading"
                    title={restaurantSection.heading}
                  />
                  <p className="-mt-2 mb-6 text-muted-foreground leading-relaxed">
                    {restaurantSection.intro}
                  </p>
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
                    <p className="mb-4 text-foreground/95 font-medium">
                      {restaurantSection.koshaaMeaning.intro}
                    </p>
                    <ul className="mb-4 flex flex-wrap gap-2 text-sm font-medium text-primary">
                      {restaurantSection.koshaaMeaning.layers.map((layer, i) => (
                        <li
                          key={layer}
                          className="rounded-full bg-primary/15 px-3 py-1"
                        >
                          {layer}
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {restaurantSection.koshaaMeaning.philosophy}
                    </p>
                  </div>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {restaurantSection.menuNote}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={restaurantSection.image}
                      alt={restaurantSection.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Chef & Founder */}
        <section className="border-t border-border/60 bg-muted/20 py-16 md:py-24" aria-labelledby="about-chef-heading">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
                <div className="relative aspect-[3/4] max-h-[420px] overflow-hidden rounded-xl bg-muted md:max-h-none">
                  <Image
                    src={chefSection.image}
                    alt={chefSection.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <SectionHeading
                    id="about-chef-heading"
                    title={chefSection.heading}
                  />
                  <p className="-mt-6 mb-6 text-lg font-medium text-foreground">
                    {chefSection.name} — {chefSection.role}
                  </p>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {chefSection.intro}
                  </p>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {chefSection.career}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {chefSection.education}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer restaurant={contentData.restaurant} footer={contentData.footer} />
    </>
  );
}
