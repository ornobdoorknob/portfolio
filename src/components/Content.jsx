import React from 'react'

const Content = () => {
    return (
        <div class = "w-full">
            <a name ="skills"></a>
            <div class = "snap-y">
             <div name="skill" class="pt-10 font-oswald text-4xl text-green-400 font-extrabold text-center">
                    Skills
            </div>
            <div class="bg-black py-10 flex items-center justify-center container mx-auto w-full">
                <div class="font-poppins grid cols-4 md:grid-cols-4 spy-10m: grid-cols-2">
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="text-green-400 font-oswald text-lg">Programming Languages</div>
                            <ul class="text-sm list-disc list-inside text-zinc-300">
                                <li>Java</li>
                                <li>C</li>
                                <li>SQL</li>
                                <li>Dart</li>
                                <li>C++</li>
                                <li>C#</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="text-green-400 font-oswald text-lg">Scripting Languages</div>
                            <ul class="text-sm list-disc list-inside text-zinc-300">
                                <li>JavaScript</li>
                                <li>Bash</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="text-green-400 font-oswald text-lg">Web Development</div>
                            <ul class="text-sm list-disc list-inside text-zinc-300">
                                <li>HTML5</li>
                                <li>CSS3; Bootstrap, Tailwind</li>
                                <li>XML</li>
                                <li>JavaScript; AngularJS, ReactJS, ViteJS</li>
                                <li>Jakarta EE</li>
                                <li>Microsoft Azure</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="text-green-400 font-oswald text-lg">Database Management Systems</div>
                            <ul class="text-sm list-disc list-inside text-zinc-300">
                                <li>Firebase</li>
                                <li>MySQL</li>
                                <li>Microsoft Access</li>
                            </ul>
                        </div>
                    </div>
                    <div class="my-5 rounded-xl text-white mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="text-green-400 font-oswald text-lg">Software Development Tools</div>
                            <ul class="text-sm list-disc list-inside text-zinc-300">
                            <li>Jira</li>
                            <li>Git</li>
                            <li>Figma</li>
                            <li>Virtual Machines</li>
                            <li>IntelliJ IDEA</li>
                            <li>Unreal Engine</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class = "align-center hero bg-fixed bg-center">
            <a name ="portfolio"></a>
            <div class="pt-10 font-oswald text-4xl text-green-400 font-extrabold text-center">
                Projects
            </div>
            <div class="py-10 flex items-center justify-center container mx-auto w-full text-center p-5 mt-5">
                <div class="font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="my-5 border-green-400 border-2 text-white bg-black mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="border-2 overflow-hidden">
                                <img src="breakdown.gif"></img>
                            </div>
                            <div class="font-oswald text-lg">Break Down</div>
                            <div>
                                <span class="border-2 border-green-400 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">Java</span>
                            </div>
                            <div class="font-poppins text-xs text-zinc-300 my-1">A Battleship clone made using the MVC software design pattern. Components made using the Swing library.</div>
                            <a target="_blank" href="https://github.com/ornobdoorknob/breakdown" class="transition-all duration-300 text-center py-2 border-2 bg-black hover:bg-white hover:text-black">View GitHub</a>
                        </div>
                    </div>
                    <div class="border-green-400 border-2 my-5 text-white bg-black mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="border-2 overflow-hidden">
                                <img src="compiler.gif"></img>
                            </div>
                            <div class="font-oswald text-lg">Custom Compiler</div>
                            <div>
                                <span class="border-2 border-green-400 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">C</span>
                            </div>
                            <div class="font-poppins text-xs text-zinc-300 my-1">A Reader, Parser and Scanner of a custom programming language called Corrosion (inpsired by Rust).</div>
                            <a target="_blank" href="https://github.com/ornobdoorknob/corrosion-compiler" class="transition-all duration-300 text-center py-2 border-2 bg-primary hover:bg-white hover:text-black">View GitHub</a>
                            </div>
                    </div>
                    <div class="border-green-400 border-2 my-5 text-white bg-black mx-5">
                        <div class="p-5 flex flex-col">
                            <div class="border-2 overflow-hidden">
                                <img src="website.png"></img>
                            </div>
                            <div class="font-oswald text-lg">Portfolio Website</div>
                            <div>
                                <span class="border-green-400 border-2 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">ReactJS</span>
                                <span class="border-green-400 border-2 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">TailwindCSS</span>
                                <span class="border-green-400 border-2 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full">ViteJS</span>
                            </div>
                            <div class="font-poppins text-xs text-zinc-300 my-1">Responsive website built using a mobile-first approach utilizing TailwindCSS as framework for utilies, ReactJS for dynamic components and ViteJS for production optimization.</div>
                            <a target="_blank" href="https://github.com/ornobdoorknob/portfolio" class="transition-all duration-300 text-center py-2 border-2 bg-primary hover:bg-white hover:text-black">View GitHub</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}
export default Content