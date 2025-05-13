import SplitText from "@/components/text/SplitText";
import { Bebas_Neue } from "next/font/google";

const Neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Loading = () => {
  return (
    <section className="fixed z-20 top-0 left-0 right-0 bottom-0 text-push flex-col flex items-center justify-center gap-8 bg-slate-900">
      <SplitText
        text="CSS UNILA 2.0"
        className={`${Neue.className} text-push text-6xl lg:text-8xl text-slate-200`}
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
      />
      <i className="bx bx-loader animate-spin text-6xl text-slate-200"></i>
    </section>
  );
};

export default Loading;
