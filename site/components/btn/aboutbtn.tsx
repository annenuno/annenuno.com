import Link from "next/link";

export default function Aboutbtn() {
  return (
    <>
      <Link href="/about" className="flex flex-row">
        <div className="z-10 bg-[#FBF4FB] text-[#DEB7DC] mx-5 px-12 py-3 whitespace-pre border-2 border-[#DEB7DC] rounded-full text-xl hover:bg-[#FAFAFA]">
          about
        </div>
        <div className="absolute top-7 z-0 left-[310px] bg-[#DEB7DC] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          about
        </div>
      </Link>
    </>
  );
}
