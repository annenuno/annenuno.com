// import Link from "next/link";
import Projectbtn from "../btn/projectbtn";
import Description from "../cards/description";
import Small from "../cards/small";
import AboutCard from "../cards/aboutCard";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="text-[#366595] h-auto">
        <div className="flex flex-row gap-10 px-10">
          <div className="basis-3/6 p-10 bg-[#FBF4FB] border-2 border-[#DEB7DC] rounded-xl">
            <Description />
          </div>
          <Image
            src="/cat.png"
            width={150}
            height={150}
            alt="cat"
            className="absolute left-[700px] top-[350px]"
          />
          <div className="flex justify-center basis-3/6 px-20 m-auto">
            <AboutCard />
          </div>
        </div>
        <div className="flex flex-col px-10 py-10">
          <div className="text-[20px] text-[#8B8ECD] p-2">📝 Projects</div>
          <div className="flex flex-col gap-3">
            <Projectbtn />
          </div>
        </div>
        <div className="px-10">
          <div className="text-[20px] text-[#8B8ECD] p-2">
            💜 Wow, I'm so impressed!
          </div>
          <div>
            <div className="flex flex-row justify-between gap-5">
              <div className="flex flex-col p-5 border-2 border-[#8B8ECD] bg-[#F0F1FF] rounded-xl w-[300px]">
                <div className="text-[#8B8ECD] pb-2">What I work with</div>
                <div className="w-full">
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
              </div>
              <div className="flex flex-col p-5 border-2 border-[#8B8ECD] bg-[#F0F1FF] rounded-xl w-[300px]">
                <div className="text-[#8B8ECD] pb-2">What I'm learning</div>
                <div className="w-full">
                  <ul className="flex flex-col gap-1">
                    <li>React JS</li>
                    <li>Next JS</li>
                    <li>Yoga</li>
                    <li>UI Design</li>
                    <li>French</li>
                    <li>UX workflows</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col p-5 border-2 border-[#8B8ECD] bg-[#F0F1FF] rounded-xl w-[300px]">
                <div className="text-[#8B8ECD] pb-2">What I like</div>
                <div className="w-full">
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
          </div>
        </div>
      </main>
    </>
  );
}
