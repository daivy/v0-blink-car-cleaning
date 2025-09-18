import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-xl font-bold text-primary">Blink</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Onze pakketten
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            Over ons
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
            Gallerij
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Bel Nu
          </Button>
          <Button size="sm">Boek Online</Button>
        </div>
      </div>
    </header>
  )
}
