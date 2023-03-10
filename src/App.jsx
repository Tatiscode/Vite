import "./App.css";
import { Routes, Route,Router } from "react-router-dom";
import { NotFound } from "./assets/NotFound/NotFound";
import FormContactUs from "./components/Pages/FormContactUs/FormContatcUs";
import PageOriginal from "./components/Pages/PageOriginal/PageOriginal";
import { HomePage } from "./components/Pages/HomePage/HomePage";



export function App() {
  return (
    <div className="App">  
    <HomePage/>    
      <Routes>
        <Route path="/" element={<PageOriginal />} />
        <Route path="/ContactUs" element={<FormContactUs/>} />
        <Route path="/Error" element={<NotFound />} />
      </Routes>
    </div>
  );
}
