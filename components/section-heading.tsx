import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  id?: string
  label?: string
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  id,
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-10",
        align === "center" && "flex flex-col items-center text-center",
        className
      )}
    >
      {label && (
        <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary">
          {label}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "text-2xl font-semibold tracking-tight text-primary md:text-3xl",
          align === "center" && "mx-auto max-w-2xl"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-2 text-sm text-muted-foreground sm:text-base md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
