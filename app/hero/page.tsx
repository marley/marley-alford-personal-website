import ChainText from "../chain-text.tsx/page";
import Ticker from "../ui/ticker";

export default function Hero() {
  const para1 = `Hi, my name is Marley. I have{" "}
        <a href="https://www.linkedin.com/in/marleyalford/" target="_blank">
          worked in tech
        </a>{" "}
        since 2017.`;
  return (
    <div className="h-screen flex flex-col justify-between">
      <div id="main" className="text-3xl">
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
          . Currently building a more beneficial music ecosystem @{" "}
          <a href="https://ohr-fm.vercel.app/" target="_blank">
            ohr.fm
          </a>
          .{" "}
        </p>
        <p>
          <ChainText
            content="Contact me"
            nextContent="about freelance projects, exciting tech for good initiatives, or cool open source tools."
          />
        </p>
      </div>
      <Ticker />
    </div>
  );
}
