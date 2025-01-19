import { ArrowArcLeft } from "phosphor-react";
import React, { useState } from "react";
import defaultProfilePic from "../assets/propic.png"; // Import your default profile picture
import { useNavigate } from "react-router-dom";
function LeaderBoard() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="d-flex">
      <div className="p-3 w-100">
        <div
          className="text-white d-flex bg-dark rounded-3xl justify-content-between px-3 mb-3 mx-2"
          style={{ height: "8vh" }}
        >
          <button
            className="d-flex align-items-center"
            onClick={() => setShow((prev) => !prev)}
          >
            {!show ? (
              <img
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
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
              className="rounded-circle"
            />
          </div>
        </div>

        <div className="d-flex">
          {show && (
            <div className="bg-dark m-3 text-white h4 d-flex flex-column rounded-3xl">
              <div className="my-auto p-5" onClick={() => navigate("/learn")}>
                Learn
              </div>
              <div className="my-auto p-5" onClick={() => navigate("/order")}>
                Browse Print Stores
              </div>
              <div
                className="my-auto p-5"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </div>
              <div
                className="my-auto p-5"
                onClick={() => navigate("/leaderboard")}
              >
                Order History
              </div>
              <div className="my-auto p-5" onClick={() => navigate("/reward")}>
                Rewards
              </div>
              <div className="my-auto p-5" onClick={() => navigate("/history")}>
                Settings
              </div>
            </div>
          )}

          <div
            className="bg-dark w-100 p-5 m-3 rounded-3xl"
            style={{ minHeight: "92vh" }}
          >
            <table
              border="1"
              className="table table-dark p-3 text-center table-striped"
            >
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Order NAME</th>
                  <th>Price Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>COMPUTER ORGANIZATION PROJECT</td>
                  <td>270</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>DSA NOTES</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAKAUT ORGANIZER</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>ANGULAR NOTES</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>REACTJS GUIDE</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>NODE.JS PRACTICALS</td>
                  <td>220</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>JAVA TUTORIALS</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>HTML & CSS DESIGN TEMPLATES</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>PYTHON AUTOMATION PROJECT</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>NETWORKING BASICS</td>
                  <td>200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
