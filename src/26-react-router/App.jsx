import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./26-react-router/components/Home.jsx";
import About from "./26-react-router/components/About.jsx";
import Contacts from "./26-react-router/components/Contacts.jsx";
import NotFound from "./26-react-router/components/NotFound.jsx";
import MainLayout from "./26-react-router/layouts/MainLayout.jsx";
import Courses from "./26-react-router/components/Courses.jsx";
import SingleCourse from "./26-react-router/components/SingleCourse.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="courses/:courseSlug" element={<SingleCourse />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App