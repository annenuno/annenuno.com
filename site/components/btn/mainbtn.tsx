import Link from "next/link";

export default function Aboutbtn() {
  return (
    <>
      <Link href="/" className="flex flex-row ml-10">
        <div className="z-10 bg-[#E3E5FF] text-[#8B8ECD] mx-5 px-12 py-3 whitespace-pre border-2 border-[#8B8ECD] rounded-full text-xl hover:bg-[#FAFAFA]">
          main
        </div>
        <div className="z-0 absolute top-7 left-[128px] bg-[#8B8ECD] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          main
        </div>
      </Link>
    </>
  );
}
