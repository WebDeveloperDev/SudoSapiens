import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Health, Secured with Blockchain Technology
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                SecureMed combines healthcare management with blockchain security to provide a comprehensive solution
                for all your medical needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Secure IPFS Storage</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>Crypto Payments</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-primary" />
                <span>End-to-End Encryption</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square md:aspect-video w-full max-w-[500px] overflow-hidden rounded-xl">
              <img
                alt="SecureMed Healthcare Platform"
                className="object-cover w-full h-full"
                src="/heroSection.png?height=600&width=600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 flex items-end p-6">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-[80%]">
                  <p className="text-sm font-medium">
                    "SecureMed revolutionized how I manage my healthcare needs. Everything in one secure place!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Sarah Johnson, Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
