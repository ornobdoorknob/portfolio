import React from 'react'

const Hero = () => {
    return (
        <div class="w-full flex items-center justify-center">
            <div class="text-black py-20 px-10 drop-shadow-4xl md:text-left text-center">
            <img src="instahd.png" class="border-8 border-green-400 border-double rounded-full w-full md:w-40 md:flex md:justify-center"/>
                <div class="text-white font-oswald text-2xl lg:text-4xl md:text-3x">Hi! My name is</div>
                <div class="text-green-400 opacity-75 font-oswald text-4xl md:text-8xl font-extrabold md:pb-5 pb-2 whitespace-nowrap">Tahmid Khan Arnab</div>
                <div class="text-white font-poppins mt-1 text-sm max-w-xl md:text-md">I recently graduated from Algonquin College with a degree in Computer Science. I am continually expanding my skills, both as a programmer and a communicator. My experience includes working with object-oriented and procedural programming languages, as well as web development technologies. A comprehensive list of my skills is provided below. I am eager to apply my abilities in the industry and contribute to meaningful projects!</div>
            </div>  
        </div>
    )
}
export default Hero