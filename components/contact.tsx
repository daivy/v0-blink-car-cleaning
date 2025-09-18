import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 mx-auto">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Neem Contact Op</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Klaar om je auto te laten blinken? Neem contact met ons op voor een afspraak of offerte.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telefoon</span>
                </CardTitle>
                <CardDescription>Bel ons voor directe service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+31 6 12 34 56 78</p>
                <p className="text-sm text-muted-foreground">Ma-Za: 8:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email</span>
                </CardTitle>
                <CardDescription>Stuur ons een bericht</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@blink-autodetailing.nl</p>
                <p className="text-sm text-muted-foreground">Reactie binnen 24 uur</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Locatie</span>
                </CardTitle>
                <CardDescription>Bezoek onze studio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Autostraat 123</p>
                <p className="text-sm text-muted-foreground">1234 AB Amsterdam</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Openingstijden</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="flex justify-between">
                  <span>Maandag - Vrijdag</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaterdag</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Zondag</span>
                  <span>Gesloten</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Vraag een Offerte Aan</CardTitle>
              <CardDescription>Vul het formulier in en we nemen binnen 24 uur contact met je op.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Voornaam</Label>
                  <Input id="firstName" placeholder="Je voornaam" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Achternaam</Label>
                  <Input id="lastName" placeholder="Je achternaam" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="je@email.nl" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefoon</Label>
                <Input id="phone" type="tel" placeholder="+31 6 12 34 56 78" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Gewenste Service</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Selecteer een pakket</option>
                  <option value="basis">Basis Blink(en) - €84,99</option>
                  <option value="deluxe">Deluxe Blink(en) - €159,99</option>
                  <option value="premium">Premium Blink(en) - €259,99</option>
                  <option value="polish-1">1-Staps Polijsten - €199,99</option>
                  <option value="polish-2">2-Staps Polijsten - €349,99</option>
                  <option value="ceramic">3-Staps Keramisch Coaten - €1.149,99</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea
                  id="message"
                  placeholder="Vertel ons meer over je auto en wensen..."
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full" size="lg">
                Verstuur Aanvraag
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
