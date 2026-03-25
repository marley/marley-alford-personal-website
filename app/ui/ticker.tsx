import Marquee from "react-fast-marquee";

export default function Ticker() {
  return (
    <div>
      <Marquee className="bg-white text-red-500" autoFill={true}>
        <span className="text-lg">Marley Alford</span>
        <span className="text-lg mx-2">{" • "}</span>
      </Marquee>
    </div>
  );
}
