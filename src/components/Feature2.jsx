import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Feature2 = () => {
  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to streamline your multi-tenant operations?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join thousands of businesses that trust TenantHub for their
              multi-tenancy needs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href="/signup">
              <button  className="inline-flex items-center gap-2 py-4 px-4 bg-black text-white hover:bg-black rounded-md cursor-pointer">
                Sign Up Now <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature2;
