"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      guests: formData.get("guests"),
      message: formData.get("message"),
    }

    try {
      // TODO: Replace with actual Cloudflare Worker URL
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        e.currentTarget.reset()
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
    <div className="rounded-lg bg-background p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold">Make a Reservation</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            aria-required="true"
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
            />
          </div>
        </div>

        <div>
          <Label htmlFor="guests">Number of Guests *</Label>
          <Input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="20"
            required
            placeholder="2"
            aria-required="true"
          />
        </div>

        <div>
          <Label htmlFor="message">Special Requests (Optional)</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Any dietary restrictions or special occasions?"
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Reservation"}
        </Button>

        {submitStatus === "success" && (
          <div className="rounded-md bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
            Reservation request submitted successfully! We&apos;ll contact you shortly.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-400">
            There was an error submitting your reservation. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  )
}
