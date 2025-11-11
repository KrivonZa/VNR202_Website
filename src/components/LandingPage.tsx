"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

interface LandingPageProps {
  onStartJourney: () => void;
}

export default function LandingPage({ onStartJourney }: LandingPageProps) {
  const [showButton, setShowButton] = useState(false);

  const title = "Việt Nam 1945–1946: Ngàn Cân Treo Sợi Tóc";
  const subtitle = "Hành trình sinh tồn của một dân tộc giữa bão tố lịch sử";

  const handleTypingComplete = () => setShowButton(true);

  const starCount = 120;
  const stars = Array.from({ length: starCount }, (_, i) => ({
    left: 2 + ((i * 137.5) % 97),
    top: 5 + ((i * 91.7) % 90),
    delay: (i * 0.1) % 5,
    duration: 2 + (i % 5),
    size: i % 7 === 0 ? 2 : 1,
  }));

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('/images/background.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] mix-blend-multiply" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,69,19,0.2)_0%,rgba(101,67,33,0.4)_80%)]" />

      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className={`absolute bg-yellow-300 rounded-full shadow-lg`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size + 1,
              height: star.size + 1,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_40px_#ff9e00]"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-yellow-300 text-4xl font-bold drop-shadow-lg">
                ★
              </span>
            </div>
          </motion.div>

          <h1
            className="text-4xl md:text-7xl font-bold mb-6 
             bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] 
             bg-clip-text text-transparent 
             drop-shadow-[0_0_15px_rgba(255,228,181,0.4)] 
             inline-block leading-[1.2] pb-[0.1em] overflow-visible"
          >
            <TypingEffect
              text={title}
              speed={90}
              onComplete={handleTypingComplete}
            />
          </h1>

          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg md:text-2xl text-white font-medium mb-10 max-w-2xl mx-auto leading-relaxed bg-white/20 rounded-xl p-5 shadow-lg backdrop-blur-md border-2 border-white/30">
                <TypingEffect text={subtitle} speed={60} />
              </p>

              <motion.button
                onClick={onStartJourney}
                className="relative overflow-hidden bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-bold py-5 px-10 rounded-full text-xl border-4 border-amber-800 shadow-[0_0_25px_rgba(139,69,19,0.6)] cursor-pointer transition-all duration-500 ease-out"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(139, 69, 19, 0.9)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Bắt Đầu Hành Trình</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-amber-600 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out rounded-full" />
              </motion.button>
            </motion.div>
          )}

          {showButton && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-white text-base md:text-lg mt-8 max-w-xl mx-auto bg-white/15 rounded-lg p-4 backdrop-blur-sm shadow-inner border-t-2 border-white/40"
            >
              Khám phá những ngày đất nước đứng giữa lằn ranh sinh tử.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
