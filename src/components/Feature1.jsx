import { Users, Database, Lock } from "react-feather";

const Feature1 = () => {
  return (
    <>
      <section
        id="features"
        className="container py-24 sm:py-32 bg-muted/50 rounded-lg"
      >
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
              Keep tenant data separate and secure with our advanced isolation
              techniques.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure Access</h3>
            <p className="text-muted-foreground">
              Role-based access control ensures tenants only see what they need
              to.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature1;
