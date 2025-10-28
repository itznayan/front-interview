import React, { useState } from "react";
import { HelpCircle, Grid3X3 } from "lucide-react";
import { motion } from "motion/react";
const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  const aboutContent = `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.`;

  return (
    <div className="bg-[#1e1f25] rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.6)] p-6">
      {/* Header */}
      <div className="flex items-center  justify-between mb-5">
        <HelpCircle className="w-6 h-6 text-gray-300" />

        {/* Tabs */}
        <div className="flex w-[85%] bg-[#0a0b0c] rounded-2xl p-1 relative justify-between">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 px-5 py-2 rounded-2xl w-full text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#2b2d35] rounded-2xl "
                    transition={{
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div></div>
      </div>

      {/* Content */}
      <div className="h-40 overflow-y-auto pr-2">
        <div className="flex items-center  gap-3">
          <Grid3X3 className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {aboutContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
