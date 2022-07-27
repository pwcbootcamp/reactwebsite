import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './components/Counter';
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import StudentData from './pages/StudentData';
import ApplicationForm from './pages/ApplicationForm';
import RecruitmentForm from './pages/RecruitmentForm';
import Posts from './pages/Posts';


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
            <Route path="/Gallery" element = {<Gallery />} />
            <Route path="/StudentData" element={<StudentData />} />
            <Route path="/ApplicationForm" element={<ApplicationForm />} />
            <Route path="/RecruitmentForm" element={<RecruitmentForm />} />
            <Route path="/Posts" element={<Posts />} />
          </Routes>
          
        <Counter />

      </BrowserRouter>
    </div>
  );
}

export default App;
