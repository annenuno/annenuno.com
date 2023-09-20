import Menu from "../components/sections/menu";
import Aboutpage from "../components/pages/aboutpage";
import Footer from "../components/sections/footer";

function About() {
  return (
    <main className="flex flex-col bg-[#FAFAFA] h-auto">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#DEB7DC] mb-0 bg-[#FBF4FB]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4"></div>
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
