import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToogle";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Testimonial", to: "/testimonial" },
  { label: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNavClick = () => {
    setIsSheetOpen(false); // Close the sheet on navigation
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          RiyanPhotography
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] p-6">
              <div className="flex flex-col gap-4 mt-6">
                {navItems.map(({ label, to }) => (
                  <NavLink
                    key={label}
                    to={to}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
