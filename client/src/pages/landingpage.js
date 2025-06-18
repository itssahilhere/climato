import React from "react";
import "./landingpage.css"; // Import CSS file for styling
import historyImage from "../assets/history.png";
import aboutImage from "../assets/about.jpg";
import whyUsImage from "../assets/why_us.jpg";
// import earth from "../assets/space.png";
// import fire from "../assets/fire2.jpeg";
// import colorful from "../assets/colorful.jpeg"; // Import CSS file for styling
// import leaf from "../assets/earth (3).png"; // Import CSS file for styling
// import desert from "../assets/earth.png"; // Import CSS file for styling
// import Card from "../component/card.js";
// import trash from "../assets/earth (4).png";
import Login from "./user/Login.js";
import Signup from "./user/Signup.js";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="p-3">
      <Login />
      <Signup />

      <div className="text-white d-flex bg-[#1F1F1F] rounded-3xl justify-content-between px-3 mb-3">
        {/* <div className="opacity-0">
          <button
            className="btn text-white border rounded-xl m-3 py-0"
            disabled
          >
            Login
          </button>
          <button
            className="btn text-white border rounded-xl m-3 py-0"
            disabled
          >
            Signup
          </button>
        </div> */}
        <Link
          to="/"
          className="h3 align-self-center m-0 p-0 text-[#faf3dd] hover:text-inherit"
        >
          Printopher
        </Link>

        <div className="flex items-center gap-4 text-lg">
          <Link to="/landing" className="">
            Home
          </Link>
          <Link to="/" className="">
            Our Mission
          </Link>
          <Link to="/about" className="">
            About Us
          </Link>
        </div>

        <div>
          <button
            className="btn w-fit bg-[#22C55E] rounded-3xl my-3 mx-4 py-1 px-4 font-bold text-black transition-all duration-300 ease-in-out hover:bg-[#faf3dd]"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>
          <button
            className="btn w-fit bg-[#22C55E] rounded-3xl my-3 py-1 px-4 font-bold text-black transition-all duration-300 ease-in-out hover:bg-[#faf3dd]"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            Register
          </button>
        </div>
      </div>

      <div className="w-full h-[30rem] mb-3 relative bg-[#1F1F1F] py-4 px-8 overflow-hidden rounded-3xl">
        <img
          src={historyImage}
          alt="documents"
          className="absolute bottom-[-140px] right-[-90px] w-[40rem] rotate-[-45deg]"
        />
        <div
          className="w-[60%] h-full flex flex-col justify-center gap-2"
          name="text-space"
        >
          <div className="text-4xl text-[#22C55E]" name="heading">
            Printopher™
          </div>
          <p className="text-6xl mb-3">
            Looking for a print shop? Ask Printopher
          </p>
          <button className="btn rounded-3xl w-fit bg-[#22C55E] font-bold px-3 py-2 text-black transition-all duration-300 ease-in-out hover:bg-[#faf3dd]">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full h-[30rem] mb-3 rounded-3xl flex gap-3 relative">
        <div
          className="w-1/2 h-full bg-[#1F1F1F] rounded-3xl bg-no-repeat relative"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "180%",
            backgroundPosition: "-360px -40px", // X Y offsets
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black opacity-100 z-0"></div>
          <p className="text-5xl absolute bottom-10 left-8 z-10">About Us</p>
        </div>
        <div className="w-1/2 h-full bg-[#1F1F1F] rounded-3xl flex justify-center items-center">
          <p className="px-12 text-lg">
            At <span className="text-[#22C55E]">Printopher</span>, we simplify
            your printing journey. We connect you with printing stores across
            locations, bringing diverse printing services under one roof.
            Whether you need documents, photos, or marketing materials printed,
            we help you find the right printing partner. Our platform is
            designed to make the printing process straightforward and efficient,
            saving you time and effort in finding the perfect print shop for
            your needs.
          </p>
        </div>
      </div>

      <div
        className="w-full h-[30rem] rounded-3xl mb-3 bg-no-repeat flex justify-center items-center px-[18rem] relative"
        style={{
          backgroundImage: `url(${whyUsImage})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black z-0"></div>

        <div className="relative z-10">
          <p className="text-center text-5xl mb-4">Why Us?</p>
          <p className="text-lg leading-normal text-center">
            Why choose Printopher? Because we're revolutionizing how you find
            printing services. We've built a platform that instantly connects
            you to print shops that match your exact needs - no more endless
            searching or comparing prices. Get real-time info on services,
            pricing, and availability at your fingertips. Whether you're a
            student rushing to print that last-minute assignment or a business
            owner looking for bulk printing, we've got your back. Simple, fast,
            and reliable - that's the Printopher promise.
          </p>
        </div>
      </div>

      <div
        name="footer"
        className="flex justify-between items-center rounded-3xl bg-[#1F1F1F] py-8 px-8"
      >
        <div className="text-3xl text-[#22C55E]">Printopher™</div>
        <div
          name="footer-links"
          className="flex justify-center items-center gap-4"
        >
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            About Us
          </Link>
          <Link to="/" className="">
            Career
          </Link>
          <Link to="/" className="">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
