import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, PillIcon, Bed, Shield } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />

      <section className="py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            chikitsa+ provides comprehensive healthcare management solutions to make your healthcare journey seamless
            and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="h-10 w-10 text-primary" />}
            title="Appointment Booking"
            description="Book appointments with doctors online and get AI assistance when doctors are unavailable."
            link="/appointments"
          />

          <FeatureCard
            icon={<Bed className="h-10 w-10 text-primary" />}
            title="Bed Availability"
            description="Check and book hospital beds online with real-time availability updates."
            link="/beds"
          />

          <FeatureCard
            icon={<MapPin className="h-10 w-10 text-primary" />}
            title="Hospital & Doctor Search"
            description="Find hospitals and doctors by name or location with map integration."
            link="/search"
          />

          <FeatureCard
            icon={<PillIcon className="h-10 w-10 text-primary" />}
            title="Medicine Services"
            description="Search for medicines, check availability, and order them online from nearby pharmacies."
            link="/medicines"
          />

          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Secure Health Records"
            description="Store your medical records securely using IPFS technology with end-to-end encryption."
            link="/records"
          />

          <div className="bg-muted rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-4 bg-primary/10 p-3 rounded-full">
              <ArrowRight className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore More</h3>
            <p className="text-muted-foreground mb-4">
              Discover additional features like expense tracking, emergency SOS, and more.
            </p>
            <Link href="/features">
              <Button variant="outline">View All Features</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted rounded-xl p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Secure Blockchain Payments</h2>
            <p className="text-muted-foreground mb-6">
              chikitsa+ integrates cryptocurrency payments for all healthcare services, providing secure, transparent,
              and efficient transactions.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <span>Pay for appointments, medicines, and hospital beds with crypto</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <span>View transaction history and wallet balance</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <span>Generate crypto invoices for insurance claims</span>
              </li>
            </ul>
            <Link href="/payments">
              <Button>Learn More About Payments</Button>
            </Link>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md flex items-center justify-center">
              <img
                src="/wallet.jpeg?height=300&width=500"
                alt="Blockchain payment illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
