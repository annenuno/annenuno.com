// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../components/banner";
import Menu from "../components/sections/menu";
import Main from "../components/pages/main";
import Footer from "../components/sections/footer";
import Image from "next/image";
// import { Banner, Menu } from "../components/*.tsx";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#FAFAFA] h-auto">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#8B8ECD] mb-0 bg-[#E3E5FF]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4">
          <div className="flex flex-col justify-around">
            <div>
              <Image
                priority
                src="/moon.svg"
                height={32}
                width={32}
                alt="moon"
                className="pt-10"
              />
            </div>
            <div>
              <Image
                priority
                src="/cat.svg"
                height={32}
                width={32}
                alt="cat"
                className="py-10"
              />
            </div>
            <div>
              <Image
                priority
                src="/email.svg"
                height={32}
                width={32}
                alt="email"
                className="pb-10"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="h-screen">
        <div className="flex flex-row">
          <div>
            <Menu />
          </div>
        </div>
        <div className="bg-[#FAFAFA] px-20">
          <div>
            <Main />
          </div>
        </div>
        <div className="px-20 py-2 bg-[#FAFAFA]">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
