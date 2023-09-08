import Link from "next/link";

export default function Aboutbtn() {
  return (
    <>
      <div className="flex flex-row">
        <Link
          href="/feed"
          className="absolute top-8 left-[515px] bg-[#FAFAFA] text-[#CAD959] mx-5 px-12 py-3 whitespace-pre border border-[#CAD959] rounded-full text-xl hover:bg-[#F9FCE4]"
        >
          feed
        </Link>
        <div className="bg-[#CAD959] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          feed
        </div>
      </div>
    </>
  );
}
