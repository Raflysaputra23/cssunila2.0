import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import SplitText from "../text/SplitText";
import FadeContent from "../fade/FadeContent";
import BackgroundUtama from "../background/BackgroundUtama";
import ButtonScroll from "../scroll/ButtonScroll";

const Neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Home = () => {
  return (
    <section className="max-w-[95%] lg:max-w-[85%] py-40 mx-auto flex flex-col justify-center items-center gap-2">
      <BackgroundUtama />
      <ButtonScroll />
      <SplitText
        text="CSS UNILA 2.0"
        className={`${Neue.className} text-6xl lg:text-8xl text-slate-100 text-push`}
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
      />
      <SplitText
        text="CSS Unila | Computer Science Showdown 2025"
        className={`text-slate-400 text-[.6rem] lg:text-[.8rem]`}
        delay={50}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
      />
      <SplitText
        text="CSS UNILA 2.0 adalah acara besar yang bersifat pengembangan keilmuan
        sebagai refleksi dari Visi dan Misi FMIPA yang menuntut kami untuk
        selalu menjujung tinggi tentang penelitian."
        className={`text-center text-slate-300 mt-4 mx-auto w-[90%] text-[.8rem] lg:w-2/3 lg:text-sm`}
        delay={10}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
      />
      <FadeContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 100 }}
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <Link
          href={"#about"}
          className="mt-14 animate-bounce w-12 h-12 flex rounded-full bg-slate-200"
        >
          <i className="bx bx-down-arrow-alt text-2xl m-auto"></i>
        </Link>
      </FadeContent>
    </section>
  );
};

export default Home;
