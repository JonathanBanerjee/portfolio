// import "@picocss/pico";
// import "./css/styles.css";
import "./css/output.css";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Hamburger } from "./components/Hamburger";
// import { Button } from "./components/Button";
import { LightDarkButton } from "./components/LightDarkButton";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function AppRouter() {
  const [mode, setMode] = useState<string>("Light");

  const switchMode = () => {
    mode === "Light" ? setMode("Dark") : setMode("Light");
  };

  const handleHamburgerClick = () => {
    console.log("Hamburger clicked!");
  };

  return (
    <>
      <div id="main" className={mode}>
        <Hamburger onClick={handleHamburgerClick} />
        <Router>
          <div>
            <nav className="navbar">
              <ul>
                <li className="myname">
                  <strong>Jonathan Banerjee</strong>
                </li>

                <li>
                  <Link to="/" className="listitem ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="listitem ">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="listitem ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="listitem ">
                    Contact
                  </Link>
                </li>
                <li>
                  <LightDarkButton onClick={switchMode} mode={mode} />
                </li>
              </ul>
            </nav>
          </div>

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/portfolio" Component={Portfolio} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default AppRouter;
