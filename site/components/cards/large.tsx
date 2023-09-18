import Image from "next/image";
// import Link from "next/link";

export default function Small() {
  return (
    <>
      <div className="bg-white border-2 border-[#7A88C9] rounded w-max h-max">
        <div className="p-3 text-[#7A88C9] bold">vuelo.png</div>
        <Image
          src="/des-fruits.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="border-y-2 border-[#7A88C9] bg-[#7A88C9]"
        />
        <div className="p-3 text-[#7A88C9]">annenuno / 08.21</div>
      </div>
    </>
  );
}
