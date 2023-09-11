// import Footer from "./footer";
// import Link from "next/link";
import Mainbtn from "../btn/mainbtn";
import Aboutbtn from "../btn/aboutbtn";
import Feedbtn from "../btn/feedbtn";

export default function Menu() {
  return (
    <>
      <div className="py-5 pl-20 flex flex-row h-auto w-screen">
        <Mainbtn />
        <Aboutbtn />
        <Feedbtn />
      </div>
    </>
  );
}
