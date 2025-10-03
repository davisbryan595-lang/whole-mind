"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Heart, Leaf, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 space-y-6 hover-lift">
              <div className="w-full h-64 rounded-xl overflow-hidden mb-8">
                <img
                  src="/peaceful-meditation-nature-wellness-holistic-healt.jpg"
                  alt="Peaceful wellness environment"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">About Us</h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p className="text-pretty">
                  At <strong>WholeMind Behavioral Health & Wellness</strong>, we believe that true healing encompasses
                  the mind, body, and spirit. Our mission is to provide compassionate, comprehensive care that addresses
                  the whole person.
                </p>
                <p className="text-pretty">
                  We integrate evidence-based therapeutic approaches with faith-based principles and nutritional
                  psychiatry to create personalized treatment plans that honor your unique journey toward wellness.
                </p>
                <p className="text-pretty">
                  Our holistic approach recognizes that mental health is deeply connected to physical health, spiritual
                  well-being, and lifestyle choices. We partner with you to restore balance, build resilience, and
                  cultivate lasting wholeness.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 glass-dark rounded-xl hover-glow">
                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl text-primary mb-2">Faith-Based</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrating spiritual principles with clinical excellence
                    </p>
                  </div>
                  <div className="text-center p-6 glass-dark rounded-xl hover-glow">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl text-primary mb-2">Holistic</h3>
                    <p className="text-sm text-muted-foreground">Treating the whole person—mind, body, and spirit</p>
                  </div>
                  <div className="text-center p-6 glass-dark rounded-xl hover-glow">
                    <Leaf className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl text-primary mb-2">Nutritional</h3>
                    <p className="text-sm text-muted-foreground">Leveraging nutrition to support mental wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
