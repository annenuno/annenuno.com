import Image from "next/image";
import Spline from "@splinetool/react-spline";
// import Link from "next/link";

export default function Small() {
  return (
    <>
      <div className="bg-white border-2 border-[#7DB249] rounded w-[266px] h-max rotate-[8deg] px-2">
        <div className="flex justify-between p-3 text-[#7DB249] bold">
          <div>˚ʚ♡ɞ˚ .png</div>
          <Image
            src="/exit-green.svg"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </div>
        {/* https://prod.spline.design/WcpEoVezwJD7ocv1/scene.splinecode */}
        <div>
          {/* <Spline scene="https://prod.spline.design/WcpEoVezwJD7ocv1/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/HXIUueP2G0KxZJq1/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/vqV0JsVrsZZDL4gK/scene.splinecode" />
        </div>
        {/* <Image
          src="/ana.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="border-2 border-[#7DB249] bg-[#7DB249]"
        /> */}
        <div className="p-3 text-[#7DB249]">annenuno / 08.21</div>
      </div>
    </>
  );
}
