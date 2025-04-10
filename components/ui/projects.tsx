import { HoverEffect } from "../ui/card-hover-effect";
import { Github } from "lucide-react";
import { Badge } from "./badge";

export function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Portfolio",
    description: "This Website. showcasing my latest and greatest projects.",
    link: "https://placeholder.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/portfolio",
    icon: <Github className="w-4 h-4" />,
    badges: [
      "NextJS",
      "TypeScript",
      "AWS",
      "Shadcn UI",
      "Web3Forms",
      "AceturnityUI",
      "MagicUI",
    ],
  },
  {
    title: "Blonde Money Website",
    description:
      "A re-design of a financial and political data company's website.",
    link: "http://blonde-money.vercel.app",
    githubLink: "https://github.com/JonathanBanerjee/blonde-money",
    icon: <Github className="w-4 h-4" />,
    badges: ["NextJS", "TypeScript", "Shadcn UI", "Web3Forms", "AceturnityUI"],
  },
  {
    title: "Airchecker",
    description:
      "A dynamic web application using Air Quality and Geolocation APIs. Built with React, Vite, and Pico CSS for real-time air quality monitoring.",
    link: "https://airchecker.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/airchecker",
    icon: <Github className="w-4 h-4" />,
    badges: ["React", "Vite", "Pico CSS", "REST API"],
  },
  {
    title: "FairWeather",
    description: "A Weather Forecast app using the Open Weather Map API.",
    link: "https://fairweather.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/fair-weather",
    icon: <Github className="w-4 h-4" />,
    badges: ["Javascript", "SCSS", "HTML", "REST API"],
  },
  {
    title: "To Do App",
    description:
      "A to do app demonstrating Create, Read, Update and Delete functionality.",
    link: "https://todosforme.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/todo",
    icon: <Github className="w-4 h-4" />,
    badges: ["JavaScript", "SCSS", "HTML"],
  },
  {
    title: "Spotify Clone",
    description:
      "A replica of the Spotify website, built using SASS and HTML5, using advanced CSS techniques.",
    link: "https://jonathan-spotify.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/spotify-clone",
    icon: <Github className="w-4 h-4" />,
    badges: ["SCSS", "HTML5", "CSS"],
  },
];
