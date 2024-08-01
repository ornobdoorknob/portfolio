import React from 'react'

const Header = () => {
    return (
<body class="bg-gray-100">
    <header class="flex items-center justify-between bg-black text-white py-4 px-6 md:py-3 md:px-8">
    <a href="https://tahmidkhan.com" class="flex items-center font-oswald">
                    <span class="self-center text-xl text-green-400">Tahmid Khan</span>
                </a>
        <nav class="font-poppins hidden md:flex space-x-6 py-4">
            <a href="#skills" class="hover:text-gray-400 transition-all duration-300">Skills</a>
            <a href="#portfolio" class="hover:text-gray-400 transition-all duration-300">Portfolio</a>
        </nav>
    </header>
</body>
    )
}
export default Header