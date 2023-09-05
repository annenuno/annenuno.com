import Footer from "../components/footer";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="py-10 flex flex-col h-screen w-screen">
        <div className="flex flex-row">
          <div className="flex flex-row ml-10">
            <Link
              href="/"
              className="absolute top-8 left-[150px] bg-[#FAFAFA] text-[#8B8ECD] mx-5 px-12 py-3 whitespace-pre border border-[#8B8ECD] rounded-full text-xl hover:bg-[#E3E5FF]"
            >
              main
            </Link>
            <div className="bg-[#8B8ECD] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
              main
            </div>
          </div>
          <div className="flex flex-row">
            <Link
              href="/about"
              className="absolute top-8 left-[330px] bg-[#FAFAFA] text-[#DEB7DC] mx-5 px-12 py-3 whitespace-pre border border-[#DEB7DC] rounded-full text-xl hover:bg-[#FBF4FB]"
            >
              about
            </Link>
            <div className="bg-[#DEB7DC] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
              about
            </div>
          </div>
          <div className="flex flex-row">
            <Link
              href="/feed"
              className="absolute top-8 left-[515px] bg-[#FAFAFA] text-[#CAD959] mx-5 px-12 py-3 whitespace-pre border border-[#CAD959] rounded-full text-xl hover:bg-[#F9FCE4]"
            >
              feed
            </Link>
            <div className="bg-[#CAD959] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
              feed
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
