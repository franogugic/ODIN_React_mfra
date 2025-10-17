import React, {useState} from 'react'

const PersonalInfoWrapper = ({formData, handleChange}) => {
    
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold border-b border-[#5C4B51] pb-1">Personal Information</h2>
            <input type="text" name="fullName" value={formData.fullName} placeholder="Full Name" className="p-2 border border-[#5C4B51] rounded" 
                   onChange={handleChange} />
            <input type="email" name="email" value={formData.email} placeholder="Email" className="p-2 border border-[#5C4B51] rounded" 
                   onChange={handleChange} />
            <input type="tel" name="phone" value={formData.phone} placeholder="Phone" className="p-2 border border-[#5C4B51] rounded" 
                   onChange={handleChange} />
        </div>
    )
}

export default PersonalInfoWrapper

