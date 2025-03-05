import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 mx-4">
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
        </>
    );
}
 
export default Footer;