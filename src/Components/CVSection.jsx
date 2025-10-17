import React from 'react'
import Button from "./Button.jsx";
import PersonalInfoWrapper from "./PersonalInfoWrapper.jsx";
import EducationWrapper from "./EducationWrapper.jsx";
import ExperienceWrapper from "./ExperienceWrapper.jsx";



const CVSection = ({formData, handleChange, handleSubmit}) => {
    return (
    <form className="w-full max-w-xl bg-[#F2EBBF] p-8 rounded-xl shadow-lg flex flex-col gap-8" onSubmit={handleSubmit}>

        <PersonalInfoWrapper formData={formData} handleChange={handleChange} />
        
        <EducationWrapper  formData={formData} handleChange={handleChange} />

        <ExperienceWrapper   formData={formData} handleChange={handleChange} />

        {/* Save / Download Button */}
        <div className="flex justify-center mt-4">
            <Button text="Show CV" type="submit">Download CV</Button>
        </div>
    </form>
    )
}

export default CVSection
