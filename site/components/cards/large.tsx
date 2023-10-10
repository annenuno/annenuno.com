import Image from "next/image";
import Spline from "@splinetool/react-spline";

// import Link from "next/link";

export default function Small() {
  return (
    <>
      <div className="-rotate-6 px-2 bg-[#FAFAFA] border-2 border-[#7A88C9] rounded lg:w-[620px] h-max drop-shadow-lg">
        <div className="flex justify-between p-3 text-[#7A88C9] bold">
          <div>vuelo.png</div>
          <Image
            src="/exit.svg"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </div>
        {/* <Image
          src="/vuelo.png"
          width={600}
          height={600}
          alt="Picture of the author"
          className="border-2 border-[#7A88C9] bg-[#7A88C9]"
        /> */}
        {/* <Spline scene="https://prod.spline.design/wT8FG4fWG-USE13p/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/WcpEoVezwJD7ocv1/scene.splinecode" /> */}
        <div className="w-[600px] h-[500px]">
          <Spline scene="https://prod.spline.design/wT8FG4fWG-USE13p/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/HXIUueP2G0KxZJq1/scene.splinecode" /> */}
        </div>
        <div className="p-3 text-[#7A88C9]">annenuno / 08.21</div>
      </div>
    </>
  );
}
