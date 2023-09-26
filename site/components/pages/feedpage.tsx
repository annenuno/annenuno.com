// import Link from "next/link";
import FeedCard from "../cards/feedcard";

export default function Feedpage() {
  return (
    <>
      <main className="h-auto">
        <div className="text-cyan-100">hello this is the feed page!</div>
        <div className="pb-40">
          <FeedCard />
        </div>
      </main>
    </>
  );
}
