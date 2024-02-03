// pages/index.js
import React from 'react';

const EventRegistrationForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cool-blue p-12">
      <form className="bg-amber-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            University
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="university"
            type="text"
            placeholder="Your university"
          />
        </div>
        

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
                Major
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="major"
                type="text"
                placeholder="Your major"
          />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grad-date">
                Expected Graduation Date
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="month"
                type="month"
                placeholder="MM"
          />
                  </div>

          

       

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
            Your gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="event"
          >
            <option>Please select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Nonbinary</option>
            <option>Other</option>
            <option>Decline to state</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
            Your country of residence
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="event"
          >
            <option>Please select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Nonbinary</option>
            <option>Other</option>
            <option>Decline to state</option>
          </select>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
            Why are you interested in attending Cal Hacks 11.0? What are you interested in
building? (1000 character maximum)
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                id="essay"
                rows="15"
                type="text"
                placeholder="Type your essay here"
          />
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 leading-tight"
          />
          <label className="text-gray-700 text-sm font-bold" htmlFor="terms">
            I am 18+ years of age.
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;