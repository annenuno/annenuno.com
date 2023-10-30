import Link from "next/link";

export default function More() {
  return (
    <>
      <main>
        <div className="p-5 md:px-40 md:py-10">
          <Link
            href="/"
            className="px-8 py-3 border-dotted border-2 border-[#6187AE] rounded-full text-[#6187AE] text-sm md:text-xl hover:bg-[#F9FCE4] hover:text-[#DAE775] hover:border-[#DAE775]"
          >
            Home
          </Link>
        </div>
        <div className="p-5 flex overflow-auto flex-col gap-5 md:px-40 md:py-20">
          <div className="px-10 py-3 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
            Wanna learn about me?
          </div>
          <div className="px-10 py-3 md:mr-60 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
            Well... <br /> I’m Ana Nuno, a developer based in Baton Rouge, LA
            with a passion for creating seamless and delightful experiences.
            Currently part-time Junior Developer @{" "}
            <span className="font-bold">Rockit Science Agency.</span>
          </div>
          <div className="px-10 py-3 md:mr-60 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
            I especially enjoy working on web development and improve my user
            interaction designs. When I’m not working, you can find me enjoying
            the nice atmosphere of my favorite local coffee shop, watering my
            plants or playing cozy games like{" "}
            <span className="italic">Animal Crossing.</span>
          </div>
          <div className="relative left-[90px] md:left-[310px] xl:left-[615px] float-right px-10 py-3 rounded-3xl w-fit text-[#FAFAFA] bg-[#8B8ECD]">
            What you work with / Skills?
          </div>
          <div className="px-10 py-3 md:mr-40 lg:mr-60 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
            I usually work with html/CSS, JavaScript, Nuxt 2 & 3, Tailwind,
            Figma, Spline, Prototyping Wire framing, UI micro interactions,
            Craft CMS, Spanish.
          </div>
          <div className="px-10 py-3 rounded-3xl w-fit text-[#FAFAFA] bg-[#8B8ECD]">
            What are you currently learning?
          </div>
          <div className="px-10 py-3 md:mr-60 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
            I'm currently learning React JS, WebFlow, three JS, Yoga, UI Design,
            French, and User research.
          </div>
          <div className="relative md:left-[360px] xl:left-[615px] px-10 py-3 rounded-3xl w-fit text-[#FAFAFA] bg-[#8B8ECD]">
            What are some things you like to do?
          </div>
          <div className="px-10 py-3 md:mr-60 rounded-3xl w-fit text-[#8B8ECD] bg-[#FAFAFA]">
            Building Mechanic Keyboards, Making Playlists, Figma auto-layout,
            Long walks, Coffee, Boba tea, & more Coffee.
          </div>
        </div>
      </main>
    </>
  );
}
