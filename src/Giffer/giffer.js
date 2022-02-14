import React from "react";
import "./giffer.css";
import {GoSearch} from "react-icons/go";
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

let GifSearch = () =>{

    const handleHover = () =>{
        console.log("hover");
    }


    return (
        
        <div className="search"> 
             <GoSearch className="icon" onMouseOver={handleHover}/>
            <div className="inputContainer">
             <input className="input" type="text" placeholder="Search Gif" />
            </div>
        </div>
    )
}

export default GifSearch