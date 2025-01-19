import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { ArrowArcLeft, ArrowUpRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import defaultProfilePic from "../assets/propic.png"; // Import your default profile picture
//import { getCurrentPosition } from 'react-geolocation'; // Import the getCurrentPosition function from your geolocation library

export const Dashboard = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const [show, setShow] = useState(false);

  const handleClick1 = () => {
    history("/leaderboard");
  };

  const handleClick2 = () => {
    history("/Learn");
  };

  const handleClick3 = () => {
    history("/order");
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
      default:
        alert("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    // Call getLocation function when the component mounts
    getLocation();
  }, [getLocation]);

  return (
    <div className="d-flex dashboard">
      <div className="p-3 w-100">
        <div
          className="d-flex bg-[#1F1F1F] rounded-3xl justify-content-between px-3 mb-3 mx-2"
          style={{ height: "8vh" }}
        >
          <button
            className="d-flex align-items-center"
            onClick={() => setShow((prev) => !prev)}
          >
            {!show ? (
              <img
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
                alt="menu"
                width={50}
              />
            ) : (
              <ArrowArcLeft size={50} />
            )}
          </button>

          <div className="h3 align-self-center m-0 p-0">Printopher</div>

          <div className="d-flex align-items-center">
            <img
              src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-467.jpg"
              width={50}
              alt="profile"
              className="rounded-circle"
            />
          </div>
        </div>

        <div className="d-flex">
          {show && (
            <div className="bg-dark m-2 text-white h4 d-flex px-5 gap-12 flex-column rounded-3xl">
              <div
                className="nav-item py-2 mt-12 cursor-pointer w-fit"
                onClick={() => navigate("/learn")}
              >
                Learn
              </div>
              <div
                className="nav-item py-2 cursor-pointer w-fit"
                onClick={() => navigate("/order")}
              >
                Browse Print Stores
              </div>
              <div
                className="nav-item py-2 cursor-pointer w-fit"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </div>
              <div
                className="nav-item py-2 cursor-pointer w-fit"
                onClick={() => navigate("/leaderboard")}
              >
                Order History
              </div>
              <div
                className="nav-item py-2 cursor-pointer w-fit"
                onClick={() => navigate("/reward")}
              >
                Rewards
              </div>
              <div
                className="nav-item py-2 cursor-pointer w-fit"
                onClick={() => navigate("/history")}
              >
                Pending Order Status
              </div>
            </div>
          )}

          <div className="w-100 text-primary">
            <div className="d-flex">
              <div className="w-[70%] p-1.5 rounded-3xl">
                <div className="grid-item1 p-2 rounded-3xl bg-[#1f1f1f] d-flex flex-column align-items-center h-100 justify-content-center h-40vh">
                  <img
                    src={defaultProfilePic}
                    alt="Profile"
                    className="profile-pic"
                  />
                  <br />
                  <p className="h2 fw-normal">Hi, Sahil</p>
                  <br />
                  {userLocation && (
                    <p className="user-location">
                      Latitude: {userLocation.latitude}, Longitude:{" "}
                      {userLocation.longitude}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-[100%] p-1.5 rounded-3xl">
                <div
                  className="grid-item2 bg-[#1f1f1f] rounded-3xl p-2 cursor-pointer h-[40vh] flex flex-col justify-center items-center"
                  onClick={handleClick3}
                >
                  {/* <p className="flex items-center font-medium text-[2.5rem] absolute z-[5] px-6 py-2">
                    Leaderboards <ArrowUpRight size={50} />
                  </p> */}
                  <div className="upload flex flex-col justify-center items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#37B463"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-file-up"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M12 12v6" />
                      <path d="m15 15-3-3-3 3" />
                    </svg>
                    <p>Upload files here</p>
                  </div>
                  <button className="button w-fit flex justify-center items-center gap-2 p-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z"></path>
                    </svg>
                    <p className="text-black">Print Now</p>
                  </button>
                  <p className="info text-xs">Maximum upload size: 20MB</p>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="col-3 p-1.5 rounded-3xl">
                <div
                  className="grid-item3 rounded-3xl cursor-pointer h-[44vh]"
                  onClick={handleClick1}
                >
                  <div className="leader font-medium text-[2.5rem] px-6 py-2 absolute z-[5]">
                    <h3 className="flex items-center gap-1">
                      History <ArrowUpRight size={50} />
                    </h3>
                    <p className="text-base font-medium leading-[22px]">
                      Check your printing history, and track previous orders
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-9 p-1.5 rounded-3xl">
                <div
                  className="grid-item4 rounded-3xl cursor-pointer h-[44vh]"
                  onClick={handleClick3}
                >
                  <div className="leader font-medium text-[2.5rem] px-6 py-2 absolute z-[5]">
                    <h3 className="flex items-center gap-1">
                      Browse Print Stores <ArrowUpRight size={50} />
                    </h3>
                    <p className="text-base font-medium leading-[22px]">
                      Browse all the nearby printing stores and compare their
                      prices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
