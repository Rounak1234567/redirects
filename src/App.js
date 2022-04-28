
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}


function Home() {
  return (
    <>
        <h2>Welcome to the Home page!</h2>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
        <h2>Welcome to the About page!</h2>
      <nav>
        <Link to="/2">Home 2</Link>
      </nav>
    </>
  );
}

function Home2() {
  return (
    <>
        <h2>Welcome to the Home page 2!</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}





export default App;
