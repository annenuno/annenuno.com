// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../components/banner";
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
            className="text-[#6187AE] absolute"
          >
            <p className="text-[40px] absolute w-[250px]">
              Hey, I'm Ana. <br />
              I'm a{" "}
              <span className="text-[#E1CAE0] absolute w-[200px]">
                Web Developer
              </span>
            </p>
            <br />
            <br />
            <Link
              href="/about"
              className="px-10 py-5 bg-[#F9FCE4] absolute top-[300px]"
            >
              About
            </Link>
          </motion.div>
        </div>
        <Spline scene="https://prod.spline.design/fvFMXwOQR716p2fB/scene.splinecode" />
      </div>
    </main>
  );
}
