import React from 'react'

const Header = () => {
    return (
<body class="bg-gray-100">
    <header class="flex items-center justify-between bg-black text-white py-4 px-6 md:py-3 md:px-8">
    <a href="#" class="flex items-center font-oswald">
                    <span class="self-center text-xl text-green-400">Tahmid Khan</span>
                </a>
        <nav class="font-poppins hidden md:flex space-x-6">
            <a href="#" class="hover:text-gray-400 transition-all duration-300">About</a>
            <a href="#skills" class="hover:text-gray-400 transition-all duration-300">Skills</a>
            <a href="#portfolio" class="hover:text-gray-400 transition-all duration-300">Portfolio</a>
        </nav>
        <a href="#contact" class="font-poppins hidden md:inline-block border-green-400 border-2 bg-black text-white px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300">Contact</a>
        <a href="#contact" class="font-poppins md:hidden block bg-black text-white py-2">Contact</a>
    </header>
</body>
    )
}
export default Header