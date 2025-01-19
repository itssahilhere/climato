import { ArrowArcLeft, Camera } from "phosphor-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderForm.css";
function OrderForm() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleCreateOrder = () => {
    // Show success modal
    alert("Order placed successfully!");
    navigate("/dashboard");
  };
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
              Pending Order Status
              </div>
            </div>
          )}

          <div
            className="bg-dark w-100 p-5 m-3 rounded-3xl d-flex flex-wrap"
            style={{ minHeight: "92vh" }}
          >
            <form className="d-flex w-100">
              <div>
                <label for="file">
                  <Camera
                    className="text-white border p-5 rounded-3xl"
                    size={500}
                  />
                </label>
                <input id="file" type="file" hidden />
              </div>

              <div className="flex-fill w-100 m-3 d-flex flex-column align-items-center">
                <input
                  placeholder="Product Name (e.g., Business Card)"
                  className="w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3"
                />
                <select
                  placeholder="Category"
                  className="w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3"
                >
                  <option selected disabled className="text-dark">
                    Select Category
                  </option>
                  <option value={"category 1"} className="text-dark">
                    Business Cards
                  </option>
                  <option value={"category 2"} className="text-dark">
                    Posters
                  </option>
                  <option value={"category 3"} className="text-dark">
                    Flyers
                  </option>
                  <option value={"category 4"} className="text-dark">
                    Brochures
                  </option>
                  <option value={"category 5"} className="text-dark">
                    Custom T-Shirts
                  </option>
                  <option value={"category 6"} className="text-dark">
                    Banners
                  </option>
                  <option value={"category 7"} className="text-dark">
                    Stickers
                  </option>
                  <option value={"category 8"} className="text-dark">
                    Photo Prints
                  </option>
                  <option value={"category 9"} className="text-dark">
                    Invitations
                  </option>
                  <option value={"category 10"} className="text-dark">
                    Calendars
                  </option>
                  <option value={"category 11"} className="text-dark">
                    Notes
                  </option>
                  <option value={"category 12"} className="text-dark">
                    PDF Printing
                  </option>
                  <option value={"category 13"} className="text-dark">
                    Receipt Printing
                  </option>
                  <option value={"category 14"} className="text-dark">
                    Document Printing
                  </option>
                </select>

                <select
                  placeholder="Paper Type"
                  className="w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3"
                >
                  <option selected disabled className="text-dark">
                    Select Paper Type
                  </option>
                  <option value={"paper 1"} className="text-dark">
                    Matte
                  </option>
                  <option value={"paper 2"} className="text-dark">
                    Glossy
                  </option>
                  <option value={"paper 3"} className="text-dark">
                    Premium
                  </option>
                </select>

                <input
                  placeholder="Quantity"
                  className="w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3"
                />

                <input
                  placeholder="Pincode"
                  className="w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3"
                />

                <select
                  placeholder="Delivery Type"
                  className="w-75 p-2 bg-transparent text-white border rounded-3xl px-4 my-3"
                >
                  <option selected disabled className="text-dark">
                    Select Type of Delivery Service
                  </option>
                  <option value={"delivery 1"} className="text-dark">
                    Delivery
                  </option>
                  <option value={"delivery 2"} className="text-dark">
                    Self Pickup
                  </option>
                </select>

                <button
                  className="text-white border w-25 p-2 rounded-3xl"
                  onClick={handleCreateOrder}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
