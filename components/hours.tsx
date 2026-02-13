import { Clock } from "lucide-react"

interface Hour {
  day: string
  hours: string
}

interface HoursProps {
  hours: Hour[]
}

export function Hours({ hours }: HoursProps) {
  return (
    <div className="rounded-lg bg-background p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        <h3 className="text-xl font-semibold">Hours of Operation</h3>
      </div>
      <div className="space-y-2">
        {hours.map((item) => (
          <div
            key={item.day}
            className="flex justify-between border-b border-muted pb-2 last:border-0"
          >
            <span className="font-medium">{item.day}</span>
            <span className="text-muted-foreground">{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
