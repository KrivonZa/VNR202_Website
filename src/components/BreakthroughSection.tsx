'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, TrendingUp, Users, Globe, ChevronRight, ChevronLeft, Star, Award, Lightbulb, Crown, Zap, Factory, BookOpen, Heart, CheckCircle, ArrowRight } from 'lucide-react'

interface Argument {
  id: string
  title: string
  description: string
  details: string[]
  evidence: string[]
  icon: string
  color: string
}

const breakthroughArguments: Argument[] = [
  {
    id: 'crisis-resolution',
    title: 'Chấm dứt khủng hoảng đường lối cứu nước',
    description: 'Giải quyết tình trạng bế tắc của phong trào yêu nước trước khi Đảng ra đời',
    details: [
      'Các phong trào yêu nước trước đó đều thất bại',
      'Thiếu đường lối chính trị đúng đắn',
      'Chưa có tổ chức vững mạnh lãnh đạo',
      'Đảng ra đời với Cương lĩnh chính trị đầu tiên'
    ],
    evidence: [
      'Phong trào Cần Vương, Yên Thế thất bại',
      'Phan Bội Châu, Phan Châu Trinh không thành công',
      'Việt Nam Quốc dân đảng thất bại',
      'Cương lĩnh tháng 2/1930 xác định đường lối đúng'
    ],
    icon: '🎯',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'correct-path',
    title: 'Khẳng định con đường cứu nước đúng đắn',
    description: 'Xác định con đường cách mạng vô sản cho dân tộc Việt Nam',
    details: [
      'Lựa chọn con đường cách mạng vô sản',
      'Con đường duy nhất đúng để giải phóng dân tộc',
      'Khẳng định vai trò lãnh đạo của giai cấp vô sản',
      'Cách mạng Việt Nam trở thành bộ phận của cách mạng thế giới'
    ],
    evidence: [
      'Giai cấp vô sản đã trưởng thành',
      'Đủ sức lãnh đạo cách mạng',
      'Kết nối với cách mạng vô sản thế giới',
      'Mục tiêu giải phóng dân tộc và giai cấp'
    ],
    icon: '🛤️',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'historical-synthesis',
    title: 'Sản phẩm của sự kết hợp các yếu tố lịch sử',
    description: 'Kết quả của sự chuẩn bị đầy đủ và thống nhất các yếu tố cấu thành',
    details: [
      'Kết hợp chủ nghĩa Mác-Lênin với thực tiễn Việt Nam',
      'Thống nhất tư tưởng Hồ Chí Minh với phong trào',
      'Chuẩn bị về tư tưởng, lý luận, chính trị, tổ chức',
      'Thống nhất ba tổ chức cộng sản thành một Đảng'
    ],
    evidence: [
      'Nguyễn Ái Quốc truyền bá Mác-Lênin',
      'Chuẩn bị điều kiện thành lập Đảng',
      'Chủ trì Hội nghị hợp nhất',
      'Soạn thảo Cương lĩnh chính trị đầu tiên'
    ],
    icon: '🔗',
    color: 'from-green-500 to-green-700'
  }
]

interface BreakthroughSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function BreakthroughSection({ onNext, onBack, onGoToDashboard }: BreakthroughSectionProps) {
  const [selectedArgument, setSelectedArgument] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState(0)

  // Scroll to top when currentView changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentView])

  const views = ['Tổng quan', 'Luận điểm', 'Chứng minh', 'Kết luận']

  const renderOverview = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Bước ngoặt vĩ đại của cách mạng Việt Nam</h2>
        <p className="text-gray-300 text-lg">
          Chứng minh: Sự ra đời của Đảng Cộng sản Việt Nam – Bước ngoặt vĩ đại của cách mạng Việt Nam
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold text-white mb-4">Bước ngoặt lịch sử</h3>
          <p className="text-gray-200 text-lg">
            Sự ra đời của Đảng Cộng sản Việt Nam ngày 3/2/1930 đánh dấu một bước ngoặt vĩ đại 
            trong lịch sử cách mạng Việt Nam, mở ra kỷ nguyên mới cho dân tộc.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {breakthroughArguments.map((argument, index) => (
          <motion.div
            key={argument.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${argument.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300`}
            onClick={() => setSelectedArgument(argument.id)}
          >
            <div className="text-4xl mb-4">{argument.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{argument.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{argument.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl p-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-2xl font-bold text-white mb-4">Mệnh đề cần chứng minh</h3>
          <blockquote className="text-white text-xl italic mb-4">
            Sự ra đời của Đảng Cộng sản Việt Nam – Bước ngoặt vĩ đại của cách mạng Việt Nam
          </blockquote>
          <p className="text-gray-200">
            Thông qua ba luận điểm chính, chúng ta sẽ chứng minh tính đúng đắn của mệnh đề này.
          </p>
        </div>
      </motion.div>
    </div>
  )

  const renderArguments = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ba luận điểm chính</h2>
        <p className="text-gray-300 text-lg">
          Phân tích chi tiết các luận điểm chứng minh bước ngoặt vĩ đại
        </p>
      </motion.div>

      <div className="space-y-8">
        {breakthroughArguments.map((argument, index) => (
          <motion.div
            key={argument.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`bg-gradient-to-r ${argument.color} rounded-2xl p-8`}
          >
            <div className="flex items-start space-x-6">
              <div className="text-6xl">{argument.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Luận điểm {index + 1}: {argument.title}
                </h3>
                <p className="text-gray-200 text-lg mb-6">{argument.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Nội dung chi tiết:</h4>
                    <ul className="space-y-2">
                      {argument.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-200">
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Bằng chứng lịch sử:</h4>
                    <ul className="space-y-2">
                      {argument.evidence.map((evidence, idx) => (
                        <li key={idx} className="flex items-start text-gray-200">
                          <Star className="w-5 h-5 mr-3 mt-0.5 text-yellow-400 flex-shrink-0" />
                          <span>{evidence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderProof = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Chứng minh khoa học</h2>
        <p className="text-gray-300 text-lg">
          Luận chứng logic và bằng chứng lịch sử
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🔬</div>
          <h3 className="text-3xl font-bold text-white mb-4">Phương pháp chứng minh</h3>
          <p className="text-gray-200 text-lg">
            Sử dụng phương pháp duy vật lịch sử để chứng minh tính tất yếu và ý nghĩa của bước ngoặt
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-white mb-4">Trước khi Đảng ra đời</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">❌</span>
              Phong trào yêu nước bế tắc
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">❌</span>
              Thiếu đường lối đúng đắn
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">❌</span>
              Không có tổ chức thống nhất
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">❌</span>
              Các phong trào đều thất bại
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-white mb-4">Sau khi Đảng ra đời</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              Có đường lối cách mạng đúng đắn
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              Tổ chức thống nhất, vững mạnh
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              Cương lĩnh chính trị khoa học
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              Lãnh đạo cách mạng thành công
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-white mb-4">Sự chuyển biến căn bản</h3>
          <div className="flex items-center justify-center space-x-4 text-white text-lg mb-6">
            <span className="bg-red-600 px-4 py-2 rounded-lg">Khủng hoảng</span>
            <ArrowRight className="w-6 h-6" />
            <span className="bg-yellow-600 px-4 py-2 rounded-lg">Đảng ra đời</span>
            <ArrowRight className="w-6 h-6" />
            <span className="bg-green-600 px-4 py-2 rounded-lg">Bước ngoặt</span>
          </div>
          <p className="text-gray-200">
            Sự ra đời của Đảng đã tạo ra một sự chuyển biến căn bản, 
            từ tình trạng khủng hoảng sang kỷ nguyên mới của cách mạng Việt Nam.
          </p>
        </div>
      </motion.div>
    </div>
  )

  const renderConclusion = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Kết luận</h2>
        <p className="text-gray-300 text-lg">
          Khẳng định mệnh đề về bước ngoặt vĩ đại của cách mạng Việt Nam
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 mb-8"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-3xl font-bold text-white mb-4">Kết luận tổng quát</h3>
          <p className="text-gray-200 text-lg mb-6">
            Qua việc phân tích ba luận điểm chính với các luận cứ và bằng chứng lịch sử cụ thể, 
            chúng ta có thể khẳng định một cách khoa học rằng:
          </p>
          
          <div className="bg-black bg-opacity-30 rounded-lg p-6">
            <blockquote className="text-white text-xl italic mb-4">
              Sự ra đời của Đảng Cộng sản Việt Nam thực sự là một bước ngoặt vĩ đại 
              của cách mạng Việt Nam
            </blockquote>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-white mb-4">Ý nghĩa lịch sử</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li>• Chấm dứt khủng hoảng đường lối</li>
            <li>• Mở ra kỷ nguyên mới</li>
            <li>• Xác định con đường đúng đắn</li>
            <li>• Tạo tiền đề cho thắng lợi</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-bold text-white mb-4">Ý nghĩa thời đại</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li>• Kết nối với cách mạng thế giới</li>
            <li>• Áp dụng Mác-Lênin vào thực tiễn</li>
            <li>• Khẳng định vai trò giai cấp vô sản</li>
            <li>• Mở đường cho các dân tộc</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-white mb-4">Ý nghĩa thực tiễn</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li>• Lãnh đạo cách mạng thành công</li>
            <li>• Giành độc lập dân tộc</li>
            <li>• Xây dựng chủ nghĩa xã hội</li>
            <li>• Đổi mới và phát triển</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-2xl font-bold text-white mb-4">Lời khẳng định cuối cùng</h3>
          <blockquote className="text-white text-lg italic mb-4">
            Sự ra đời của Đảng Cộng sản Việt Nam đã giải quyết thành công khủng hoảng đường lối 
            và xác định con đường phát triển đúng đắn cho dân tộc, chuẩn bị những tiền đề cơ bản 
            để đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác, 
            mà đỉnh cao là thắng lợi của Cách mạng Tháng Tám năm 1945. 
            Đó chính là ý nghĩa của bước ngoặt vĩ đại trong lịch sử dân tộc.
          </blockquote>
          <p className="text-gray-200 font-semibold">
            Mệnh đề đã được chứng minh hoàn toàn đúng đắn!
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
        return renderArguments()
      case 2:
        return renderProof()
      case 3:
        return renderConclusion()
      default:
        return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bước ngoặt vĩ đại của cách mạng Việt Nam
          </h1>
          <p className="text-gray-300 text-xl">
            Chứng minh khoa học về ý nghĩa lịch sử của việc thành lập Đảng
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
                    ? 'bg-red-600 text-white'
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
          
          <button
            onClick={onNext}
            className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
          >
            Tiếp tục
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}