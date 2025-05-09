import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import type { ComponentLomba } from "@/types/types"
import { Button } from "./button";
const components: ComponentLomba[] = [
    {
      title: "Mobile Legends",
      href: "/mobile-legends",
      description: "Cabang lomba mobile legends ini dapat diikuti oleh umum",
      icon: "bx bxs-joystick"
    },
    {
      title: "LCT",
      href: "/lct",
      description: "Lomba cepat tepat ini dapat diikuti oleh umum",
      icon: "bx bxs-timer"
    },
    {
      title: "CPC",
      href: "/cpc",
      description: "Competitive Programming Competition ini dapat diikuti oleh umum",
      icon: "bx bxs-tv"
    },
    {
      title: "Futsal",
      href: "/futsal",
      description: "Cabang lomba futsal ini dapat diikuti oleh umum",
      icon: "bx bx-football"
    },
    {
      title: "Basket",
      href: "/basket",
      description: "Cabang lomba basket ini dapat diikuti oleh umum",
      icon: "bx bx-basketball"
    },
  ];

const Lomba = () => {
  return (
    <section id="lomba" className="max-w-[95%] lg:max-w-[85%] py-10 mx-auto">
      <h2
        className="bg-slate-900 text-slate-200 py-2 px-3 rounded-md shadow inline-block"
      >
        Lomba
      </h2>
      <section className="mt-4 grid grid-cols-2 gap-4">
        {components.map((item: ComponentLomba) => (
          <Link href={item.href} key={item.title} className="col-span-2 lg:col-span-1">
            <Card className="bg-slate-900 shadow text-slate-200 transition hover:bg-slate-950 hover:scale-105 cursor-pointer h-full w-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><i className={`${item.icon} text-3xl`}></i> {item.title}</CardTitle>
                    <CardDescription className="text-slate-400">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <p>Card Content</p> */}
                </CardContent>
                <CardFooter>
                    {/* <p>Card Footer</p> */}
                    <Button className="hover:bg-slate-800 hover:border-slate-700 bg-slate-800 cursor-pointer">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </Button>
                </CardFooter>
            </Card>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Lomba;
