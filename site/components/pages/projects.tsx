import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function More() {
  return (
    <>
      <main className="bg-[#F0F1FF] h-full w-screen">
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
        <div className="p-5 md:px-40">
          <div className="text-[40px] text-[#6187AE]">Eura Love Jewelry Project</div>
          <div className="mx-auto">
            <Image
              src="/euraLove.png"
              width={800}
              height={500}
              alt="Eura Love"
            />
          </div>
          <div>
            {/* <iframe
              className="border border-rgba(0, 0, 0, 0.1);"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlybEoFAQxYzYgLRsGFPoPm%2FEura-Love%3Ftype%3Ddesign%26node-id%3D6-3%26t%3DtXkspktCdyW6j0KB-1%26scaling%3Dscale-down%26page-id%3D1%253A7%26starting-point-node-id%3D6%253A3%26mode%3Ddesign"
              // allowfullscreen
            ></iframe> */}
          </div>
          <div>
            <iframe
              className="border border-rgba(0, 0, 0, 0.1);"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlEk95oAAetiEy9fF4R9UlR%2FBake-My-Cakes%3Ftype%3Ddesign%26node-id%3D1-3%26t%3DUAlooDAYP5y7uISy-1%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26mode%3Ddesign"
              // allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
