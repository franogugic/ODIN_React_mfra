import React from 'react'

const FAQSection = () => {
    return(
    <div className="w-full max-w-xl bg-[#F2EBBF] p-8 rounded-xl mb-12">
        <div className="flex flex-col gap-4">
            <div className="collapse collapse-plus bg-[#8CBEB2] border border-[#5C4B51] rounded-md">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold text-[#5C4B51]">How do I create my CV?</div>
                <div className="collapse-content text-sm text-[#5C4B51]">
                    Click "Create CV" and fill in your details. Our tool will format it professionally for you.
                </div>
            </div>

            <div className="collapse collapse-plus bg-[#8CBEB2] border border-[#5C4B51] rounded-md">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-[#5C4B51]">Can I edit my CV later?</div>
                <div className="collapse-content text-sm text-[#5C4B51]">
                    Yes! You can update your CV anytime by going to "My CVs" and selecting "Edit."
                </div>
            </div>

            <div className="collapse collapse-plus bg-[#8CBEB2] border border-[#5C4B51] rounded-md">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-[#5C4B51]">How do I download my CV?</div>
                <div className="collapse-content text-sm text-[#5C4B51]">
                    After completing your CV, click the "Download" button to save it as a PDF.
                </div>
            </div>

            <div className="collapse collapse-plus bg-[#8CBEB2] border border-[#5C4B51] rounded-md">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-[#5C4B51]">Is this service free?</div>
                <div className="collapse-content text-sm text-[#5C4B51]">
                    Yes! Creating and downloading your CV with our tool is completely free.
                </div>
            </div>

        </div>
    </div>)
}

export default FAQSection
