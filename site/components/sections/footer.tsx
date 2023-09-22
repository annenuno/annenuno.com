import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between text-[#366595]">
        <div>
          <Image
            priority
            src="/Group.svg"
            height={40}
            width={40}
            alt="Follow us on Twitter"
          />
        </div>
        <div>
          <Image
            priority
            src="/email.svg"
            height={32}
            width={32}
            alt="Follow us on Twitter"
          />
        </div>
        <div>
          <Image
            priority
            src="/arrow-up.svg"
            height={20}
            width={20}
            alt="email"
          />
        </div>
      </div>
    </>
  );
}
