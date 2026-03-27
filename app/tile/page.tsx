import { cn } from "@sglara/cn";

interface TileProps {
  link: string;
  phrase: string;
  hoverBg?: string; // Make sure to include 'hover:' in the name.
  hoverColor?: string;
  className?: string;
}

export default function Tile({
  link,
  phrase,
  hoverBg = "hover:bg-foreground",
  hoverColor = "hover:text-background",
  className = "",
}: TileProps) {
  return (
    <div
      className={cn(
        "border border-foreground h-full w-full flex justify-center items-center",
        `pointer-cursor text-background ${hoverBg} ${hoverColor}`,
        className,
      )}
    >
      <a href={link}>{phrase}</a>
    </div>
  );
}
