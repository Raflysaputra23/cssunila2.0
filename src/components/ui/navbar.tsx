import { Bebas_Neue } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import Link from "next/link";
import { Button } from "./button";
import React from "react";
import { cn } from "@/lib/utils";

const Neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const components = [
    {
        title: "Mobile Legends",
        href: "/mobile-legends",
        description: "Cabang Lomba Mobile Legends"
    },
    {
        title: "LCT",
        href: "/lct",
        description: "Cabang Lomba Cepat Tepat Komputer"
    },
    {
        title: "CPC",
        href: "/cpc",
        description: "Cabang Lomba Competitive Programming Competition"
    },
    {
        title: "Futsal",
        href: "/futsal",
        description: "Cabang Lomba Futsal"
    },
]

const Navbar = () => {
  return (
    <nav className="w-[95%] lg:w-full lg:max-w-3/4 flex items-center justify-between mx-auto p-3 px-4 rounded-md shadow my-2 bg-slate-800">
      <section>
        <NavigationMenu>
          <NavigationMenuList className="gap-3">
            <NavigationMenuItem>
              <Button asChild>
                <Link
                  href="/#"
                  className="hover:bg-slate-900 hover:border-slate-700 bg-slate-700"
                >
                  Home
                </Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild>
                <Link
                  href="/#about"
                  className="hover:bg-slate-900 hover:border-slate-700 bg-slate-700"
                >
                  About
                </Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-slate-700 text-slate-200">Lomba</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-slate-700">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-slate-200">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section>
        <h1 className={`${Neue.className} text-2xl text-slate-200`}>
          CSS UNILA
        </h1>
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
