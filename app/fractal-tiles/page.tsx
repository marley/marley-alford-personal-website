import Tile from "../tile/page";

export default function FractalTiles({}) {
  return (
    <div className={`parent h-full w-full flex justify-around mb-5`}>
      <Tile
        className="div3"
        link="https://framaforms.org/say-hi-1776889604"
        phrase="Contact"
      />
      <Tile
        className="div4"
        link="https://github.com/marley/foqus"
        phrase="Add my chrome extension"
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
