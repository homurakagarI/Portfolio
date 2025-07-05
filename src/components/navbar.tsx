import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Menu } from "lucide-react"

export function Navbar() {
  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 w-full items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold text-xl md:text-2xl sm:inline-block">Portfolio</span>
          </a>
          <nav className="flex items-center space-x-6 text-lg md:text-xl font-medium">
            <a
              className="transition-colors hover:text-foreground/80"
              href="#about"
              onClick={e => handleSmoothScroll(e, "about")}
            >About</a>
            <a
              className="transition-colors hover:text-foreground/80"
              href="#education"
              onClick={e => handleSmoothScroll(e, "education")}
            >Education</a>
            <a
              className="transition-colors hover:text-foreground/80"
              href="#projects"
              onClick={e => handleSmoothScroll(e, "projects")}
            >Projects</a>
            <a
              className="transition-colors hover:text-foreground/80"
              href="#skills"
              onClick={e => handleSmoothScroll(e, "skills")}
            >Skills</a>
            <a
              className="transition-colors hover:text-foreground/80"
              href="#contact"
              onClick={e => handleSmoothScroll(e, "contact")}
            >Contact</a>
          </nav>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>
              <a href="#about" onClick={e => handleSmoothScroll(e, "about")}>About</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#education" onClick={e => handleSmoothScroll(e, "education")}>Education</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#projects" onClick={e => handleSmoothScroll(e, "projects")}>Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#skills" onClick={e => handleSmoothScroll(e, "skills")}>Skills</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contact" onClick={e => handleSmoothScroll(e, "contact")}>Contact</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}