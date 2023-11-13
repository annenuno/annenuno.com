import Link from "next/link";
import Image from "next/image";

function Moonfiore() {
  return (
    <main className="w-screen h-screen bg-[#FAFAFA]">
        <div className="p-5 md:px-40 md:py-10 flex flex-row gap-10">
          <Link
            href="/"
            className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full text-[#6187AE] text-sm md:text-xl hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
          >
            Home
          </Link>
          <Link
            href="/more"
            className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full text-[#6187AE] text-sm md:text-xl hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
          >
            About
          </Link>
        </div>
      <div className="text-[#8B8ECD] px-5 md:px-40 text-[22px] md:text-[35px]">Moon Fiore Design Studio     |     <span className="text-[12px] md:text-[16px]">WEB DESIGN</span></div>
    </main>
  );
}

export default Moonfiore;
