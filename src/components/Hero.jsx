import React from 'react'

const Hero = () => {
    return (
        <div class="w-full flex items-center justify-center min-h-screen">
            <div class="text-black py-20 px-10 drop-shadow-4xl md:text-left text-center">
                <img src="instahd.png" class="border-8 border-green-400 border-double rounded-full w-full md:w-40 md:flex md:justify-center" />
                <div class="text-white font-oswald text-2xl lg:text-4xl md:text-3x">Hi! My name is</div>
                <div class="text-green-400 opacity-75 font-oswald text-4xl md:text-8xl font-extrabold md:pb-5 pb-2 whitespace-nowrap">Tahmid Khan Arnab</div>
            </div>
        </div>
    )
}
export default Hero