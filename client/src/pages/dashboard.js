import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { ArrowArcLeft, ArrowUpRight } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';
import defaultProfilePic from '../assets/propic.png'; // Import your default profile picture
//import { getCurrentPosition } from 'react-geolocation'; // Import the getCurrentPosition function from your geolocation library

export const Dashboard = () => {
  const history = useNavigate();
  const navigate = useNavigate()
  const [userLocation, setUserLocation] = useState(null);
  const [show, setShow] = useState(false)

  const handleClick1 = () => {
    history('/leaderboard');
  };

  const handleClick2 = () => {
    history('/Learn');
  };

  const handleClick3 = () => {
    history('/order');
  };

  // Function to get user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Function to handle successful location retrieval
  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + " Longitude: " + longitude);
    setUserLocation({ latitude, longitude });
  };

  // Function to handle location retrieval errors
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    // Call getLocation function when the component mounts
    getLocation();
  }, []);

  return (
    <div className='d-flex'>



      <div className='p-3 w-100'>

        <div className='text-white d-flex bg-dark rounded-3xl justify-content-between px-3 mb-3 mx-2' style={{ height: "8vh" }}>

          <button className='d-flex align-items-center' onClick={() => setShow(prev => !prev)}>
            {!show ? <img src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png" width={50} />
              : <ArrowArcLeft size={50} />}
          </button>

          <div className='h3 align-self-center m-0 p-0'>
            Climato
          </div>

          <div className='d-flex align-items-center'>
            <img src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-467.jpg" width={50} className='rounded-circle' />
          </div>
        </div>


        <div className='d-flex'>


          {show && <div className='bg-dark m-3 text-white h4 d-flex flex-column rounded-3xl'>

           <div className='my-auto p-5' onClick={() => navigate('/learn')}>Learn</div>
                        <div className='my-auto p-5' onClick={() => navigate('/order')}>Ecozones</div>
                        <div className='my-auto p-5' onClick={() => navigate('/dashboard')}>Dashboard</div>
                        <div className='my-auto p-5' onClick={() => navigate('/leaderboard')}>Leaderboards</div>
                        <div className='my-auto p-5' onClick={() => navigate('/reward')}>Rewards</div>
                        <div className='my-auto p-5' onClick={() => navigate('/history')}>Settings</div>
          </div>}

          <div className='w-100'>


            <div className='d-flex'>
              <div className='col-4 p-3 rounded-3xl'>
                <div className="grid-item1 p-2 rounded-3xl bg-dark text-white d-flex flex-column align-items-center h-100 justify-content-center" style={{ height: "40vh" }}>
                  <img src={defaultProfilePic} alt="Profile" className="profile-pic" />
                  <br/>
                  <p className="text-white h2 fw-normal">Hi, Sahil</p>
                  <br/>
                  {userLocation && (
                    <p className="user-location">
                      Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
                    </p>
                  )}
                </div>
              </div>

              <div className='col-8 p-3 rounded-3xl'>
                <div className="grid-item2 p-2" style={{ height: "40vh" }} onClick={handleClick1}>
                  <p className="leader" style={{ position: 'absolute', zIndex: '5' }}>
                    LeaderBoards <ArrowUpRight size={62} />
                  </p>
                </div>
              </div>

            </div>

            <div className='d-flex'>
              <div className='col-3 p-3 rounded-3xl'>
                <div className="grid-item3 rounded-3xl" style={{ height: "40vh" }} onClick={handleClick2}>
                  <p className="leader" style={{ position: 'absolute', zIndex: '5' }}>
                    Learn <ArrowUpRight size={62} />
                  </p>
                </div>
              </div>
              <div className='col-9 p-3 rounded-3xl'>
                <div className="grid-item4" style={{ height: "40vh" }} onClick={handleClick3}>
                  <p className="leader" style={{ position: 'absolute', zIndex: '5' }}>
                    Browse Ecozone <ArrowUpRight size={62} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
