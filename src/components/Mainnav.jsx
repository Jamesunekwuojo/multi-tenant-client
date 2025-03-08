
import { ArrowRight, Building2, Database, Lock, Users } from "lucide-react";
import  { Link } from "react-router-dom";

const Mainnav = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 mx-4">
            <Building2 className="h-6 w-6 text-primary" />
            <Link to="/" className="text-xl cursor-pointer font-bold">TenantHub</Link>

          </div>
          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Home
            </Link>
            {/* <Link
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
            </Link> */}
            <Link href="/login">
              <button variant="ghost " className="text-sm text-white px-4 py-2 rounded-md bg-black hover:bg-black cursor-pointer">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="text-sm cursor-pointer">Sign Up</button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Mainnav;
