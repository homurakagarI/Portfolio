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
      description: "A modern, responsive coffee shop website built with Next.js, React, and MongoDB. Features interactive menu with filtering, payment integration with MonggoPay, real-time data storage, and mobile-first responsive design optimized for all devices with Tailwind CSS styling.",
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
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "MonggoPay", "HTML5", "CSS3"],
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
    },
    {
      title: "Dataflow",
      description: "A comprehensive data management platform designed to streamline data flow processes, featuring advanced analytics, real-time data processing, and intuitive dashboard interfaces. Built with modern web technologies to provide efficient data handling capabilities.",
      link: "https://github.com/homurakagarI/Dataflow",
      weblink: "https://dataflow-phi.vercel.app/",
      thumbnail: "df thumbnail.png",
      screenshots: [
        "df1.png",
        "df2.png",
        "df3.png",
        "df4.png"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Next.js", "Vercel"],
      features: [
        "Real-time data processing and analytics",
        "Interactive dashboard with data visualization",
        "Efficient data flow management",
        "Modern responsive user interface",
        "Advanced filtering and search capabilities",
        "Cloud-based deployment and scaling"
      ],
      challenges: "The main challenges included implementing efficient data processing algorithms, ensuring real-time updates across multiple data streams, and creating intuitive visualizations that could handle large datasets while maintaining optimal performance.",
      outcome: "Successfully deployed a robust data management platform that provides users with powerful tools for data analysis and visualization, resulting in improved data-driven decision making and streamlined workflows."
    },
    {
      title: "TruckPro Inc.",
      description: "A comprehensive truck and vehicle information system designed to provide detailed vehicle data, specifications, and management capabilities. Features include vehicle registration, detailed information displays, and user-friendly navigation for accessing truck-related data.",
      link: "https://github.com/homurakagarI/TruckInfoSite",
      weblink: "https://truckinfosite.onrender.com/",
      thumbnail: "tf-thumbnail.png",
      screenshots: [
        "tf1.png",
        "tf2.png",
        "tf3.png"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
      features: [
        "Comprehensive vehicle information database",
        "User-friendly vehicle registration system",
        "Detailed vehicle specifications display",
        "Responsive design for all devices",
        "Search and filter functionality",
        "Clean and intuitive user interface"
      ],
      challenges: "The main challenges included designing an efficient database structure for vehicle information, implementing robust search and filtering capabilities, and ensuring the system could handle various types of vehicle data while maintaining fast performance and user-friendly navigation.",
      outcome: "Successfully developed and deployed a functional vehicle information system that provides users with easy access to truck and vehicle data, streamlining the process of vehicle management and information retrieval."
    }
    // Add more projects as needed
  ]

  const shopifyProjects: Project[] = [
    {
      title: "Workshop Emporium",
      description: "A sleek and modern Shopify store featuring contemporary fashion collections with advanced filtering, size guides, and seamless shopping experience. Built with custom Liquid templates and optimized for conversions.",
      link: "https://workshopemporium.com/",
      weblink: "",
      thumbnail: "Shop1.png",
      screenshots: ["Shop1.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify API"],
      features: [
        "Custom theme development",
        "Product filtering and search",
        "Size guide integration",
        "Wishlist functionality",
        "Mobile-responsive design",
        "Fast checkout process"
      ],
      challenges: "Creating a unique brand identity while maintaining Shopify's best practices, implementing custom product filtering, and optimizing for mobile conversions.",
      outcome: "Delivered a high-converting fashion store with improved user engagement and streamlined shopping experience."
    },
    {
      title: "Backyard Supply Redirect",
      description: "An elegant Shopify e-commerce platform showcasing premium accessories and lifestyle products. Features include dynamic product galleries, customer reviews, and integrated payment solutions.",
      link: "https://backyardsupplydirect.com/",
      weblink: "",
      thumbnail: "Shop2.png",
      screenshots: ["Shop2.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Dynamic product showcases",
        "Customer review system",
        "Multi-currency support",
        "Newsletter integration",
        "Social media integration",
        "SEO-optimized pages"
      ],
      challenges: "Implementing a sophisticated product display system, integrating multiple payment gateways, and ensuring fast page load times with high-quality product images.",
      outcome: "Successfully launched a premium accessories store with enhanced product visibility and improved customer satisfaction."
    },
    {
      title: "Seraphel Recovery",
      description: "A comprehensive Shopify store specializing in lifestyle and home goods with curated collections, bundle offers, and personalized recommendations. Features custom sections and interactive product displays.",
      link: "https://seraphelrecovery.com/",
      weblink: "",
      thumbnail: "Shop3.png",
      screenshots: ["Shop3.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify Apps"],
      features: [
        "Curated product collections",
        "Bundle and upsell features",
        "Product recommendations",
        "Gift card integration",
        "Customer accounts",
        "Order tracking system"
      ],
      challenges: "Developing custom bundle logic, creating personalized shopping experiences, and integrating third-party apps while maintaining site performance.",
      outcome: "Created a versatile lifestyle store with increased average order value through effective bundling and recommendation features."
    },
    {
      title: "Elite Earth Designs",
      description: "A vibrant Shopify store dedicated to beauty and cosmetics products featuring virtual try-on capabilities, ingredient lists, and beauty tips blog. Optimized for beauty enthusiasts and skincare lovers.",
      link: "https://eliteearthdesigns.com/",
      weblink: "",
      thumbnail: "Shop4.png",
      screenshots: ["Shop4.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Third-party APIs"],
      features: [
        "Product ingredient displays",
        "Beauty tips blog integration",
        "Subscription box options",
        "Loyalty program integration",
        "Video tutorials section",
        "Skin type recommendations"
      ],
      challenges: "Integrating complex product attributes, implementing subscription functionality, and creating an engaging content strategy alongside e-commerce features.",
      outcome: "Launched a successful beauty boutique with strong community engagement and recurring revenue through subscription services."
    },
    {
      title: "Green Earth Direct",
      description: "A dynamic Shopify store for athletic wear and sportswear featuring size calculators, workout guides, and athlete endorsements. Built for performance and optimized for sports enthusiasts.",
      link: "https://greenearthdirect.com/",
      weblink: "",
      thumbnail: "Shop 5.png",
      screenshots: ["Shop 5.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Size calculator tool",
        "Workout guide integration",
        "Athlete testimonials",
        "Performance fabric filters",
        "Bulk ordering options",
        "Team customization features"
      ],
      challenges: "Creating an interactive size guide system, managing complex product variants for different sports, and implementing bulk ordering with customization options.",
      outcome: "Delivered a high-performance sportswear store with excellent user experience and strong conversion rates among fitness enthusiasts."
    },
    {
      title: "PurexWellness",
      description: "A unique Shopify marketplace featuring artisan and handcrafted products with maker stories, customization options, and sustainable packaging. Celebrates craftsmanship and authentic handmade goods.",
      link: "https://purexwellness.com/",
      weblink: "",
      thumbnail: "Shop 6.png",
      screenshots: ["Shop 6.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Custom Apps"],
      features: [
        "Maker story profiles",
        "Custom product options",
        "Gift wrapping services",
        "Sustainable packaging info",
        "Made-to-order functionality",
        "Artist collaboration tools"
      ],
      challenges: "Implementing flexible customization options, managing made-to-order inventory, and creating compelling storytelling features for artisan makers.",
      outcome: "Successfully created a thriving artisan marketplace that connects makers with customers, fostering community and celebrating craftsmanship."
    },
    {
      title: "Man Cave Focus",
      description: "A comprehensive Shopify store for tech gadgets and electronics featuring detailed specifications, comparison tools, and tech reviews. Designed for tech enthusiasts with advanced filtering and search capabilities.",
      link: "https://mancavefocus.com/",
      weblink: "",
      thumbnail: "Shop 7.png",
      screenshots: ["Shop 7.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify API"],
      features: [
        "Technical specification displays",
        "Product comparison tool",
        "Tech reviews and ratings",
        "Warranty information",
        "Pre-order functionality",
        "Tech support integration"
      ],
      challenges: "Displaying complex technical specifications in user-friendly formats, implementing product comparison features, and managing pre-orders with inventory sync.",
      outcome: "Launched a successful tech store with robust product information architecture and enhanced customer confidence through detailed specifications and reviews."
    },
    {
      title: "Regenex Peak Fitness",
      description: "A trendy Shopify store featuring urban streetwear and contemporary fashion. Built with bold designs, interactive lookbooks, and influencer collaborations to create a vibrant shopping community.",
      link: "https://regenexpeakfitness.com/",
      weblink: "",
      thumbnail: "Shop 8.png",
      screenshots: ["Shop 8.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Interactive lookbook galleries",
        "Influencer collaboration section",
        "Limited edition drops",
        "Size availability notifications",
        "Style quiz for recommendations",
        "Community-driven reviews"
      ],
      challenges: "Creating a dynamic limited edition release system, implementing real-time inventory updates for high-demand items, and building an engaging community platform within the e-commerce framework.",
      outcome: "Established a thriving streetwear community with strong brand loyalty and successful limited edition product launches driving consistent traffic and sales."
    },
    {
      title: "Performance Recovery Supply",
      description: "An upscale Shopify boutique specializing in premium home decor and essentials. Features curated collections, interior design tips, and personalized shopping assistance for sophisticated homeowners.",
      link: "https://performancerecoverysupply.com/",
      weblink: "",
      thumbnail: "Shop 9.png",
      screenshots: ["Shop 9.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify Plus"],
      features: [
        "Curated luxury collections",
        "Interior design consultation",
        "Room visualization tools",
        "Concierge shopping service",
        "Premium packaging options",
        "White-glove delivery integration"
      ],
      challenges: "Implementing a high-end user experience with white-glove service integration, creating sophisticated product visualization tools, and maintaining premium brand positioning throughout the customer journey.",
      outcome: "Successfully launched a luxury home goods platform with exceptional customer service features and high customer satisfaction rates among upscale clientele."
    },
    {
      title: "Fireside Luxe",
      description: "A rugged Shopify store for outdoor enthusiasts featuring camping, hiking, and adventure gear. Includes gear guides, trail recommendations, and expert advice for outdoor explorers.",
      link: "https://firesideluxe.com/",
      weblink: "",
      thumbnail: "Shop 10.png",
      screenshots: ["Shop 10.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Google Maps API"],
      features: [
        "Gear recommendation engine",
        "Trail and destination guides",
        "Weather-based product suggestions",
        "Rental equipment options",
        "Expert advice blog",
        "Adventure community forum"
      ],
      challenges: "Integrating weather APIs for contextual product recommendations, building a comprehensive gear guide system, and creating a rental inventory management system alongside traditional e-commerce.",
      outcome: "Created a comprehensive outdoor adventure platform that serves both as an e-commerce store and a community hub for outdoor enthusiasts, driving engagement and repeat purchases."
    },
    {
      title: "Amore Culinary Excellence",
      description: "A delightful Shopify store dedicated to gourmet cooking and kitchen supplies featuring chef-curated collections, cooking tips, and subscription box services for culinary enthusiasts.",
      link: "https://amoreculinaryexcellence.com/",
      weblink: "",
      thumbnail: "Shop 11.png",
      screenshots: ["Shop 11.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Subscription APIs"],
      features: [
        "Breed-specific product filters",
        "Pet care blog and tips",
        "Subscription box services",
        "Vet-approved product badges",
        "Pet profile creation",
        "Auto-delivery scheduling"
      ],
      challenges: "Developing breed-specific filtering logic, implementing flexible subscription models with customization options, and creating engaging pet care content while maintaining focus on product sales.",
      outcome: "Built a beloved pet supply store with strong subscription revenue and an engaged community of pet owners who rely on the platform for ongoing pet care needs."
    },
    {
      title: "BBQ Nest",
      description: "An exquisite Shopify store for gourmet foods, artisan beverages, and culinary delights. Features recipe pairings, chef recommendations, and gift box customization for food connoisseurs.",
      link: "https://bbqnest.com/",
      weblink: "",
      thumbnail: "Shop 12.png",
      screenshots: ["Shop 12.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Custom APIs"],
      features: [
        "Recipe pairing suggestions",
        "Chef recommendation section",
        "Custom gift box builder",
        "Tasting notes and descriptions",
        "Food and wine pairing guide",
        "Subscription tasting boxes"
      ],
      challenges: "Creating an interactive gift box customization tool, implementing complex pairing algorithms for food and beverage suggestions, and managing perishable inventory with expiration tracking.",
      outcome: "Launched a premium gourmet marketplace with exceptional customization features and strong gift sales, establishing a loyal customer base of food enthusiasts and gift shoppers."
    }
    // Add more Shopify projects as needed
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

        {/* Shopify Projects Section */}
        <div className="w-full max-w-6xl mt-16">
          <div 
            className="w-full text-center mb-10 transition-all duration-1000 transform"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
              Shopify Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              E-commerce solutions built with Shopify platform
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {shopifyProjects.map((project, idx) => {
              const animationDelay = (projects.length + idx) * 150;
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
                        <span>{selectedProject.technologies?.includes("Shopify") ? "View Website" : "View on GitHub"}</span>
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

