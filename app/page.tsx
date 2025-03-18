import Image from "next/image";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import { Hero } from "@/components/ui/hero";
import { FlipText } from "@/components/ui/fliptext";
import { Projects } from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <FlipText />
      <Projects />
    </>
  );
}
