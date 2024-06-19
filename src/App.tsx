import "./App.css";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function AppRouter() {
  return (
    <>
      {/* <div className="App">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
        <Blog />
      </div> */}

      <Router>
        <div>
          <nav>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
            <li>
              <Link to="/blog"> Blog</Link>
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
