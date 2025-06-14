import React, { useState } from "react";
import axios from "axios";
import signup_bg from "../../assets/signup_bg.jpg";
import { GoogleLogo, AppleLogo, SquaresFour } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name_, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Changed variable name

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/signup", {
        name: name_,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      console.log("Signup successful:", response.data);
      // Redirect to dashboard after successful signup
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error, such as displaying an error message to the user
    }
  };

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex={-1}
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex position-relative">
            <img className="bgimage" src={signup_bg} alt="Background" />
            <div className="right-column position-absolute w-50 h-100 bg-black/65 ms-auto end-0">
              <div className="form-container w-[450px]">
                {/* <h2 className="title">Sign in</h2> */}
                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name_}
                    onChange={(e) => setName(e.target.value)}
                    className="input h-[6vh] mb-[30px] rounded-[12px] bg-white"
                    required
                    style={{ color: "black", fontWeight: "bolder" }}
                  />
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
                  <input
                    type="password"
                    placeholder="Rewrite Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    className="button h-12 w-[20vw] bg-[#faf3dd] text-xl font-extrabold text-black"
                    onClick={() => navigate("/dashboard")}
                  >
                    Sign up
                  </button>

                  <p className="text-gray-300 text-sm my-4">or sign up with</p>

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

                  <p className="text-center text-gray-300 text-sm">
                    By creating an account you agree to Printopher's{" "}
                    <a href="#" className="text-[#faf3dd] font-extrabold">
                      Terms of Services
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#faf3dd] font-extrabold">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
