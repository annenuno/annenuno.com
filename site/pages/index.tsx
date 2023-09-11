// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../components/banner";
import Menu from "../components/sections/menu";
import Main from "../components/pages/main";
import Footer from "../components/sections/footer";
// import { Banner, Menu } from "../components/*.tsx";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#FAFAFA] h-auto">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#8B8ECD] mb-0 bg-[#E3E5FF]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4"></div>
      </header>
      <div className="h-screen">
        <div className="flex flex-row">
          <div>
            <Menu />
          </div>
        </div>
        <div className="bg-[FAFAFA]py-10 px-20 h-3/4">
          <div>
            <Main />
          </div>
        </div>
        <div className="h-auto px-20 py-5 bg-cyan-100">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
