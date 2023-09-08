import Link from "next/link";

export default function Aboutbtn() {
  return (
    <>
      <div className="flex flex-row">
        <Link
          href="/about"
          className="absolute top-8 left-[330px] bg-[#FAFAFA] text-[#DEB7DC] mx-5 px-12 py-3 whitespace-pre border border-[#DEB7DC] rounded-full text-xl hover:bg-[#FBF4FB]"
        >
          about
        </Link>
        <div className="bg-[#DEB7DC] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          about
        </div>
      </div>
    </>
  );
}
