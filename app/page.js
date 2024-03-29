"use client"
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


const EventRegistrationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const otherCountries = countryList().getData().filter((country) => country.value !== 'US');

  // Concatenate the USA as the first element
  const countries = [{ label: 'United States', value: 'US' }, ...otherCountries];


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cool-blue pt-6 px-8">
      <div className="flex items-center justify-between w-full h-22">
        <div className="flex-1">
          <img src="/cal_hacks_9.svg" className="h-36 self-start"/>
        </div>
        
        <div className="self-center flex-grow text-center text-dark-blue font-bold text-4xl">Registration for Cal Hacks 11.0!</div>
        <div className="flex-1"></div>
      </div>
        

      <form className="grow bg-amber-50 shadow-md rounded px-8 pt-6 pb-8 mb-24 rounded-xl">
        <div className="m-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="m-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            required
          />
        </div>

        <div className="m-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            University
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="university"
            type="text"
            placeholder="Your university"
            required
          />
        </div>
        

        <div className="m-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
                Major
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="major"
                type="text"
                placeholder="Your major"
                required
          />
        </div>

        <div className="m-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grad-date">
                Expected Graduation Date
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="month"
                type="month"
                placeholder="MM"
                required
          />
                  </div>

          

       

        <div className="m-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
            Your gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="event"
            required
          >
            <option>Please select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Nonbinary</option>
            <option>Other</option>
            <option>Decline to state</option>
            
          </select>
        </div>

        <div className="m-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            Country
          </label>
          <Select
            id="country"
            options={countries}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select your country"
            required
          />
        </div>

        <div className="m-8 mb-4">
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
                required
          />
        </div>

        <div className="m-8 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Attach your resume here (optional)
          </label>
          <input
            className="appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resume"
            type="file"
            accept="application/pdf"
          />
        </div>


        <div className="m-8 mb-4">
          <input
            type="checkbox"
            id="eighteen"
            className="mr-2 leading-tight"
            required
          />
          <label className="text-gray-700 text-sm font-bold" htmlFor="terms">
            I am 18+ years of age.
          </label>
        </div>
        
        <div className="flex items-end justify-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
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