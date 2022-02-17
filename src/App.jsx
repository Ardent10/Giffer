import React from "react";
import Navbar from "./components/Navbar";
import GifSearch from "./Giffer/giffer";

const App = ()=> {
  return (
    <div className="overflow-hidden">
    <Navbar/>
     <div className="flex flex-1 text-center justify-center">
       <h1 className=" text-6xl font-bold m-8 mr-0 ">Giffer</h1>
       <img className="h-20 w-20 mt-8" src="https://media.giphy.com/media/g1zy03n3mCdtkDQUv0/giphy.gif" alt="" />
     </div>
     <h3 className="text-4xl bg-black text-white p-2 font-bold m-8 mt-0 flex flex-1 text-center justify-center">Show your Emotions</h3>

     {/* <div className="flex bg-black p-5 md:space-x-4 space-x-0 md:px-4 ">
       <img className="md:h-14 w-1/4 m-1 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/OW9VxMWPhDHLaaoPiu/giphy.gif" alt="" />
       <img className="md:h-14 w-1/4 m-1 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/vhLd0wAyLuOkoVHY8T/giphy-downsized-large.gif" alt="" />
       <img className="md:h-14 w-1/4 m-1 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif" alt="" />
       <img className="md:h-14 w-1/4 m-1 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/zcTrGn54lOrlOABRDB/giphy.gif" alt="" />
     </div> */}

    
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">

    <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="m-8 relative space-y-2">
        <GifSearch/>
      </div>
    </div>
    </div>

    </div>
  );
}

export default App;
