import ChainText from "../chain-text.tsx/page";
import Ticker from "../ui/ticker";

export default function Hero() {
  const para1 = `Hi, my name is Marley. I have{" "}
        <a href="https://www.linkedin.com/in/marleyalford/" target="_blank">
          worked in tech
        </a>{" "}
        since 2017.`;
  return (
    <div className="p-5 text-3xl">
      <p>
        Hi, my name is Marley. I have{" "}
        <a href="https://www.linkedin.com/in/marleyalford/" target="_blank">
          worked in tech
        </a>{" "}
        since{" "}
        <ChainText
          content="2017"
          nextContent={`after an inspiring summer at <a href="https://hackny.org/" target="_blank">hackNY</a>`}
        />
        . Sometimes I also{" "}
        <a
          href="https://www.linkedin.com/posts/marleyalford_ive-been-teaching-intro-web-dev-with-frauenloop-share-7266847502950170625-ZIgN?utm_source=share&utm_medium=member_desktop&rcm=ACoAABgCsPMB_GB8ATVdsSDiUi0JSRA3BcMojQE"
          target="_blank"
        >
          teach
        </a>
        . Currently building simple, intuitive{" "}
        <ChainText
          content="professional portfolios"
          nextContent={`such as <a href="https://www.zackalfordofficial.com/" target="_blank">this</a> and <a href="https://alexeigalar.com/" target="_blank">this</a>`}
        />
        .{" "}
      </p>
    </div>
  );
}
