import React from "react";
import GifSearch from "./Giffer/giffer";

const App = ()=> {
  return (
    <div>
     <h1 className="flex text-6xl font-bold m-8 flex flex-1 text-center justify-center">Giffer</h1>
      <img className=" flex h-50 w-15" src="https://media.giphy.com/media/g1zy03n3mCdtkDQUv0/giphy.gif" alt="" />
     <h3 className="text-4xl bg-cyan-100 font-bold m-8 flex flex-1 text-center justify-center">Show your Emotions</h3>

     <div className="flex flex-1 bg-black p-5 space-x-4">
       <img className="h-14 w-1/4 m-2 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/OW9VxMWPhDHLaaoPiu/giphy.gif" alt="" />
       <img className="h-14 w-1/4 m-2 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/vhLd0wAyLuOkoVHY8T/giphy-downsized-large.gif" alt="" />
       <img className="h-14 w-1/4 m-2 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif" alt="" />
       <img className="h-14 w-1/4 m-2 2xl:h-96 rounded-md shadow-lg object-cover" src="https://media.giphy.com/media/zcTrGn54lOrlOABRDB/giphy.gif" alt="" />
     </div>

    
    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">

    <GifSearch/>
    <div class="relative w-full max-w-lg">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      {/* <div class="m-8 relative space-y-4">
        <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div class="flex-1">
            <div class="h-4 w-48 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
          </div>
        </div>
        <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div class="flex-1">
            <div class="h-4 w-56 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
          </div>
        </div>
        <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div class="flex-1">
            <div class="h-4 w-44 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
          </div>
        </div>
      </div> */}
    </div>
    </div>

    </div>
  );
}

export default App;
