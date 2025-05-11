import { auth } from "@/auth";
import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Home from "@/components/ui/home";
import Lomba from "@/components/ui/lomba";
import Sponsor from "@/components/ui/sponsor";
import { Fragment } from "react";

export default function Dashboard() {
  const session = auth();
  console.log(session);
  
  return (
    <Fragment>
        <Home />
        <About />
        <Lomba />
        <Contact />
        <Sponsor />
    </Fragment>
  );
}
