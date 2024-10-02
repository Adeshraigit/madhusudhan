'use client'
import React, { useState } from 'react'

function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-10 mb-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          We&apos;re here to help you with any queries you may have.
        </p>
      </div>

      {/* Contact Details Section */}
      <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-12">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
          Get in Touch
        </h2>
        
        <div className="text-gray-700 leading-relaxed mb-6">
          <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
          <p className="mb-2"><strong>Phone:</strong> +91 9820142424</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:madhusudanaquaind@gmail.com" className="text-blue-500 hover:underline">madhusudanaquaind@gmail.com</a></p>
          <p className="mb-2"><strong>Address:</strong> Gala No.5, Bld. No. 6, Parsawanath Indl. Est., Kolekar Pada, Waliv Village, Vasai East, Vasai - 401208, Maharashtra, India</p>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.257258873075!2d72.86150931542719!3d19.30885318689176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f1db3ab8e3f7%3A0xc69c6dfd6440cb48!2sGala%20No.5%2C%20Bld.%20No.%206%2C%20Parsawanath%20Indl.%20Est.%2C%20Kolekar%20Pada%2C%20Waliv%20Village.%2C%20Vasai%20East%2C%20Vasai%20-%20401208%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1696265254105!5m2!1sen!2sus"
            width="600"
            height="450"
            className="rounded-lg shadow-lg"
            loading="lazy"
            style={{ border: 0 }}
            title="Location Map"
          ></iframe>
        </div>
      </section>
      <section>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-12">
      {success && (
        <div className="bg-green-100 text-green-800 p-4 mb-4 rounded">
          Your message has been sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold rounded-md py-3 hover:bg-blue-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
      </section>
    </main>
  )
}

export default Page