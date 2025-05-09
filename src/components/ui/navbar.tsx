import { Bebas_Neue } from "next/font/google";
import { NavigationMenuLink } from "./navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import Navmenu from "./Navmenu";
import Asidemenu from "./Asidemenu";

const Neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="max-w-[95%] lg:max-w-[85%] flex items-center justify-between mx-auto p-3 px-4 rounded-md shadow my-2 bg-slate-900">
      <section>
        <h1 className={`${Neue.className} text-2xl text-slate-200`}>
          CSS UNILA
        </h1>
      </section>
      <section>
        <Navmenu />
        <Asidemenu />
      </section>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
