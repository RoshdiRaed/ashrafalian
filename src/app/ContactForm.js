import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        event.target,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    event.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Get in <span className="text-emerald-500">Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="6"
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
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
  );
}

export default ContactForm;
