import Link from "next/link";
import { motion } from "framer-motion";

export default function Aboutbtn() {
  return (
    <>
      <Link href="/about" className="flex flex-row">
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "8px 8px 0 rgb(222, 183, 220)",
          }}
          whileTap={{ scale: 0.9 }}
          className="z-10 bg-[#FBF4FB] text-[#DEB7DC] mx-5 px-12 py-3 whitespace-pre border-2 border-[#DEB7DC] rounded-full text-xl hover:bg-[#FAFAFA]"
        >
          about
        </motion.div>
        <div className="absolute top-7 z-0 left-[310px] bg-[#DEB7DC] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          about
        </div>
      </Link>
    </>
  );
}
