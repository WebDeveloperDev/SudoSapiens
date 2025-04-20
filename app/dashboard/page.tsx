import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Bell, FileText, Pill, Bed, Wallet, User, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Manage your healthcare services</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </Button>
          <Button variant="outline" className="gap-2">
            <Settings className="h-4 w-4" /> Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
          <CardFooter>
            <Link href="/appointments" className="text-sm text-primary hover:underline">
              View all appointments
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Medication Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
          <CardFooter>
            <Link href="/medicines" className="text-sm text-primary hover:underline">
              View all reminders
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Health Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
          <CardFooter>
            <Link href="/records" className="text-sm text-primary hover:underline">
              View all records
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Wallet Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,350.75</div>
          </CardContent>
          <CardFooter>
            <Link href="/wallet" className="text-sm text-primary hover:underline">
              View wallet
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="records">Records</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled appointments for the next 7 days</CardDescription>
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
                        <Calendar className="h-4 w-4 text-muted-foreground" />
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
                        <Bed className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Central Hospital</h4>
                        <p className="text-sm text-muted-foreground">Bed Reservation</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-center">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">May 12, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Check-in: 10:00 AM</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                      <Button variant="destructive" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/appointments">
                  <Button variant="outline">View All Appointments</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medication Reminders</CardTitle>
                <CardDescription>Today's medication schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Pill className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-medium">Lisinopril</h4>
                      </div>
                      <Badge variant="outline">8:00 AM</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">10mg - Once daily</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Pill className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-medium">Vitamin D</h4>
                      </div>
                      <Badge variant="outline">9:00 AM</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">1000 IU - Once daily</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Pill className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-medium">Ibuprofen</h4>
                      </div>
                      <Badge variant="outline">As needed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">200mg - For pain</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/medicines">
                  <Button variant="outline">Manage Reminders</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Wallet Overview</CardTitle>
                <CardDescription>Your cryptocurrency wallet for healthcare payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Ethereum"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Ethereum (ETH)</div>
                        <div className="text-sm text-muted-foreground">0.45 ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$1,350.75</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="USDC"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">USDC</div>
                        <div className="text-sm text-muted-foreground">250.50 USDC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">$250.50</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/wallet">
                  <Button variant="outline" className="w-full gap-2">
                    <Wallet className="h-4 w-4" /> Manage Wallet
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Health Records</CardTitle>
                <CardDescription>Your recently uploaded medical records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="font-medium">Blood Test Results</span>
                    </div>
                    <Badge variant="outline">Apr 10</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="font-medium">Chest X-Ray</span>
                    </div>
                    <Badge variant="outline">Mar 15</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="font-medium">Prescription</span>
                    </div>
                    <Badge variant="outline">Apr 5</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/records">
                  <Button variant="outline" className="w-full gap-2">
                    <Shield className="h-4 w-4" /> View Health Records
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Information</CardTitle>
                <CardDescription>Quick access to emergency services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="destructive" className="w-full">
                    SOS Emergency
                  </Button>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Emergency Contacts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Emergency Services:</span>
                        <span className="font-medium">911</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Primary Doctor:</span>
                        <span className="font-medium">Dr. Sarah Johnson</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Contact:</span>
                        <span className="font-medium">Jane Doe (Wife)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Nearest Hospitals</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <div className="font-medium">Central Hospital</div>
                        <div className="text-muted-foreground">2.3 miles away</div>
                      </div>
                      <div>
                        <div className="font-medium">Memorial Medical Center</div>
                        <div className="text-muted-foreground">4.1 miles away</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>View and manage your upcoming and past appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Upcoming Appointments</h3>
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
                          <Calendar className="h-4 w-4 text-muted-foreground" />
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
                          <Bed className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Central Hospital</h4>
                          <p className="text-sm text-muted-foreground">Bed Reservation</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">May 12, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Check-in: 10:00 AM</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                        <Button variant="destructive" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Past Appointments</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted p-3 rounded-full">
                          <User className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium">Dr. Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Neurologist</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">April 15, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">2:00 PM</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Summary
                        </Button>
                        <Button variant="outline" size="sm">
                          Book Again
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/appointments">
                <Button>Book New Appointment</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="medications">
          <Card>
            <CardHeader>
              <CardTitle>Medication Management</CardTitle>
              <CardDescription>Track and manage your medication schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Active Medications</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Pill className="h-4 w-4 text-primary" />
                          </div>
                          <h4 className="font-medium">Lisinopril</h4>
                        </div>
                        <Badge variant="outline">8:00 AM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">10mg - Once daily</p>
                      <div className="flex justify-between text-sm">
                        <span>Started: April 1, 2025</span>
                        <span>Ends: July 1, 2025</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Pill className="h-4 w-4 text-primary" />
                          </div>
                          <h4 className="font-medium">Vitamin D</h4>
                        </div>
                        <Badge variant="outline">9:00 AM</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">1000 IU - Once daily</p>
                      <div className="flex justify-between text-sm">
                        <span>Started: March 1, 2025</span>
                        <span>Ends: September 1, 2025</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Pill className="h-4 w-4 text-primary" />
                          </div>
                          <h4 className="font-medium">Ibuprofen</h4>
                        </div>
                        <Badge variant="outline">As needed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">200mg - For pain</p>
                      <div className="flex justify-between text-sm">
                        <span>Started: April 5, 2025</span>
                        <span>Ends: Ongoing</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Add New Medication</h3>
                  <div className="border rounded-lg p-4">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="med-name">Medication Name</Label>
                          <Input id="med-name" placeholder="Enter medication name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="med-dosage">Dosage</Label>
                          <Input id="med-dosage" placeholder="e.g., 10mg, 1 tablet" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="med-frequency">Frequency</Label>
                          <select
                            id="med-frequency"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select frequency</option>
                            <option value="once-daily">Once Daily</option>
                            <option value="twice-daily">Twice Daily</option>
                            <option value="three-times-daily">Three Times Daily</option>
                            <option value="four-times-daily">Four Times Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="as-needed">As Needed</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="med-time">Reminder Time</Label>
                          <Input id="med-time" type="time" />
                        </div>
                      </div>
                      <Button>Add Medication</Button>
                    </form>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="records">
          <Card>
            <CardHeader>
              <CardTitle>Health Records</CardTitle>
              <CardDescription>View and manage your medical records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Recent Records</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">Blood Test Results</h4>
                        </div>
                        <Badge variant="outline">Apr 10</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Central Hospital</p>
                      <p className="text-sm text-muted-foreground mb-4">Dr. Sarah Johnson</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">Chest X-Ray</h4>
                        </div>
                        <Badge variant="outline">Mar 15</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Memorial Medical Center</p>
                      <p className="text-sm text-muted-foreground mb-4">Dr. Michael Chen</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">Prescription</h4>
                        </div>
                        <Badge variant="outline">Apr 5</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Community Healthcare</p>
                      <p className="text-sm text-muted-foreground mb-4">Dr. Emily Rodriguez</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Upload New Record</h3>
                  <div className="border rounded-lg p-4">
                    <div className="text-center py-6">
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-medium mb-2">Upload Medical Records</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Securely store your medical records on IPFS with end-to-end encryption
                      </p>
                      <Link href="/records">
                        <Button>Upload Records</Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Shared Records</h3>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">Blood Test Results</h4>
                        <p className="text-sm text-muted-foreground">Shared with: Dr. Michael Chen</p>
                      </div>
                      <div className="text-right text-sm">
                        <div>Shared on: April 12, 2025</div>
                        <div className="text-muted-foreground">Expires: May 12, 2025</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Extend
                      </Button>
                      <Button variant="destructive" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/records">
                <Button>Manage All Records</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
