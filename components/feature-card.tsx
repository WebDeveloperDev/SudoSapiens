import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export default function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 flex flex-col h-full border shadow-sm">
      <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <Link href={link} className="mt-auto">
        <Button variant="outline" className="w-full gap-1">
          Explore <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
