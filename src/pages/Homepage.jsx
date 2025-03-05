
import { ArrowRight, Building2, Database, Lock, Users } from "lucide-react"
import { Link } from "react-router-dom"
import Mainnav from "../components/Mainnav"
import Button from "../components/Button"
import Feature1 from "../components/Feature1"


function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">

      <Mainnav></Mainnav>
      
      <main className="flex-1">

        <Feature1></Feature1>


        <section className="container py-24 sm:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to streamline your multi-tenant operations?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of businesses that trust TenantHub for their multi-tenancy needs.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup">
                <button size="lg" className="gap-2">
                  Sign Up Now <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">TenantHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MPC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default Home
