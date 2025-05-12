"use client";

import { ComponentLomba, User } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./navigation-menu";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

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
    description:
      "Competitive Programming Competition ini dapat diikuti oleh umum",
  },
  {
    title: "Futsal",
    href: "/futsal",
    description: "Cabang lomba futsal ini dapat diikuti oleh umum",
  },
  {
    title: "Basket",
    href: "/basket",
    description: "Cabang lomba basket ini dapat diikuti oleh umum",
  },
];

const Navmenu = () => {
  const { data, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(data?.user ?? null);
  }, [status]);

  const pathname = usePathname();
  const [active, setActive] = useState<{ [key: string]: boolean }>({
    home: false,
    about: false,
    lomba: false,
    contact: false,
  });
  useEffect(() => {
    if (window.location.hash == "#about") {
      setActive({ home: false, about: true, lomba: false, contact: false });
    } else if (window.location.hash == "#lomba") {
      setActive({ home: false, about: false, lomba: true, contact: false });
    } else if (window.location.hash == "#contact") {
      setActive({ home: false, about: false, lomba: false, contact: true });
    } else if (pathname == "/") {
      setActive({ home: true, about: false, lomba: false, contact: false });
    }
  }, [pathname]);

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <Button asChild>
            <Link
              href="/"
              className={`${
                active.home && "active"
              } hover:bg-slate-200 hover:text-slate-900 transition`}
              onClick={() =>
                setActive({
                  home: true,
                  about: false,
                  lomba: false,
                  contact: false,
                })
              }
            >
              Home
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild>
            <Link
              href="/#about"
              className={`${
                active.about && "active"
              } hover:bg-slate-200 hover:text-slate-900 transition`}
              onClick={() =>
                setActive({
                  home: false,
                  about: true,
                  lomba: false,
                  contact: false,
                })
              }
            >
              About
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button asChild>
            <Link
              href="/#contact"
              className={`${
                active.contact && "active"
              } hover:bg-slate-200 hover:text-slate-900 transition`}
              onClick={() =>
                setActive({
                  home: false,
                  about: false,
                  lomba: false,
                  contact: true,
                })
              }
            >
              Contact
            </Link>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={`${
                  active.lomba && "active"
                } hover:bg-slate-200 hover:text-slate-900 transition`}
                onClick={() =>
                  setActive({
                    home: false,
                    about: false,
                    lomba: true,
                    contact: false,
                  })
                }
              >
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
        <NavigationMenuItem>
          {user ? (
            <Button
              className={`hover:!bg-red-800 hover:text-slate-200 hover:border-slate-200 border border-transparent shadow transition !bg-red-500 ms-5`}
              onClick={() => signOut()}
            >
              Logout
            </Button>
          ) : (
            <Button asChild>
              <Link
                href="/login"
                className={` hover:!bg-blue-950 hover:text-slate-200 hover:border-slate-200 border border-transparent shadow transition !bg-blue-900 ms-5`}
              >
                Login
              </Link>
            </Button>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navmenu;
