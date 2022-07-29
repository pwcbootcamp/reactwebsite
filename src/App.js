import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import ApplicationForm from "./Pages/ApplicationForm";
import ContactUs from "./Pages/ContactUs";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Posts from "./Pages/Posts";
import RecruitmentForm from "./Pages/RecruitmentForm";
import Singleblogpost from "./Pages/Singleblogpost";
import StudentData from "./Pages/StudentData";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/aboutUs"} element={<AboutUs />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path={"/studentdata"} element={<StudentData />} />
          <Route path={"/contactUs"} element={<ContactUs />} />
          <Route path={"/applicationForm"} element={<ApplicationForm />} />
          <Route path={"/recruitmentForm"} element={<RecruitmentForm />} />
          <Route path={"/post"} element={<Posts />} />
          <Route path={"/Users"} element={<Users />} />
          <Route path={"/LoginPage"} element={<LoginPage />} />
          <Route path={"/singleblogpost/:id"} element={<Singleblogpost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
