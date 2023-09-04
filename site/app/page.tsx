import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row bg-[#FAFAFA]">
      <div className="bg-[#E3E5FF] border-[#8B8ECD] border-r-2 ">
        <div className="text-[#8B8ECD] p-16 w-[180px] h-screen">
          <p className="lg:text-3xl md:text-2xl relative right-[550px] p-16 rotate-[270deg] w-screen underline decoration-wavy underline-offset-8">
            Curiosity didn't kill the cat!
          </p>
        </div>
      </div>
      <div className="bg-cyan-100 py-10 flex flex-row h-full w-screen">
        <div className="flex flex-row ml-10">
          <div className="absolute top-8 left-[215px] bg-[#FAFAFA] text-[#CAD959] mx-5 px-12 py-3 whitespace-pre border border-[#CAD959] rounded-full text-xl hover:bg-[#F9FCE4]">
            main
          </div>
          <div className="bg-[#CAD959] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
            main
          </div>
        </div>
        <div className="flex flex-row">
          <div className="absolute top-8 left-[395px] bg-[#FAFAFA] text-[#DEB7DC] mx-5 px-12 py-3 whitespace-pre border border-[#DEB7DC] rounded-full text-xl hover:bg-[#FBF4FB]">
            about
          </div>
          <div className="bg-[#DEB7DC] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
            about
          </div>
        </div>
        <div className="flex flex-row">
          <div className="absolute top-8 left-[585px] bg-[#FAFAFA] text-[#8B8ECD] mx-5 px-12 py-3 whitespace-pre border border-[#8B8ECD] rounded-full text-xl hover:bg-[#E3E5FF]">
            feed
          </div>
          <div className="bg-[#8B8ECD] rounded-full mx-5 px-12 py-3 whitespace-pre text-xl">
            feed
          </div>
        </div>
      </div>
    </main>
  );
}
