import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-10">
      <div className="grid gap-8 w-full max-w-[900px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
            <p className="text-muted-foreground">Join SecureMed to access secure healthcare management services</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    privacy policy
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full">Create Account</Button>
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              Apple
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center">
          <div className="bg-muted rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-full">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">Why Choose SecureMed?</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-medium mb-2">All-in-One Healthcare Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Book appointments, find doctors, order medicines, and manage health records in one secure platform.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-medium mb-2">Blockchain Security</h3>
                <p className="text-sm text-muted-foreground">
                  Your health data is secured with advanced blockchain technology and IPFS storage for maximum privacy.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-medium mb-2">Cryptocurrency Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Pay for healthcare services using cryptocurrency for secure, transparent, and efficient transactions.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/features">
                <Button variant="link" className="gap-1 p-0">
                  Explore all features <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
