import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between text-[#366595]">
        <div>
          <Image
            priority
            src="/heart.svg"
            height={40}
            width={40}
            alt="Follow us on Twitter"
          />
        </div>
        <div className="flex flex-row gap-10">
          <Image
            priority
            src="/github.svg"
            height={32}
            width={32}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/instagram.svg"
            height={32}
            width={32}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src="/linkedin.svg"
            height={32}
            width={32}
            alt="Follow us on Twitter"
          />
        </div>
        <div>
          <Image
            priority
            src="/aligntop.svg"
            height={32}
            width={32}
            alt="email"
          />
        </div>
      </div>
    </>
  );
}
