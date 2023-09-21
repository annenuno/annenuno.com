import Small from "../cards/small";
import Large from "../cards/large";
import Medium from "../cards/medium";

export default function Main() {
  return (
    <>
      <main className="bg-[#FAFAFA] h-auto">
        <div>
          hello
          <Large />
          <Medium />
          <Small />
        </div>
      </main>
    </>
  );
}
