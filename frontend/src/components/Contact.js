// ContactUs.js

import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });
      //   console.log("Form submitted: ",res);
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-8 md:flex md:justify-evenly md:items-center">
      <div className="mb-8 md:w-[50%]">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-2">
          Contact Us
        </h1>
        <h3 className="text-center font-semibold mb-2 md:mb-8">
          Call us: 9450527641 | 6307006870
        </h3>
        <p className="text-xl text-center md:text-3xl font-bold mb-4 md:mb-8">
          We are always ready to help you...
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-[40%]">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#6600FF] font-bold text-white py-2 px-4 rounded-md border-solid border-[2px] hover:bg-white hover:border-[#6600FF] hover:text-[#6600FF]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
