import Small from "../cards/small";
import Large from "../cards/large";
import Medium from "../cards/medium";

export default function Main() {
  return (
    <>
      <main className="h-auto">
        <div className="flex flex-col">
          <div className="flex mx-auto">
            <div>
              <Large />
            </div>
            <div className="relative left-[-100px] top-[100px]">
              <Medium />
            </div>
          </div>
          <div className="relative left-[400px] top-[-100px]">
            <Small />
          </div>
        </div>
      </main>
    </>
  );
}
