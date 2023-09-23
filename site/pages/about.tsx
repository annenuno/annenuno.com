import Menu from "../components/sections/menu";
import Aboutpage from "../components/pages/aboutpage";
import Footer from "../components/sections/footer";
import Image from "next/image";

function About() {
  return (
    <main className="flex flex-col bg-[#FAFAFA] h-auto">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#DEB7DC] mb-0 bg-[#FBF4FB]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4">
          <div className="flex flex-col justify-around">
            <div>
              <Image
                priority
                src="/moon-pink.svg"
                height={32}
                width={32}
                alt="moon"
                className="pt-10 fill-[#DEB7DC]"
              />
            </div>
            <div>
              <Image
                priority
                src="/cat-pink.svg"
                height={32}
                width={32}
                alt="cat"
                className="py-10 fill-[#DEB7DC]"
              />
            </div>
            <div>
              <Image
                priority
                src="/email-pink.svg"
                height={32}
                width={32}
                alt="email"
                className="pb-10"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="h-screen">
        <div className="flex flex-row">
          <div>
            <Menu />
          </div>
        </div>
        <div className="bg-[#FAFAFA] py-10 px-20">
          <div>
            <Aboutpage />
          </div>
        </div>
        <div className="px-20 py-5 bg-[#FAFAFA]">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
