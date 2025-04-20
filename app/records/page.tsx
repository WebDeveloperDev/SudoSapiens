"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Lock, Shield, Download, Eye, Calendar, User, Clock, FileUp, Search } from "lucide-react"

export default function RecordsPage() {
  // This would come from a database in a real application
  const records = [
    {
      id: "rec-12345",
      name: "Blood Test Results",
      date: "April 10, 2025",
      provider: "Central Hospital",
      doctor: "Dr. Sarah Johnson",
      type: "Laboratory",
      size: "2.4 MB",
      ipfsHash: "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
    },
    {
      id: "rec-12346",
      name: "Chest X-Ray",
      date: "March 15, 2025",
      provider: "Memorial Medical Center",
      doctor: "Dr. Michael Chen",
      type: "Radiology",
      size: "8.7 MB",
      ipfsHash: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
    },
    {
      id: "rec-12347",
      name: "Prescription - Amoxicillin",
      date: "April 5, 2025",
      provider: "Community Healthcare",
      doctor: "Dr. Emily Rodriguez",
      type: "Prescription",
      size: "1.2 MB",
      ipfsHash: "QmZTR5bcpQD7cFgTorqxZDYaew1Wqgfbd2ud9QqGPAkK2V",
    },
  ]

  const sharedRecords = [
    {
      id: "share-12345",
      recordName: "Blood Test Results",
      sharedWith: "Dr. Michael Chen",
      sharedOn: "April 12, 2025",
      expiresOn: "May 12, 2025",
      status: "active",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Health Records</h1>
        <p className="text-muted-foreground">Securely store and manage your medical records using IPFS technology</p>
      </div>

      <div className="bg-muted p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="record-search">Search Records</Label>
            <Input id="record-search" placeholder="Search by name, doctor, or type" />
          </div>
          <div className="flex items-end">
            <Button className="w-full gap-2">
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="records" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="records">My Records</TabsTrigger>
          <TabsTrigger value="upload">Upload Records</TabsTrigger>
          <TabsTrigger value="shared">Shared Records</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {records.map((record) => (
              <Card key={record.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{record.name}</CardTitle>
                      <CardDescription>{record.provider}</CardDescription>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{record.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{record.doctor}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{record.type}</Badge>
                      <span className="text-xs text-muted-foreground">{record.size}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="h-4 w-4" /> View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Shield className="h-4 w-4" /> Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">Load More Records</Button>
          </div>
        </TabsContent>

        <TabsContent value="upload">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Upload Medical Records</CardTitle>
                <CardDescription>
                  Securely store your medical records on IPFS with end-to-end encryption
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="record-name">Record Name</Label>
                      <Input id="record-name" placeholder="e.g., Blood Test Results" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="record-type">Record Type</Label>
                      <select
                        id="record-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select record type</option>
                        <option value="laboratory">Laboratory</option>
                        <option value="radiology">Radiology</option>
                        <option value="prescription">Prescription</option>
                        <option value="consultation">Consultation</option>
                        <option value="surgery">Surgery</option>
                        <option value="vaccination">Vaccination</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="provider">Healthcare Provider</Label>
                      <Input id="provider" placeholder="Hospital or clinic name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor">Doctor Name</Label>
                      <Input id="doctor" placeholder="Doctor's full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="record-date">Record Date</Label>
                      <Input id="record-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="record-notes">Notes (Optional)</Label>
                      <Input id="record-notes" placeholder="Additional information" />
                    </div>
                  </div>

                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <FileUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Upload Files</h3>
                    <p className="text-sm text-muted-foreground mb-4">Drag and drop files here or click to browse</p>
                    <Input id="file-upload" type="file" className="hidden" />
                    <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                      Select Files
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: PDF, JPG, PNG, DICOM (max 50MB)
                    </p>
                  </div>

                  <Button className="w-full gap-2">
                    <Upload className="h-4 w-4" /> Upload to IPFS
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secure Storage</CardTitle>
                <CardDescription>How we protect your medical records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">End-to-End Encryption</h4>
                      <p className="text-sm text-muted-foreground">
                        Your records are encrypted before being uploaded to IPFS, ensuring only you can access them.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Decentralized Storage</h4>
                      <p className="text-sm text-muted-foreground">
                        IPFS technology ensures your records are stored across a distributed network, eliminating single
                        points of failure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Access Control</h4>
                      <p className="text-sm text-muted-foreground">
                        You control who can access your records and for how long, with detailed permission settings.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="shared">
          <Card>
            <CardHeader>
              <CardTitle>Shared Records</CardTitle>
              <CardDescription>Manage records you've shared with healthcare providers</CardDescription>
            </CardHeader>
            <CardContent>
              {sharedRecords.length > 0 ? (
                <div className="space-y-4">
                  {sharedRecords.map((shared) => (
                    <div
                      key={shared.id}
                      className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-medium">{shared.recordName}</h4>
                        <p className="text-sm text-muted-foreground">Shared with: {shared.sharedWith}</p>
                      </div>
                      <div className="flex flex-col md:items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Shared on: {shared.sharedOn}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Expires: {shared.expiresOn}</span>
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
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No shared records found.</p>
                </div>
              )}

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Share a Record</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="select-record">Select Record</Label>
                      <select
                        id="select-record"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a record to share</option>
                        {records.map((record) => (
                          <option key={record.id} value={record.id}>
                            {record.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="share-with">Share With</Label>
                      <Input id="share-with" placeholder="Doctor or healthcare provider" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry-date">Expiry Date</Label>
                      <Input id="expiry-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="access-level">Access Level</Label>
                      <select
                        id="access-level"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="view">View Only</option>
                        <option value="download">View & Download</option>
                        <option value="full">Full Access</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full">Share Record</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
