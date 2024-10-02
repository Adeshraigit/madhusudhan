import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-10 mb-12">
        <h1 className="text-5xl font-bold text-center mb-4">
          Applications of Water Treatment Systems
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Core applications for filtering impurities and restoring water quality standards.
        </p>
      </div>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-12">
        <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
          Water Treatment System Applications
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Water Treatment Systems have some core applications, such as effective filtration of impurities and chemicals present in the water. This restores water quality standards to meet industrial and environmental requirements. Water is a vital resource, and in its pure state, it is tasteless, colorless, and odorless. However, industrial water sources often contain impurities, solids, gases, and other contaminants. As a result, effective water treatment is necessary before use in most industries.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9c9?auto=format&fit=crop&q=80&w=3600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Water Treatment System"
          width={1200}
          height={600}
          className="rounded-lg object-cover mb-6"
        />
      </section>

      {/* Application Areas Section */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg p-10 mb-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Application Areas
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          With the help of advanced technology, we design and develop a wide range of Water Treatment Plants and Spare Parts. Our precision-engineered products serve a variety of industries, ensuring effective water treatment across multiple sectors.
        </p>
        
        {/* Applications Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Automobile Industries</h3>
            <p className="text-gray-600">Efficient water treatment for automotive processes.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Breweries & Distilleries</h3>
            <p className="text-gray-600">Maintaining water quality for beverage production.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Tech Park Projects</h3>
            <p className="text-gray-600">Water solutions for large commercial establishments.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Desalination</h3>
            <p className="text-gray-600">Transforming seawater into potable water.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Fertilizer & Chemical Industries</h3>
            <p className="text-gray-600">Ensuring high water standards for chemical processes.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Food & Beverage Industries</h3>
            <p className="text-gray-600">Maintaining safety and hygiene standards for production.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Hotels & Hospitals</h3>
            <p className="text-gray-600">Reliable water treatment solutions for critical sectors.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Leather Industries</h3>
            <p className="text-gray-600">Water purification solutions for leather processing.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Packaged Drinking Water</h3>
            <p className="text-gray-600">Ensuring purity and safety for bottled water production.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Pharmaceutical Industries</h3>
            <p className="text-gray-600">Water treatment for sensitive pharmaceutical processes.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Power Plants</h3>
            <p className="text-gray-600">Optimizing water use for power generation processes.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Textile Industries</h3>
            <p className="text-gray-600">Effective water treatment for textile dyeing and processing.</p>
          </li>
        </ul>
      </section>

      {/* Applications for Special Use */}
      <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Special Applications
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our water treatment systems also cater to unique industries, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Petrochemical Industries</li>
          <li>Sugar Industries</li>
          <li>Process Industries</li>
        </ul>
        <Image
          src=""
          alt="Special Water Applications"
          width={1200}
          height={600}
          className="rounded-lg object-cover"
        />
      </section>

      {/* Call to Action */}
    <section className="text-center py-12">
      <h3 className="text-3xl font-bold mb-4 text-blue-600">
        Ready to Find Your Perfect Water Solution?
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        Contact Madhusudan Aqua Industries today and let us help you with our innovative water treatment solutions.
      </p>
      <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
        <a href="/contact">
        Get In Touch
        </a>
      </button>
    </section>
    </main>
  )
}

export default page


    



    
