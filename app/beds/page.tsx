import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bed, Calendar, Clock, MapPin, Search, Star } from "lucide-react"
import Link from "next/link"

export default function BedsPage() {
  // This would come from a database in a real application
  const hospitals = [
    {
      id: 1,
      name: "Central Hospital",
      location: "123 Medical Drive, City",
      image: "/placeholder.svg?height=200&width=400",
      availableBeds: {
        general: 12,
        icu: 3,
        pediatric: 5,
      },
      rating: 4.7,
      distance: "2.3 miles",
    },
    {
      id: 2,
      name: "Memorial Medical Center",
      location: "456 Health Avenue, City",
      image: "/placeholder.svg?height=200&width=400",
      availableBeds: {
        general: 8,
        icu: 1,
        pediatric: 3,
      },
      rating: 4.5,
      distance: "4.1 miles",
    },
    {
      id: 3,
      name: "Community Healthcare",
      location: "789 Wellness Blvd, City",
      image: "/placeholder.svg?height=200&width=400",
      availableBeds: {
        general: 15,
        icu: 4,
        pediatric: 7,
      },
      rating: 4.3,
      distance: "5.8 miles",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hospital Bed Availability</h1>
        <p className="text-muted-foreground">Check and book available hospital beds in real-time</p>
      </div>

      <div className="bg-muted p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City or ZIP code" />
          </div>
          <div>
            <Label htmlFor="bed-type">Bed Type</Label>
            <Select defaultValue="any">
              <SelectTrigger id="bed-type">
                <SelectValue placeholder="Select bed type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Type</SelectItem>
                <SelectItem value="general">General Ward</SelectItem>
                <SelectItem value="icu">ICU</SelectItem>
                <SelectItem value="pediatric">Pediatric</SelectItem>
                <SelectItem value="maternity">Maternity</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date">Date Needed</Label>
            <Input id="date" type="date" />
          </div>
          <div className="flex items-end">
            <Button className="w-full gap-2">
              <Search className="h-4 w-4" /> Search Beds
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="available">Available Beds</TabsTrigger>
          <TabsTrigger value="my-bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Beds</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={hospital.image || "/placeholder.svg"}
                    alt={hospital.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{hospital.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {hospital.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center bg-primary/10 px-2 py-1 rounded text-sm">
                      <Star className="h-3.5 w-3.5 text-primary mr-1 fill-primary" />
                      {hospital.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Available Beds:</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-muted p-2 rounded text-center">
                      <p className="text-lg font-semibold">{hospital.availableBeds.general}</p>
                      <p className="text-xs text-muted-foreground">General</p>
                    </div>
                    <div className="bg-muted p-2 rounded text-center">
                      <p className="text-lg font-semibold">{hospital.availableBeds.icu}</p>
                      <p className="text-xs text-muted-foreground">ICU</p>
                    </div>
                    <div className="bg-muted p-2 rounded text-center">
                      <p className="text-lg font-semibold">{hospital.availableBeds.pediatric}</p>
                      <p className="text-xs text-muted-foreground">Pediatric</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Updated 5 minutes ago</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    {hospital.distance}
                  </div>
                  <Link href={`/beds/book/${hospital.id}`}>
                    <Button>Book Bed</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-bookings">
          <Card>
            <CardHeader>
              <CardTitle>Your Bed Bookings</CardTitle>
              <CardDescription>View and manage your hospital bed reservations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Bed className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Central Hospital</h4>
                      <p className="text-sm text-muted-foreground">General Ward - Room 304</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-center">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">May 12-15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Check-in: 10:00 AM</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Modify
                    </Button>
                    <Button variant="destructive" size="sm">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-muted-foreground">
                <p>No other active bookings found.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency">
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-2">Emergency Services</h3>
            <p className="mb-4">
              For life-threatening emergencies, please call emergency services immediately at{" "}
              <span className="font-bold">911</span> or your local emergency number.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-background rounded-lg p-4 border border-red-100 dark:border-red-900">
                <h4 className="font-medium mb-2">Emergency Departments with Available Beds</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Central Hospital</span>
                    <span className="font-medium">3 beds</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Memorial Medical Center</span>
                    <span className="font-medium">1 bed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Community Healthcare</span>
                    <span className="font-medium">5 beds</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-background rounded-lg p-4 border border-red-100 dark:border-red-900">
                <h4 className="font-medium mb-2">Emergency Contact Information</h4>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium block">Emergency Services:</span>
                    <span>911</span>
                  </li>
                  <li>
                    <span className="font-medium block">Poison Control:</span>
                    <span>1-800-222-1222</span>
                  </li>
                  <li>
                    <span className="font-medium block">Mental Health Crisis Line:</span>
                    <span>988</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Bed Reservation</CardTitle>
              <CardDescription>
                For urgent but non-life-threatening situations, you can reserve an emergency bed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient-name">Patient Name</Label>
                    <Input id="patient-name" placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-number">Contact Number</Label>
                    <Input id="contact-number" placeholder="Phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-type">Emergency Type</Label>
                    <Select>
                      <SelectTrigger id="emergency-type">
                        <SelectValue placeholder="Select emergency type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accident">Accident</SelectItem>
                        <SelectItem value="cardiac">Cardiac</SelectItem>
                        <SelectItem value="respiratory">Respiratory</SelectItem>
                        <SelectItem value="neurological">Neurological</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hospital">Preferred Hospital</Label>
                    <Select>
                      <SelectTrigger id="hospital">
                        <SelectValue placeholder="Select hospital" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="central">Central Hospital</SelectItem>
                        <SelectItem value="memorial">Memorial Medical Center</SelectItem>
                        <SelectItem value="community">Community Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="symptoms">Brief Description of Symptoms</Label>
                  <textarea
                    id="symptoms"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe the symptoms or condition"
                  ></textarea>
                </div>
                <Button className="w-full">Request Emergency Bed</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
