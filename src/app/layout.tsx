import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import "boxicons/css/boxicons.min.css";
import ClickSpark from "@/components/cursor/CursorClick";
import Footer from "@/components/ui/footer";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "CSS UNILA 2.0",
    template: "CSS UNILA 2.0 | %s",
  },
  description: "CSS UNILA 2.0 adalah acara besar yang bersifat pengembangan keilmuan sebagai refleksi dari Visi dan Misi FMIPA yang menuntut kami untuk selalu menjujung tinggi tentang penelitian.",
  icons: {
    icon: "/next.svg",
  },
  keywords: ["css", "unila", "cssunila", "css unila", "css unila 2.0", "next js"],
  authors: [{ name: "M.Rafly Saputra", url: "https://github.com/Raflysaputra23" }],
  creator: "M.Rafly Saputra",
  publisher: "M.Rafly Saputra",
  openGraph: {
    title: "CSS UNILA 2.0",
    description: "CSS UNILA 2.0 adalah acara besar yang bersifat pengembangan keilmuan sebagai refleksi dari Visi dan Misi FMIPA yang menuntut kami untuk selalu menjujung tinggi tentang penelitian.",
    url: "https://cssunila2-0.vercel.app/",
    siteName: "CSS UNILA 2.0",
    locale: "id_ID",
    type: "website",  
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-slate-950 overflow-x-hidden antialiased`}>
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Navbar />
              {children}
            <Footer />
          </ClickSpark>
      </body>
    </html>
  );
}
