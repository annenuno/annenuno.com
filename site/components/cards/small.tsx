import Image from "next/image";
// import Link from "next/link";

export default function Small() {
  return (
    <>
      <div className="bg-white border-2 border-[#7DB249] rounded w-[266px] h-max rotate-12">
        <div className="p-3 text-[#7DB249] bold">˚ʚ♡ɞ˚ .png</div>
        <Image
          src="/ana.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="border-y-2 border-[#7DB249] bg-[#7DB249]"
        />
        <div className="p-3 text-[#7DB249]">annenuno / 08.21</div>
      </div>
    </>
  );
}
