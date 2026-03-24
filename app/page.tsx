import Image from "next/image";
import Hero from "./hero/page";
import TabSection from "./tab-section/page";

export default function Home() {
  return (
    <div className="flex flex-col h-full font-sans">
      <Hero />
      <TabSection />
      <TabSection />
      <TabSection />
    </div>
  );
}
