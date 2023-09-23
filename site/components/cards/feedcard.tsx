import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

export default function Small() {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <motion.div drag>
          <div className="px-2 bg-white border-2 border-[#7DB249] rounded w-[266px] h-max">
            <div className="p-3 text-[#7DB249] bold">citröen.png</div>
            <Image
              src="/citroen.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="border-2 border-[#7DB249]"
            />
            <div className="p-3 text-[#7DB249]">annenuno / 07.30</div>
          </div>
        </motion.div>
        <motion.div drag className="relative top-44 right-16">
          <div className="px-2 bg-white border-2 border-[#7A88C9] rounded w-[266px] h-max">
            <div className="p-3 text-[#7A88C9] bold">Le-Mans.png</div>
            <Image
              src="/le-mans.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="border-2 border-[#7A88C9]"
            />
            <div className="p-3 text-[#7A88C9]">annenuno / 07.26</div>
          </div>
        </motion.div>
        <motion.div drag>
          <div className="px-2 bg-[#F9FCE4] border-2 border-[#7DB249] rounded w-[266px] h-max">
            <div className="p-3 text-[#7DB249] bold">nate.png</div>
            <Image
              src="/nate.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="border-2 border-[#7DB249]"
            />
            <div className="p-3 text-[#7DB249]">annenuno / 03.29</div>
          </div>
        </motion.div>
        <motion.div drag>
          <div className="px-2 bg-white border-2 border-[#7A88C9] rounded w-[266px] h-max">
            <div className="p-3 text-[#7A88C9] bold">Firenze.png</div>
            <Image
              src="/firenze.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="border-2 border-[#7A88C9] bg-[#7A88C9]"
            />
            <div className="p-3 text-[#7A88C9]">annenuno / 07.29</div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
