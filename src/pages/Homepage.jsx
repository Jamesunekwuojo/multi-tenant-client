
import { ArrowRight, Building2, Database, Lock, Users } from "lucide-react"
import { Link } from "react-router-dom"



function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 mx-4">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl  font-bold">TenantHub</span>
          </div>
          <nav className="flex items-center gap-4">
{/*             <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Testimonials
            </Link> */}
            <Link href="/login">
              <button variant="ghost" className="text-sm">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="text-sm">Sign Up</button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Manage Multiple Tenants <span className="text-primary">Effortlessly</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A powerful platform for businesses to manage multiple tenants, streamline operations, and gain valuable
                insights.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              
                <button size="" className=" bg-black hover:bg-opacity-90 cursor-pointer text-white py-4 px-4 rounded-lg flex flex-items-center"> 
                  <p>Get Started </p> <ArrowRight className="h-4 w-4 " />
                </button>
              
              <Link href="/create-tenant">
                <button size="lg" variant="outline">
                  Create Tenant
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="container py-24 sm:py-32 bg-muted/50 rounded-lg">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Multi-Tenant Management</h3>
              <p className="text-muted-foreground">
                Easily create and manage multiple tenants from a single dashboard.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Data Isolation</h3>
              <p className="text-muted-foreground">
                Keep tenant data separate and secure with our advanced isolation techniques.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure Access</h3>
              <p className="text-muted-foreground">
                Role-based access control ensures tenants only see what they need to.
              </p>
            </div>
          </div>
        </section>

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
