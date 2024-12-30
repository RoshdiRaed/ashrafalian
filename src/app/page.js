"use client";

// import React, { useEffect } from "react";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function Page() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Default easing for animations
    });
  }, []);

    // Define the handleFormSubmit function
    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log("Form data", event.target);
   
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          event.target,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Your message has been sent successfully!");
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Failed to send the message. Please try again.");
          }
        );
      
      // Reset the form after submission
      event.target.reset();
   };
   
  return (
    <>
        <link rel="shortcut icon" href="./image/logo.png" type="image/x-icon" />
        <title>Ashraf Alian - Professional Designer</title>

      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold text-emerald-500">Ashraf Alian</div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-emerald-400 transition-colors duration-300">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
  id="hero"
  className="min-h-screen flex items-center relative bg-[url('/image/img1.webp')] bg-cover bg-center bg-no-repeat text-white"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10 mt-16">
    <div className="max-w-3xl">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-left"
        data-aos="fade-up"
      >
        Crafting Digital <span className="text-emerald-500">Excellence</span>
      </h1>
      <p
        className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-gray-300 text-left"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Transforming visions into captivating digital experiences through innovative design solutions.
      </p>
      <div className="flex justify-start">
        <a
          href="#portfolio"
          className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-emerald-700 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore My Work
        </a>
      </div>
    </div>
  </div>
</section>


{/* About */}

<section id="about" className="py-24 bg-gray-900">
    <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
                <span className="text-emerald-500">About</span> Me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3" data-aos="fade-right">
                    <img src="./image/7176410_3572691.webp" alt="Ashraf Alian" className="rounded-lg w-full h-auto shadow-2xl"></img>
                </div>
                <div className="md:w-2/3" data-aos="fade-left">
                    <p className="text-lg leading-relaxed text-gray-300">
                        I am a professional designer specializing in creating distinctive digital experiences. With extensive expertise in branding and design, I collaborate with forward-thinking clients to transform their visions into compelling visual narratives that resonate with their target audience.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Portfolio */}

<section id="portfolio" className="py-24 bg-gray-800">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Featured <span className="text-emerald-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg portfolio-item" data-aos="fade-up">
                <img src="/image/img5_1.webp" alt="Project 1" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"></img>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                        <h3 className="text-xl font-semibold text-emerald-400">Brand Identity</h3>
                        <p className="text-gray-300 mt-2">Corporate branding project</p>
                    </div>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg portfolio-item" data-aos="fade-up" data-aos-delay="100">
                <img src="/image/img3.webp" alt="Project 2" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"></img>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                        <h3 className="text-xl font-semibold text-emerald-400">Web Design</h3>
                        <p className="text-gray-300 mt-2">E-commerce platform</p>
                    </div>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg portfolio-item" data-aos="fade-up" data-aos-delay="200">
                <img src="/image/img4_1.webp" alt="Project 3" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"></img>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                        <h3 className="text-xl font-semibold text-emerald-400">Social Media</h3>
                        <p className="text-gray-300 mt-2">Marketing campaign</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Services */}

<section id="services" className="py-24 bg-gray-900">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            My <span className="text-emerald-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300" data-aos="fade-up">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Brand Identity</h3>
                <p className="text-gray-300">Creating distinctive visual identities that capture the essence of your brand and resonate with your audience.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Web Design</h3>
                <p className="text-gray-300">Crafting responsive, user-centric websites that deliver exceptional digital experiences across all devices.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Social Media</h3>
                <p className="text-gray-300">Developing cohesive social media designs that enhance your brands presence and engagement.</p>
            </div>
        </div>
    </div>
</section>

{/* Contact */}
<section id="contact" className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleFormSubmit}
              className="space-y-6"
              data-aos="fade-up"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-black py-6 text-center">
    <p className="text-gray-400">&copy; 2024 Ashraf Alian. All rights reserved.</p>
</footer>

{/* <script className={}></script> */}
    </>
  )
}

export default Page;