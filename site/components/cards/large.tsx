import Image from "next/image";
// import Link from "next/link";

export default function Small() {
  return (
    <>
      <div className="-rotate-6 px-2 bg-white border-2 border-[#7A88C9] rounded lg:w-[620px] h-max">
        <div className="flex justify-between p-3 text-[#7A88C9] bold">
          <div>vuelo.png</div>
          <Image
            src="/exit.svg"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </div>
        <Image
          src="/vuelo.png"
          width={600}
          height={600}
          alt="Picture of the author"
          className="border-2 border-[#7A88C9] bg-[#7A88C9]"
        />
        <div className="p-3 text-[#7A88C9]">annenuno / 08.21</div>
      </div>
    </>
  );
}
