import { Button } from "@/components/ui/button"
import { Sparkles, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-10 bg-[rgba(0,0,0,0.782608695652174)] opacity-100"></div>
      <div className="absolute inset-0">
        <img src="/luxury-car-interior-dashboard-steering-wheel.jpg" alt="Luxury car interior" className="h-full w-full object-cover" />
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center space-x-1 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground bg-sidebar">
              <Sparkles className="h-4 w-4" />
              <span>Premium Autodetailing</span>
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl text-white">
            <span className="block">BLINK</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-primary mt-2 font-medium">CAR CLEANING</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 text-pretty">Laat je auto Blinken!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              Bekijk Pakketten
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
            >
              Gratis Offerte
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-6 text-sm text-background">
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-background">4.9/5 sterren</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>500+ tevreden klanten</span>
            <div className="h-4 w-px bg-border" />
            <span>Gratis ophaal & breng service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
