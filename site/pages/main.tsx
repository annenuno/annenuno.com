// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../components/banner";
import Menu from "../components/sections/menu";
import Main from "../components/pages/main";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
// import { Banner, Menu } from "../components/*.tsx";

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] md:h-auto flex flex-col md:bg-[#FAFAFA] bg-[url('/bg.svg')]">
      <header className="hidden md:flex fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#8B8ECD] mb-0 bg-[#E3E5FF]">
        <div className="flex items-center flex-col px-4 md:overflow-hidden w-full">
          <div>
            <Image
              priority
              src="/planet.svg"
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
              src="/chat.svg"
              height={32}
              width={32}
              alt="email"
              className="pb-10"
            />
          </div>
        </div>
      </header>
      <div className="h-screen w-screen md:h-full">
        <div className="flex flex-row">
          <div className="hidden md:flex">
            <Menu />
          </div>
          <div className="flex justify-between w-full bg-[#E3E5FF] border-b-2 border-[#8B8ECD] flex-row text-cyan-500 py-5 px-10 md:hidden">
            <div>
              <Image
                priority
                src="/planet.svg"
                height={32}
                width={32}
                alt="moon"
              />
            </div>
            <div>MENU</div>
          </div>
        </div>
        <div className="pl-[75px] py-10">
          <div className="hidden md:flex">
            <Main />
          </div>
        </div>
      </div>
    </main>
  );
}
