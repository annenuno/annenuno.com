import Menu from "../components/sections/menu";
import FeedPage from "../components/pages/feedpage";
import Footer from "../components/sections/footer";
import Image from "next/image";

function Feed() {
  return (
    <main className="flex flex-col bg-[#FAFAFA] bg-[url('/bg.svg')] h-auto">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#8B8ECD] mb-0 bg-[#E3E5FF]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4">
          <div className="flex flex-col justify-around">
            <div>
              <Image
                priority
                src="/planet.svg"
                height={32}
                width={32}
                alt="moon"
                className="pt-10"
              />
            </div>
            <div>
              <Image
                priority
                src="/cat.svg"
                height={32}
                width={32}
                alt="cat"
                className="py-10"
              />
            </div>
            <div>
              <Image
                priority
                src="/chat.svg"
                height={32}
                width={32}
                alt="email"
                className="pb-10"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="h-full">
        <div className="flex flex-row">
          <div>
            <Menu />
          </div>
        </div>
        <div className="bg-[FAFAFA] py-10 px-20">
          <div>
            <FeedPage />
          </div>
        </div>
        {/* <div className="px-20 py-5 bg-[#FAFAFA] text-[#CAD959]">
          <div>
            <Footer />
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default Feed;
