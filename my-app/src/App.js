// import logo from "./logo.svg";
import "./App.css";
import "./components/header.css";
import "./components/footer.css"
import "./components/Card.css";
import "./pages/home.css";
import "./pages/app.css";
import "./pages/contact.css";
import "./pages/about.css";
import "./pages/gallery.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from "./pages/Home";
import About from "./pages/About";
import Application from "./pages/Application";
import Contact from "./pages/ContactPage";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/application" element={<Application />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
