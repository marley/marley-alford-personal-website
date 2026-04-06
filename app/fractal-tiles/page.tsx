import Tile from "../tile/page";

export default function FractalTiles({}) {
  return (
    <div className={`parent h-full w-full flex justify-around mb-5`}>
      <Tile
        className="div3"
        link="https://www.linkedin.com/in/marleyalford/"
        phrase="Contact"
      />
      <Tile
        className="div4"
        link="https://github.com/marley/foqus"
        phrase="Newest project"
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
