"use client";

import Link from "next/link";
import { Button } from "./button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { User } from "@/types/types";
import { signOut, useSession } from "next-auth/react";

const Asidemenu = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<{ [key: string]: boolean }>({
    home: false,
    about: false,
    lomba: false,
    contact: false,
  });

  const { data, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (data && status == "authenticated") {
      setUser(data.user);
    }
  }, [status, data]);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut();
  };

  const handleLogin = useCallback(() => {
    if (status == "loading") {
      return (
        <SheetClose asChild>
          <Button
          disabled
            className={`py-3 px-2 rounded-md flex items-center gap-3 hover:!border-slate-200 border border-transparent transition mb-2 text-slate-200 mx-3`}
          >
            <i className="bx bx-loader animate-spin text-2xl"></i>
          </Button>
        </SheetClose>
      );
    } else {
      return user ? (
        <SheetClose asChild>
          <Link
            href="/"
            className={`py-3 px-2 rounded-md flex items-center gap-3 hover:bg-red-800 hover:border-slate-200 border border-transparent transition mb-2 bg-red-500 text-slate-200 mx-3`}
            onClick={handleLogout}
          >
            <i className="bx bx-log-out text-lg"></i> Logout
          </Link>
        </SheetClose>
      ) : (
        <SheetClose asChild>
          <Link
            href="/login"
            className={`py-3 px-2 rounded-md flex items-center gap-3 hover:bg-blue-950 hover:border-slate-200 border border-transparent transition mb-2 bg-blue-900 text-slate-200 mx-3`}
          >
            <i className="bx bx-log-in text-lg"></i> Login
          </Link>
        </SheetClose>
      );
    }
  }, [status, user]);

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
    <Sheet>
      <SheetTrigger asChild className="inline-block lg:hidden">
        <Button className="cursor-pointer shadow px-3">
          <i className="bx bx-menu text-xl"></i>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[50%] max-w-[500px] bg-slate-800 border-0 shadow"
      >
        <SheetHeader>
          <SheetTitle className="text-slate-200">Menu </SheetTitle>
        </SheetHeader>
        <section className="h-full flex flex-col justify-between">
          <section className="flex flex-col gap-1 mt-7 text-slate-200 px-3">
            <SheetClose asChild>
              <Link
                href="/"
                className={`${
                  active.home && "active"
                } py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900 transition `}
                onClick={() =>
                  setActive({
                    home: true,
                    about: false,
                    lomba: false,
                    contact: false,
                  })
                }
              >
                <i className="bx bxs-home text-lg"></i> Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/#about"
                className={`${
                  active.about && "active"
                } py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900 transition `}
                onClick={() =>
                  setActive({
                    home: false,
                    about: true,
                    lomba: false,
                    contact: false,
                  })
                }
              >
                <i className="bx bxs-notepad text-lg"></i> About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/#lomba"
                className={`${
                  active.lomba && "active"
                } py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900 transition `}
                onClick={() =>
                  setActive({
                    home: false,
                    about: false,
                    lomba: true,
                    contact: false,
                  })
                }
              >
                <i className="bx bx-sitemap text-lg"></i> Lomba
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/#contact"
                className={`${
                  active.contact && "active"
                } py-3 px-2 rounded-md flex items-center gap-3 hover:bg-slate-200 hover:text-slate-900 transition `}
                onClick={() =>
                  setActive({
                    home: false,
                    about: false,
                    lomba: false,
                    contact: true,
                  })
                }
              >
                <i className="bx bxs-phone text-lg"></i> Contact
              </Link>
            </SheetClose>
          </section>
          {handleLogin()}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default Asidemenu;
