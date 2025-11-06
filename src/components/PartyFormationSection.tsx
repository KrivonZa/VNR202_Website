'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, MapPin, Star, ChevronRight, ChevronLeft, BookOpen, Target } from 'lucide-react'

interface HistoricalContext {
  id: string
  title: string
  description: string
  details: string[]
  icon: string
  color: string
}

interface PredecessorOrg {
  id: string
  name: string
  foundedDate: string
  founder: string
  location: string
  description: string
  color: string
}

const historicalContexts: HistoricalContext[] = [
  {
    id: 'economic-crisis',
    title: 'Khủng hoảng kinh tế thế giới 1929-1933',
    description: 'Ảnh hưởng nghiêm trọng đến Đông Dương',
    details: [
      'Làm gia tăng mâu thuẫn xã hội',
      'Tình trạng thất nghiệp gia tăng',
      'Giá cả hàng hóa giảm mạnh',
      'Nông dân phá sản hàng loạt'
    ],
    icon: '📉',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'revolutionary-movement',
    title: 'Phong trào cách mạng trong nước',
    description: 'Các tổ chức cộng sản địa phương phát triển mạnh mẽ',
    details: [
      'Thiếu sự thống nhất trong tổ chức',
      'Cần có sự lãnh đạo tập trung',
      'Phong trào công nhân ngày càng mạnh',
      'Ý thức giai cấp được nâng cao'
    ],
    icon: '✊',
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'world-trend',
    title: 'Xu thế cách mạng thế giới',
    description: 'Ảnh hưởng của Cách mạng Tháng Mười Nga',
    details: [
      'Phong trào cộng sản quốc tế phát triển',
      'Chủ nghĩa Mác-Lênin lan rộng',
      'Các nước thuộc địa đấu tranh giải phóng',
      'Xu thế giải phóng dân tộc mạnh mẽ'
    ],
    icon: '🌍',
    color: 'from-blue-500 to-blue-700'
  }
]

const predecessorOrgs: PredecessorOrg[] = [
  {
    id: 'dong-duong-cong-san-dang',
    name: 'Đông Dương Cộng sản Đảng',
    foundedDate: 'Tháng 6/1929',
    founder: 'Trần Phú',
    location: 'Hà Nội',
    description: 'Tổ chức cộng sản đầu tiên tại Bắc Kỳ, có ảnh hưởng mạnh trong phong trào công nhân',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'an-nam-cong-san-dang',
    name: 'An Nam Cộng sản Đảng',
    foundedDate: 'Năm 1929',
    founder: 'Hồ Tùng Mậu',
    location: 'Trung Kỳ',
    description: 'Hoạt động chủ yếu ở miền Trung, tập hợp nhiều trí thức yêu nước',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'dong-duong-cong-san-lien-doan',
    name: 'Đông Dương Cộng sản Liên đoàn',
    foundedDate: 'Năm 1929',
    founder: 'Nguyễn Ái Quốc chỉ đạo',
    location: 'Nam Kỳ',
    description: 'Được thành lập dưới sự chỉ đạo trực tiếp của Nguyễn Ái Quốc',
    color: 'from-red-500 to-red-700'
  }
]

interface PartyFormationSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function PartyFormationSection({ onNext, onBack, onGoToDashboard }: PartyFormationSectionProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedContext, setSelectedContext] = useState<string | null>(null)
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null)

  // Scroll to top when currentStep changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  const steps = [
    'Bối cảnh lịch sử',
    'Các tổ chức tiền thân',
    'Hội nghị thống nhất',
    'Ý nghĩa lịch sử'
  ]

  const renderHistoricalContext = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Bối cảnh lịch sử trước năm 1930</h2>
        <p className="text-gray-300 text-lg">
          Những yếu tố lịch sử tạo điều kiện cho sự ra đời của Đảng Cộng sản Việt Nam
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {historicalContexts.map((context, index) => (
          <motion.div
            key={context.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${context.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedContext === context.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedContext(selectedContext === context.id ? null : context.id)}
          >
            <div className="text-4xl mb-4">{context.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{context.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{context.description}</p>
            
            <AnimatePresence>
              {selectedContext === context.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-2"
                >
                  {context.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-white text-sm"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {detail}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderPredecessorOrgs = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Các tổ chức tiền thân</h2>
        <p className="text-gray-300 text-lg">
          Ba tổ chức cộng sản địa phương được thành lập trước khi thống nhất thành Đảng
        </p>
      </motion.div>

      <div className="space-y-6">
        {predecessorOrgs.map((org, index) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`bg-gradient-to-r ${org.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedOrg === org.id ? 'ring-4 ring-white' : ''
            }`}
            onClick={() => setSelectedOrg(selectedOrg === org.id ? null : org.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{org.name}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-200">
                    <Calendar className="w-4 h-4 mr-2" />
                    {org.foundedDate}
                  </div>
                  <div className="flex items-center text-gray-200">
                    <Users className="w-4 h-4 mr-2" />
                    {org.founder}
                  </div>
                  <div className="flex items-center text-gray-200">
                    <MapPin className="w-4 h-4 mr-2" />
                    {org.location}
                  </div>
                </div>
              </div>
            </div>
            
            <AnimatePresence>
              {selectedOrg === org.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-black bg-opacity-20 rounded-lg"
                >
                  <p className="text-white">{org.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderUnificationConference = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Hội nghị thống nhất (3/2/1930)</h2>
        <p className="text-gray-300 text-lg">
          Sự kiện lịch sử đánh dấu sự ra đời của Đảng Cộng sản Việt Nam
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Hội nghị Cửu Long</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-white" />
                  <span className="text-white font-semibold">Địa điểm</span>
                </div>
                <p className="text-gray-200">Cửu Long, Hương Cảng (Hong Kong)</p>
              </div>
              <div className="bg-black bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 mr-2 text-white" />
                  <span className="text-white font-semibold">Chủ tọa</span>
                </div>
                <p className="text-gray-200">Nguyễn Ái Quốc</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-black bg-opacity-20 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Kết quả
              </h4>
              <p className="text-gray-200 text-lg">
                Thống nhất ba tổ chức thành <strong className="text-white">Đảng Cộng sản Việt Nam</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-black bg-opacity-20 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Ý nghĩa
              </h4>
              <p className="text-gray-200 text-lg">
                Đánh dấu sự ra đời chính thức của đảng cách mạng của giai cấp công nhân Việt Nam
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  const renderHistoricalSignificance = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ý nghĩa lịch sử</h2>
        <p className="text-gray-300 text-lg">
          Tầm quan trọng của việc thành lập Đảng Cộng sản Việt Nam
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: 'Chấm dứt khủng hoảng đường lối',
            description: 'Kết thúc tình trạng thiếu đường lối cứu nước đúng đắn',
            icon: '🎯',
            color: 'from-blue-500 to-blue-700'
          },
          {
            title: 'Mở ra bước ngoặt lịch sử',
            description: 'Đưa cách mạng Việt Nam sang thời kỳ mới',
            icon: '🌟',
            color: 'from-green-500 to-green-700'
          },
          {
            title: 'Khẳng định vai trò giai cấp công nhân',
            description: 'Chứng tỏ giai cấp công nhân đã trưởng thành',
            icon: '💪',
            color: 'from-red-500 to-red-700'
          },
          {
            title: 'Gắn với cách mạng thế giới',
            description: 'Trở thành bộ phận của cách mạng vô sản thế giới',
            icon: '🌍',
            color: 'from-purple-500 to-purple-700'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${item.color} rounded-xl p-6`}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl p-6 mt-8"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-2xl font-bold text-white mb-4">Lời Chủ tịch Hồ Chí Minh</h3>
          <blockquote className="text-white text-lg italic">
            Việc thành lập Đảng là một bước ngoặt vô cùng quan trọng trong lịch sử cách mạng Việt Nam ta. 
            Nó chứng tỏ rằng giai cấp vô sản ta đã trưởng thành và đủ sức lãnh đạo cách mạng.
          </blockquote>
        </div>
      </motion.div>
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderHistoricalContext()
      case 1:
        return renderPredecessorOrgs()
      case 2:
        return renderUnificationConference()
      case 3:
        return renderHistoricalSignificance()
      default:
        return renderHistoricalContext()
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
            Thành lập Đảng Cộng sản Việt Nam
          </h1>
          <p className="text-gray-300 text-xl">
            Quá trình hình thành và phát triển (1930)
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-black bg-opacity-30 rounded-full p-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentStep === index
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentStep()}
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
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 text-white rounded-lg transition-colors duration-300"
            >
              Bước trước
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
              >
                Bước tiếp
              </button>
            ) : (
              <button
                onClick={onNext}
                className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
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