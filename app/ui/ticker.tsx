import Marquee from "react-fast-marquee";

export default function Ticker() {
  return (
    <div id="ticker">
      <Marquee
        className="bg-cool-steel text-foreground text-2xl"
        autoFill={true}
      >
        <span>MARLEY ALFORD</span>
        <span className="mx-2">{" // "}</span>
      </Marquee>
    </div>
  );
}
