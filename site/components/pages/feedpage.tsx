// import Link from "next/link";
import FeedCard from "../cards/feedcard";

export default function Feedpage() {
  return (
    <>
      <main className="bg-[#FAFAFA] h-auto">
        <div className="text-cyan-100">hello this is the feed page!</div>
        <div>
          <FeedCard />
        </div>
      </main>
    </>
  );
}
