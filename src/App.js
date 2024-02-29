import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Course from "./components/CourseId/Course"

function App() {
  return (
    <BrowserRouter>
      
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
        {/* <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
        <Routes>
        <Route exact path="/courses" element={<CourseHome />} />
      </Routes>
        <Routes>
        <Route exact path="/team" element={<Team />} />
      </Routes> */}
        <Routes>
        <Route exact path="/Courses/:id" element={<Course />} />
      </Routes>
        {/* <Routes>
        <Route exact path="/journal" element={<Blog />} />
      </Routes>
        <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
        <Footer />
      
    </BrowserRouter>
  )
}

export default App
