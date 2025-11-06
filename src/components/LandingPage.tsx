'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import TypingEffect from './TypingEffect'

interface LandingPageProps {
  onStartJourney: () => void
}

export default function LandingPage({ onStartJourney }: LandingPageProps) {
  const [showButton, setShowButton] = useState(false)

  const title = "Những Khó Khăn Của Việt Nam Sau Năm 1945"
  const subtitle = 'Tìm hiểu về giai đoạn "Ngàn cân treo sợi tóc" - Những thử thách nghiêm trọng và cách vượt qua của dân tộc Việt Nam'

  const handleTypingComplete = () => {
    setShowButton(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-600 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-yellow-400 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Star pattern */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => {
          // Pre-calculated fixed positions to avoid hydration mismatch
          const positions = [
            { left: 12.5, top: 15.3 }, { left: 67.8, top: 23.1 }, { left: 89.2, top: 45.7 },
            { left: 34.6, top: 67.2 }, { left: 78.9, top: 12.8 }, { left: 23.1, top: 89.4 },
            { left: 56.7, top: 34.5 }, { left: 91.3, top: 78.2 }, { left: 45.8, top: 56.9 },
            { left: 12.9, top: 78.3 }, { left: 78.4, top: 23.6 }, { left: 34.7, top: 91.2 },
            { left: 67.1, top: 45.8 }, { left: 89.5, top: 12.4 }, { left: 23.8, top: 67.9 },
            { left: 56.2, top: 89.1 }, { left: 91.7, top: 34.3 }, { left: 45.3, top: 78.6 },
            { left: 12.1, top: 56.7 }, { left: 78.8, top: 91.8 }, { left: 34.2, top: 23.9 },
            { left: 67.5, top: 67.4 }, { left: 89.9, top: 45.1 }, { left: 23.4, top: 12.7 },
            { left: 56.8, top: 78.9 }, { left: 91.1, top: 56.2 }, { left: 45.7, top: 34.8 },
            { left: 12.6, top: 91.5 }, { left: 78.2, top: 45.6 }, { left: 34.9, top: 78.1 },
            { left: 67.3, top: 23.7 }, { left: 89.7, top: 67.3 }, { left: 23.5, top: 56.4 },
            { left: 56.1, top: 12.9 }, { left: 91.4, top: 89.7 }, { left: 45.2, top: 23.2 },
            { left: 12.8, top: 67.8 }, { left: 78.6, top: 34.1 }, { left: 34.4, top: 56.8 },
            { left: 67.9, top: 91.3 }, { left: 89.1, top: 78.5 }, { left: 23.7, top: 45.9 },
            { left: 56.4, top: 23.4 }, { left: 91.8, top: 67.7 }, { left: 45.6, top: 12.2 },
            { left: 12.3, top: 89.8 }, { left: 78.1, top: 56.1 }, { left: 34.8, top: 34.6 },
            { left: 67.2, top: 78.4 }, { left: 89.6, top: 91.9 }
          ];

          const position = positions[i] || { left: 50, top: 50 };
          const duration = 2 + (i % 4); // Fixed duration based on index
          const delay = (i % 8) * 0.25; // Fixed delay based on index

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Vietnamese flag colors accent */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 bg-yellow-400 rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-2xl font-bold">★</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent">
            <TypingEffect 
              text={title}
              speed={100}
              onComplete={handleTypingComplete}
            />
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {showButton && (
              <TypingEffect 
                text={subtitle}
                speed={50}
              />
            )}
          </div>

          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={onStartJourney}
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-4 px-8 rounded-full text-xl shadow-2xl border-4 border-yellow-300 cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(251, 191, 36, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 40px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                🚀 Bắt đầu hành trình
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Subtitle */}
        {showButton && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-yellow-200 text-lg mt-8 max-w-2xl mx-auto"
          >
            Khám phá giai đoạn lịch sử đầy thử thách từ năm 1945-1946 và bài học về bản lĩnh, trí tuệ của dân tộc Việt Nam
          </motion.p>
        )}
      </div>
    </div>
  )
}
