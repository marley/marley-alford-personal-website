import Tab from "../tab/page";
import Ticker from "../ui/ticker";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-around h-9/10">
        <Tab title="Experience" background="bg-seaweed" />
        <Tab title="Projects" background="bg-golden-orange" />
        <Tab title="Links" background="bg-golden-sand" />
      </div>
      <Ticker />
    </div>
  );
}
