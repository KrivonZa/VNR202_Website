'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, AlertTriangle, ChevronLeft } from 'lucide-react'

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
      color: "bg-green-100 border-green-300"
    },
    {
      name: "Chưa Được Quốc Tế Công Nhận",
      date: "Sau 2/9/1945",
      description: "Không có nước nào công nhận ngoại giao",
      status: "Cô lập về mặt quốc tế",
      color: "bg-orange-100 border-orange-300"
    },
    {
      name: 'Tình Thế "Ngàn Cân Treo Sợi Tóc"',
      date: "1945-1946",
      description: "Chính quyền mới phải đối diện thử thách nghiêm trọng",
      status: "Mọi mặt của đời sống đều nguy kịch",
      color: "bg-red-100 border-red-300"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
      {/* Dashboard Button - Fixed Position */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

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
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Bối Cảnh Lịch Sử
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Tình hình trong nước và quốc tế sau năm 1945
          </p>
        </motion.div>

        {/* World Context */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 mr-3 text-blue-400" />
            <h2 className="text-3xl font-bold text-blue-400">Tình Hình Thế Giới Sau CTTG Thứ Hai</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Trật tự thế giới mới</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chiến tranh kết thúc (1945) - phe Đồng minh chiến thắng
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Liên Xô, Hoa Kỳ, Anh, Pháp, Trung Quốc chi phối thế giới
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Phong trào giải phóng dân tộc phát triển mạnh mẽ
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Chủ nghĩa thực dân</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chủ nghĩa thực dân suy yếu nhưng vẫn tìm cách tái chiếm
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pháp nuôi tham vọng trở lại Việt Nam
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            Tình Hình Việt Nam Sau Cách Mạng Tháng Tám
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vietnamSituation.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`${situation.color} backdrop-blur-lg rounded-xl p-6 border-2 hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{situation.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Thời gian:</strong> {situation.date}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Mô tả:</strong> {situation.description}
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Tình trạng:</strong> {situation.status}
                  </p>
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
          className="bg-gradient-to-r from-red-900/50 to-yellow-900/50 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-yellow-400/30"
        >
          <div className="text-center">
            <div className="text-6xl text-yellow-400 mb-4">"</div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 italic">
              Ngàn Cân Treo Sợi Tóc
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Cụm từ này phản ánh chính xác mức độ hiểm nghèo của Việt Nam sau ngày giành độc lập: 
              Mọi mặt của đời sống chính trị, kinh tế, xã hội, quốc phòng đều trong tình trạng nguy kịch — 
              chỉ cần một sai lầm nhỏ cũng có thể khiến nền độc lập non trẻ sụp đổ.
            </p>
            <div className="text-6xl text-yellow-400 rotate-180">"</div>
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
              className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Quay lại
            </button>

            {onGoToDashboard && (
              <button
                onClick={onGoToDashboard}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                📊 Bảng điều khiển
              </button>
            )}
          </div>

          <button
            onClick={onNext}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 rounded-full transition-all duration-300 font-semibold"
          >
            Tiếp theo: Dòng thời gian
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}