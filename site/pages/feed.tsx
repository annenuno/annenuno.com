import Menu from "../components/sections/menu";
import FeedPage from "../components/pages/feedpage";
import Footer from "../components/sections/footer";

function Feed() {
  return (
    <main className="flex flex-col bg-[#FAFAFA] h-auto">
      <header className="fixed top-0 left-0 z-[1000] w-[75px] h-screen p-0 border-r-2 border-[#CAD959] mb-0 bg-[#F9FCE4]">
        <div className="overflow-hidden w-full flex items-center justify-center px-4"></div>
      </header>
      <div className="h-auto">
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
        <div className="px-20 py-5 bg-[#FAFAFA] text-[#CAD959]">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Feed;
