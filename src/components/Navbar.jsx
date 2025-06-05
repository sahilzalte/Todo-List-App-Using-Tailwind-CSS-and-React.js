import React from 'react'

const Navbar = () => {
    const handleHomeClick = () => {
        window.location.reload();
    };

    return (
        // <nav className='flex items-center bg-slate-700/60 backdrop-blur-3xl text-white py-0 sticky top-0 md:px-0 px-2 z-10'>
        <nav className='flex items-center  bg-transparent text-white py-0 sticky top-0 md:px-0 px-2 z-10'>

            {/* Left logo */}
            <div className="logo px-4 flex items-center">
                {/* <span className='font-bold text-xl'></span> */}
                <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 font-semibold tracking-wide text-white rounded-md group overflow-hidden transition-all duration-300 ease-in-out">

                    {/* <!-- Background Layer 1 --> */}
                    <span class="absolute inset-0 bg-purple-800 transition-transform duration-300 transform -translate-x-1.5 -translate-y-1.5 opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>

                    {/* <!-- Background Layer 2 with Blend --> */}
                    <span class="absolute inset-0 bg-pink-700 transition-transform duration-300 transform translate-x-1.5 translate-y-1.5 opacity-80 mix-blend-screen group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>

                    {/* <!-- Actual Button Text --> */}
                    <span class="relative z-10 text-3xl">iTask</span>
                </a>

            </div>

            {/* Center favicon */}
            <div id='1' className="flex-grow flex justify-center md:object-contain relative md:left-[45px]">
                <img
                    src="/favicon.ico"
                    alt="favicon"
                    className="h-30 w-50 object-contain"
                />
            </div>

            {/* Right menu */}
            <ul className="flex gap-8 px-4 items-center">
                <li className='cursor-pointer hover:font-bold transition-all hidden sm:block' onClick={handleHomeClick}>
                    {/* Home Button - Purple slide from left */}
                    <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-300 rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Home</span>
                    </a>
                </li>

                <li className='cursor-pointer hover:font-bold transition-all'>
                    {/* Feedback Button - Reverse purple slide from right */}
                    <a href="https://contact-websites.vercel.app/todoapp.html" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-300 rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[40deg] bg-purple-600 absolute bottom-0 right-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 mr-9 group-hover:mr-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Feedback</span>
                    </a>
                </li>
                {/* </a> */}
            </ul>
        </nav>
    )
}

export default Navbar
