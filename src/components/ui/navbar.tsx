import { Bebas_Neue } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import Link from "next/link";
import { Button } from "./button";
import React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import type { ComponentLomba } from "@/types/types"

const Neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const components: ComponentLomba[] = [
  {
    title: "Mobile Legends",
    href: "/mobile-legends",
    description: "Cabang lomba mobile legends ini dapat diikuti oleh umum",
  },
  {
    title: "LCT",
    href: "/lct",
    description: "Lomba cepat tepat ini dapat diikuti oleh umum",
  },
  {
    title: "CPC",
    href: "/cpc",
    description: "Competitive Programming Competition ini dapat diikuti oleh umum",
  },
  {
    title: "Futsal",
    href: "/futsal",
    description: "Cabang lomba futsal ini dapat diikuti oleh umum",
  },
];

const Navbar = () => {
  return (
    <nav className="max-w-[95%] lg:max-w-[85%] flex items-center justify-between mx-auto p-3 px-4 rounded-md shadow my-2 bg-slate-800">
      <section>
        <h1 className={`${Neue.className} text-2xl text-slate-200`}>
          CSS UNILA
        </h1>
      </section>
      <section>
        <NavigationMenu className="hidden lg:flex">
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="hover:bg-slate-900 hover:border-slate-700 bg-slate-700">
                    Lomba
                    <i className="bx bx-chevron-down"></i>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-700 text-slate-200 border-0 shadow">
                  <DropdownMenuLabel>Cabang Lomba</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-500" />
                  {components.map((item: ComponentLomba) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild className="inline-block lg:hidden">
            <Button className="cursor-pointer shadow px-3"><i className="bx bx-menu text-xl"></i></Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[50%] max-w-[500px] bg-slate-800 border-0 shadow">
            <SheetHeader>
              <SheetTitle className="text-slate-200">Menu </SheetTitle>
            </SheetHeader>
            <section className="flex flex-col gap-1 mt-7 text-slate-200 px-3">
                <Link href="/home" className="py-3 px-2 rounded-md flex items-center gap-3 active"><i className="bx bxs-home text-lg"></i> Home</Link>
                <Link href="/about" className="py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900"><i className="bx bxs-notepad text-lg"></i> About</Link>
                <Link href="/home" className="py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900"><i className="bx bx-sitemap text-lg"></i> Lomba</Link>
                <Link href="/home" className="py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900"><i className="bx bxs-phone text-lg"></i> Contact</Link>
            </section>
          </SheetContent>
        </Sheet>
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
