import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Calendar,
  Bed,
  MapPin,
  PillIcon,
  Shield,
  Bell,
  Wallet,
  Video,
  HeartPulse,
  Ambulance,
  Receipt,
  UserPlus,
  Users,
  MessageCircle,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">SecureMed Features</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the comprehensive features of SecureMed that make healthcare management secure, efficient, and
          user-friendly.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Features</TabsTrigger>
          <TabsTrigger value="core">Core Services</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Features</TabsTrigger>
          <TabsTrigger value="additional">Additional Features</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Services */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Core</Badge>
                </div>
                <CardTitle>Appointment Booking</CardTitle>
                <CardDescription>Schedule appointments with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Book appointments with doctors online</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Get AI assistance when doctors are unavailable</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Receive appointment reminders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Reschedule or cancel appointments</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/appointments" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bed className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Core</Badge>
                </div>
                <CardTitle>Bed Availability</CardTitle>
                <CardDescription>Check and book hospital beds online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Real-time bed availability updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Filter by hospital and bed type</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Book beds in advance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Emergency bed reservation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/beds" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Core</Badge>
                </div>
                <CardTitle>Hospital & Doctor Search</CardTitle>
                <CardDescription>Find healthcare providers by name or location</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Search by specialty, location, or name</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>View doctor profiles and ratings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Interactive map integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Hospital details and available services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/search" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <PillIcon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Core</Badge>
                </div>
                <CardTitle>Medicine Services</CardTitle>
                <CardDescription>Search for medicines and order them online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Search for medicines by name or category</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Check availability at nearby pharmacies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Order medicines online for delivery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Set medication reminders</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/medicines" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Blockchain</Badge>
                </div>
                <CardTitle>Secure Health Records</CardTitle>
                <CardDescription>Store medical records securely using IPFS technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>End-to-end encrypted storage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>IPFS decentralized storage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Controlled sharing with healthcare providers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Access records from any device</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/records" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Blockchain</Badge>
                </div>
                <CardTitle>Crypto Payments</CardTitle>
                <CardDescription>Pay for healthcare services with cryptocurrency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Secure blockchain transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Multiple cryptocurrency support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Transaction history and receipts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Crypto invoices for insurance claims</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/wallet" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Additional</Badge>
                </div>
                <CardTitle>Medication Reminders</CardTitle>
                <CardDescription>Never miss a dose with personalized reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Set custom medication schedules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Push notifications and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Track medication adherence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Refill reminders</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/medicines" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Additional</Badge>
                </div>
                <CardTitle>Telemedicine</CardTitle>
                <CardDescription>Virtual consultations with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Video consultations with doctors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Secure end-to-end encrypted calls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Digital prescriptions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Follow-up appointment scheduling</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/appointments" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Ambulance className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">Additional</Badge>
                </div>
                <CardTitle>Emergency SOS</CardTitle>
                <CardDescription>Quick access to emergency services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>One-tap emergency contact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Location sharing with emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Medical profile sharing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Emergency contact notification</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="core">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Appointment Booking</CardTitle>
                <CardDescription>Schedule appointments with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Book appointments with doctors online</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Get AI assistance when doctors are unavailable</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Receive appointment reminders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Reschedule or cancel appointments</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/appointments" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bed className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Bed Availability</CardTitle>
                <CardDescription>Check and book hospital beds online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Real-time bed availability updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Filter by hospital and bed type</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Book beds in advance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Emergency bed reservation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/beds" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Hospital & Doctor Search</CardTitle>
                <CardDescription>Find healthcare providers by name or location</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Search by specialty, location, or name</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>View doctor profiles and ratings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Interactive map integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Hospital details and available services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/search" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <PillIcon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Medicine Services</CardTitle>
                <CardDescription>Search for medicines and order them online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Search for medicines by name or category</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Check availability at nearby pharmacies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Order medicines online for delivery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Set medication reminders</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/medicines" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="blockchain">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Secure Health Records</CardTitle>
                <CardDescription>Store medical records securely using IPFS technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>End-to-end encrypted storage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>IPFS decentralized storage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Controlled sharing with healthcare providers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Access records from any device</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/records" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Crypto Payments</CardTitle>
                <CardDescription>Pay for healthcare services with cryptocurrency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Secure blockchain transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Multiple cryptocurrency support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Transaction history and receipts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Crypto invoices for insurance claims</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/wallet" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Receipt className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Smart Contracts</CardTitle>
                <CardDescription>Automated healthcare agreements and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Automated insurance claims processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Transparent payment distribution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Conditional payment release</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Auditable transaction history</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/wallet" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="additional">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Medication Reminders</CardTitle>
                <CardDescription>Never miss a dose with personalized reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Set custom medication schedules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Push notifications and alerts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Track medication adherence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Refill reminders</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/medicines" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Telemedicine</CardTitle>
                <CardDescription>Virtual consultations with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Video consultations with doctors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Secure end-to-end encrypted calls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Digital prescriptions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Follow-up appointment scheduling</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/appointments" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Ambulance className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Emergency SOS</CardTitle>
                <CardDescription>Quick access to emergency services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>One-tap emergency contact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Location sharing with emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Medical profile sharing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Emergency contact notification</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <HeartPulse className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Health Tracking</CardTitle>
                <CardDescription>Monitor and track your health metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Track vital signs and health metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Integration with wearable devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Health trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Share data with healthcare providers</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Health Chat</CardTitle>
                <CardDescription>Secure messaging with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>End-to-end encrypted messaging</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Share medical records and images</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>AI-powered health assistant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Message history and archiving</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/appointments" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle>Family Health Management</CardTitle>
                <CardDescription>Manage healthcare for your entire family</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Add family members to your account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Manage appointments for dependents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Track family vaccination records</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5">•</div>
                    <span>Family health history tracking</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore Feature
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience SecureMed?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of users who trust SecureMed for their healthcare management needs. Sign up today and take
          control of your healthcare journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" className="gap-2">
              Create Account <UserPlus className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
