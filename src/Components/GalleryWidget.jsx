import React, { useState } from "react";
import {
  HelpCircle,
  Grid3X3,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://picsum.photos/400/250?random=1",
      alt: "random img 1",
    },
    {
      id: 2,
      src: "https://picsum.photos/400/250?random=2",
      alt: "random img 2",
    },
    {
      id: 3,
      src: "https://picsum.photos/400/250?random=3",
      alt: "random img 3",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    const randomId = Math.floor(Math.random() * 1000) + 100;
    const newImage = {
      id: Date.now(),
      src: `https://picsum.photos/400/250?random=${randomId}`,
      alt: "New image",
    };
    setImages((prev) => [...prev, newImage]);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#1e1f25] rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.6)] p-6">
      {/* Header */}
      <div className="flex items-center  justify-between mb-6">
        <HelpCircle className="w-6 h-6 text-gray-300" />

        <div className="flex items-center w-full px-4 justify-between gap-3">
          <div className="bg-[#2b2d35] text-white px-6 py-2 rounded-full text-sm font-medium">
            Gallery
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAddImage}
              className="bg-[#2b2d35] hover:bg-[#3a3c45] active:scale-95 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all duration-200"
            >
              <Plus className="w-4 h-4" />
              ADD IMAGE
            </button>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                className="w-8 h-8 bg-[#2b2d35] hover:bg-[#3a3c45] rounded-full flex items-center justify-center text-white transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 bg-[#3a3c45] hover:bg-[#4a4d55] rounded-full flex items-center justify-center text-white transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* Gallery */}
      <div className="relative p-1 pt-6 rounded-xl overflow-hidden">
        <div className="flex items-start gap-4 mb-4">
          <Grid3X3 className="w-6 h-6 text-gray-300 flex-shrink-0" />
          <div
            className="flex gap-4 transition-transform duration-500 flex-1"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {images.map((img) => (
              <div
                key={img.id}
                className="relative flex-shrink-0 w-[30%] h-36 overflow-hidden rounded-lg group
             bg-[#1f1f23] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
             hover:-translate-y-3 hover:-rotate-3 hover:scale-110 hover:shadow-xl hover:shadow-black"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-lg
               grayscale group-hover:grayscale-0
               transition-[filter,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
               will-change-transform will-change-filter
               "
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/400/250?random=${img.id}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 w-full h-1 bg-[#2b2d35] rounded-full">
          <div
            className="h-full bg-gray-400 rounded-full transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
