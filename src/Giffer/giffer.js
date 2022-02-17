import React, { useState } from "react";
import "./giffer.css";
import {GoSearch} from "react-icons/go";
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

let GifSearch = () =>{

    let [search, setSearch]  = useState("");
    let [gifs,setGifs]         = useState([]);
    let [updatedGif,setUpdatedGif] = useState("");
    let [loading,setLoading] = useState(false); 

  

    let searchGif =()=>{
        if(search.length >0){
            setLoading(true);

            fetch(GIPHY_API+search)
            .then((res)=>{
                setLoading(false);
                return res.json();
            })
            .then((result)=>{
                setSearch("")
                setGifs(result.data.map((gif)=>{
                    // console.log(gif.images.fixed_height.url)
                    return gif.images.fixed_height.url;
                }))
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else if(search.length===0)
        {
            console.log("Search your Gif");  
        }

    }

    let setNewGif = (gif)=>{
        setUpdatedGif(gif);
        setSearch("")
        setGifs([]);
    }
    // console.log(updatedGif);
   
    
    return (
        
        <>
        <div className="content">
            <div className="searchBox">        
                <input 
                    className="search-input"
                    type="text" 
                    placeholder="Search Gif" 
                    aria-label="Serach Gif"
                    value={search}
                    required
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button className="search-btn" onClick={searchGif}><GoSearch/></button>
            </div>
            <img className="temp-gif"  src={ updatedGif==="" ?"https://media.giphy.com/media/l3HBbltOYjoNq/giphy.gif" : updatedGif } alt="minion" />
        </div>

         <div className="result">
         { loading? (
            <div className="loading">
               <div className="loader"/>  
            </div>  
         ) : (
            <div className="list">
             {gifs.map((gif,index)=>{
                 return (
                     <div className="item" key={index}>
                        <img src={gif} onClick={()=>setNewGif(gif)} alt="gif" />
                        <button className="set-btn">Set</button>
                     </div>

                 );
               }) }
            </div>
         )}
         </div>
        </>    
    );
}

export default GifSearch