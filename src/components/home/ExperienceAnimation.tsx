"use client";

import { motion } from "framer-motion";

export const ExperienceAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 200 }}
      className="relative w-48 h-48 flex items-center justify-center top-12"
    >
      {/* Rotating Glow Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute w-56 h-56 border-4 border-yellow-400 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-50 h-50 border-2 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-full"
      />

      {/* Badge Circle */}
      <div className="relative w-36 h-36 rounded-full bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 shadow-2xl flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            20+
        </p>
        <p className="text-xs md:text-sm font-semibold text-white mt-1">
          Years of Excellence
        </p>
      </div>

      {/* Subtle Sparkles */}
      {[...Array(8)].map((_, i) => {
        const angle = (360 / 8) * i;
        return (
          <motion.div
            key={i}
            animate={{
              rotate: [angle, angle + 360],
              x: [0, 0],
              y: [0, 0],
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-1 h-2 bg-white rounded-full shadow-sm mt-20"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "center -80px",
            }}
          />
        );
      })}
    </motion.div>
  );
};
