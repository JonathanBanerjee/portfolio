import Image from "next/image";
// import { ModeToggle } from "@/components/ui/mode-toggle";
import { Hero } from "@/components/ui/hero";
import { FlipText } from "@/components/ui/fliptext";
import { Projects } from "@/components/ui/projects";
import { SheetDemo } from "@/components/ui/email";
// import { OrbitingCirclesDemo } from "@/components/magicui/orbitingcircles";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <OrbitingCirclesDemo /> */}
      <FlipText />
      <Projects />
      <SheetDemo />
    </>
  );
}
