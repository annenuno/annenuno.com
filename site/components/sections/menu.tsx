import Footer from "./footer";
import Link from "next/link";
import Mainbtn from "../btn/mainbtn";
import Aboutbtn from "../btn/aboutbtn";
import Feedbtn from "../btn/feedbtn";

export default function Menu() {
  return (
    <>
      <div className="py-10 flex flex-col h-screen w-screen">
        <div className="flex flex-row"></div>
        <Mainbtn />
        <Aboutbtn />
        <Feedbtn />
      </div>
      {/* <Footer /> */}
    </>
  );
}
