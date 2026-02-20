
import {Routes, Route} from "react-router-dom"

import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill";


function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Skill" element={<Skill/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    )
}
export default AppRouter;