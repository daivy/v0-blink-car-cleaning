export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold text-primary">Blink</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Laat je auto Blinken! Premium autodetailing services voor de perfecte glans.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Basis Blink(en)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Deluxe Blink(en)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Premium Blink(en)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Polijsten
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Keramisch Coaten
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Garantie
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+31 6 12 34 56 78</li>
              <li>info@blink-autodetailing.nl</li>
              <li>Autostraat 123</li>
              <li>1234 AB Amsterdam</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Blink Autodetailing. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
