import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 md:px-6 md:py-8 bg-black mt-auto mb-0">
            <div class="sm:flex sm:items-center sm:justify-between font-oswald">
                <a href="#" class="flex items-center mb-4">
                    <span class="self-center text-xl whitespace-nowrap text-green-400">Tahmid Khan</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 md:mb-4 sm:mb-0">
                    <li class="px-3">
                        <a target="_blank" href="https://www.linkedin.com/in/tahmid-khan-arnab/"><img src="linkedin.png" className='h-6' class="hover:scale-125 transition-all duration-300" width="30" height="30"></img></a>
                    </li>
                    <li class="px-3">
                        <a target="_blank" href="https://github.com/ornobdoorknob"><img src="gh.png" className='h-6' class="hover:scale-125 transition-all duration-300" width="30" height="30"></img></a>
                    </li>
                    <li class="px-3">
                        <a target="_blank" href="mailto:tahmidkhan864@gmail.com"><img src="email.svg" className='h-6' class="hover:scale-125 transition-all duration-300" width="30" height="30"></img></a>
                    </li>
                </ul>
            </div>
            <hr class="sm:mx-auto border-green-400 my-8" />
            <span class="block text-sm text-gray-400 sm:text-center">©<a href="https://tahmidkhan.com/" class="transition-all duration-300 hover:text-white"> Tahmid Khan Arnab</a>. All Rights Reserved.
            </span>
        </footer>

    )
}

export default Footer