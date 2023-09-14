// import Link from "next/link";
import Projectbtn from "../btn/projectbtn";
import Description from "../cards/description";
import Small from "../cards/small";

export default function About() {
  return (
    <>
      <main className="text-[#366595] bg-[#FAFAFA] h-screen">
        <div className="flex flex-row gap-10 pl-10">
          <div className="w-2/5">
            <Small />
          </div>
          <div className="w-3/5 p-10 bg-[#FBF4FB] border-2 border-[#DEB7DC] rounded-xl">
            <Description />
          </div>
        </div>
        <div className="flex flex-col pl-10 py-10">
          <div className="text-[16px] text-[#8B8ECD] p-2">📝 Projects</div>
          <div className="flex flex-col gap-3">
            <Projectbtn />
            <Projectbtn />
            <Projectbtn />
          </div>
        </div>
        <div className="p-10">
          <div className="text-[16px] text-[#8B8ECD] p-2">
            💜 Wow, I'm so impressed!
          </div>
          <div className="p-5 border-2 border-[#E3E5FF] rounded-xl">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row">
                <div className="w-1/4 text-[#8B8ECD]">What I work with</div>
                <div className="w-auto">
                  <ul className="flex flex-row">
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
              <div className="flex flex-row">
                <div className="w-1/4 text-[#8B8ECD]">What I'm learning</div>
                <div className="w-3/4">
                  <ul>
                    <li>React JS</li>
                    <li>Next JS</li>
                    <li>Yoga</li>
                    <li>UI Design</li>
                    <li>French</li>
                    <li>UX workflows</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/4 text-[#8B8ECD]">What I like</div>
                <div className="w-3/4">
                  <ul>
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
