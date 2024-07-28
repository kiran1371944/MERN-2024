import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Logout from "./pages/Logout";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
          <Navbar/>
      <Routes>
         <Route path = "/" element = {<Home/>}/>
         <Route path = "/about" element = {<About/>}/>
         <Route path = "/contact" element = {<Contact/>}/>
         <Route path = "/services" element = {<Services/>}/>
         <Route path = "/signup" element = {<SignUp/>}/>
         <Route path = "/login" element = {<Login/>}/>
         <Route path = "/logout" element = {<Logout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App