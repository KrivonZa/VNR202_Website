'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, TrendingUp, Users, Globe, ChevronRight, ChevronLeft, Star, Award, Lightbulb, Crown, Zap } from 'lucide-react'

interface Significance {
  id: string
  title: string
  description: string
  details: string[]
  quote?: string
  icon: string
  color: string
}

const historicalSignificances: Significance[] = [
  {
    id: 'end-crisis',
    title: 'Chấm dứt khủng hoảng về đường lối cứu nước',
    description: 'Kết thúc tình trạng thiếu đường lối đúng đắn trong phong trào yêu nước',
    details: [
      'Trước 1930: Phong trào yêu nước lâm vào bế tắc',
      'Các phong trào cũ đều thất bại',
      'Thiếu lý luận khoa học chỉ đạo',
      'Đảng ra đời mở ra bước ngoặt vĩ đại'
    ],
    icon: '🎯',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'historical-necessity',
    title: 'Kết quả tất yếu của sự phát triển lịch sử',
    description: 'Sự thống nhất của ba yếu tố: Mác-Lênin, phong trào công nhân, yêu nước',
    details: [
      'Chủ nghĩa Mác-Lênin truyền bá vào Việt Nam',
      'Phong trào công nhân phát triển mạnh mẽ',
      'Phong trào yêu nước có truyền thống lâu đời',
      'Vai trò lãnh đạo của Nguyễn Ái Quốc'
    ],
    quote: 'Là sự thống nhất của ba yếu tố: Chủ nghĩa Mác-Lênin, Phong trào công nhân, Phong trào yêu nước Việt Nam',
    icon: '⚡',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'working-class-role',
    title: 'Khẳng định vai trò và bản lĩnh của giai cấp công nhân',
    description: 'Chứng tỏ giai cấp vô sản Việt Nam đã trưởng thành và đủ sức lãnh đạo',
    details: [
      'Giai cấp công nhân đã có ý thức giai cấp',
      'Có khả năng tổ chức và lãnh đạo',
      'Đủ sức đảm nhận sứ mệnh lịch sử',
      'Trở thành lực lượng tiên phong cách mạng'
    ],
    quote: 'Việc thành lập Đảng chứng tỏ rằng giai cấp vô sản ta đã trưởng thành và đủ sức lãnh đạo cách mạng - Chủ tịch Hồ Chí Minh',
    icon: '💪',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'revolutionary-thinking',
    title: 'Bước ngoặt về tư duy cách mạng',
    description: 'Cương lĩnh chính trị đầu tiên mang tính khoa học, đúng đắn',
    details: [
      'Lần đầu có cương lĩnh khoa học',
      'Phản ánh nhu cầu cấp bách của xã hội',
      'Phù hợp xu thế thời đại',
      'Vận dụng sáng tạo Mác-Lênin vào Việt Nam'
    ],
    icon: '🧠',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'correct-path',
    title: 'Xác định con đường cách mạng đúng đắn',
    description: 'Con đường cách mạng vô sản là duy nhất đúng đắn cho dân tộc',
    details: [
      'Giải phóng dân tộc',
      'Giải phóng giai cấp',
      'Giải phóng con người',
      'Phù hợp xu thế thời đại mới'
    ],
    icon: '🛤️',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'great-significance',
    title: 'Ý nghĩa lịch sử to lớn',
    description: 'Mở ra kỷ nguyên mới: Độc lập dân tộc gắn liền với chủ nghĩa xã hội',
    details: [
      'Đưa cách mạng Việt Nam sang thời kỳ mới',
      'Đặt nền móng cho mọi thắng lợi',
      'Trở thành nhân tố quyết định',
      'Gắn với cách mạng vô sản thế giới'
    ],
    icon: '🌟',
    color: 'from-yellow-500 to-yellow-700'
  }
]

interface HistoricalSignificanceSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function HistoricalSignificanceSection({ onNext, onBack, onGoToDashboard }: HistoricalSignificanceSectionProps) {
  const [selectedSignificance, setSelectedSignificance] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState(0)

  // Scroll to top when currentView changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentView])

  const views = ['Tổng quan', 'Chi tiết', 'Kết luận']

  const renderOverview = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ý nghĩa lịch sử của việc thành lập Đảng</h2>
        <p className="text-gray-300 text-lg">
          Sự ra đời của Đảng Cộng sản Việt Nam mang ý nghĩa lịch sử to lớn
        </p>
      </motion.div>
      <div className="flex justify-center items-center">
        <img src="/images/Chamdutkhunghoang.png" alt="Chamdutkhunghoang" className="w-96 h-auto rounded-xl" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {historicalSignificances.slice(0, 3).map((significance, index) => (
          <motion.div
            key={significance.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${significance.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedSignificance === significance.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedSignificance(selectedSignificance === significance.id ? null : significance.id)}
          >
            <div className="text-4xl mb-4">{significance.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{significance.title}</h3>
            <p className="text-gray-200 text-sm">{significance.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {historicalSignificances.slice(3, 6).map((significance, index) => (
          <motion.div
            key={significance.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 3) * 0.2 }}
            className={`bg-gradient-to-br ${significance.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedSignificance === significance.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedSignificance(selectedSignificance === significance.id ? null : significance.id)}
          >
            <div className="text-4xl mb-4">{significance.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{significance.title}</h3>
            <p className="text-gray-200 text-sm">{significance.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderDetails = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Chi tiết các ý nghĩa lịch sử</h2>
        <p className="text-gray-300 text-lg">
          Phân tích sâu về từng ý nghĩa của việc thành lập Đảng
        </p>
      </motion.div>

      <div className="space-y-8">
        {historicalSignificances.map((significance, index) => (
          <motion.div
            key={significance.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-r ${significance.color} rounded-xl p-6`}
          >
            <div className="flex items-start mb-4">
              <div className="text-4xl mr-4">{significance.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{significance.title}</h3>
                <p className="text-gray-200 mb-4">{significance.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {significance.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + idx * 0.1 }}
                  className="bg-black bg-opacity-20 rounded-lg p-3"
                >
                  <div className="flex items-center text-white text-sm">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {detail}
                  </div>
                </motion.div>
              ))}
            </div>

            {significance.quote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                className="bg-black bg-opacity-30 rounded-lg p-4 border-l-4 border-white"
              >
                <p className="text-white italic">{significance.quote}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderConclusion = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Kết luận về ý nghĩa lịch sử</h2>
        <p className="text-gray-300 text-lg">
          Tổng kết về tầm quan trọng của việc thành lập Đảng Cộng sản Việt Nam
        </p>
      </motion.div>
    <div className="flex justify-center items-center gap-8">
      <img src="/images/Thangloi2.png" alt="Thangloi2" className="w-96 h-80 rounded-xl" />
      <img src="/images/Thangloi1.png" alt="Thangloi1" className="w-96 h-80 rounded-xl" />
    </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🏛️</div>
          <h3 className="text-3xl font-bold text-white mb-4">Bước ngoặt vĩ đại</h3>
          <p className="text-gray-200 text-lg">
            Việc thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930 là bước ngoặt vĩ đại nhất 
            trong lịch sử dân tộc Việt Nam, mở ra kỷ nguyên mới của cách mạng.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🌅</div>
          <h3 className="text-xl font-bold text-white mb-4">Mở ra kỷ nguyên mới</h3>
          <ul className="text-gray-200 space-y-2">
            <li>• Độc lập dân tộc gắn liền với chủ nghĩa xã hội</li>
            <li>• Cách mạng Việt Nam trở thành bộ phận của cách mạng thế giới</li>
            <li>• Từ cách mạng tự phát sang cách mạng có tổ chức</li>
            <li>• Từ đấu tranh cục bộ sang đấu tranh toàn quốc</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-white mb-4">Nền tảng thắng lợi</h3>
          <ul className="text-gray-200 space-y-2">
            <li>• Đặt nền móng cho Cách mạng Tháng Tám 1945</li>
            <li>• Cơ sở cho chiến thắng Điện Biên Phủ 1954</li>
            <li>• Tiền đề cho thống nhất đất nước 1975</li>
            <li>• Định hướng cho công cuộc Đổi mới từ 1986</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl p-8 mt-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-2xl font-bold text-white mb-4">Lời Chủ tịch Hồ Chí Minh</h3>
          <blockquote className="text-white text-lg italic mb-4">
          Việc thành lập Đảng là một bước ngoặt vô cùng quan trọng trong lịch sử cách mạng Việt Nam ta. 
            Nó chứng tỏ rằng giai cấp vô sản ta đã trưởng thành và đủ sức lãnh đạo cách mạng.
          </blockquote>
          <p className="text-gray-200">
            Đảng Cộng sản Việt Nam không chỉ là sản phẩm của lịch sử mà còn là người tạo ra lịch sử, 
            dẫn dắt dân tộc Việt Nam từ thắng lợi này đến thắng lợi khác.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-white mb-4">Ý nghĩa thời đại</h3>
          <p className="text-gray-200 text-lg">
            Việc thành lập Đảng Cộng sản Việt Nam không chỉ có ý nghĩa đối với Việt Nam mà còn 
            góp phần vào phong trào giải phóng dân tộc và cách mạng vô sản thế giới, 
            khẳng định sức mạnh của chủ nghĩa Mác-Lênin trong điều kiện nước thuộc địa.
          </p>
        </div>
      </motion.div>
    </div>
  )

  const renderCurrentView = () => {
    switch (currentView) {
      case 0:
        return renderOverview()
      case 1:
        return renderDetails()
      case 2:
        return renderConclusion()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ý nghĩa lịch sử của việc thành lập Đảng
          </h1>
          <p className="text-gray-300 text-xl">
            Bước ngoặt vĩ đại trong lịch sử dân tộc Việt Nam
          </p>
        </motion.div>

        {/* View Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-black bg-opacity-30 rounded-full p-2">
            {views.map((view, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentView === index
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
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

          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView(Math.max(0, currentView - 1))}
              disabled={currentView === 0}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg transition-colors duration-300"
            >
              Phần trước
            </button>

            
            {currentView < views.length - 1 ? (
              <button
                onClick={() => setCurrentView(Math.min(views.length - 1, currentView + 1))}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
              >
                Phần tiếp
              </button>
            ) : (
              <button
                onClick={onNext}
                className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
              >
                Tiếp tục
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}