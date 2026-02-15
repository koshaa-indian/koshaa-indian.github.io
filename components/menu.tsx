import { Leaf, Flame } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  vegetarian?: boolean
  vegan?: boolean
  spicy?: number
  popular?: boolean
}

interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

interface MenuProps {
  menu: {
    categories: MenuCategory[]
  }
}

function SpicyIndicator({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Spice level ${level} out of 3`}>
      {[...Array(3)].map((_, i) => (
        <Flame
          key={i}
          className={`h-3 w-3 ${
            i < level ? "fill-red-500 text-red-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function Menu({ menu }: MenuProps) {
  return (
    <section id="menu" className="bg-muted/50 py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Menu</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our carefully crafted menu featuring authentic Indian dishes made with love and tradition
          </p>
        </div>

        <div className="space-y-12">
          {menu.categories.map((category) => (
            <div key={category.id} className="rounded-lg bg-background p-6 shadow-sm">
              <h3 className="mb-6 border-b pb-3 text-2xl font-semibold">
                {category.name}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{item.name}</h4>
                          {item.popular && (
                            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <div className="mt-2 flex items-center gap-3">
                          {item.vegetarian && (
                            <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                              <Leaf className="h-3 w-3" />
                              <span>Vegetarian</span>
                            </div>
                          )}
                          {item.vegan && (
                            <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                              <Leaf className="h-3 w-3 fill-current" />
                              <span>Vegan</span>
                            </div>
                          )}
                          {item.spicy && item.spicy > 0 && (
                            <SpicyIndicator level={item.spicy} />
                          )}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 font-semibold text-primary">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
