import login_bg from "../../assets/login_bg.jpg";
import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogo, AppleLogo, SquaresFour } from "@phosphor-icons/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        email: email,
        password: password,
      });
      console.log("Signup successful:", response.data);
      // Add your logic after successful signup, such as redirecting to another page
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error, such as displaying an error message to the user
    }
  };

  return (
    <div
      className="modal fade h-[96vh] overflow-hidden"
      id="loginModal"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex position-relative">
            <img className="bgimage" src={login_bg} alt="Background" />
            <div className="absolute top-[40%] left-[15%] text-5xl">
              Printopher
            </div>
            <div className="right-column position-absolute w-50 h-100 ms-auto end-0 bg-black/65">
              <div className="form-container w-[450px]">
                {/* <h2 className="title">Sign in</h2> */}
                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input h-[6vh] mb-[30px] rounded-[12px] bg-white"
                    required
                    style={{ color: "black", fontWeight: "bolder" }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input h-[6vh] mb-[30px] rounded-[12px] bg-white"
                    required
                    style={{ color: "black", fontWeight: "bolder" }}
                  />
                  {/* <div className="checkbox-container">
                    <input type="checkbox" id="remember" className="checkbox" />
                    <label htmlFor="remember" className="label">
                      Remember me
                    </label>
                  </div> */}

                  <button
                    type="submit"
                    className="w-[20vw]"
                    onClick={() => navigate("/dashboard")}
                  >
                    <div className="button h-12 w-full text-xl font-extrabold">
                      Login
                    </div>
                  </button>

                  <p className="text-gray-300 text-sm my-4">or login with</p>

                  <div className="flex justify-center items-center gap-4 mb-4">
                    <button
                      type="button"
                      className="border p-[12px] rounded-[6px] bg-[#faf3dd]"
                    >
                      <GoogleLogo className="bg-black rounded-full" size={26} />
                    </button>
                    <button
                      type="button"
                      className="border p-[12px] rounded-[6px] bg-[#faf3dd]"
                    >
                      <AppleLogo
                        className="rounded-full"
                        size={26}
                        color="black"
                        weight="fill"
                      />
                    </button>
                    <button
                      type="button"
                      className="border p-[12px] rounded-[6px] bg-[#faf3dd]"
                    >
                      <SquaresFour
                        className="rounded-full"
                        size={26}
                        color="black"
                        weight="fill"
                      />
                    </button>
                  </div>

                  <div className="link-container flex flex-col gap-1">
                    <a href="#" className="link">
                      Forgot password?
                    </a>
                    <a href="#" className="link">
                      Don't have an account? Sign Up
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
