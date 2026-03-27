import Hero from "./hero/page";
import FractalTiles from "./fractal-tiles/page";
import Ticker from "./ui/ticker";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col md:h-screen justify-between">
          <div>
            <Hero />
            <FractalTiles />
          </div>
          <Ticker />
        </div>
      </div>
      <p className="p-5 text-center">
        site by <a href="https://github.com/marley">marley</a>, circa 2026 A.D.
      </p>
      <p className="flex justify-center">
        <a href="https://webring.hackny.org">
          <img
            src="https://webring.hackny.org/logo.png"
            width="40"
            height="40"
          />
        </a>
      </p>
    </div>
  );
}
