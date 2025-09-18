import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Showcase() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance text-primary mb-4">
            Dit hebben we al laten Blinken!
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Bekijk wat onze professionele detailing services kunnen betekenen voor jouw auto. Elke auto verdient de
            Blink behandeling!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/luxury-black-suv-parked-in-driveway.jpg"
                alt="Glimmende zwarte SUV na Blink behandeling"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Gallerij
          </Button>
        </div>
      </div>
    </section>
  )
}
