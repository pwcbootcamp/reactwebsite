import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ApplicationForm from "./pages/ApplicationForm";
import Gallery from "./pages/Gallery";
import StudentData from "./pages/StudentData";
import Posts from "./pages/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecruitmentForm from "./pages/RecruitmentForm";
import Users from "./pages/Users";
import TodoList from "./pages/TodoList";
import Login from "./pages/Login";
import "./pages/Login.css";
import SingleBlogPost from "./pages/SingleBlogPost";

function App() {
  // const studentData = [
  //   {id: 1, name: "Timilehin Shodiya", state: "Ogun", stack: "fullstack", description: "I am the Timi. 'Nuff said"},
  //   {id: 1, name: "Sarah Obasi", state: "Imo", stack: "fullstack", description: "I'm just a sucker for pain"},
  //   {id: 1, name: "Seyi Adenusi", state: "Kano", stack: "fullstack", description: "I am a fullstack Developer"},
  //   {id: 1, name: "Prince Richard", state: "Lagos", stack: "fullstack", description: "I am a fullstack Developer"},
  //   {id: 1, name: "Micheal Bateman", state: "Carlifonia", stack: "fullstack", description: "I am a fullstack Developer"}
  // ]

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/application-form" element={<ApplicationForm />}></Route>
          <Route path="/students-data" element={<StudentData />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/recruitment-form" element={<RecruitmentForm />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/todos" element={<TodoList />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/single-blog-post/:id"
            element={<SingleBlogPost />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
