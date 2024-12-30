import React from 'react';
import './App.css';


function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-indigo-600 p-5 text-white text-center">
        <h1 className="text-4xl font-bold animate-pulse">Hi, I’m Rajat 👋</h1>
        <p className="text-xl mt-2">Designer ----> Developer</p>
      </header>

      {/* Hero Section with GIF */}
      <section className="relative w-full h-96 mt-10">
        <img
          src="https://media.giphy.com/media/l1J9qpuvI5L7bYzGQ/giphy.gif"  // Example GIF
          alt="Hero Background"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h2 className="text-4xl font-extrabold">Innovative. Dynamic. Developer.</h2>
        </div>
      </section>

      {/* Home and About Sections */}
      <div className="max-w-4xl mx-auto p-5 space-y-8">
        {/* Home Section */}
        <section id="home" className='h-screen flex-col item-center justify-center flex'>
          <h2 className="text-7xl font-bold text-center mt-12 ">Home</h2>
          <p className="mt-4 text-xl text-gray-700 text-center">
            Hi, I'm Rajat, a passionate web developer with a love for crafting beautiful and functional user experiences. Let's make something awesome together.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mt-12 h-screen flex-col item-center justify-center flex ">
          <h2 className="text-7xl font-bold text-center">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            I specialize in building responsive and scalable web applications. With experience in modern web technologies like React, Node.js, and Tailwind CSS, I bring ideas to life with clean, maintainable code.
          </p>
        </section>
         {/* About Section */}
         <section id="about" className="mt-12 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">Content</h2>
          <p className="mt-4 text-lg text-gray-700">
            I specialize in building responsive and scalable web applications. With experience in modern web technologies like React, Node.js, and Tailwind CSS, I bring ideas to life with clean, maintainable code.
          </p>
        </section>

             {/* About Section */}
             <section id="about" className="mt-12 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">Project</h2>
          <p className="mt-4 text-lg text-gray-700">
            I specialize in building responsive and scalable web applications. With experience in modern web technologies like React, Node.js, and Tailwind CSS, I bring ideas to life with clean, maintainable code.
          </p>
        </section>

        {/* Widgets Section */}
        <section id="skills" className="mt-12 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="widget p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-html" viewBox=
              "0 0 16 16">
                <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
              </svg>
              <h3 className=" text-2xl font-bold text-center">HTML</h3>
            </div>
            <div className="widget p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Devicon-css3-plain-wordmark.svg" alt="CSS" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">CSS</h3>
            </div>
            <div className="widget p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Devicon-javascript-plain.svg" alt="JavaScript" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">JavaScript</h3>
            </div>
          </div>
        </section>
      </div>

      {/* Footer with Your Photo */}
      <footer className="bg-indigo-600 p-6 mt-12 text-center text-white">
        <img
          src="your-photo-url.jpg"  // Replace with your actual photo URL
          alt="Rajat Developer"
          className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg transform hover:scale-110 transition-transform"
        />
        <h4 className="mt-4 text-2xl font-bold">Rajat Developer</h4>
        <p className="mt-2">Connect with me for collaboration on exciting projects!</p>
      </footer>
    </div>
  );
}

export default Home;

