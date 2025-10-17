import React, {useState} from 'react';
import Button from "./Components/Button.jsx";
import FAQSection from "./Components/FAQSection.jsx";
import PersonalInfoWrapper from "./Components/PersonalInfoWrapper.jsx";
import CVSection from "./Components/CVSection.jsx";
import CVPreview from "./Components/CVPreview.jsx";

export default function App() {
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        schoolName: "",
        studyTitle: "",
        studyDate: "",
        companyName: "",
        position: "",
        responsibilities: "",
        experienceDate: "",
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting");
        console.log({formData});
        setShowPreview(!showPreview);
    }
    
    return (
        <div className="App bg-[#F2EEBF] min-h-screen flex flex-col items-center justify-start pt-16 text-[#5C4B51]">

            <h1 className="text-3xl font-bold text-center px-4 py-32">
                Your CV. Your story. Our tool for the perfect first impression.
            </h1>

            <FAQSection/>
            
            <p className="text-center text-[#5C4B51] mb-12 px-4">
                If you don’t have any more questions, scroll down to start creating your CV!
            </p>

            <CVSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

            {showPreview && (
                <CVPreview formData={formData} handleSubmit={handleSubmit} />
            )}
            
        </div>
    );
}
