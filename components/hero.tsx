"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToReferral = () => {
    const element = document.querySelector("#referral")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-shape absolute top-20 left-10 w-32 h-32 rounded-full bg-sage/20 blur-2xl" />
        <div className="float-shape absolute top-40 right-20 w-40 h-40 rounded-full bg-teal/10 blur-3xl" />
        <div className="float-shape absolute bottom-32 left-1/4 w-36 h-36 rounded-full bg-sage/15 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Healing the Mind
            <br />
            Nourishing the Soul
            <br />
            Restoring Wholeness
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Compassionate, faith-based behavioral health care that integrates holistic wellness and nutritional
            psychiatry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              onClick={scrollToReferral}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg pulse-on-hover"
            >
              Make a Referral
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#about")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="border-primary text-primary hover:bg-primary/10 hover-glow"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  )
}
