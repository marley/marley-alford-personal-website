interface TabProps {
  title: string;
  background: string;
}

export default function Tab({ title, background = "bg-slate-500" }: TabProps) {
  return (
    <div
      className={`h-full text-white ${background} flex flex-col justify-center items-center w-full`}
    >
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}
