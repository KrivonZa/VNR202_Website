'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, AlertTriangle, ChevronLeft } from 'lucide-react'

interface HistoricalContextSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function HistoricalContextSection({ onNext, onBack, onGoToDashboard }: HistoricalContextSectionProps) {
  const crisisMovements = [
    {
      name: "Phong trào Cần Vương",
      period: "1885-1896",
      leader: "Phan Đình Phùng",
      limitation: "Hạn chế về tư tưởng và phương pháp",
      color: "bg-red-100 border-red-300"
    },
    {
      name: "Phong trào Duy Tân",
      period: "1904-1916",
      leader: "Phan Bội Châu",
      limitation: "Không có cơ sở quần chúng rộng rãi",
      color: "bg-orange-100 border-orange-300"
    },
    {
      name: "Phong trào Đông Du",
      period: "1905-1908",
      leader: "Phan Bội Châu",
      limitation: "Bị đế quốc đàn áp, thiếu đường lối đúng đắn",
      color: "bg-yellow-100 border-yellow-300"
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
            Trước năm 1930: Khủng hoảng đường lối cứu nước
          </p>
        </motion.div>

        {/* Crisis Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 mr-3 text-red-400" />
            <h2 className="text-3xl font-bold text-red-400">Khủng Hoảng Toàn Diện</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tình hình kinh tế - xã hội</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Khủng hoảng kinh tế thế giới 1929-1933
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ảnh hưởng nghiêm trọng đến Đông Dương
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gia tăng mâu thuẫn xã hội
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tình hình chính trị</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Phong trào yêu nước lâm vào bế tắc
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thiếu đường lối cách mạng đúng đắn
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cần có lực lượng lãnh đạo mới
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Failed Movements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            Các Phong Trào Cứu Nước Trước Đây
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {crisisMovements.map((movement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`${movement.color} backdrop-blur-lg rounded-xl p-6 border-2 hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{movement.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Thời gian:</strong> {movement.period}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Lãnh đạo:</strong> {movement.leader}
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-800">
                    <strong>Hạn chế:</strong> {movement.limitation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* viết thêm ở đây  */}
        {/* viết thêm ở đây  */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
        >
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 mr-3 text-yellow-400" />
            <h2 className="text-3xl font-bold text-yellow-400">Các Tổ Chức Cộng Sản Ra Đời</h2>
          </div>

          <p className="text-lg text-gray-300 mb-6">
            a) Sự phát triển của phong trào yêu nước theo khuynh hướng vô sản
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/20 p-6 bg-slate-800/30">
              <h3 className="text-lg font-semibold mb-3 text-red-300">Hình thức sơ khai (Trước 1914)</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                  Bỏ trốn tập thể
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                  Phá giao kèo, đưa đơn phản kháng
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/20 p-6 bg-slate-800/30">
              <h3 className="text-lg font-semibold mb-3 text-yellow-300">Hình thức phát triển (1919-1925)</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></span>
                  Phổ biến bãi công
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></span>
                  Quy mô lớn và thời gian dài
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/20 p-6 bg-slate-800/30">
              <h3 className="text-lg font-semibold mb-3 text-green-300">Mang tính chính trị sâu sắc (1926-1929)</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                  Có sự lãnh đạo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                  Có sự liên kết
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                  Có sức lôi cuốn
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-500/20 border border-yellow-400/40 rounded-xl p-4">
            <p className="text-sm text-yellow-200">
              <strong>Thống kê:</strong> Số lượng các cuộc đấu tranh của công nhân năm 1928-1929 tăng gấp 2,5 lần so với năm 1926-1927.
            </p>
          </div>

          <div className="mt-6 bg-red-500/20 border border-red-400/40 rounded-xl p-4">
            <p className="text-sm text-red-200">
              ⇒ Hội Việt Nam Cách mạng Thanh niên không còn thích hợp và đủ sức lãnh đạo phong trào.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Hình thành các tổ chức cộng sản (1929)</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                Chi bộ Bắc Kỳ thành lập Chi bộ Cộng sản đầu tiên (3/1929).
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                <strong>17/6/1929:</strong> Đông Dương Cộng sản Đảng (Bắc Kỳ).
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                <strong>9/1929:</strong> Phần tử tiên tiến của Tân Việt thành lập Đông Dương Cộng sản Liên đoàn (Trung Kỳ).
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                <strong>11/1929:</strong> An Nam Cộng sản Đảng (Nam Kỳ).
              </div>
            </div>

            <div className="mt-6 bg-blue-500/20 border border-blue-400/40 rounded-xl p-4">
              <p className="text-sm text-blue-200">
                ⇒ Kêu gọi Quốc tế Cộng sản thừa nhận tổ chức của từng Đảng (lấy cờ đỏ búa liềm là Đảng kỳ).
              </p>
            </div>
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
            Tiếp theo: Thành lập Đảng
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}