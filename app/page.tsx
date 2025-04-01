import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import { FlipText } from "@/components/ui/fliptext";
import { Projects } from "@/components/ui/projects";
import { SheetDemo } from "@/components/ui/email";

export default function Home() {
  return (
    <>
      <div id="top"></div>

      <div id="home">
        <Hero />
      </div>

      <FlipText />
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <SheetDemo />
      </div>
    </>
  );
}
