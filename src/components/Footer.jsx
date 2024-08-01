import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 md:px-6 md:py-8 bg-black mt-auto mb-0 border-green-400 border-t-2">
            <div class="sm:flex sm:items-center sm:justify-between font-oswald">
                <a href="#" class="flex items-center mb-4">
                    <span class="self-center text-xl whitespace-nowrap text-green-400">Tahmid Khan</span>
                </a>
                <li>
    <div class="flex flex-row space-y-0 space-x-6">
    <a target="_blank" href="https://www.linkedin.com/in/tahmid-khan-arnab/">
      <img src="https://img.icons8.com/?size=100&id=98960&format=png&color=00ff00" class= "hover:scale-125 transition-all duration-300 w-8 h-8" /></a>
      <a target="_blank" href="mailto:tahmidkhan864@gmail.com">
      <img src="https://img.icons8.com/?size=100&id=499&format=png&color=00ff00" class="hover:scale-125 transition-all duration-300 w-8 h-8" /></a>
      <a target="_blank" href="https://github.com/ornobdoorknob"><img src="https://img.icons8.com/?size=100&id=62856&format=png&color=00ff00" class="hover:scale-125 transition-all duration-300 w-8 h-8" /></a>
    </div>
                </li>
            </div>
            <hr class="sm:mx-auto border-green-400 my-8" />
            <span class="block text-sm text-gray-400 sm:text-center">©<a href="https://tahmidkhan.com/" class="transition-all duration-300 hover:text-white"> Tahmid Khan Arnab</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer