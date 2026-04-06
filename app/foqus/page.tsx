export default function Foqus() {
  return (
    <div className="p-5 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-5">Foqus is different.</h1>
        <div className="flex justify-center mb-5">
          <video
            src="/videos/demo1.mp4"
            controls
            playsInline
            className="max-w-4xl rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div></div>
          <h2 className="text-2xl mb-5">
            Track your sites of distraction and reshape your browsing habits.
          </h2>
          <div className="text-lg m-0">
            <span className="font-bold">I created Foqus for myself.</span> I
            found myself mindlessly visiting social media sites and
            doomscrolling. I wasted hours. Sometimes to procrastinate and
            sometimes out of boredom.
          </div>
          <div></div>
          <div></div>
          <div className="text-lg mb-5">
            I know my potential: an avid reader, a learner, an artist.{" "}
            <span className="font-bold">
              Foqus helps me pause and make an active choice about what to do
              next.
            </span>{" "}
            Maybe it can help you too :)
          </div>
        </div>

        <h3 className="text-xl">
          Browser extension <span className="italic">* coming soon *</span>
        </h3>
      </div>
      <a
        href="https://github.com/marley/foqus"
        target="_blank"
        className="flex justify-center"
      >
        {">> "}Source code{" <<"}
      </a>
    </div>
  );
}
