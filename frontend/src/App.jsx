import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Students from "./pages/Students/Students";
import About from "./pages/About/About";
import axios from "axios";
import AddStudentForm from "./pages/AddStudentForm/AddStudentForm";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-student" element={<AddStudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
