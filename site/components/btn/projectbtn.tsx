import Link from "next/link";

export default function Projectbtn() {
  return (
    <>
      <Link href="/annenuno">
        <div className="z-10 flex flex-row gap-5 px-6 py-3 border-2 border-[#366595] rounded-full hover:bg-[#E7F3FF]">
          <p>2023</p>
          <p className="font-bold">annenuno.com</p>
          <p className="absolute right-[230px] px-2 text-[15px] border-2 border-[#366595] rounded-full">
            UX / UI
          </p>
          <p className="absolute right-[105px] px-2 text-[15px] border-2 border-[#366595] rounded-full">
            Development
          </p>
        </div>
      </Link>
    </>
  );
}
