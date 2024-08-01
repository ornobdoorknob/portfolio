import React from 'react'

const Footer = () => {
    return (
        <footer class="p-4 md:px-6 md:py-8 bg-black mt-auto mb-0 border-green-400 border-t-2">
            <div class="sm:flex sm:items-center sm:justify-between font-oswald">
                <a href="#" class="flex items-center mb-4">
                    <span class="self-center text-xl whitespace-nowrap text-green-400">Tahmid Khan</span>
                </a>
            </div>
            <hr class="sm:mx-auto border-green-400 my-8" />
            <span class="block text-sm text-gray-400 sm:text-center">©<a href="https://tahmidkhan.com/" class="transition-all duration-300 hover:text-white"> Tahmid Khan Arnab</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer