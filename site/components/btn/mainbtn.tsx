import Link from "next/link";

export default function Aboutbtn() {
  return (
    <>
      <div className="flex flex-row ml-10">
        <Link
          href="/"
          className="absolute top-8 left-[150px] bg-[#FAFAFA] text-[#8B8ECD] mx-5 px-12 py-3 whitespace-pre border border-[#8B8ECD] rounded-full text-xl hover:bg-[#E3E5FF]"
        >
          main
        </Link>
        {/* <div className="bg-[#8B8ECD] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          main
        </div> */}
      </div>
    </>
  );
}
