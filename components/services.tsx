import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sparkles, Crown, Zap } from "lucide-react"

const services = [
  {
    id: "basis",
    title: "Basis Blink(en)",
    price: "84,99",
    priceExVat: "70,24",
    icon: Zap,
    description: "Perfecte basis reiniging voor je auto",
    features: [
      "Uitgebreide buitenwas",
      "Velgen reiniging",
      "Interieur stofzuigen",
      "Ramen binnen en buiten",
      "Dashboard behandeling",
    ],
    popular: false,
    color: "bg-card",
  },
  {
    id: "deluxe",
    title: "Deluxe Blink(en)",
    price: "159,99",
    priceExVat: "132,22",
    icon: Sparkles,
    description: "Uitgebreide behandeling met extra aandacht",
    features: [
      "Alles van Basis pakket",
      "Wax behandeling",
      "Interieur reiniging",
      "Leder conditionering",
      "Motorruimte reiniging",
      "Banden glans behandeling",
    ],
    popular: true,
    color: "bg-primary/5 border-primary/20",
  },
  {
    id: "premium",
    title: "Premium Blink(en)",
    price: "259,99",
    priceExVat: "214,87",
    icon: Crown,
    description: "De ultieme luxe behandeling",
    features: [
      "Alles van Deluxe pakket",
      "Paint correction",
      "Premium wax coating",
      "Interieur detailing",
      "Chroom behandeling",
      "6 maanden garantie",
    ],
    popular: false,
    color: "bg-accent/5 border-accent/20",
  },
  {
    id: "polish-1",
    title: "1-Staps Polijsten",
    price: "199,99",
    priceExVat: "165,28",
    icon: Sparkles,
    description: "Professionele polijstbehandeling",
    features: ["Machine polijsten", "Krasverwijdering", "Glans herstel", "Protective coating", "Velgen polijsten"],
    popular: false,
    color: "bg-card",
  },
  {
    id: "polish-2",
    title: "2-Staps Polijsten",
    price: "349,99",
    priceExVat: "289,25",
    icon: Sparkles,
    description: "Geavanceerde polijstbehandeling",
    features: [
      "Compound behandeling",
      "Finish polijsten",
      "Swirl mark verwijdering",
      "Premium coating",
      "Detailing van alle onderdelen",
    ],
    popular: false,
    color: "bg-card",
  },
  {
    id: "ceramic",
    title: "3-Staps Keramisch Coaten",
    price: "1.149,99",
    priceExVat: "950,40",
    icon: Crown,
    description: "De ultieme bescherming voor je auto",
    features: [
      "Volledige paint correction",
      "Keramische coating applicatie",
      "5 jaar garantie",
      "Hydrofobe eigenschappen",
      "UV bescherming",
      "Onderhoudskit inbegrepen",
    ],
    popular: false,
    color: "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance text-primary mb-4">
            Blink pakketten
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Kies het pakket dat perfect bij jouw auto en budget past. Alle prijzen zijn inclusief BTW.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.id}
                className={`relative ${service.color} transition-all duration-300 hover:shadow-lg hover:scale-105 mx-auto w-full max-w-sm`}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Populair
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-4">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">€ {service.price}</span>
                    <p className="text-sm text-muted-foreground">€ {service.priceExVat} ex. btw</p>
                  </div>

                  <ul className="space-y-2 text-sm text-left">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    Bekijk pakket
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
