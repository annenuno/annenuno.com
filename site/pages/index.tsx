// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../components/banner";
import Menu from "../components/sections/menu";
import Main from "../components/pages/main";
// import { Banner, Menu } from "../components/*.tsx";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#FAFAFA]">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r border-[#8B8ECD] mb-0 bg-[#FAFAFA]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4"></div>
      </header>
      <div className="flex flex-row h-[150px]">
        <div className="flex flex-col">
          <Menu />
        </div>
      </div>
      <div className="bg-cyan-200 p-10">
        <div>
          <Main />
        </div>
      </div>
    </main>
  );
}
