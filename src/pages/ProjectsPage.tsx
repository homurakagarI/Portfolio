import { useState, useRef, useEffect } from "react"
import { ProjectCard } from "@/components/ProjectCard"
import type { Project } from "@/components/ProjectCard"
import { Button } from "@/components/ui/button"

// Animation hook
function useIntersectionObserver(options = {}, delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      }, options)

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [options, delay])

  return { ref, isVisible }
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Data-Driven Management System with Geo-Tagging and Cloud Analytics for KM Foundation",
      description: "This capstone project introduces an innovative Data-Driven Management System designed specifically for KM Foundation. The system integrates geo-tagging capabilities with cloud-based analytics to streamline operations and improve decision-making processes.",
      link: "https://github.com/homurakagarI/kkmk-main",
      weblink: "https://kmfi.netlify.app",
      thumbnail: "\KMFI image.jpg",
      screenshots: [
       "\BestCapstone.jpg",
       "\KMFI image.jpg",
       "\kmfi 1.jpg",
       "\KMFI 2.jpg",
       "\KMFI 3.jpg",
       "\KMFI 4.jpg",
       "\kmfi 5.jpg",
       "\KMFI 6.jpg",
       "\KMFI 7.jpg",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "AWS"],
      features: [
        "Real-time geo-tagging of resources and activities",
        "Interactive dashboard with advanced analytics",
        "Cloud-based data storage and retrieval",
        "Role-based access control system",
        "Mobile-responsive interface for field workers"
      ],
      challenges: "The main challenge was integrating multiple APIs and ensuring reliable data synchronization between field workers and central administrators. We also had to develop custom visualization tools for the geo-tagged data.",
      outcome: "The system has significantly improved operational efficiency, reducing administrative overhead by 35% and increasing field worker productivity by 28%."
    },
    {
      title: "CL Genavia Air Conditioning & Refrigeration Services Website",
      description: "A modern, responsive website for CL Genavia Air Conditioning & Refrigeration Services. Features include a prominent company logo, animated brand showcase, detailed service listings, gallery, and contact information. The design emphasizes clarity, professionalism, and ease of navigation for both desktop and mobile users.",
      link: "https://github.com/homurakagarI/clservices",
      weblink: "https://clservices.netlify.app/",
      thumbnail: "\\cls1.png",
      screenshots: [
        "\\cls1.png",
        "\\cls2.png",
        "\\cls3.png",
        "\\cls4.png"
      ],
      technologies: ["JavaScript (React)", "JSX", "CSS", "HTML", "Vite"],
      features: [
        "Animated brand showcase and logo",
        "Detailed, visually organized service listings",
        "Responsive gallery of work and services",
        "Contact form and business information",
        "Professional, clean, and mobile-friendly design"
      ],
      challenges: "Ensuring seamless responsiveness across devices, integrating animated and interactive UI elements, and maintaining clarity and professionalism throughout the design.",
      outcome: "The website provides a clear, professional, and user-friendly experience, helping CL Genavia reach more customers and streamline service inquiries."
    },
    {
      title: "RockWell Corporation Employee Management System",
      description: "A modern web-based platform built with PHP, MySQL, HTML5, CSS3, JavaScript, Bootstrap, and jQuery, designed to streamline HR operations by automating employee data management, attendance tracking, leave requests, scheduling, and approvals through a secure, role-based interface.",
      link: "https://github.com/homurakagarI/Employee-Management-Portal",
      weblink: "",
      thumbnail: "\\RC1.png",
      screenshots: [
        "\\RC1.png",
        "\\JCG2.jpg",
        "\\JCG3.jpg",
        "\\JCG4.jpg",
        "\\JCG5.jpg",
        "\\JCG6.jpg",
        "\\JCG7.jpg",
        "\\JCG8.jpg",
        "\\Staff1.jpg",
        "\\Staff2.jpg",
        "\\Staff3.jpg",
        "\\Staff4.jpg"
      ],
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      features: [
        "Automated employee data management",
        "Attendance tracking and reporting",
        "Leave request and approval workflows",
        "Employee scheduling",
        "Role-based access control",
        "Responsive and user-friendly interface"
      ],
      challenges: "Ensuring secure authentication and authorization for different user roles, integrating real-time attendance tracking, and providing a seamless user experience across devices.",
      outcome: "The platform has streamlined HR operations, reduced manual paperwork, and improved data accuracy and accessibility for RockWell Corporation."
    },
    {
      title: "Raffle Mini-Games System",
      description: "An interactive raffle and mini-games platform featuring multiple game types including spinning wheels, slot machines, lottery draws, and card games. The system provides a comprehensive gaming experience with customizable game modes and participant management.",
      link: "https://github.com/homurakagarI/MiniGames",
      weblink: "https://yaminigames.netlify.app/",
      thumbnail: "\minigames.png",
      screenshots: [
        "\lottery.jpg", 
        "\wheel.jpg", 
        "\Slots.jpg", 
        "\Cards.jpg"
      ],
      technologies: ["React", "TypeScript", "CSS3", "HTML5", "Web Audio API"],
      features: [
        "Multiple game types: Wheel, Slots, Lottery, and Cards",
        "Single Winner and Elimination game modes",
        "Real-time participant management",
        "Sound effects and animations",
        "Responsive design for all devices",
        "Quick guide for easy setup",
        "Customizable game settings"
      ],
      challenges: "The main challenges included implementing smooth animations for different game mechanics, ensuring fair randomization algorithms, and creating an intuitive user interface that works across various game types while maintaining consistent user experience.",
      outcome: "The platform has been successfully deployed and used for multiple events, providing an engaging and fair way to conduct raffles and mini-games with positive user feedback on the interactive experience."
    },
    {
      title: "Lagusan Coffee Sky Deck",
      description: "A modern, responsive coffee shop website built with Vue.js, TypeScript, and Firebase. Features interactive menu with filtering, contact form with Firebase integration, real-time data storage, and mobile-first responsive design optimized for all devices.",
      link: "https://github.com/homurakagarI/lagusan-coffee-sky-deck",
      weblink: "https://lagusan.netlify.app/",
      thumbnail: "\L1.jpg",
      screenshots: [
        "\L1.jpg",
        "\L2.jpg",
        "\L3.jpg",
        "\L4.jpg",
        "\L5.jpg",
        "\L6.jpg",
        "\L7.jpg",
        "\LL8.jpg",
        "\L9.jpg",
        "\L10.jpg",
        "\L11.jpg",
        "\L12.jpg",
        "\L13.jpg",
      ],
      technologies: ["Vue.js 3", "TypeScript", "Firebase", "Firestore", "Vite", "CSS3", "Firebase Hosting"],
      features: [
        "Modern responsive design optimized for mobile and desktop",
        "Interactive menu with filtering by category",
        "Contact form with Firebase Firestore integration",
        "Real-time data storage with Firebase Firestore",
        "Firebase Analytics for user insights",
        "Content management system",
        "Order management system ready for implementation",
        "Smooth scrolling navigation with hamburger menu"
      ],
      challenges: "Integrating Firebase services seamlessly while maintaining fast performance, implementing real-time data synchronization, ensuring optimal mobile responsiveness across all device sizes, and creating an intuitive menu filtering system that works efficiently with Firebase backend.",
      outcome: "Successfully delivered a fully functional coffee shop website with Firebase integration, enabling real-time contact form submissions, newsletter subscriptions, and a foundation for future e-commerce features. The mobile-first approach resulted in excellent user experience across all devices."
    }
    // Add more projects as needed
  ]

  const titleSection = useIntersectionObserver({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showingProjectPopup, setShowingProjectPopup] = useState(false)
  const [currentTab, setCurrentTab] = useState<"overview" | "details" | "gallery">("overview")

  function handleViewProject(project: Project) {
    setSelectedProject(project)
    setShowingProjectPopup(true)
    setCurrentTab("overview")
    document.body.style.overflow = "hidden" // Prevent scrolling behind modal
  }
  
  function handleCloseProject() {
    setShowingProjectPopup(false)
    document.body.style.overflow = "" // Re-enable scrolling
    setTimeout(() => setSelectedProject(null), 300)
  }

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showingProjectPopup) {
        handleCloseProject()
      }
    }

    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [showingProjectPopup])

  return (
    <section className="relative py-12 md:py-20 lg:py-28 w-full min-h-screen flex flex-col items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"></div>
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgMTVjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTUgMC04LjI4NCA2LjcxNi0xNSAxNS0xNXptMCAxMWMtMi4yMSAwLTQgMS43OS00IDQgMCAyLjIxIDEuNzkgNCA0IDQgMi4yMSAwIDQtMS43OSA0LTQgMC0yLjIxLTEuNzktNC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-10 px-4 md:px-8">
        <div 
          ref={titleSection.ref}
          className={`w-full text-center transition-all duration-1000 transform ${
            titleSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative Projects 
          </p>
        </div>
        
        <div className="w-full max-w-6xl">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => {
              const animationDelay = idx * 150;
              const itemSection = useIntersectionObserver({ threshold: 0.1 }, animationDelay);
              
              return (
                <div 
                  key={idx} 
                  ref={itemSection.ref}
                  className={`transition-all duration-1000 transform ${
                    itemSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                >
                  <ProjectCard project={project} onView={handleViewProject} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            showingProjectPopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseProject}
        >
          <div 
            className={`relative w-full max-w-4xl mx-auto max-h-[90vh] transition-all duration-500 transform ${
              showingProjectPopup ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card border border-primary/30 rounded-xl shadow-xl overflow-hidden">
              {/* Header with image */}
              <div className="relative h-56 md:h-72">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={handleCloseProject}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-border">
                <div className="flex">
                  <button
                    className={`px-4 py-3 font-medium text-sm flex-1 md:flex-none md:min-w-[120px] text-center transition-colors
                      ${currentTab === "overview" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => setCurrentTab("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm flex-1 md:flex-none md:min-w-[120px] text-center transition-colors
                      ${currentTab === "details" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => setCurrentTab("details")}
                  >
                    Details
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm flex-1 md:flex-none md:min-w-[120px] text-center transition-colors
                      ${currentTab === "gallery" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => setCurrentTab("gallery")}
                  >
                    Gallery
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
                {/* Overview Tab */}
                {currentTab === "overview" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className="text-muted-foreground">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technologies USED</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 space-y-2">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>View on GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 7h10v10"/>
                          <path d="M7 17 17 7"/>
                        </svg>
                      </a>
                      {selectedProject.weblink && (
                        <a
                          href={selectedProject.weblink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <span>View Website</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10v10"/>
                            <path d="M7 17 17 7"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Details Tab */}
                {currentTab === "details" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedProject.features?.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                      <p className="text-muted-foreground">{selectedProject.challenges}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                      <p className="text-muted-foreground">{selectedProject.outcome}</p>
                    </div>
                  </div>
                )}
                
                {/* Gallery Tab */}
                {currentTab === "gallery" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    {selectedProject.screenshots?.length ? (
                      selectedProject.screenshots.map((src, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden">
                          <img
                            src={src}
                            alt={`${selectedProject.title} screenshot ${i + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-center py-8 text-muted-foreground">No screenshots available</p>
                    )}
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-border flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span>Click outside to close</span>
                </div>
                <Button size="sm" onClick={handleCloseProject}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

