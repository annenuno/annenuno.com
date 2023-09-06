// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../components/banner";
import Menu from "../components/menu";
// import { Banner, Menu } from "../components/*.tsx";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#FAFAFA]">
      <div className="flex flex-row h-[150px]">
        <div className="flex flex-col bg-[#E3E5FF] border-[#8B8ECD] border-r-2 w-[120px]">
          <div>heeeiiyrtcdcdcygbuh</div>
          <div>heecccceiiyruh</div>
        </div>
        <div className="flex flex-col">
          <Menu />
        </div>
      </div>
      <div className="bg-cyan-200 p-10">hello</div>
    </main>
  );
}
