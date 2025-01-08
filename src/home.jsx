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

          
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x1000)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Hello People
          </h1>
          <p className="text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-2s">
            I am Rajat Jagtap
          </p>
          <a href="#about" className="px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full transition duration-300 hover:bg-indigo-700 animate__animated animate__fadeIn animate__delay-3s">
            Learn More
          </a>
        </div>
      </div>
    </div>




        </section>

        {/* About Section */}
        <section id="about" className="mt-12 h-screen flex-col item-center justify-center flex ">
          <h2 className="text-7xl font-bold text-center">About Me</h2>
       

          
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img
            className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg"
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Profile"
          />
        </div>

        {/* Right Section: Personal Details */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Rajat Jagtap</h1>
          <p className="text-xl text-gray-600 mb-6">Web Developer | React Enthusiast</p>

          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <span className="font-semibold">Age:</span> 20
            </div>
            <div>
              <span className="font-semibold">Birthday:</span> September 18, 2004
            </div>
            <div>
              <span className="font-semibold">Email:</span> rajat.jagtap.dev@gmail.com
            </div>
            <div>
              <span className="font-semibold">Degree:</span> B.Tech in Data Science
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +1234567890
            </div>
            <div>
              <span className="font-semibold">City:</span> Khandwa (M.P)
            </div>
          </div>
        </div>
      </div>
      
    </div>


        </section>

        {/* About Section */}
        <section id="about" className="mt-12 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">Resume</h2>   
          <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold text-gray-800">Your Name</h1>
              <p className="text-xl text-gray-600">Frontend Developer | React Enthusiast</p>
            </div>

            {/* Personal Details */}
            <section className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">RAJAT JAGTAP</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600">Email:</span>
                  <span className="text-gray-800">rajat.jagtap.dev@gmail.com</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600">Phone:</span>
                  <span className="text-gray-800">+91 78060***06</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600">LinkedIn:</span>
                  <span className="text-gray-800">linkedin.com/in/your-profile</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600">Location:</span>
                  <span className="text-gray-800">KHANDWA,(M.P)</span>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Data Science</h3>
                  <p className="text-gray-600">XYZ University, Graduation: 2024</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800">High School</h3>
                  <p className="text-gray-600">ABC School, Graduation: 2020</p>
                </div>
              </div>
            </section>

            {/* College Details Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">College Details</h2>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800">Shri Dadaji Institute Of Technology And Science</h3>
                  <p className="text-gray-600">Currently, i am doing my B.Tech in Data Science From SDITS</p>
                  <p className="text-gray-600">Khandwa</p>
                </div>
              </div>
            </section>
          </div>
        

        </section>
        {/* About Section */}
        <section id="about" className="mt-42 relative top-24 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">Content</h2>
    
      
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h1>

    <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form action="#" method="POST" class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700">Full Name</label>
      
        </div>

        <div>
          <label for="email" class="block text-gray-700">Email Address</label>
        :
        </div>

        <div>
          <label for="subject" class="block text-gray-700">Subject</label>
    
        </div>

        <div>
          <label for="message" class="block text-gray-700">Message</label>
          <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message"></textarea>
        </div>

        <div>
          <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>



          
        </section>

        {/* About Section */}
        <section id="about" className="mt-12 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">Project</h2>
          <p className="mt-4 text-lg text-gray-700">
            
          </p>
        </section>

        {/* Widgets Section */}
        <section id="skills" className="mt-12 h-screen flex-col item-center justify-center flex">
          <h2 className="text-7xl font-bold text-center">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="widget p-6 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-html" viewBox=
                "0 0 16 16">
                <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
              </svg>
              <h3 className=" text-2xl font-bold text-center">HTML</h3>
            </div>
            <div className="widget p-6 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Devicon-css3-plain-wordmark.svg" alt="CSS" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">CSS</h3>
            </div>
            <div className="widget p-6 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Devicon-javascript-plain.svg" alt="" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">JavaScript</h3>
            </div>
            <div className="widget p-6 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Devicon-javascript-plain.svg" alt="" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">WordPress</h3>
            </div>
            <div className="widget p-6 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Devicon-javascript-plain.svg" alt="" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">Canva</h3>
            </div>
            <div className="widget p-6 bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Devicon-javascript-plain.svg" alt="" className="w-16 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-center">MS Office</h3>
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

