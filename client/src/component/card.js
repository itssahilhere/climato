import React, { useState } from "react";


const Card = ({ image, read, description }) => {
  return (
    <div className="col-3 p-2 rounded-3xl position-relative" style={{height: "300px"}}>
      
        <p style={{

          color: "white",
          margin: "0",
          padding: "0",
          textAlign: "right",
          position: "absolute",
          marginTop: "7rem",
          marginLeft: "2rem",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",



        }}>{read}</p>


        <img src={image} className="rounded-3xl h-100 w-100" />
        <p className=" mt-4 m-2 p-2 text-md bottom-3 left-3 absolute text-white text-wrap">{description}</p>
   
    </div>

  );
};

export default Card;