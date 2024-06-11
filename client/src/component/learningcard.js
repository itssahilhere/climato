import React,{useState} from "react";


const LearnCard = ({ image, read}) => {
        return (
            // <div className=" cursor-pointer shadow-lg flex flex-wrap  mb-6 rounded-3xl ml-9 w-1/4 bg-slate-400 text-white"  >
            // {image && <img src={image} className="w-full h-[250px] object-cover rounded-3xl" />}
            // <div className="p-4 w-[95%] md:w-[300px] ">
            // <Link to="/read" className="m-0 p-0 text-sm text-white mr-0 ">{read }</Link>
            //   <p className="text-sm my-2 h-[65px]  ">{description}</p>
            // </div>
            // </div>
            <div className=" flex-col relative justify-center  p-2 w-[120%] md:w-[500px] h-[300px]  my-1 md:my-2 md:mx-3 cursor-pointer hover:grow hover:text-white  h-56 rounded-2xl">
      
      <p style={{
      
        color: "white",
        margin: "0",
        padding: "0",
        textAlign:"bottom",
        position:"absolute",
        marginTop:"7rem",
        marginLeft:"2rem",
        fontSize:"2rem",
        display: "flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        
        

      }}>{read}</p>
    
      
      <img src={image} className="h-[294px] w-[450px]  rounded-3xl"></img>
      
    </div>
        );
      };

export default LearnCard;