// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Headers/Header";
import Footer from "./Components/Footer/Footer";
import ContactPage from "./Pages/ContactPage";
import "./styles/pages.css";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import AdmissionsPage from "./Pages/AdmissionPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import { useState } from "react";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sakshi Sachin Korane"
          studentPhotoUrl="/images/ssk.jpg" 
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      
    <Router>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
        <ChatbotComponent/>
      </div>
    </Router>
    </>
  );
}
export default App;

