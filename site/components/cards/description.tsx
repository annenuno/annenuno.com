import Link from "next/link";

export default function Description() {
  return (
    <>
      <div>
        <div className="text-[18px]">
          Hey there, I’m Ana, a developer based in <i>Baton Rouge, LA</i> with a
          passion for creating seamless and delightful experiences. Currently
          Junior Developer @{" "}
          <strong>
            <a
              href="https://rockitscienceagency.com/"
              target="_blank"
              className="hover:text-[#8B8ECD]"
            >
              Rockit Science Agency.
            </a>
          </strong>
          <br />
          <br />I specially enjoy working on web development and improve my user
          interaction designs. When I’m not working, you can find me enjoying
          the nice atmosphere of my favorite local coffee shop, watering my
          plants or playing cozy games like Animal Crossing.{" "}
        </div>
        {/* <div className="bg-[#DEB7DC] ">
          Hey there, I’m Ana, a developer based in <i>Baton Rouge, LA</i> with a
          passion for creating seamless and delightful experiences. Currently
          Junior Developer @ <strong>Rockit Science Agency. </strong>
          <br />
          <br />I especially enjoy working on web development and improve my
          user interaction designs. When I’m not working, you can find me
          enjoying the nice atmosphere of my favorite local coffee shop,
          watering my plants or playing cozy games like Animal Crossing.{" "}
        </div> */}
      </div>
    </>
  );
}
