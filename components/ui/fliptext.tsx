import React from "react";
import { FlipWords } from "./flip-words";

export function FlipText() {
  const words = ["creative", "pro-active"];

  return (
    <div className="h-[20rem] flex flex-col justify-center items-center px-4 text-center">
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        Hi, I'm Jonathan.
        <br /> A{" "}
        <FlipWords
          words={words}
          className="text-blue-600 dark:text-orange-400"
        />
        developer crafting exceptional digital experiences.
      </div>
    </div>
  );
}
