import Link from "next/link";
import { motion } from "framer-motion";

export default function Aboutbtn() {
  return (
    <>
      <Link href="/feed" className="flex flex-row">
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "8px 8px 0 rgb(202, 217, 89)",
          }}
          whileTap={{ scale: 0.9 }}
          className="z-10 bg-[#F9FCE4] text-[#CAD959] mx-5 px-12 py-3 whitespace-pre border-2 border-[#CAD959] rounded-full text-xl hover:bg-[#FAFAFA]"
        >
          feed
        </motion.div>
        <div className="z-0 absolute top-7 left-[501px] bg-[#CAD959] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
          feed
        </div>
      </Link>
    </>
  );
}
