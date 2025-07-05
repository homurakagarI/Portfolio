import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 pt-24 pb-8 md:pt-32 w-full px-4 md:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Full Stack Developer
        </h1>
        <p className="max-w-[900px] text-center text-lg text-muted-foreground sm:text-xl">
          Building innovative web solutions with modern technologies.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 lg:py-32 w-full px-4 md:px-8">
        <div className="w-full flex flex-col items-start gap-4 md:items-center md:text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I am a passionate developer with experience in building modern web applications.
            My expertise includes React, TypeScript, Node.js, and various modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-24 lg:py-32 w-full px-4 md:px-8">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {/* Add your project cards here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50 w-full px-4 md:px-8">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Skills & Technologies
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, TypeScript, TailwindCSS</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Backend</h3>
              <p className="text-sm text-muted-foreground">Node.js, Express, REST APIs</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Database</h3>
              <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Tools</h3>
              <p className="text-sm text-muted-foreground">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-12 md:py-24 lg:py-32 w-full px-4 md:px-8">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
            {/* Example certification cards */}
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Certified React Developer</h3>
              <p className="text-sm text-muted-foreground">React Institute · 2023</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">AWS Certified Solutions Architect</h3>
              <p className="text-sm text-muted-foreground">Amazon Web Services · 2022</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Full Stack Web Development</h3>
              <p className="text-sm text-muted-foreground">Coursera · 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 lg:py-32 w-full px-4 md:px-8">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            I'm always open to new opportunities and collaborations.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:your.email@example.com">
              Send me an email
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}