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
import { useEffect, useState } from "react";

const Asidemenu = () => {
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
          <SheetClose asChild>
            <Link
              href="/login"
              className={`${
                active.contact && "active"
              } py-3 px-2 rounded-md flex items-center gap-3 hover:bg-blue-950 hover:border-slate-200 border border-transparent transition mb-2 bg-blue-900 text-slate-200 mx-3`}
              onClick={() =>
                setActive({
                  home: false,
                  about: false,
                  lomba: false,
                  contact: true,
                })
              }
            >
              <i className="bx bx-log-in text-lg"></i> Login
            </Link>
          </SheetClose>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default Asidemenu;
