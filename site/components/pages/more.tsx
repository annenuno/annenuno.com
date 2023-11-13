import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function More() {
  return (
    <>
      <main className="bg-[#F0F1FF] h-full w-screen">
        <div className="p-5 md:px-40 md:py-10 flex flex-row gap-10">
          <Link
            href="/"
            className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full text-[#6187AE] text-sm md:text-xl hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
          >
            Home
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:px-40">
          <div className="text-[40px] text-[#8B8ECD] mx-5 md:m-0">
            Hey There! 🫶🏻
          </div>
          <div className="flex flex-col md:flex-row gap-5 mx-5 md:m-0">
            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl w-fit text-[#8B8ECD] bg-[#E3E5FF]">
              I’m Ana Nuno, a developer based in Baton Rouge, LA with a passion
              for creating seamless and delightful experiences. Currently
              part-time Junior Developer @{" "}
              <span className="font-bold">Rockit Science Agency.</span>
              <br /> <br />I especially enjoy working on web development and
              improve my user interaction designs. When I’m not working, you can
              find me enjoying the nice atmosphere of my favorite local coffee
              shop, watering my plants or playing cozy games like{" "}
              <span className="italic">Animal Crossing.</span>
            </div>
            <div className="text-[#FAFAFA] bg-[#8B8ECD] shadow-lg shadow-[#8B8ECD]/60 rounded-3xl py-5 px-10">
              <div className="text-2xl">Let's Chat!</div>
              <div>
                Feel free to contact me! We can talk about work, coffee, and
                keyboards 😎
              </div>
              <div className="mt-5 mb-3">
                <a
                  className="px-8 py-3 bg-[#E3E5FF] text-[#8B8ECD] w-fit rounded-lg font-bold shadow-lg shadow-[#F0F1FF]/20 hover:bg-[#E3E5FF]"
                  href="mailto:nunoany@gmail.com"
                >
                  Send Email 📩
                </a>
              </div>
            </div>
          </div>
          <div className="text-[40px] text-[#8B8ECD] mx-5 md:m-0">Projects</div>
          <div className="flex flex-col mx-5 md:m-0">
            <div className="text-[#8B8ECD] text-[22px] md:text-[35px] py-5">
              Moon Fiore Design Studio |{" "}
              <span className="text-[12px] md:text-[16px]">WEB DESIGN</span>
            </div>
            <div className="mx-auto">
              <Image
                src="/moonfiore.png"
                width={800}
                height={500}
                alt="Eura Love"
                className="flex md:hidden"
              />
              <iframe
                className="border border-rgba(0, 0, 0, 0.1) hidden md:flex"
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Faf7LEc0ee5T7lMYK45qjDB%2FMoon-Fiore%3Ftype%3Ddesign%26node-id%3D63-3788%26t%3DyUzwoTGNR1lRBtE7-1%26scaling%3Dmin-zoom%26page-id%3D13%253A74%26mode%3Ddesign"
                //allowfullscreen
              ></iframe>
            </div>
            <div className="text-[#8B8ECD] text-[22px] md:text-[35px] py-5">
              Eura Love Jewelry |{" "}
              <span className="text-[12px] md:text-[16px]">WEB DESIGN</span>
            </div>
            <div className="mx-auto">
              <Image
                src="/euraLove.png"
                width={800}
                height={500}
                alt="Eura Love"
                className="flex md:hidden"
              />
              <iframe
                className="border border-rgba(0, 0, 0, 0.1) hidden md:flex"
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlybEoFAQxYzYgLRsGFPoPm%2FEura-Love%3Ftype%3Ddesign%26node-id%3D26-165%26t%3DbWnThep8fHJMcMps-1%26scaling%3Dmin-zoom%26page-id%3D77%253A23%26mode%3Ddesign"
                //allowfullscreen
              ></iframe>
            </div>
            <div className="text-[#8B8ECD] text-[22px] md:text-[35px] py-5 hidden md:flex">
              Bake My Cakes <span className="text-[12px] md:text-[16px]">Mockup</span>  
            </div> 
            <div className="mx-auto pb-5">
              <iframe className="border border-rgba(0, 0, 0, 0.1) hidden md:flex" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlEk95oAAetiEy9fF4R9UlR%2FBake-My-Cakes%3Ftype%3Ddesign%26node-id%3D1-3%26t%3DFEGtT6ErfkrVSgTL-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"></iframe>
            </div>
          </div>
          {/* <div className="basis-2/6 bg-[#FAFAFA] shadow-lg shadow-[#8B8ECD]/60 rounded-3xl p-5">
              <Spline scene="https://prod.spline.design/WcpEoVezwJD7ocv1/scene.splinecode" />
            </div> */}
          {/* <div className="flex flex-col md:flex-row gap-5 pb-5 mx-5 md:mx-0">
            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl md:w-fit text-[#8B8ECD] bg-[#E3E5FF] basis-1/3">
              <div className="font-bold pb-5">What I work with</div>
              <ul className="flex flex-col gap-1">
                <li>html / CSS</li>
                <li>JavaScript</li>
                <li>Nuxt 2 & 3</li>
                <li>Tailwind</li>
                <li>Figma</li>
                <li>Spline</li>
                <li>Prototyping</li>
                <li>Wire Framing</li>
                <li>UI micro interactions</li>
                <li>Craft CMS</li>
                <li>Spanish!</li>
              </ul>
            </div>

            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl md:w-fit text-[#8B8ECD] bg-[#E3E5FF] basis-1/3">
              <div className="font-bold pb-5">What I'm learning</div>
              <ul className="flex flex-col gap-1">
                <li>React JS</li>
                <li>Next JS</li>
                <li>Yoga</li>
                <li>UI Design</li>
                <li>French</li>
                <li>UX workflows</li>
              </ul>
            </div>

            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl md:w-fit text-[#8B8ECD] bg-[#E3E5FF] basis-1/3">
              <div className="font-bold pb-5">What I like</div>
              <ul className="flex flex-col gap-1">
                <li>Making Playlists</li>
                <li>Figma auto-layout</li>
                <li>Long walks</li>
                <li>Building mechanic keyboards</li>
                <li>coffee</li>
                <li>boba tea</li>
                <li>& more coffee</li>
              </ul>
            </div>
          </div> */}
          {/* <div>
            <iframe
              className="border border-rgba(0, 0, 0, 0.1);"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlybEoFAQxYzYgLRsGFPoPm%2FEura-Love%3Ftype%3Ddesign%26node-id%3D6-3%26t%3DtXkspktCdyW6j0KB-1%26scaling%3Dscale-down%26page-id%3D1%253A7%26starting-point-node-id%3D6%253A3%26mode%3Ddesign"
              // allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="border border-rgba(0, 0, 0, 0.1);"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlEk95oAAetiEy9fF4R9UlR%2FBake-My-Cakes%3Ftype%3Ddesign%26node-id%3D1-3%26t%3DUAlooDAYP5y7uISy-1%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26mode%3Ddesign"
              // allowfullscreen
            ></iframe>
          </div> */}
        </div>
      </main>
    </>
  );
}
