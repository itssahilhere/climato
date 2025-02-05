import { ArrowArcLeft, CheckCircle, XCircle } from "phosphor-react";
import React, { useState } from "react";
import img1 from "../assets/earth.png"; // Import your default profile picture
import { useNavigate } from "react-router-dom";

function History() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const histories = [
    {
      title: "Dsa Notes",
      subtitle: "Semester 5 black and white",
      date: "17th March",
      approved: true,
    },
    {
      title: "Organiser Cse",
      subtitle: "Semester 6 important",
      date: "16th March",
      approved: false,
    },
    {
      title: "tshirt",
      subtitle: "Colour-block",
      date: "19th February",
      approved: true,
    },
    {
      title: "Flyers",
      subtitle: "High quality",
      date: "20th January",
      approved: false,
    },
  ];

  return (
    <div className="d-flex">
      <div className="p-3 w-100">
        <div
          className="text-white d-flex bg-[#1F1F1F] rounded-3xl justify-content-between px-3 mb-3 mx-2"
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

          <div
            className="bg-[#1F1F1F] w-100 p-5 m-3 rounded-3xl"
            style={{ minHeight: "92vh" }}
          >
            {histories?.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-3xl p-4 my-3 d-flex justify-content-between align-items-center"
              >
                {item.approved ? (
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/128/18609/18609783.png"
                    }
                    width={100}
                    className="rounded-3xl"
                  />
                ) : (
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/128/17762/17762877.png"
                    }
                    width={100}
                    className="rounded-3xl"
                  />
                )}
                <div className="flex-fill m-3 text-white">
                  <h3 className="h3">{item.title}</h3>
                  <h4 className="h5 opacity-50">{item.subtitle}</h4>
                  <h4 className="opacity-50">{item.date}</h4>
                </div>

                {item.approved ? (
                  <CheckCircle className="text-success" size={50} />
                ) : (
                  <XCircle className="text-danger" size={50} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
