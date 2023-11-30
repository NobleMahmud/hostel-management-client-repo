import React from 'react';

const Plans = () => {
    return (
        <div>
            <div class="p-10 bg-gray-100 min-h-screen py-12 flex items-center justify-center">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* <!-- Pricing Card 1 --> */}
    <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div class="p-1 bg-blue-200">
      </div>
      <div class="p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Silver</h2>
        <p class="text-gray-600 mb-6">Ideal for starters</p>
        <p class="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
        <ul class="text-sm text-gray-600 mb-6">
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Affordable and delicious meals delivered to your doorstep.
          </li>
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Access to a variety of daily meal options.
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Convenient subscription with easy cancellation.
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button
          class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Select Plan
        </button>
      </div>
    </div>

    {/* <!-- Pricing Card 2 --> */}
    <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div class="p-1 bg-green-200">
      </div>
      <div class="p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Gold</h2>
        <p class="text-gray-600 mb-6">Get started with premium services</p>
        <p class="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
        <ul class="text-sm text-gray-600 mb-6">
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            All the benefits of the Silver Plan, plus...
          </li>
        
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Personalized meal recommendations based on your preferences.
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Ability to request specific meals to suit your taste.
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button
          class="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
          Select Plan
        </button>
      </div>
    </div>

    {/* <!-- Pricing Card 3 --> */}
    <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div class="p-1 bg-purple-200">
      </div>
      <div class="p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Platinum</h2>
        <p class="text-gray-600 mb-6">VIP services</p>
        <p class="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
        <ul class="text-sm text-gray-600 mb-6">
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            The ultimate dining experience with all Gold Plan perks and more.
          </li>
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http

://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Priority delivery service for faster and fresher meals.
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            VIP access to exclusive events and culinary experiences.
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button
          class="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
          Select Plan
        </button>
      </div>
    </div>

  </div>
</div>
        </div>
    );
};

export default Plans;