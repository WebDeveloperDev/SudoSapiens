"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Menu,
  X,
  User,
  Bell,
  Search,
  Calendar,
  Pill,
  MapPin,
  Bed,
  FileText,
  Wallet,
  SlidersHorizontal,
  Shield,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <Shield className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl hidden md:inline-block">Chikitsa+</span> */}
             <img src="/logo.png" alt="Chikitsa+" className="h-8 w-8" style={{ minWidth: "180px", height: "auto" }}/>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Services <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/appointments" className="flex items-center gap-2 cursor-pointer w-full">
                  <Calendar className="h-4 w-4" /> Appointments
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/medicines" className="flex items-center gap-2 cursor-pointer w-full">
                  <Pill className="h-4 w-4" /> Medicines
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/search" className="flex items-center gap-2 cursor-pointer w-full">
                  <MapPin className="h-4 w-4" /> Find Doctors & Hospitals
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/beds" className="flex items-center gap-2 cursor-pointer w-full">
                  <Bed className="h-4 w-4" /> Bed Booking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/records" className="flex items-center gap-2 cursor-pointer w-full">
                  <FileText className="h-4 w-4" /> Health Records
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>

          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>

          <ModeToggle />

          <Link href="/dashboard" className="hidden md:block">
            <Button variant="outline" size="sm" className="gap-1">
              <User className="h-4 w-4" /> Account
            </Button>
          </Link>

          <Link href="/login" className="hidden md:block">
            <Button size="sm">Sign In</Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container py-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Services</p>
          </div>

          <nav className="grid gap-4">
            <Link
              href="/appointments"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-muted"
              onClick={toggleMenu}
            >
              <Calendar className="h-5 w-5 text-primary" />
              <span>Appointments</span>
            </Link>

            <Link
              href="/medicines"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-muted"
              onClick={toggleMenu}
            >
              <Pill className="h-5 w-5 text-primary" />
              <span>Medicines</span>
            </Link>

            <Link href="/search" className="flex items-center gap-3 p-3 rounded-md hover:bg-muted" onClick={toggleMenu}>
              <MapPin className="h-5 w-5 text-primary" />
              <span>Find Doctors & Hospitals</span>
            </Link>

            <Link href="/beds" className="flex items-center gap-3 p-3 rounded-md hover:bg-muted" onClick={toggleMenu}>
              <Bed className="h-5 w-5 text-primary" />
              <span>Bed Booking</span>
            </Link>

            <Link
              href="/records"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-muted"
              onClick={toggleMenu}
            >
              <FileText className="h-5 w-5 text-primary" />
              <span>Health Records</span>
            </Link>

            <Link href="/wallet" className="flex items-center gap-3 p-3 rounded-md hover:bg-muted" onClick={toggleMenu}>
              <Wallet className="h-5 w-5 text-primary" />
              <span>Crypto Wallet</span>
            </Link>
          </nav>

          <div className="border-t pt-4 flex flex-col gap-4">
            <Link href="/about" className="p-3 rounded-md hover:bg-muted" onClick={toggleMenu}>
              About
            </Link>

            <Link href="/contact" className="p-3 rounded-md hover:bg-muted" onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          <div className="border-t pt-4 flex flex-col gap-4">
            <Link href="/login" onClick={toggleMenu}>
              <Button className="w-full">Sign In</Button>
            </Link>

            <Link href="/register" onClick={toggleMenu}>
              <Button variant="outline" className="w-full">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
