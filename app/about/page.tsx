import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Users, Trophy, Sparkles, ArrowRight, Check } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Chikisa+</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Revolutionizing healthcare management with blockchain technology and user-friendly solutions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            At Chikitsa+, we're on a mission to transform healthcare management by combining cutting-edge blockchain
            technology with user-friendly interfaces. We believe that healthcare should be accessible, secure, and
            efficient for everyone.
          </p>
          <p className="text-muted-foreground mb-6">
            Our platform addresses the critical challenges in healthcare management: data security, accessibility, and
            interoperability. By leveraging blockchain technology, we provide a secure and transparent system for
            storing and sharing medical records, booking appointments, and managing healthcare payments.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="mt-1 bg-primary/10 p-1 rounded-full">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p>Secure storage of medical records using IPFS and end-to-end encryption</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 bg-primary/10 p-1 rounded-full">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p>Transparent and efficient healthcare payments using cryptocurrency</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 bg-primary/10 p-1 rounded-full">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p>Comprehensive healthcare management in a single platform</p>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-xl p-6">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md flex items-center justify-center">
            <img src="/heroSection.png?height=300&width=500" alt="SecureMed Mission" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          The principles that guide our innovation and development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-muted-foreground">
                  We prioritize the security and privacy of your medical data with state-of-the-art encryption and
                  blockchain technology.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe healthcare management should be accessible to everyone, regardless of technical expertise.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our platform, from user experience to technical
                  implementation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to bring the latest advancements in blockchain and healthcare technology to
                  our users.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1 bg-muted rounded-xl p-6">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-md flex items-center justify-center">
            <img src="https://img.freepik.com/free-vector/medical-good-team-hospital-staff-doctors-nurse-illustration_1284-53038.jpg?height=300&width=500" alt="SecureMed Team" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground mb-6">
            SecureMed was founded by a team of healthcare professionals, blockchain experts, and software engineers who
            recognized the need for a secure and user-friendly healthcare management system.
          </p>
          <p className="text-muted-foreground mb-6">
            Our diverse team brings together expertise from various fields, including medicine, cryptography, software
            development, and user experience design. This interdisciplinary approach allows us to create a platform that
            addresses the complex challenges of healthcare management.
          </p>
          <p className="text-muted-foreground mb-6">
            We are committed to continuous learning and improvement, staying up-to-date with the latest advancements in
            blockchain technology and healthcare standards to provide the best possible service to our users.
          </p>
          <Link href="/contact">
            <Button className="gap-2">
              Meet Our Team <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-muted rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge blockchain technology for secure healthcare management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">IPFS Storage</h3>
            <p className="text-muted-foreground mb-4">
              We use the InterPlanetary File System (IPFS) to store medical records in a decentralized manner. This
              ensures that your data is not stored in a single location, reducing the risk of data breaches and loss.
            </p>
            <p className="text-muted-foreground">
              All data stored on IPFS is encrypted end-to-end, meaning only you and those you explicitly grant access
              can view your medical records.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">Blockchain Payments</h3>
            <p className="text-muted-foreground mb-4">
              Our platform integrates cryptocurrency payments for all healthcare services, providing secure,
              transparent, and efficient transactions.
            </p>
            <p className="text-muted-foreground">
              Smart contracts automate payment processes, ensuring that healthcare providers receive payment only when
              services are rendered, and patients have a transparent record of all transactions.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">End-to-End Encryption</h3>
            <p className="text-muted-foreground mb-4">
              All data transmitted and stored on our platform is protected with state-of-the-art end-to-end encryption,
              ensuring that your medical information remains private and secure.
            </p>
            <p className="text-muted-foreground">
              We implement zero-knowledge proofs for certain operations, allowing verification without revealing the
              underlying data.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
            <p className="text-muted-foreground mb-4">
              Despite the complex technology behind our platform, we've designed a user-friendly interface that makes
              healthcare management accessible to everyone, regardless of technical expertise.
            </p>
            <p className="text-muted-foreground">
              Our mobile-responsive design ensures that you can access your healthcare information and services from any
              device, anywhere, anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Join the Healthcare Revolution</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Be part of the future of healthcare management with SecureMed. Sign up today and experience the benefits of
          secure, efficient, and user-friendly healthcare services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg">Create Account</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
