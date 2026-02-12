interface AboutProps {
  restaurant: {
    name: string
    description: string
  }
}

export function About({ restaurant }: AboutProps) {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">About {restaurant.name}</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            At {restaurant.name}, we believe in the power of authentic flavors and traditional cooking methods. 
            Our chefs bring decades of experience, using family recipes passed down through generations to create 
            dishes that transport you to the heart of India.
          </p>
          <p className="text-lg text-muted-foreground">
            Every dish is prepared fresh daily using premium ingredients and authentic spices. We take pride in 
            offering a dining experience that honors the rich culinary heritage of India while embracing modern 
            presentation and service standards.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 text-4xl">🌶️</div>
            <h3 className="mb-2 text-xl font-semibold">Authentic Spices</h3>
            <p className="text-muted-foreground">
              Imported directly from India for the most authentic flavors
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 text-4xl">👨‍🍳</div>
            <h3 className="mb-2 text-xl font-semibold">Expert Chefs</h3>
            <p className="text-muted-foreground">
              Decades of experience in traditional Indian cooking
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 text-4xl">🥘</div>
            <h3 className="mb-2 text-xl font-semibold">Fresh Daily</h3>
            <p className="text-muted-foreground">
              All dishes prepared fresh with premium ingredients
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
