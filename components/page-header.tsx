import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeader({
  title,
  subtitle,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "border-b border-border/50 bg-muted/20 py-8 md:py-10",
        className
      )}
    >
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-5">{children}</div>}
        </div>
      </div>
    </section>
  )
}
