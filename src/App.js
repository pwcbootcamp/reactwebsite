import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ApplicationForm from './pages/ApplicationForm';
import StudentData from './pages/StudentData';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header />
        <h1>Hello PWC Trainees</h1>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element = {<ContactUs />} />
            <Route path="/AboutUs" element = {<AboutUs />} />
            <Route path="/ApplicationForm" element={<ApplicationForm />} />
            <Route path="/StudentData" element={<StudentData />} />
          </Routes>
          
        <Counter />

      </BrowserRouter>
    </div>
  );
}

export default App;
