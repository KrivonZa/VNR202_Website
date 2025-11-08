'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, AlertTriangle, ChevronLeft } from 'lucide-react'

interface HistoricalContextSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function HistoricalContextSection({ onNext, onBack, onGoToDashboard }: HistoricalContextSectionProps) {
  const vietnamSituation = [
    {
      name: "Nước Việt Nam Dân Chủ Cộng Hòa Ra Đời",
      date: "2/9/1945",
      description: "Nhà nước công nông đầu tiên ở Đông Nam Á",
      status: "Độc lập nhưng vô cùng mong manh",
    },
    {
      name: "Chưa Được Quốc Tế Công Nhận",
      date: "Sau 2/9/1945",
      description: "Không có nước nào công nhận ngoại giao",
      status: "Cô lập về mặt quốc tế",
    },
    {
      name: 'Tình Thế "Ngàn Cân Treo Sợi Tóc"',
      date: "1945-1946",
      description: "Chính quyền mới phải đối diện thử thách nghiêm trọng",
      status: "Mọi mặt của đời sống đều nguy kịch",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] text-white overflow-hidden relative">
      {/* Hiệu ứng khói bay nhẹ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.07)_0%,_rgba(255,255,255,0)_70%)]"
            initial={{
              x: Math.random() * 800 - 400,
              y: Math.random() * 400 - 200,
              opacity: 0.15,
              scale: 1.2,
            }}
            animate={{
              x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
              y: [Math.random() * 500 - 250, Math.random() * 500 - 250],
              opacity: [0.1, 0.25, 0.15],
            }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Overlay tối nhẹ */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 mr-3 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Bối Cảnh Lịch Sử
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto">
            Tình hình trong nước và quốc tế sau năm 1945
          </p>
        </motion.div>

        {/* World Context */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 mr-3 text-white" />
            <h2 className="text-3xl font-bold text-white">Tình Hình Thế Giới Sau CTTG Thứ Hai</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">Trật tự thế giới mới</h3>
              <ul className="space-y-3 text-yellow-100">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chiến tranh kết thúc (1945) - phe Đồng minh chiến thắng
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Liên Xô, Hoa Kỳ, Anh, Pháp, Trung Quốc chi phối thế giới
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Phong trào giải phóng dân tộc phát triển mạnh mẽ
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">Chủ nghĩa thực dân</h3>
              <ul className="space-y-3 text-yellow-100">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chủ nghĩa thực dân suy yếu nhưng vẫn tìm cách tái chiếm
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pháp nuôi tham vọng trở lại Việt Nam
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Anh và Tưởng Giới Thạch có ảnh hưởng lớn ở ĐNA
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Vietnam Situation After 1945 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300">
            Tình Hình Việt Nam Sau Cách Mạng Tháng Tám
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {vietnamSituation.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-[#d6b174]/85 border-2 border-[#a1743b] rounded-xl shadow-md text-[#3b2f05]
                 hover:scale-[1.03] transition-transform duration-300 
                 flex flex-col items-center justify-between text-center p-6 min-h-[310px]
                 font-[Inter]"
              >
                {/* Header (Time + Title) */}
                <div className="flex flex-col items-center justify-center mb-3">
                  <p className="text-xl font-semibold text-[#3b2f05] mb-1 tracking-wide">
                    🕰 <span className="text-[#2d2108]">{situation.date}</span>
                  </p>
                  <h3 className="text-lg font-bold leading-snug text-[#2d2108] max-w-[90%]">
                    {situation.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-center justify-center h-[85px] px-2">
                  <p className="text-base text-[#3b2f05] leading-relaxed text-center max-w-[90%]">
                    {situation.description}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center justify-center h-[60px] w-full mt-2">
                  <div className="bg-[#fffbe6] border border-yellow-400 rounded-md shadow-inner 
                        flex items-center justify-center text-center w-[90%] h-[55px]">
                    <p className="text-sm text-[#8b5e2a] font-semibold leading-snug">
                      ⚠ <strong>Tình trạng:</strong> {situation.status}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="bg-gradient-to-r from-[#5c2e1a]/60 to-[#d4a056]/40 backdrop-blur-md rounded-2xl p-8 mb-12 border border-yellow-400/40 shadow-[0_0_30px_rgba(214,157,62,0.3)]"
        >
          <div className="text-center">
            <div className="text-6xl text-yellow-400 mb-4">&quot;</div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 italic">
              Ngàn Cân Treo Sợi Tóc
            </h2>
            <p className="text-xl text-yellow-100 mb-6 max-w-4xl mx-auto leading-relaxed">
              Cụm từ này phản ánh chính xác mức độ hiểm nghèo của Việt Nam sau ngày giành độc lập:
              Mọi mặt của đời sống chính trị, kinh tế, xã hội, quốc phòng đều trong tình trạng nguy kịch —
              chỉ cần một sai lầm nhỏ cũng có thể khiến nền độc lập non trẻ sụp đổ.
            </p>
            <div className="text-6xl text-yellow-400 rotate-180">&quot;</div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-between items-center mt-12"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center px-6 py-3 
                         bg-gradient-to-r from-[#8b5e2a] to-[#5c3b14]
                         hover:from-[#a06a32] hover:to-[#70471a]
                         text-white font-semibold rounded-full
                         border border-[#d6a85b]
                         shadow-[0_0_10px_rgba(214,168,91,0.3)]
                         hover:shadow-[0_0_15px_rgba(214,168,91,0.5)]
                         transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2 text-white" />
              Quay lại
            </button>

            {onGoToDashboard && (
              <button
                onClick={onGoToDashboard}
                className="flex items-center px-6 py-3 
               bg-gradient-to-r from-[#b98a3c] to-[#8b5e2a]
               hover:from-[#d2a34b] hover:to-[#9c622f]
               text-yellow-100 font-semibold rounded-full
               border border-[#e9c27c]
               shadow-[0_0_10px_rgba(233,194,124,0.3)]
               hover:shadow-[0_0_15px_rgba(233,194,124,0.5)]
               transition-all duration-300"
              >
                📊 Bảng điều khiển
              </button>
            )}
          </div>

          <button
            onClick={onNext}
            className="flex items-center px-8 py-3 
             bg-gradient-to-r from-[#b98a3c] to-[#8b5e2a] 
             hover:from-[#d2a34b] hover:to-[#9c622f]
             text-yellow-100 font-semibold rounded-full 
             border border-[#e9c27c]
             shadow-[0_0_12px_rgba(233,194,124,0.3)]
             hover:shadow-[0_0_18px_rgba(233,194,124,0.5)]
             transition-all duration-300"
          >
            Tiếp theo: Dòng thời gian
            <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
