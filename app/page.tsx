import Hero from "./hero/page";
import FractalTiles from "./fractal-tiles/page";
import Ticker from "./ui/ticker";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Hero />
        <FractalTiles />
      </div>
      <Ticker />
    </div>
  );
}
