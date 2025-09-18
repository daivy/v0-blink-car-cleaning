import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SpecialOffer() {
  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <Card className="bg-primary border-0 shadow-none">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-white mb-4">Speciale aanvraag?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Heb je een speciale wens? Bijvoorbeeld een oldtimer, motorfiets of boot? Neem contact met ons op voor een
              persoonlijke offerte. Wij kijken graag samen naar de mogelijkheden!
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              Neem contact op
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
