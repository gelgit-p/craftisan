import React from 'react';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?w=1600&q=80"
            alt="Our store"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About TechStore</h1>
          <p className="text-xl max-w-2xl">
            Your trusted destination for premium tech products since 1970.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1970, TechStore has been at the forefront of technological innovation
                for over 50 years. What started as a small electronics shop has grown into a
                leading destination for tech enthusiasts and professionals alike.
              </p>
              <p className="text-gray-600 mb-4">
                We pride ourselves on offering only the highest quality products, backed by
                exceptional customer service and technical expertise. Our team of experts
                carefully selects each product in our inventory to ensure it meets our
                stringent standards for quality and performance.
              </p>
              <p className="text-gray-600">
                Today, we continue to evolve and adapt to the ever-changing technology
                landscape, always staying one step ahead to bring you the latest and
                greatest in tech innovation.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&q=80"
                alt="Our team"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product we sell meets our high standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, bringing you the latest technology has to offer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}