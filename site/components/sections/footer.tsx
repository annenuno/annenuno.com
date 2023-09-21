import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex flex-row text-[#366595]">
        <div>This is the footer</div>
        <div>
          <Image
            priority
            src="/email.svg"
            height={32}
            width={32}
            alt="Follow us on Twitter"
          />
        </div>
        <div>Top ^</div>
      </div>
    </>
  );
}
