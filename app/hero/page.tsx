import Tab from "../tab/page";
import Ticker from "../ui/ticker";

export default function Hero() {
  return (
    <div>
      <div className="flex">
        <Tab />
        <Tab />
        <Tab />
      </div>
      <Ticker />
    </div>
  );
}