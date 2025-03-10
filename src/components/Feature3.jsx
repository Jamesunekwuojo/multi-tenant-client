import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Feature3 = () => {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Manage Multiple Tenants{" "}
              <span className="text-primary">Effortlessly</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A powerful platform for businesses to manage multiple tenants,
              streamline operations, and gain valuable insights.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/signup">
              <button className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-lg font-medium text-white shadow hover:bg-black cursor-pointer">
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="inline-flex items-center cursor-pointer rounded-md border border-input bg-background px-6 py-3 text-lg font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">
                Create Tenant
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature3;
