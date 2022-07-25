import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Title, { Description } from "./components/Function";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Application from "./pages/Application";
import StudentsData from "./pages/StudentsData";
import Contact from "./pages/Contact";

function App() {
  const studentsData = [
    {
      id: 1,
      name: "Sarah Obasi",
      stateOfOrigin: "Imo",
      stack: "React",
      description: "Sarah is a React Developer",
    },
    {
      id: 2,
      name: "Jordan Irabor",
      stateOfOrigin: "Delta",
      stack: "Node",
      description: "Jordan is a Node Developer",
    },
    {
      id: 3,
      name: "Michelle Ugwu",
      stateOfOrigin: "Enugu",
      stack: "Fullstack",
      description: "Michelle is a Fullstack Developer",
    },
    {
      id: 4,
      name: "Goodness Osumah",
      stateOfOrigin: "Abia",
      stack: "Flutter",
      description: "Goodness is a Flutter Developer",
    },
    {
      id: 5,
      name: "Victoria Okotie",
      stateOfOrigin: "Edo",
      stack: "Backend",
      description: "Victoria is a Backend Developer",
    },
  ];

  return (
    <div className="App">
      {/* {studentsData.map((student) => (
        <Card
        key={student.id}
          name={student.name}
          stateOfOrigin={student.stateOfOrigin}
          stack={student.stack}
          description={student.description}
        />
      ))} */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/application" element={<Application />}></Route>
          <Route path="/students-data" element={<StudentsData />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
