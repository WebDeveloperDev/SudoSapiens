import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-10">
      <div className="grid gap-8 w-full max-w-[900px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your SecureMed account to access your healthcare services
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full">Sign In</Button>
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Create one
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
              <h2 className="text-xl font-semibold">SecureMed Benefits</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-medium mb-2">Secure Health Records</h3>
                <p className="text-sm text-muted-foreground">
                  Store your medical records securely using IPFS technology with end-to-end encryption.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-medium mb-2">Crypto Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Pay for healthcare services using cryptocurrency for secure and transparent transactions.
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-medium mb-2">Comprehensive Healthcare</h3>
                <p className="text-sm text-muted-foreground">
                  Access appointments, medicine services, hospital beds, and more in one platform.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button variant="link" className="gap-1 p-0">
                  Learn more about SecureMed <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
