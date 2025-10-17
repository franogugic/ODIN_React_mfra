import React from 'react'

const EducationWrapper = ({formData, handleChange}) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-[#5C4B51] pb-1">Education</h2>
            <input type="text" name="schoolName" value={formData.schoolName} placeholder="School Name" className="p-2 border border-[#5C4B51] rounded" onChange={handleChange} />
            <input type="text" name="studyTitle" value={formData.studyTitle} placeholder="Title of Study" className="p-2 border border-[#5C4B51] rounded" onChange={handleChange}/>
            <input type="text" name="studyDate" value={formData.studyDate} placeholder="Date of Study" className="p-2 border border-[#5C4B51] rounded" onChange={handleChange}/>
        </div>
    )
}

export default EducationWrapper
