"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Web3Forms requires access_key. Add your key via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY or set it here.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    formData.set("access_key", accessKey)

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      })

      const result = await response.json().catch(() => ({ success: false }))

      if (result.success) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Reservation error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm ring-1 ring-border/50">
        {/* Primary accent bar */}
        <div className="h-1 w-full bg-primary" aria-hidden />

        <div className="p-6 sm:p-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Reserve a Table
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              We&apos;ll confirm your reservation by email or phone.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                aria-required="true"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                aria-required="true"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(XXX) XXX-XXXX"
                aria-required="true"
                className="mt-1.5"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  aria-required="true"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="time">Time *</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  required
                  aria-required="true"
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="guests">Number of Guests *</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min={1}
                max={20}
                required
                placeholder="2"
                aria-required="true"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="message">Special Requests (optional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Dietary restrictions, allergies, or special occasions?"
                rows={3}
                className="mt-1.5"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Submit Reservation"}
            </Button>

            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="min-h-[2.5rem]"
            >
              {submitStatus === "success" && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Thank you! Your reservation request has been sent. We&apos;ll contact you shortly to confirm.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                  Something went wrong. Please try again or call us directly to reserve.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
