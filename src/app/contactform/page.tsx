"use client";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    stage: "",
    inquiryType: "",
    message: "",
    access_key: "72d2bebc-3155-47ab-82c0-a3cf2e389412",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16">
        <div className="absolute w-40 h-40 bg-purple-500 rounded-full opacity-30 animate-pulse top-10 left-10"></div>
        <div className="absolute w-60 h-60 bg-purple-600 rounded-full opacity-20 animate-ping bottom-20 right-20"></div>
        <div className="max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-xl p-10 sm:p-12 z-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Form submitted successfully!</h2>
          <p className="text-gray-800 mb-6">
            Thank you for reaching out. We look forward to connecting and helping you grow.
          </p>
          <p className="text-gray-800 mb-6">
            Please click below to book your 30-minute call with our growth strategist.
          </p>
          <a
            href="https://calendly.com/d/cq4y-3rt-4h7/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition hover:bg-purple-800 font-semibold"
          >
            Book a Call on Calendly
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-purple-700 to-purple-900 min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16">
      {/* Animated background shapes */}
      <div className="absolute w-40 h-40 bg-purple-500 rounded-full opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-60 h-60 bg-purple-600 rounded-full opacity-20 animate-ping bottom-20 right-20"></div>

      <div className="max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-xl p-8 sm:p-12 z-10 w-full">
        {/* Strategic pitch section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">
            We want to be your strategic growth partner, not another cookie-cutter agency.
          </h1>
          <p className="text-gray-800">
            Whether you’re looking for paid ads support, an audit, or marketing advice, we’ll only proceed if it’s a winning fit.
          </p>
        </div>

        {/* Booking pitch */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Book a call with a growth strategist.
          </h2>
          <p className="text-gray-800">
            We’ll learn about your goals, build a tailored plan, and execute as a team with expert implementation.
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="company"
              type="text"
              placeholder="Company"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            />
            <input
              name="website"
              type="text"
              placeholder="https://yoursite.com"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block font-semibold mb-3 text-gray-800">Company Stage:</label>
            <div className="flex flex-col sm:flex-row gap-6">
              {["Pre-seed", "Seed", "Series A or higher", "Enterprise"].map((stage) => (
                <label key={stage} className="inline-flex items-center text-gray-900">
                  <input
                    type="radio"
                    name="stage"
                    value={stage}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {stage}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-3 text-gray-800">Please help us direct your inquiry:</label>
            <select
              name="inquiryType"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
            >
              <option value="">Please Select</option>
              <option value="Offer">I have an offer I’d like Eleven to consider</option>
              <option value="Products">I’m interested in Eleven’s products and services</option>
              <option value="Careers">I’m interested in career opportunities at Eleven</option>
              <option value="Partnership">I’m interested in a partnership with Eleven</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="How can we help?"
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 min-h-[120px]"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition hover:bg-orange-600 font-semibold"
          >
            Let’s Talk
          </button>
        </form>
      </div>
    </section>
  );
}