
import { ArrowRight, Building2, Database, Lock, Users } from "lucide-react";
import  { Link } from "react-router-dom";

const Mainnav = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 mx-4">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl  font-bold">TenantHub</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Testimonials
            </Link>
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
    </div>
  );
};

export default Mainnav;
