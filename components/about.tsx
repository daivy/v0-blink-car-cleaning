import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Kwaliteitsgarantie",
    description: "Wij staan 100% achter ons werk met uitgebreide garanties op al onze diensten.",
  },
  {
    icon: Clock,
    title: "Flexibele Service",
    description: "Ophaal- en brengservice beschikbaar. Wij komen naar jou toe wanneer het uitkomt.",
  },
  {
    icon: Award,
    title: "Gecertificeerde Professionals",
    description: "Ons team bestaat uit ervaren detailers met jarenlange expertise.",
  },
  {
    icon: Users,
    title: "500+ Tevreden Klanten",
    description: "Sluit je aan bij honderden klanten die hun auto laten blinken bij Blink.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Waarom Kiezen Voor Blink?</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Met jaren ervaring in autodetailing zorgen wij ervoor dat jouw auto er perfect uitziet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-primary/5 p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Onze Missie</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Bij Blink geloven we dat elke auto verdient om te blinken. Met onze professionele detailing services,
              hoogwaardige producten en persoonlijke aandacht zorgen we ervoor dat jouw auto er niet alleen schoon
              uitziet, maar ook optimaal beschermd is tegen de elementen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
