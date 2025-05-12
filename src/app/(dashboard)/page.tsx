import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Home from "@/components/ui/home";
import Lomba from "@/components/ui/lomba";
import Sponsor from "@/components/ui/sponsor";
import { Fragment } from "react";

export default async function Dashboard() {
  
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
