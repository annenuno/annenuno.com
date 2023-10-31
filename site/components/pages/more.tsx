import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function More() {
  return (
    <>
      <main>
        <div className="p-5 md:px-40 md:py-10">
          <Link
            href="/"
            className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full text-[#6187AE] text-sm md:text-xl hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
          >
            Home
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:px-40">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="basis-4/6 shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
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
            <div className="basis-2/6 bg-[#FAFAFA] shadow-lg shadow-[#8B8ECD]/60 rounded-3xl p-5">
              {/* https://prod.spline.design/WcpEoVezwJD7ocv1/scene.splinecode */}
              <Spline scene="https://prod.spline.design/WcpEoVezwJD7ocv1/scene.splinecode" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 pb-5">
            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA] basis-1/3">
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

            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA] basis-1/3">
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

            <div className="shadow-lg shadow-[#8B8ECD]/60 px-10 py-5 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA] basis-1/3">
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
          </div>
        </div>
      </main>
    </>
  );
}
