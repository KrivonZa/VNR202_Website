'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target, TrendingUp, Users, Globe, ChevronRight, ChevronLeft, Star, Award,
  Lightbulb, Crown, Zap, Factory, BookOpen, Heart,
  Flag, // Icon cho 'Giữ vững độc lập'
  Landmark, // Icon cho 'Xây dựng bộ máy'
  CheckCircle, // Icon cho 'Kết luận'
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import React from 'react' // Cần import React

// ✅ Sửa Interface
interface SignificanceFactor {
  id: string
  title: string
  description: string
  details: string[]
  evidence: string[]
  icon: React.ElementType // Sửa từ string (emoji) sang React.ElementType
  color?: string // Sẽ không dùng 'color' nữa
}

// ✅ Sửa Data: Dùng Lucide Icons
const resultsAndSignificance: SignificanceFactor[] = [
  {
    id: 'preserve-independence',
    title: 'Giữ vững nền độc lập non trẻ',
    description: 'Bảo vệ thành quả Cách mạng Tháng Tám trong hoàn cảnh cực kỳ hiểm nghèo',
    details: [
      'Vượt qua được giai đoạn "Ngàn cân treo sợi tóc"',
      'Không để mất nền độc lập vừa giành được',
      'Chống lại các thế lực thù địch từ nhiều phía',
      'Duy trì được chính quyền cách mạng'
    ],
    evidence: [
      'Chính quyền cách mạng được duy trì từ 1945-1946',
      'Không bị lật đổ dù áp lực rất lớn',
      'Dân tộc đoàn kết xung quanh chính quyền',
      'Chuẩn bị được lực lượng cho kháng chiến'
    ],
    icon: Flag, // 🛡️
  },
  {
    id: 'build-institutions',
    title: 'Xây dựng bộ máy nhà nước',
    description: 'Thành lập được hệ thống chính quyền, hiến pháp, quân đội đầu tiên',
    details: [
      'Tổ chức Tổng tuyển cử đầu tiên (6/1/1946)',
      'Thành lập Chính phủ chính thức (2/3/1946)',
      'Ban hành Hiến pháp đầu tiên (9/11/1946)',
      'Xây dựng lực lượng vũ trang nhân dân'
    ],
    evidence: [
      '333 đại biểu Quốc hội được bầu',
      'Hồ Chí Minh làm Chủ tịch nước',
      'Hiến pháp dân chủ đầu tiên của Việt Nam',
      'Quân đội nhân dân được thành lập'
    ],
    icon: Landmark, // 🏛️
  },
  {
    id: 'mobilize-people',
    title: 'Huy động sức mạnh toàn dân',
    description: 'Phát huy tinh thần "Tự lực – Đoàn kết – Hy sinh – Kiên cường"',
    details: [
      'Phong trào "Ngày đồng tâm" lan rộng',
      'Tuần lễ vàng thu được 370kg vàng',
      'Phong trào xóa mù chữ toàn quốc',
      'Tinh thần yêu nước, tự lực tự cường'
    ],
    evidence: [
      '2,5 triệu người được xóa mù chữ',
      'Sản lượng nông nghiệp tăng gấp 4 lần',
      '60 triệu đồng đóng góp cho quỹ quốc gia',
      'Toàn dân đoàn kết chống khó khăn'
    ],
    icon: Users, // 💖
  },
  {
    id: 'foundation-resistance',
    title: 'Nền móng cho kháng chiến',
    description: 'Đặt nền móng vững chắc cho cuộc kháng chiến chống Pháp và xây dựng đất nước',
    details: [
      'Chuẩn bị về chính trị, tư tưởng',
      'Tạo được sức mạnh tinh thần toàn dân',
      'Có kinh nghiệm tổ chức và lãnh đạo',
      'Tích lũy được bài học quý báu'
    ],
    evidence: [
      'Kháng chiến chống Pháp (1946-1954) thành công',
      'Giải phóng miền Bắc, tiến tới thống nhất',
      'Kinh nghiệm xây dựng nhà nước dân chủ',
      'Bài học về sự nghiệp giải phóng dân tộc'
    ],
    icon: Award, // 🌟
  }
]

interface ResultsSignificanceSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

// ✅ Đổi tên Component
export default function ResultsSignificanceSection({ onNext, onBack, onGoToDashboard }: ResultsSignificanceSectionProps) {
  const [selectedFactor, setSelectedFactor] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentView])

  // ✅ Sửa lại Tab (Bỏ "Chứng minh")
  const views = ['Tổng quan', 'Chi tiết', 'Kết luận']

  // ✅ Viết lại Tab "Tổng quan"
  const renderOverview = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">
          Những Kết Quả Quan Trọng
        </h2>
        <p className="text-yellow-200 text-lg">
          Các thành tựu chính đạt được trong giai đoạn 1945-1946
        </p>
      </motion.div>

      {/* ✅ Bỏ style "tắc kè" */}
      <div className="grid md:grid-cols-2 gap-6">
        {resultsAndSignificance.map((factor, index) => {
          const Icon = factor.icon
          return (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              // ✅ Áp dụng style thẻ thống nhất
              className={`bg-black/20 backdrop-blur-sm border-4 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedFactor === factor.id
                ? 'border-yellow-400'
                : 'border-transparent'
                }`}
              onClick={() => setSelectedFactor(selectedFactor === factor.id ? null : factor.id)}
            >
              <div className="mb-4">
                <Icon className="w-10 h-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold text-yellow-50 mb-2">{factor.title}</h3>
              <p className="text-yellow-200 text-sm">{factor.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )

  // ✅ Viết lại Tab "Phân tích" -> "Chi tiết"
  const renderDetails = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">
          Phân Tích Chi Tiết
        </h2>
        <p className="text-yellow-200 text-lg">
          Đi sâu vào từng kết quả và bằng chứng lịch sử
        </p>
      </motion.div>

      <div className="space-y-8">
        {resultsAndSignificance.map((factor, index) => {
          const Icon = factor.icon
          return (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              // ✅ Áp dụng style thẻ thống nhất
              className="bg-black/20 backdrop-blur-sm border border-yellow-600/30 rounded-xl p-6"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 pt-1">
                  <Icon className="w-10 h-10 text-yellow-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-50 mb-2">{factor.title}</h3>
                  <p className="text-yellow-200 mb-4">{factor.description}</p>
                </div>
              </div>

              {/* ✅ Giữ layout 2 cột vì rất tốt */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-yellow-100 mb-3">Nội dung chính:</h4>
                  <div className="space-y-2">
                    {factor.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="bg-black/20 rounded-lg p-3"
                      >
                        <div className="flex items-center text-yellow-100 text-sm">
                          <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                          {detail}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-yellow-100 mb-3">Bằng chứng cụ thể:</h4>
                  <div className="space-y-2">
                    {factor.evidence.map((evidence, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 + 0.2 }}
                        className="bg-black/30 rounded-lg p-3"
                      >
                        <div className="flex items-center text-yellow-100 text-sm">
                          <Star className="w-4 h-4 mr-2 flex-shrink-0 text-yellow-400" />
                          {evidence}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )

  // ✅ VIẾT LẠI HOÀN TOÀN Tab "Kết luận"
  const renderConclusion = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">
          Ý Nghĩa Lịch Sử To Lớn
        </h2>
        <p className="text-yellow-200 text-lg">
          Những bài học và giá trị cốt lõi đúc kết từ giai đoạn 1945-1946
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-yellow-600/30 to-red-600/30 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-600/50"
      >
        <div className="text-center">
          <Crown className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-yellow-50 mb-4">Bài Học Vô Giá Về Xây Dựng Đất Nước</h3>
          <p className="text-yellow-200 text-lg">
            Giai đoạn 1945-1946 là &quot;lửa thử vàng&quot;, chứng minh sức mạnh của khối đại đoàn kết dân tộc
            và đường lối lãnh đạo sáng suốt, đặt nền móng cho mọi thắng lợi sau này.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
        >
          <div className="mb-4"><Target className="w-10 h-10 text-yellow-300" /></div>
          <h3 className="text-xl font-bold text-yellow-50 mb-4">Khẳng Định Sức Mạnh Nội Lực</h3>
          <ul className="text-yellow-200 space-y-2">
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              Chứng minh đường lối &quot;Tự lực cánh sinh&quot; là hoàn toàn đúng đắn.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              Khơi dậy và phát huy cao độ tinh thần yêu nước, đoàn kết của toàn dân.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
        >
          <div className="mb-4"><BookOpen className="w-10 h-10 text-yellow-300" /></div>
          <h3 className="text-xl font-bold text-yellow-50 mb-4">Nền Tảng Cho Kháng Chiến</h3>
          <ul className="text-yellow-200 space-y-2">
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              Là cuộc &quot;tổng diễn tập&quot;, rèn luyện đầu tiên của chính quyền non trẻ.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              Tạo ra cơ sở vật chất và tinh thần để tự tin bước vào cuộc kháng chiến trường kỳ.
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl p-8 mt-8"
      >
        <div className="text-center">
          <Star className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold text-yellow-50 mb-4">Khẳng Định Của Lịch Sử</h3>
          <blockquote className="text-yellow-200 text-lg italic font-medium">
            Thắng lợi trong giai đoạn 1945-1946 là một trong những thành tựu vĩ đại nhất
            của dân tộc, là minh chứng cho khát vọng độc lập và khả năng
            tự cường phi thường của nhân dân Việt Nam.
          </blockquote>
        </div>
      </motion.div>
    </div>
  )


  const renderCurrentView = () => {
    switch (currentView) {
      case 0:
        return renderOverview()
      case 1:
        return renderDetails() // Sửa từ renderAnalysis
      case 2:
        return renderConclusion() // Sửa từ renderProof
      // Bỏ case 3
      default:
        return renderOverview()
    }
  }

  return (
    // ✅ Sửa Nền
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] p-6 text-yellow-100">
      <div className="max-w-6xl mx-auto">
        {/* Header (Tiêu đề H1 đã đúng) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            Kết Quả và Ý Nghĩa Lịch Sử
          </h1>
          <p className="text-yellow-100 text-xl">
            Những thành tựu đạt được và ý nghĩa to lớn của việc vượt qua khó khăn
          </p>
        </motion.div>

        {/* View Selector (Tabs) */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 bg-black/30 rounded-full p-2">
            {views.map((view, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                // ✅ Sửa Nút Tab
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 m-1 md:m-0 ${currentView === index
                  ? 'bg-yellow-600 text-[#3b2f05]' // Active
                  : 'text-yellow-100 hover:text-white hover:bg-white/10' // Inactive
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
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            {/* ✅ Sửa Nút Phụ (Bỏ style gradient lạ) */}
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

          <div className="flex space-x-4">
            {/* ✅ Sửa Nút (Bỏ màu đỏ) */}
            <button
              onClick={() => setCurrentView(Math.max(0, currentView - 1))}
              disabled={currentView === 0}
              className={`flex items-center px-8 py-3 rounded-full border font-semibold transition-all duration-300`}
            >
              <ArrowLeft className="w-5 h-5 mr-2 text-[#3b2f05]" />
              Bước trước
            </button>

            {/* ✅ Sửa Nút (Bỏ màu đỏ) */}
            {currentView < views.length - 1 ? (
              <button
                onClick={() => setCurrentView(Math.min(views.length - 1, currentView + 1))}
                className="flex items-center px-8 py-3 
        bg-gradient-to-r from-[#b98a3c] to-[#8b5e2a] 
        hover:from-[#d2a34b] hover:to-[#9c622f]
        text-yellow-100 font-semibold rounded-full 
        border border-[#e9c27c]
        shadow-[0_0_12px_rgba(233,194,124,0.3)]
        hover:shadow-[0_0_18px_rgba(233,194,124,0.5)]
        transition-all duration-300"
              >
                Phần tiếp
                <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
              </button>
            ) : (
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
                Tiếp theo: Bước ngoặt vĩ đại
                <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}