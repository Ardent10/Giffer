import React, { useState,useEffect } from "react";
import "./giffer.css";
import {GoSearch} from "react-icons/go";
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

let GifSearch = ({src,id}) =>{

    let [search, setSearch]  = useState("");
    let [gifs,setGifs]         = useState([]);
    let [updatedGif,setUpdatedGif] = useState("");
    let [storedGif,setStoredGif ]  = useState([
        id,src
    ]);
    let [loading,setLoading] = useState(false); 

  console.log(storedGif)

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

    useEffect(()=>{
        const localStorageGif = localStorage.getItem('Gif');
        if(localStorageGif){
            setUpdatedGif(JSON.parse(localStorageGif))
        } 
    },[])

    useEffect(()=>{
            
        
            localStorage.setItem('Gif', JSON.stringify(updatedGif));
    
    })

    // console.log(updatedGif)
    
    
    return (
        
        <div>
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
            <div key={id} >
                <img  className={"md:h-14 w-1/4 m-0 2xl:h-96 rounded-md shadow-lg object-cover temp-gif"}  src={ updatedGif===""? src : updatedGif } alt="gif" />
            </div>
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
                        <button className="set-btn" onClick={()=>setNewGif(gif)}>Set</button>
                     </div>

                 );
               }) }
            </div>
         )}
         </div>
        </div>    
    );
}

export default GifSearch