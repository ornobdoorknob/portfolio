import React from 'react'

const ContactCard = () => {
    return (
<div><a name="contact"></a>
<div class="pt-10 font-oswald text-4xl text-green-400 font-extrabold text-center">
                Contact Me
            </div>
  <div class="flex flex-col items-center justify-center bg-black p-4 text-white w-full mb-4">
    <div>
      <img src="instahd.png" class="border-8 border-green-400 border-double rounded-full my-5 h-40"/>
    </div>
    <div class="flex flex-row space-y-0 space-x-6">
    <a target="_blank" href="https://www.linkedin.com/in/tahmid-khan-arnab/">
      <img src="https://img.icons8.com/?size=100&id=98960&format=png&color=00d200" class= "hover:scale-125 transition-all duration-300 w-10 h-10" /></a>
      <a target="_blank" href="mailto:tahmidkhan864@gmail.com">
      <img src="https://img.icons8.com/?size=100&id=499&format=png&color=00d200" class="hover:scale-125 transition-all duration-300 w-10 h-10" /></a>
      <a target="_blank" href="https://github.com/ornobdoorknob"><img src="https://img.icons8.com/?size=100&id=62856&format=png&color=00d200" class="hover:scale-125 transition-all duration-300 w-10 h-10" /></a>
    </div>
  </div>
</div>
    )
}

export default ContactCard