'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypingEffect from './TypingEffect'

interface LandingPageProps {
  onStartJourney: () => void
}

interface SmokePosition {
  x: number
  y: number
}

export default function LandingPage({ onStartJourney }: LandingPageProps) {
  const [showButton, setShowButton] = useState(false)
  const [smokePositions, setSmokePositions] = useState<SmokePosition[]>([])

  const title = "Những Khó Khăn Của Việt Nam Sau Năm 1945"
  const subtitle =
    'Tìm hiểu về giai đoạn "Ngàn cân treo sợi tóc" - Những thử thách nghiêm trọng và cách vượt qua của dân tộc Việt Nam'

  // ✅ Chỉ random vị trí khói sau khi client mount
  useEffect(() => {
    const arr = Array.from({ length: 3 }, () => ({
      x: Math.random() * 600 - 300,
      y: Math.random() * 400 - 200
    }))
    setSmokePositions(arr)
  }, [])

  const handleTypingComplete = () => {
    setShowButton(true)
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679]">
      {/* Hiệu ứng khói bay nhẹ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {smokePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_70%)]"
            initial={{
              x: pos.x,
              y: pos.y,
              opacity: 0.15,
              scale: 1.2,
            }}
            animate={{
              x: [pos.x + 50, pos.x - 50],
              y: [pos.y + 30, pos.y - 30],
              opacity: [0.1, 0.25, 0.15],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-yellow-400 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Sao lấp lánh */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => {
          const positions = [
            { left: 12.5, top: 15.3 }, { left: 67.8, top: 23.1 },
            { left: 89.2, top: 45.7 }, { left: 34.6, top: 67.2 },
            { left: 78.9, top: 12.8 }, { left: 23.1, top: 89.4 },
          ]
          const pos = positions[i % positions.length]
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-200 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: (i % 8) * 0.25,
              }}
            />
          )
        })}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Star symbol */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_25px_#fbbf24]"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
              <span className="text-yellow-300 text-2xl font-bold">★</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            <TypingEffect text={title} speed={100} onComplete={handleTypingComplete} />
          </h1>

          <div className="text-xl md:text-2xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {showButton && <TypingEffect text={subtitle} speed={50} />}
          </div>

          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={onStartJourney}
                className="bg-yellow-600 hover:bg-yellow-500 text-[#3b2f05] font-bold py-4 px-8 rounded-full text-xl shadow-2xl border-4 border-yellow-300 cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(251, 191, 36, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Bắt đầu hành trình
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {showButton && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-yellow-100 text-lg mt-8 max-w-2xl mx-auto"
          >
            Khám phá giai đoạn lịch sử đầy thử thách từ năm 1945-1946 — khi đất nước đứng giữa bờ vực sinh tồn.
          </motion.p>
        )}
      </div>
    </div>
  )
}
