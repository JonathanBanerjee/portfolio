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
    title: "Airchecker",
    description:
      "A dynamic web application using Air Quality and Geolocation APIs. Built with React, Vite, and Pico CSS for real-time air quality monitoring.",
    link: "https://airchecker.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/airchecker",
    icon: <Github className="w-4 h-4" />,
    badges: ["React", "Vite", "Pico CSS", "API"],
  },
  {
    title: "FairWeather",
    description: "A Weather Forecast app using the Open Weather Map API.",
    link: "https://fairweather.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/fairweather",
    icon: <Github className="w-4 h-4" />,
    badges: ["React", "API"],
  },
  {
    title: "To Do App",
    description: "A simple CRUD to do app.",
    link: "https://todosforme.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/todo-app",
    icon: <Github className="w-4 h-4" />,
    badges: ["React", "CRUD"],
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic two-player Tic-Tac-Toe game built with React, demonstrating core React concepts and state management.",
    link: "https://react-noughtsandcrosses.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/tic-tac-toe",
    icon: <Github className="w-4 h-4" />,
    badges: ["React", "State Management"],
  },
  {
    title: "Blonde Money Website",
    description:
      "A re-design of a financial and political data company's website.",
    link: "http://blonde-money.vercel.app",
    githubLink: "https://github.com/JonathanBanerjee/blonde-money",
    icon: <Github className="w-4 h-4" />,
    badges: ["React", "Vercel"],
  },
  {
    title: "Spotify Clone",
    description:
      "A pixel-perfect replica of the Spotify website, built using SASS and HTML5, showcasing advanced CSS techniques.",
    link: "https://jonathan-spotify.netlify.app",
    githubLink: "https://github.com/JonathanBanerjee/spotify-clone",
    icon: <Github className="w-4 h-4" />,
    badges: ["SASS", "HTML5", "CSS"],
  },
];
