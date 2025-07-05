import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react"
import { ProjectCard } from "@/components/ProjectCard"
import type { Project } from "@/components/ProjectCard"

// Hook for reveal on scroll
function useRevealOnScroll(delay = 0) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])

  return [ref, visible] as const
}

export default function Home() {
  // Add your featured projects here
  const projects: Project[] = [
    {
      title: "Data-Driven Management System with Geo-Tagging and Cloud Analytics for KM Foundation",
      description: "This capstone project introduces an innovative Data-Driven Management System designed specifically for KM Foundation.",
      link: "https://github.com/axiomproject/kkmk",
      thumbnail: "\KMFI image.jpg",
      screenshots: [
        "\KMFI image.jpg",
      ]
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce web app using Next.js and Stripe.",
      link: "https://github.com/homurakagarI/ecommerce",
      thumbnail: "https://placehold.co/400x200?text=E-commerce",
      screenshots: [
        "https://placehold.co/800x400?text=E-commerce+Screenshot+1"
      ]
    },
    // Add more projects as needed
  ]

  // Popup state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Certificate modal state
  const [selectedCert, setSelectedCert] = useState<{ src: string; alt: string } | null>(null)

  // Popup animation state
  const [showingProjectPopup, setShowingProjectPopup] = useState(false)
  const [showingCertPopup, setShowingCertPopup] = useState(false)

  const [heroRef, heroVisible] = useRevealOnScroll(0)
  const [aboutRef, aboutVisible] = useRevealOnScroll(100)
  const [educationRef, educationVisible] = useRevealOnScroll(150)
  const [projectsRef, projectsVisible] = useRevealOnScroll(200)
  const [skillsRef, skillsVisible] = useRevealOnScroll(300)
  const [certsRef, certsVisible] = useRevealOnScroll(400)
  const [contactRef, contactVisible] = useRevealOnScroll(500)

  // Open project popup with animation
  function handleViewProject(project: Project) {
    setSelectedProject(project)
    setShowingProjectPopup(true)
  }

  // Close project popup with fade-out animation
  function handleCloseProject() {
    setShowingProjectPopup(false)
    setTimeout(() => setSelectedProject(null), 200)
  }

  // Open cert popup with animation
  function handleViewCert(cert: { src: string; alt: string }) {
    setSelectedCert(cert)
    setShowingCertPopup(true)
  }

  // Close cert popup with fade-out animation
  function handleCloseCert() {
    setShowingCertPopup(false)
    setTimeout(() => setSelectedCert(null), 200)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`flex flex-col items-center justify-center gap-4 pt-24 pb-8 md:pt-32 w-full px-4 md:px-8
          transition-all duration-700
          ${heroVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Junior Developer
        </h1>
        <p className="max-w-[900px] text-center text-lg text-muted-foreground sm:text-xl">
          Building innovative web solutions with modern technologies.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/homurakagarI" target="_blank" rel="noopener noreferrer">
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
            <a href="mailto:junecarlgenanvia@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.facebook.com/junecarlgenavs" target="_blank" rel="noopener noreferrer">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.instagram.com/liseiseiseise" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://tiktok.com/@iseesiiseesi" target="_blank" rel="noopener noreferrer">
              <span className="mr-2 h-4 w-4 flex items-center justify-center font-bold text-lg">T</span>
              TikTok
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className={`py-12 md:py-24 lg:py-32 w-full px-4 md:px-8 transition-all duration-700
          ${aboutVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="w-full flex flex-col items-start gap-4 md:items-center md:text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I am a passionate developer with experience in building modern web applications.
            My expertise includes React, TypeScript, Node.js, and various modern web technologies.
          </p>
          <Button asChild className="mt-2">
            <a href="\CV Resume.pdf" download>
              Download CV/RESUME
            </a>
          </Button>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={educationRef}
        id="education"
        className={`py-12 md:py-24 lg:py-32 w-full px-4 md:px-8 transition-all duration-700
          ${educationVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl mx-auto">
            {/* QCU */}
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="\QCU.jpg"
                alt="Quezon City University"
                className="mb-4 w-28 h-28 object-contain rounded-full border"
              />
              <h3 className="font-semibold text-lg">Bachelor of Science in Information Technology</h3>
              <p className="text-sm text-muted-foreground">Quezon City University · 2021 - 2025</p>
            </div>
            {/* ACCESS */}
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="\Access.jpg"
                alt="ACCESS Computer College"
                className="mb-4 w-20 h-20 object-contain rounded-full border"
              />
              <h3 className="font-semibold text-lg">Senior High School</h3>
              <p className="text-sm text-muted-foreground">ACCESS Computer College · 2018-2020</p>
            </div>
            {/* Maligaya High School */}
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="\HighSchool.jpg"
                alt="Maligaya High School"
                className="mb-4 w-24 h-24 object-contain rounded-full border"
              />
              <h3 className="font-semibold text-lg">High School</h3>
              <p className="text-sm text-muted-foreground">Maligaya High School · 2015 - 2018</p>
            </div>
            {/* Maligaya Elementary School */}
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="\ELEMentary Maligaya.jpg"
                alt="Maligaya Elementary School"
                className="mb-4 w-20 h-20 object-contain rounded-full border"
              />
              <h3 className="font-semibold text-lg">Elementary School</h3>
              <p className="text-sm text-muted-foreground">Maligaya Elementary School · 2009 - 2015</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className={`py-12 md:py-24 lg:py-32 w-full px-4 md:px-8 transition-all duration-700
          ${projectsVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} onView={handleViewProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Full Page Popup with animation */}
      {selectedProject && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all`}>
          <div className="relative w-full h-full flex flex-col items-center justify-center max-h-screen">
            <div className={`bg-background rounded-lg shadow-lg max-w-3xl w-full mx-auto p-8 flex flex-col items-center gap-6 overflow-y-auto max-h-[90vh]
              ${showingProjectPopup ? "animate-in fade-in zoom-in-95 duration-200" : "animate-out fade-out zoom-out-95 duration-200"}
            `}>
              <Button variant="secondary" onClick={handleCloseProject} className="self-start mb-2">
                Back
              </Button>
              <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="flex flex-col gap-4 w-full">
                {selectedProject.screenshots?.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${selectedProject.title} screenshot ${i + 1}`}
                    className="w-full rounded-md border"
                  />
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-primary underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className={`py-12 md:py-24 lg:py-32 bg-muted/50 w-full px-4 md:px-8 transition-all duration-700
          ${skillsVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
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
      <section
        ref={certsRef}
        id="certifications"
        className={`py-12 md:py-24 lg:py-32 w-full px-4 md:px-8 transition-all duration-700
          ${certsVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
            {/* Example certification cards with clickable thumbnails */}
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="https://placehold.co/200x120?text=React+Cert"
                alt="Certified React Developer"
                className="mb-4 w-full h-56 object-cover rounded-md cursor-pointer"
                onClick={() =>
                  handleViewCert({
                    src: "https://placehold.co/200x120?text=React+Cert",
                    alt: "Certified React Developer",
                  })
                }
              />
              <h3 className="font-semibold">Certified React Developer</h3>
              <p className="text-sm text-muted-foreground">React Institute · 2023</p>
            </div>
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="83adbc48-2f9f-41de-bac2-52eaa0b260b2.jpg"
                alt="Best In Reaserch"
                className="mb-4 w-full h-56 object-cover rounded-md cursor-pointer"
                onClick={() =>
                  handleViewCert({
                    src: "83adbc48-2f9f-41de-bac2-52eaa0b260b2.jpg",
                    alt: "Best In Reaserch",
                  })
                }
              />
              <h3 className="font-semibold">Best in Research Mobile Category Award</h3>
              <p className="text-sm text-muted-foreground"> Synergy· 2025</p>
            </div>
            <div className="rounded-lg border bg-card p-4 flex flex-col items-center">
              <img
                src="https://placehold.co/200x120?text=Full+Stack+Cert"
                alt="Full Stack Web Development"
                className="mb-4 w-full h-56 object-cover rounded-md cursor-pointer"
                onClick={() =>
                  handleViewCert({
                    src: "https://placehold.co/200x120?text=Full+Stack+Cert",
                    alt: "Full Stack Web Development",
                  })
                }
              />
              <h3 className="font-semibold">Full Stack Web Development</h3>
              <p className="text-sm text-muted-foreground">Coursera · 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal with animation */}
      {selectedCert && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all`}>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className={`bg-background rounded-lg shadow-lg max-w-2xl w-full mx-auto p-8 flex flex-col items-center gap-6
              ${showingCertPopup ? "animate-in fade-in zoom-in-95 duration-200" : "animate-out fade-out zoom-out-95 duration-200"}
            `}>
              <Button variant="secondary" onClick={handleCloseCert} className="self-start mb-2">
                Back
              </Button>
              <img
                src={selectedCert.src}
                alt={selectedCert.alt}
                className="max-h-[80vh] max-w-[90vw] rounded-lg border bg-background"
              />
              <div className="mt-4 text-lg font-semibold text-background bg-foreground/80 px-4 py-2 rounded">
                {selectedCert.alt}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`py-12 md:py-24 lg:py-32 w-full px-4 md:px-8 transition-all duration-700
          ${contactVisible ? "animate-in fade-in slide-in-from-bottom-8" : "opacity-0 translate-y-8"}
        `}
      >
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