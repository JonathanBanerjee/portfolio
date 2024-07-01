import "@picocss/pico";
import "./css/styles.css";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
// import { Button } from "./components/Button";
import { LightDarkButton } from "./components/LightDarkButton";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function AppRouter() {
  const [mode, setMode] = useState<string>("Light");

  const switchMode = () => {
    mode === "Light" ? setMode("Dark") : setMode("Light");
  };

  return (
    <>
      <div id="main" className={mode}>
        <LightDarkButton onClick={switchMode} mode={mode} />

        <Router>
          <div>
            <nav className="navbar">
              <li>
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
                <Link to="/blog" className="listitem ">
                  Blog
                </Link>
              </li>
            </nav>
          </div>

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/portfolio" Component={Portfolio} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/blog" Component={Blog} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default AppRouter;
