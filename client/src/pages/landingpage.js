import React from 'react';
import './landingpage.css'; // Import CSS file for styling
import earth from '../assets/space.png';
import fire from '../assets/fire2.jpeg';
import colorful from '../assets/colorful.jpeg'; // Import CSS file for styling
import leaf from '../assets/earth (3).png'; // Import CSS file for styling
import desert from '../assets/earth.png'; // Import CSS file for styling
import Card from '../component/card.js';
import trash from '../assets/earth (4).png'
import Login from './user/Login.js';
import Signup from './user/Signup.js';

function Landingpage() {
  return (
    <div className='p-3'>

      <Login />
      <Signup />

      <div className='text-white d-flex bg-dark rounded-3xl justify-content-between px-3 mb-3'>
        <div className='opacity-0'>
          <button className='btn text-white border rounded-xl m-3 py-0' disabled >Login</button>
          <button className='btn text-white border rounded-xl m-3 py-0' disabled >Signup</button>
        </div>
        <div className='h3 align-self-center m-0 p-0'>
          Climato
        </div>

        <div>
          <button className='btn text-white border rounded-xl m-3 py-1 px-4' data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
          <button className='btn text-white border rounded-xl m-3 py-1 px-4' data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
        </div>
      </div>

      <div className="text-white h-full flex my-3">
        <section
          className="w-screen  bg-center bg-cover bg-no-repeat   h-96  rounded-3xl  relative "
          style={{
            backgroundImage: `url(${earth})`,
          }}
        ></section>
        <div className="text-white flex flex-col mt-9 tracking-thighter leading-7 absolute ml-9">
          <h1 className="text-4xl font-sans font-bold mb-4 relative ">
            Climato knows there is no Plan<span className="text-slate-400">et</span> B
          </h1>
          <p className="font-mono text-xl ">
            Climato is here to redefine how you manage your e-waste and How you
          </p>
          <p className="font-mono text-xl leading-9">can participate help our planet because, this is all that we’ve got.</p>
        </div>
      </div>

      <div className="text-white h-full flex pt-0 w-full rounded-3xl my-3">
        <section
          className="w-full   bg-center bg-cover bg-no-repeat  h-96  rounded-3xl relative rigth-10"
          style={{
            backgroundImage: `url(${fire})`,
          }}
        ></section>
        <div className="text-white flex flex-col mt-9 tracking-thighter leading-7 absolute ml-5">
          <h1 className="text-4xl font-sans font-bold mb-4">
            Let’s Check your EcoScore
          </h1>
          <p className="font-mono leading-9 text-xl">
            Track how much E-waste you produce or might produce and we will
          </p>
          <p className="font-mono leading-10 text-xl">help
            you to reduce it</p>
        </div>
      </div>

      <div className='d-flex w-100'>
        <Card
          read={"Our Mission"}
          image={trash}
          description={"Discover our driving force to save this planet."}
        />
        <Card
          read={"Rewards"}
          image={colorful}
          description={"Know How you can earn while helping the planet. "}
        />
        <Card
          read={"How it Works"}
          image={leaf}
          description={"Know what is Cliamto and why should you care."}
        />
        <Card
          read={"About Us"}
          image={desert}
          description={" Get in touch and know the the Team."}
        />
      </div>

      <div className='bg-dark rounded-3xl p-3 text-white d-flex justify-content-center flex-column px-4 py-4 my-3'>
        <h1 className='h2 text-center'>Are you a recycler?</h1>
        <button className='w-25 mx-auto border p-3 m-3 bg-white text-dark rounded-3xl h3 py-2'>Follow Link</button>
      </div>

      <div className='bg-dark rounded-3xl p-3 text-white d-flex justify-content-center flex-column px-4 py-4 my-4'>
        <h1 className='h2 text-center'>Climato Recycler</h1>
        <div className='d-flex justify-content-around my-4 w-75 mx-auto'>
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact Us</div>
        </div>
        <hr className='w-75 mx-auto my-3' />
        <p className='mx-auto'>Copyright &emsp; Ctrl &emsp; Shift</p>
      </div>
    </div>
  );
}

export default Landingpage;
