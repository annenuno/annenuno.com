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
              {/* spline */}
              {/* light bulb */}
              {/* https://prod.spline.design/vqV0JsVrsZZDL4gK/scene.splinecode */}
              {/* import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <Spline scene="https://prod.spline.design/vqV0JsVrsZZDL4gK/scene.splinecode" />
  );
}
 */}

              {/* moon */}
              {/* https://prod.spline.design/HXIUueP2G0KxZJq1/scene.splinecode */}
              {/* import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/HXIUueP2G0KxZJq1/scene.splinecode');
 */}
              <Large />
            </div>
            <div className="relative left-[-100px] top-[100px]">
              <Medium />
            </div>
          </div>
          <div className="relative right-[0px] top-[-100px] mx-auto">
            <Small />
          </div>
        </div>
      </main>
    </>
  );
}
