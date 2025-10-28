import React from "react";
import ProfileWidget from "./Components/ProfileWidget";
import GalleryWidget from "./Components/GalleryWidget";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0d0f14] flex ">
      {/* Left half (empty but responsive) */}
      <div className="w-1/2  hidden md:block"></div>

      {/* Right half */}
      <div className="w-full md:w-1/2 p-10 space-y-8 flex flex-col justify-center">
        <ProfileWidget />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default App;
