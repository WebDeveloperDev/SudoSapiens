import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Bell, Clock, MapPin, Check, AlertTriangle, Pill } from "lucide-react"
import Link from "next/link"

export default function MedicinesPage() {
  // This would come from a database in a real application
  const medicines = [
    {
      id: 1,
      name: "Amoxicillin",
      category: "Antibiotic",
      description: "Used to treat bacterial infections",
      price: 12.99,
      prescription: true,
      availability: {
        "Central Pharmacy": true,
        MediPlus: true,
        HealthMart: false,
      },
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/437949243/TY/IL/IU/45342411/amoxicillin-capsule-500-mg-500x500.jpg?height=150&width=150",
    },
    {
      id: 2,
      name: "Lisinopril",
      category: "Blood Pressure",
      description: "Used to treat high blood pressure",
      price: 15.49,
      prescription: true,
      availability: {
        "Central Pharmacy": true,
        MediPlus: false,
        HealthMart: true,
      },
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/JR/YJ/LF/29824675/lisinopril-20-mg-tablet.jpg?height=150&width=150",
    },
    {
      id: 3,
      name: "Ibuprofen",
      category: "Pain Relief",
      description: "Used to relieve pain and reduce inflammation",
      price: 8.99,
      prescription: false,
      availability: {
        "Central Pharmacy": true,
        MediPlus: true,
        HealthMart: true,
      },
      image: "https://www.medicinedirect.co.uk/media/catalog/product/cache/af81a545d814a69bbc85f4b3802a1e51/2/2/220-4956.jpg?height=150&width=150",
    },
    {
      id: 4,
      name: "Cetirizine",
      category: "Allergy",
      description: "Used to relieve allergy symptoms",
      price: 10.29,
      prescription: false,
      availability: {
        "Central Pharmacy": true,
        MediPlus: true,
        HealthMart: false,
      },
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/394651866/XV/CH/GX/39084219/cetirizine-10-mg-tablet.jpg?height=150&width=150",
    },
  ]

  const reminders = [
    {
      id: 1,
      medicine: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      time: "8:00 AM",
      startDate: "2025-04-15",
      endDate: "2025-07-15",
    },
    {
      id: 2,
      medicine: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Once daily",
      time: "9:00 AM",
      startDate: "2025-03-01",
      endDate: "2025-09-01",
    },
  ]

  const orders = [
    {
      id: "ORD-12345",
      date: "April 18, 2025",
      status: "Delivered",
      items: [
        { name: "Amoxicillin", quantity: 1, price: 12.99 },
        { name: "Ibuprofen", quantity: 2, price: 8.99 },
      ],
      total: 30.97,
      pharmacy: "Central Pharmacy",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Medicine Services</h1>
        <p className="text-muted-foreground">Search for medicines, check availability, and order online</p>
      </div>

      <div className="bg-muted p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="medicine-search">Search Medicines</Label>
            <Input id="medicine-search" placeholder="Enter medicine name or category" />
          </div>
          <div className="flex items-end">
            <Button className="w-full gap-2">
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="search">Medicine Search</TabsTrigger>
          <TabsTrigger value="reminders">Medication Reminders</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="search">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <Card key={medicine.id}>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-24 h-24 mb-2">
                    <img
                      src={medicine.image || "/placeholder.svg"}
                      alt={medicine.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg">{medicine.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {medicine.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{medicine.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">${medicine.price.toFixed(2)}</span>
                    {medicine.prescription ? (
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      >
                        Prescription Required
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        OTC
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-medium">Availability:</h4>
                    {Object.entries(medicine.availability).map(([pharmacy, available]) => (
                      <div key={pharmacy} className="flex items-center justify-between text-sm">
                        <span>{pharmacy}</span>
                        {available ? (
                          <span className="flex items-center text-green-600 dark:text-green-400">
                            <Check className="h-4 w-4 mr-1" /> In Stock
                          </span>
                        ) : (
                          <span className="flex items-center text-red-600 dark:text-red-400">
                            <AlertTriangle className="h-4 w-4 mr-1" /> Out of Stock
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">Load More Medicines</Button>
          </div>
        </TabsContent>

        <TabsContent value="reminders">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Your Medication Reminders</CardTitle>
                <CardDescription>Keep track of your medication schedule</CardDescription>
              </CardHeader>
              <CardContent>
                {reminders.length > 0 ? (
                  <div className="space-y-4">
                    {reminders.map((reminder) => (
                      <div
                        key={reminder.id}
                        className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <Pill className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{reminder.medicine}</h4>
                            <p className="text-sm text-muted-foreground">
                              {reminder.dosage} - {reminder.frequency}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-center">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{reminder.time}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {reminder.startDate} to {reminder.endDate}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="destructive" size="sm">
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No medication reminders set.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Add New Reminder</CardTitle>
                <CardDescription>Set up a new medication reminder</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="medicine-name">Medicine Name</Label>
                    <Input id="medicine-name" placeholder="Enter medicine name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dosage">Dosage</Label>
                    <Input id="dosage" placeholder="e.g., 10mg, 1 tablet" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <select
                      id="frequency"
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
                    <Label htmlFor="reminder-time">Reminder Time</Label>
                    <Input id="reminder-time" type="time" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                  <Button className="w-full gap-2">
                    <Bell className="h-4 w-4" /> Set Reminder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Your Medicine Orders</CardTitle>
              <CardDescription>Track and manage your medicine orders</CardDescription>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-medium">Order #{order.id}</h4>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          >
                            {order.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="mb-4">
                          <h5 className="text-sm font-medium mb-2">Items:</h5>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>
                                  {item.name} x{item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t pt-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{order.pharmacy}</span>
                          </div>
                          <div className="font-medium">Total: ${order.total.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No orders found.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/medicines/cart">
                <Button className="gap-2">
                  <ShoppingCart className="h-4 w-4" /> View Cart
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
