import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const Neue = Bebas_Neue({
    weight: ["400"],  
    subsets: ["latin"],
  });

const Home = () => {
  return (
    <section className="max-w-[95%] lg:max-w-[85%] py-40 mx-auto flex flex-col justify-center items-center gap-2">
      <h1 className={`${Neue.className} text-6xl lg:text-8xl text-slate-100`}>
        CSS UNILA 2.0
      </h1>
      <p className="text-slate-500 text-[.6rem] lg:text-[.8rem]">
        CSS Unila | Computer Science Showdown 2025
      </p>
      <h3 className="text-center text-slate-300 mt-4 mx-auto w-[90%] text-[.8rem] lg:w-2/3 lg:text-sm">
        CSS UNILA 2.0 adalah acara besar yang bersifat pengembangan keilmuan
        sebagai refleksi dari Visi dan Misi FMIPA yang menuntut kami untuk
        selalu menjujung tinggi tentang penelitian
      </h3>
        <Link href={"#about"} className="mt-14 animate-bounce w-12 h-12 flex rounded-full bg-slate-200">
            <i className='bx bx-down-arrow-alt text-2xl m-auto'></i>
        </Link>
    </section>
  );
};

export default Home;
