import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<{ src: string; alt: string } | null>(null)
  const [showingCertPopup, setShowingCertPopup] = useState(false)

  function handleViewCert(cert: { src: string; alt: string }) {
    setSelectedCert(cert)
    setShowingCertPopup(true)
  }
  function handleCloseCert() {
    setShowingCertPopup(false)
    setTimeout(() => setSelectedCert(null), 200)
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 w-full px-2 sm:px-4 md:px-8">
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Certifications
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
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
      {selectedCert && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all`}>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className={`bg-background rounded-lg shadow-lg w-full max-w-2xl mx-auto p-2 sm:p-8 flex flex-col items-center gap-4 sm:gap-6
              ${showingCertPopup ? "animate-in fade-in zoom-in-95 duration-200" : "animate-out fade-out zoom-out-95 duration-200"}
            `}>
              <Button variant="secondary" onClick={handleCloseCert} className="self-start mb-2">
                Back
              </Button>
              <img
                src={selectedCert.src}
                alt={selectedCert.alt}
                className="max-h-[60vh] sm:max-h-[80vh] max-w-[90vw] rounded-lg border bg-background object-contain"
              />
              <div className="mt-4 text-base sm:text-lg font-semibold text-background bg-foreground/80 px-4 py-2 rounded">
                {selectedCert.alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
