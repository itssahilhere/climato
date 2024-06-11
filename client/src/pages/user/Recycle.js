import logo from "../../assets/logo.png";
import React, { useState } from "react";
import axios from "axios";

const Recycle = () => {
  const [productname, setProductname] = useState("");
  const [date, setPassword] = useState("");
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="left">
        <h1> Recycle</h1>
        <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        {file && <img src={file} alt="Uploaded" style={{ maxWidth: "40em", maxHeight: "40em" }} />}      </div>
      <div className="right">
        <div className="form-container">
          <h2 className="title">Sign in</h2>
          <form className="form">
            <input type="email" placeholder="Email Address" />
            <input />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recycle;
