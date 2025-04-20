import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, MapPin, User, Video, Shield } from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  // This would come from a database in a real application
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "/placeholder.svg?height=100&width=100",
      availability: ["Mon", "Wed", "Fri"],
      location: "Central Hospital",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "/placeholder.svg?height=100&width=100",
      availability: ["Tue", "Thu", "Sat"],
      location: "Medical Center",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      image: "/placeholder.svg?height=100&width=100",
      availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      location: "Children's Hospital",
      rating: 4.7,
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
        <p className="text-muted-foreground">
          Schedule an appointment with our healthcare professionals or get AI assistance.
        </p>
      </div>

      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="doctors">Find Doctors</TabsTrigger>
          <TabsTrigger value="appointments">My Appointments</TabsTrigger>
          <TabsTrigger value="ai-consultation">AI Consultation</TabsTrigger>
        </TabsList>

        <TabsContent value="doctors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="bg-muted h-32 relative">
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-background">
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{doctor.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Available: {doctor.availability.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">30 min session</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm">
                    Rating: <span className="font-medium">{doctor.rating}/5</span>
                  </div>
                  <Link href={`/appointments/book/${doctor.id}`}>
                    <Button>Book Appointment</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>View and manage your scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Dr. Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">Cardiologist</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-center">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May 10, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">10:30 AM</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="destructive" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Dr. Michael Chen</h4>
                        <p className="text-sm text-muted-foreground">Neurologist (Virtual)</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-center">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">2:00 PM</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="destructive" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Select a date to view or schedule appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" className="rounded-md border" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-consultation">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>AI Health Assistant</CardTitle>
                <CardDescription>Get instant health guidance when doctors are unavailable</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 h-[400px] overflow-y-auto mb-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p>I've been experiencing headaches and fatigue for the past week.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-primary p-3 rounded-lg text-primary-foreground">
                        <p>
                          I'm sorry to hear you're not feeling well. Could you provide more details about your
                          headaches? Are they occurring at specific times of day, and have you noticed any triggers?
                        </p>
                      </div>
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p>
                          They usually happen in the afternoon and get worse when I'm looking at screens for too long.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-primary p-3 rounded-lg text-primary-foreground">
                        <p>
                          Based on your symptoms, you might be experiencing eye strain or tension headaches, which can
                          be triggered by prolonged screen time. I recommend:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>
                            Taking regular breaks from screens (try the 20-20-20 rule: every 20 minutes, look at
                            something 20 feet away for 20 seconds)
                          </li>
                          <li>Ensuring proper lighting in your workspace</li>
                          <li>Staying hydrated throughout the day</li>
                          <li>Considering over-the-counter pain relievers if needed</li>
                        </ul>
                        <p className="mt-2">
                          Would you like me to help you schedule an appointment with an ophthalmologist or neurologist
                          for a more thorough evaluation?
                        </p>
                      </div>
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Describe your symptoms or ask a health question..."
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button>Send</Button>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    Note: AI consultations are not a substitute for professional medical advice. For emergencies, please
                    call emergency services or visit your nearest hospital.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Common Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      Headache
                    </Button>
                    <Button variant="outline" size="sm">
                      Fever
                    </Button>
                    <Button variant="outline" size="sm">
                      Cough
                    </Button>
                    <Button variant="outline" size="sm">
                      Fatigue
                    </Button>
                    <Button variant="outline" size="sm">
                      Nausea
                    </Button>
                    <Button variant="outline" size="sm">
                      Back Pain
                    </Button>
                    <Button variant="outline" size="sm">
                      Allergies
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need a Doctor?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you need to speak with a healthcare professional, you can book an appointment with one of our
                    specialists.
                  </p>
                  <Link href="/appointments">
                    <Button className="w-full">Find Available Doctors</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
