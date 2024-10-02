'use client'
import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-10 mb-12">
      <h1 className="text-5xl font-bold text-center mb-4">
        Madhusudan Aqua Industries
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto">
        Leading Manufacturer of Water Treatment Plants and Spare Parts
      </p>
    </div>

    {/* Company Overview */}
    <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-12">
      <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6">
        Company Overview
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Established in 2021, Madhusudan Aqua Industries is a professionally managed company. We specialize in the manufacturing, supply, and export of various water treatment plants and spare parts. Our range includes Mineral Water Plants, R.O Systems, Desalination Plants, Ultra Filtration systems, and more. Our cutting-edge technology and commitment to superior services allow us to lead product development through innovation and technology.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Company Overview Image"
        width={1200}
        height={600}
        className="rounded-lg object-cover mb-6"
      />
    </section>

    {/* Our Mission */}
    <section className="max-w-6xl mx-auto bg-gradient-to-r from-white to-blue-50 rounded-lg shadow-lg p-10 mb-12">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
        Our Mission
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Our mission is to convert the available water source into specific water quality required by industries, communities, and individuals. We achieve this through superior engineering, innovative product design, and stringent quality control. Whether it’s for personal hygiene, industrial processes, or environmental conservation, we deliver tailored water solutions for any need.
      </p>
    </section>

    {/* Turnkey Projects */}
    <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 mb-12">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Turnkey Projects
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        We undertake turnkey projects for various industries, plants, manufacturing units, and more. Our team provides complete solutions from design to execution, ensuring superior results across sectors like real estate, hospitality, healthcare, and government.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <li className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Industries & Manufacturing Units</h3>
          <p className="text-gray-600">Water treatment solutions for various industrial needs.</p>
        </li>
        <li className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Packaged Mineral Water Manufacturers</h3>
          <p className="text-gray-600">Bespoke solutions for packaged water plants.</p>
        </li>
        <li className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Real Estate & Townships</h3>
          <p className="text-gray-600">Efficient water systems for large complexes and townships.</p>
        </li>
        <li className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Municipal Water Management</h3>
          <p className="text-gray-600">Solutions for government and community water needs.</p>
        </li>
        <li className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Hospitals & Hotels</h3>
          <p className="text-gray-600">Safe and reliable water treatment for critical sectors.</p>
        </li>
        <li className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Educational Institutions</h3>
          <p className="text-gray-600">Comprehensive water systems for large campuses.</p>
        </li>
      </ul>
    </section>

    {/* Applications Section */}
    <section className="max-w-6xl mx-auto bg-gradient-to-r from-white to-indigo-50 rounded-lg shadow-lg p-10 mb-12">
      <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
        Applications of Our Water Treatment Solutions
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Battery Water: Two Bed DM Unit</li>
        <li>Pharma Industries: Two Bed + Mixed Bed DM unit (RO may be required)</li>
        <li>Pathology Lab: Two Bed + Mixed Bed DM Unit (RO)</li>
        <li>Medical Dialysis: DM or RO Unit</li>
        <li>Mineral Water: Filtration or RO Unit</li>
        <li>Cooling Tower: Softening Plant / Filter Unit</li>
        <li>Boiler: Softening / DM</li>
        <li>Electronics (Semiconductor): DM Unit + Ultra Filter</li>
        <li>Automobile, Chemical & Paint: DM Unit / Softener</li>
      </ul>
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
