import { useEffect } from "react";
import "../css/timeline.scss";

export function About() {
  useEffect(() => {
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll(".container p");

      paragraphs.forEach((paragraph) => {
        const scrollTop = window.scrollY;
        const elementOffset = paragraph.getBoundingClientRect().top + scrollTop;
        const distance = elementOffset - scrollTop;
        const windowHeight = window.innerHeight;
        const breakPoint = windowHeight;

        if (distance > breakPoint) {
          paragraph.classList.add("more-padding");
        } else {
          paragraph.classList.remove("more-padding");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-container">
      <div className="container">
        <h1>About Me</h1>
        <div className="left-content">
          <p>St. Anthony's </p>
          <sub>Primary</sub>
          <p>International School of Zug & Luzern</p>
          <sub>Zug</sub>
          <p>University College School</p>
          <sub>Secondary School</sub>
          <p>Mander Portman Woodward</p>
          <sub>Sixth Form </sub>
          <p> The Open University</p>
          <sub>Computing and IT</sub>
          <p>British Computing Society </p>
          <sub>DevOps</sub>
          <p>AWS</p>
          <sub>Certified</sub>
          <p>Seedrs / Republic Europe</p>
          <sub>Global</sub>
          <p>The Jump Bootcamp</p>
          <sub>DevOps</sub>
          <p>The Jump Bootcamp</p>
          <sub>Software</sub>
        </div>

        <div className="right-content">
          <p>2001-2008</p>
          <sub>School</sub>
          <p>2009-2010</p>
          <sub>Switzerland</sub>
          <p>2010-2012</p>
          <sub>GCSEs</sub>
          <p>2013-2015</p>
          <sub>A Levels</sub>
          <p>2017-2021</p>
          <sub> BSc</sub>
          <p>2020</p>
          <sub> Foundations</sub>
          <p>2021</p>
          <sub>Cloud Practitioner</sub>
          <p>2022-2023</p>
          <sub> IT Administrator</sub>
          <p>2023</p>
          <sub>Engineering</sub>
          <p>2023-2024</p>
          <sub>Engineering</sub>
        </div>
      </div>
    </div>
  );
}
