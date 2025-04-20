import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, SearchIcon, Star, User, Building, Clock } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  // This would come from a database in a real application
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      hospital: "Central Hospital",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSmV8wuCtCi3PrYX6Ddf-iEKjTIIgf4EEHA&s?height=100&width=100",
      rating: 4.8,
      experience: "15 years",
      availability: "Mon, Wed, Fri",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      hospital: "Memorial Medical Center",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8agEZueJ7RN6_jPfDcca5WWK0FdXf7nVPgw&s?height=100&width=100",
      rating: 4.9,
      experience: "12 years",
      availability: "Tue, Thu, Sat",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      hospital: "Children's Hospital",
      image: "https://photos.psychologytoday.com/e355f3cf-116c-4bd3-9d87-44942ea436c9/1/320x400.jpeg?height=100&width=100",
      rating: 4.7,
      experience: "10 years",
      availability: "Mon-Fri",
    },
  ]

  const hospitals = [
    {
      id: 1,
      name: "Central Hospital",
      location: "123 Medical Drive, City",
      image: "https://content.jdmagicbox.com/v2/comp/delhi/f4/011pxx11.xx11.091208180155.u2f4/catalogue/central-hospital-ganesh-nagar-tilak-nagar-delhi-hospitals-EPG2AsMaOu.jpg?height=200&width=400",
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      rating: 4.7,
      beds: 250,
      emergency: true,
    },
    {
      id: 2,
      name: "Memorial Medical Center",
      location: "456 Health Avenue, City",
      image: "https://bmhrc.ac.in/WriteReadData/userfiles/image/DSC_8852.JPG?height=200&width=400",
      specialties: ["Oncology", "Pediatrics", "Surgery"],
      rating: 4.5,
      beds: 180,
      emergency: true,
    },
    {
      id: 3,
      name: "Community Healthcare",
      location: "789 Wellness Blvd, City",
      image: "https://content.jdmagicbox.com/comp/bhopal/j7/0755px755.x755.160614144632.z3j7/catalogue/carewell-multispeciality-hospital-lalghati-bhopal-hospitals-vwccbxd6dx.JPG?height=200&width=400",
      specialties: ["Family Medicine", "Psychiatry", "Rehabilitation"],
      rating: 4.3,
      beds: 120,
      emergency: false,
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Doctors & Hospitals</h1>
        <p className="text-muted-foreground">
          Search for healthcare providers and facilities by name, specialty, or location
        </p>
      </div>

      <div className="bg-muted p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Doctor name or hospital" />
          </div>
          <div>
            <Label htmlFor="specialty">Specialty</Label>
            <Select>
              <SelectTrigger id="specialty">
                <SelectValue placeholder="Any specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Specialty</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City or ZIP code" />
          </div>
          <div className="flex items-end">
            <Button className="w-full gap-2">
              <SearchIcon className="h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="doctors">Doctors</TabsTrigger>
          <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
        </TabsList>

        <TabsContent value="doctors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <img
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{doctor.hospital}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Experience: {doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Available: {doctor.availability}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/doctors/${doctor.id}`}>
                    <Button variant="outline">View Profile</Button>
                  </Link>
                  <Link href={`/appointments/book/${doctor.id}`}>
                    <Button>Book Appointment</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hospitals">
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
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-muted p-2 rounded text-center">
                      <p className="text-lg font-semibold">{hospital.beds}</p>
                      <p className="text-xs text-muted-foreground">Total Beds</p>
                    </div>
                    <div className="bg-muted p-2 rounded text-center">
                      <p className="text-lg font-semibold">{hospital.emergency ? "Yes" : "No"}</p>
                      <p className="text-xs text-muted-foreground">Emergency</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/hospitals/${hospital.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Link href={`/hospitals/${hospital.id}/doctors`}>
                    <Button>Find Doctors</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Interactive Map</h2>
          <p className="text-muted-foreground">Find healthcare providers near you with our interactive map</p>
        </div>

        <div className="bg-card border rounded-lg overflow-hidden h-[400px] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Map integration will be loaded here</p>
              <Button>Enable Location Services</Button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground text-center">
          <p>Enable location services to find healthcare providers near your current location.</p>
        </div>
      </div>
    </div>
  )
}
