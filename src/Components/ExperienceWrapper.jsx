import React from 'react'

const ExperienceWrapper = ({formData, handleChange}) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-[#5C4B51] pb-1">Experience</h2>
            <input type="text" name="companyName" value={formData.companyName} placeholder="Company Name" className="p-2 border border-[#5C4B51] rounded" onChange={handleChange} />
            <input type="text" name="position" value={formData.position} placeholder="Position" className="p-2 border border-[#5C4B51] rounded" onChange={handleChange} />
            <textarea name="responsibilities" value={formData.responsibilities} placeholder="Main Responsibilities" className="p-2 border border-[#5C4B51] rounded" rows={3} onChange={handleChange} ></textarea>
            <input name="experienceDate" value={formData.experienceDate} type="text" placeholder="Date" className="p-2 border border-[#5C4B51] rounded" onChange={handleChange} />
        </div>
    )
}

export default ExperienceWrapper
