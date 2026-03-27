import Tile from "../tile/page";

export default function FractalTiles({}) {
  return (
    <div className={`parent h-full w-full flex justify-around`}>
      <Tile
        className="div3"
        link="https://www.linkedin.com/in/marleyalford/overlay/contact-info/"
        phrase="Contact"
      />
      <Tile
        className="div4"
        link="https://www.loom.com/share/8c1af3f2adb7453eab6a286815b6a423"
        phrase="Recent work"
      />
      <Tile
        className="div5"
        link="https://marley.github.io/valentine-recipe/"
        phrase="Fav early webapp"
      />
      <Tile
        className="div6"
        link="https://github.com/marley/javascript-practice-problems/blob/main/practice-arrays.md"
        phrase="Coding exercises 4 u"
      />
      <Tile
        className="div7"
        link="https://elon.io/"
        phrase="Current obsession"
      />
    </div>
  );
}
