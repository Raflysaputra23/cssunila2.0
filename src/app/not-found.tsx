import { Button } from "@/components/ui/button";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image"
import Link from "next/link";

const Neue = Bebas_Neue({
    weight: ["400"],  
    subsets: ["latin"],
  });
const NotFound = () => {
  return (
    <section className="max-w-[95%] lg:max-w-[85%] py-10 mx-auto flex flex-col justify-center items-center gap-1">
        <Image src="/not-found.svg" alt="not-found" width={300} height={300} />
        <h1 className={`${Neue.className} text-5xl text-slate-100`}>
          Not Found
        </h1>
        <Button asChild>
            <Link
                href="/"
                className="hover:bg-slate-900 hover:border-slate-700 bg-slate-700"
            >
                <i className="bx bx-left-arrow-alt"></i>
                Back to Home
            </Link>
        </Button>
    </section>
  )
}

export default NotFound
