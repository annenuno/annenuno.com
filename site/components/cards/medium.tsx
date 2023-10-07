import Image from "next/image";
import Spline from "@splinetool/react-spline";
// import Link from "next/link";

export default function Medium() {
  return (
    <>
      <div className="rotate-1 px-2 bg-white border-2 border-[#7A88C9] rounded w-[300px] h-max">
        <div className="flex justify-between p-3 text-[#7A88C9] bold">
          <div>plant-room.png</div>
          <Image
            src="/exit.svg"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </div>
        <div className="h-auto">
          <Spline scene="https://prod.spline.design/wT8FG4fWG-USE13p/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/vqV0JsVrsZZDL4gK/scene.splinecode" /> */}
        </div>
        {/* <Image
          src="/plant-room.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="border-2 border-[#7A88C9] bg-[#7A88C9]"
        /> */}
        <div className="p-3 text-[#7A88C9]">annenuno / 08.21</div>
      </div>
    </>
  );
}
