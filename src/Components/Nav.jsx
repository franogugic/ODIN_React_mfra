import React from 'react'
import Button from "./Button.jsx";

const Nav = () => {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full container mx-auto flex justify-between items-center bg-[#F2EEBF] py-4">
            <div className=" w-full flex items-center justify-between py-2 px-4">
                <h1 className=" text-white text-[32px] font-semibold font-[Poppins] leading-none">
                    CareerCrafter
                </h1>
                <Button text="Create CV now" />
            </div>
        </div>
    )
}

export default Nav
