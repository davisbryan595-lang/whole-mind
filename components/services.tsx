"use client"

import { Brain, Pill, Apple, Heart, Users, Video } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const services = [
  {
    icon: Brain,
    title: "Counseling & Psychotherapy",
    description: "Individual, couples, and family therapy using evidence-based approaches tailored to your needs.",
    image: "/therapy-counseling-session.jpg",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Comprehensive psychiatric evaluation and medication management with ongoing monitoring and support.",
    image: "/medication-healthcare-professional.jpg",
  },
  {
    icon: Apple,
    title: "Nutritional Psychiatry",
    description:
      "Integrating nutrition science with mental health care to optimize brain health and emotional well-being.",
    image: "/healthy-nutrition-brain-food.jpg",
  },
  {
    icon: Heart,
    title: "Faith-Integrated Therapy",
    description:
      "Therapy that honors your spiritual beliefs and integrates faith-based principles into your healing journey.",
    image: "/spiritual-faith-prayer-meditation.jpg",
  },
  {
    icon: Users,
    title: "Behavioral Therapy",
    description: "Evidence-based behavioral interventions including CBT, DBT, and other therapeutic modalities.",
    image: "/group-therapy-support.jpg",
  },
  {
    icon: Video,
    title: "Telehealth Consultations",
    description: "Convenient, secure virtual appointments that bring quality care to you wherever you are.",
    image: "/telehealth-video-consultation.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive care designed to support your journey to wholeness
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="glass rounded-xl overflow-hidden hover-lift group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
