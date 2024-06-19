import "@picocss/pico";
import "./css/styles.css";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar">
            <li>
              <Link to="/" className="listitem">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="listitem">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="listitem">
                Blog
              </Link>
            </li>
          </nav>
        </div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
