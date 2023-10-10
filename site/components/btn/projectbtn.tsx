import Link from "next/link";

export default function Projectbtn() {
  return (
    <>
      <Link href="/annenuno" className="bg-[#FAFAFA]">
        <div className="z-10 flex flex-row justify-between gap-5 px-6 py-3 border-2 border-[#366595] rounded-full hover:bg-[#E7F3FF]">
          <div className="flex flex-row gap-5">
            <p>2023</p>
            <p className="font-bold">annenuno.com</p>
          </div>
          <div className="flex flex-row gap-5">
            <p className="px-2 text-[15px] border-2 border-[#366595] rounded-full">
              UX / UI
            </p>
            <p className="px-2 text-[15px] border-2 border-[#366595] rounded-full">
              Development
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
