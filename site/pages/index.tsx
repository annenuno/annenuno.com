import Menu from "../components/sections/menu";
import Main from "../components/pages/main";
import Footer from "../components/sections/footer";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { motion } from "framer-motion";
// import { Banner, Menu } from "../components/*.tsx";

export default function Home() {
  return (
    <main>
      {/* https://prod.spline.design/fvFMXwOQR716p2fB/scene.splinecode */}
      <div className="w-screen h-screen bg-[#E3E5FF]">
        <div className="absolute">
          <motion.div
            animate={{ x: 200, y: 100 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="text-[#6187AE] absolute hidden md:flex"
          >
            <p className="text-[16px] md:text-[40px] absolute w-[300px] md:w-[230px]">
              Hey, I'm Ana. <br />
              I'm a &nbsp;
              <span className="text-[#E198DE] absolute w-[280px]">
                Web Developer!
              </span>
            </p>
            <br />
            <br />
            <Link
              href="/more"
              className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full absolute md:top-[130px] text-[#6187AE] text-sm md:text-xl hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
            >
              About
            </Link>
          </motion.div>
          <div className="flex md:hidden py-10 px-10">
            <p className="text-[25px] absolute w-[140px] text-[#6187AE]">
              Hey, I'm Ana. <br />
              I'm a &nbsp;
              <span className="text-[#E198DE] absolute w-[180px]">
                Web Developer!
              </span>
            </p>
            <br />
            <br />
            <Link
              href="/more"
              className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full absolute top-[130px] text-[#6187AE] text-sm hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
            >
              About
            </Link>
          </div>
        </div>
        <Spline scene="https://prod.spline.design/fvFMXwOQR716p2fB/scene.splinecode" />
      </div>
    </main>
  );
}
