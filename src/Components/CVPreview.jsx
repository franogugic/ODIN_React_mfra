import React from "react";

const CVPreview = ({ formData, handleSubmit }) => {
    return (
        <div className="fixed inset-0 bg-[#00000080] backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-[800px] min-h-[1000px] shadow-2xl rounded-xl p-10 flex flex-col text-[#333] overflow-y-auto">
                <h1 className="text-3xl font-bold text-center mb-12 pt-16 text-[#5C4B51]">My CV</h1>

                <section className="mb-8 border-b border-[#8CBEB2] pb-4">
                    <h2 className="text-xl font-semibold text-[#5C4B51] mb-2">Personal Information</h2>
                    <p><span className="font-semibold">Full Name:</span> {formData.fullName}</p>
                    <p><span className="font-semibold">Email:</span> {formData.email}</p>
                    <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                </section>

                <section className="mb-8 border-b border-[#8CBEB2] pb-4">
                    <h2 className="text-xl font-semibold text-[#5C4B51] mb-2">Education</h2>
                    <p><span className="font-semibold">School:</span> {formData.schoolName}</p>
                    <p><span className="font-semibold">Title of Study:</span> {formData.studyTitle}</p>
                    <p><span className="font-semibold">Date:</span> {formData.studyDate}</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#5C4B51] mb-2">Experience</h2>
                    <p><span className="font-semibold">Company:</span> {formData.companyName}</p>
                    <p><span className="font-semibold">Position:</span> {formData.position}</p>
                    <p><span className="font-semibold">Responsibilities:</span> {formData.responsibilities}</p>
                    <p><span className="font-semibold">Date:</span> {formData.experienceDate}</p>
                </section>

                <button
                    className="mt-10 bg-[#F06060] hover:bg-[#e04e4e] text-white py-2 px-6 rounded-lg self-center transition-all"
                    onClick={handleSubmit}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default CVPreview;
