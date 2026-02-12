import contentData from "@/data/content.json";

export function StructuredData() {
  const { restaurant } = contentData;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.description,
    telephone: restaurant.phone,
    email: restaurant.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.province,
      postalCode: restaurant.address.postalCode,
      addressCountry: restaurant.address.country,
    },
    openingHoursSpecification: restaurant.hours.map((hour) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hour.day,
      opens: hour.hours.split(" - ")[0],
      closes: hour.hours.split(" - ")[1],
    })),
    servesCuisine: "Indian",
    priceRange: "$$",
    acceptsReservations: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
