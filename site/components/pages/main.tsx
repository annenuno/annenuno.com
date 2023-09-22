import Small from "../cards/small";
import Large from "../cards/large";
import Medium from "../cards/medium";

export default function Main() {
  return (
    <>
      <main className="bg-[#FAFAFA] h-auto">
        <div className="flex flex-col">
          <div className="flex">
            <Large />
            <Medium />
          </div>
          <div className="absolute">
            <Small />
          </div>
        </div>
      </main>
    </>
  );
}
