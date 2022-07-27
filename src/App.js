import "./App.css";

// import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ApplicationForm from "./pages/ApplicationForm";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

// import StudentList from "./components/StudentList";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import RecruitmentForm from "./pages/RecruitmentForm";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import SingleBlogPost from "./pages/SingleBlogPost";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/ApplicationForm" element={<ApplicationForm />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/ContactUs" element={<ContactUs />} />
				<Route path="/Gallery" element={<Gallery />} />
				<Route path="/Posts" element={<Posts />} />
				<Route path="/Users" element={<Users />} />
				<Route path="/Todos" element={<Todos />} />
				<Route path="/RecruitmentForm" element={<RecruitmentForm />} />
				<Route path="/login" element={<Login />} />
				<Route path="/singleBlogPost/:id" element={<SingleBlogPost />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
