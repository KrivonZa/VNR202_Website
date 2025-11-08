'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// ✅ Thêm các icon mới
import {
  Calendar, Users, MapPin, Star, ChevronRight, ChevronLeft, BookOpen, Target,
  Anchor, ShieldAlert, Globe, TrendingUp, Map, AlertTriangle, Building, Banknote,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import React from 'react'

interface HistoricalContext {
  id: string
  title: string
  description: string
  details: string[]
  icon: React.ElementType
  color: string // Vẫn giữ lại nếu bạn muốn dùng sau, nhưng hiện tại không dùng
}

interface PredecessorOrg {
  id: string
  name: string
  foundedDate: string
  founder: string
  location: string
  description: string
  color: string // Vẫn giữ lại nếu bạn muốn dùng sau, nhưng hiện tại không dùng
}

// ✅ Cập nhật data với icon từ Lucide
const externalChallenges: HistoricalContext[] = [
  {
    id: 'chinese-forces',
    title: 'Quân Tưởng Giới Thạch (Phía Bắc)',
    description: '20 vạn quân tràn vào với danh nghĩa giải giáp quân Nhật',
    details: [
      'Đi cùng các tổ chức Việt Quốc, Việt Cách',
      'Âm mưu lật đổ chính quyền cách mạng',
      'Kiểm soát các tuyến giao thông quan trọng',
      'Uy hiếp an ninh chính trị Bắc Bộ'
    ],
    icon: Users,
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'british-forces',
    title: 'Quân Anh (Phía Nam)',
    description: '1 vạn quân kéo vào, tạo điều kiện cho Pháp quay lại',
    details: [
      'Xâm lược Nam Bộ trước tiên',
      'Hỗ trợ Pháp tái chiếm Đông Dương',
      'Kiểm soát các cảng biển quan trọng',
      'Thành lập chính quyền tay sai'
    ],
    icon: Anchor,
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'japanese-forces',
    title: 'Quân Nhật (Toàn quốc)',
    description: 'Hơn 6 vạn quân vẫn chưa giải giáp hoàn toàn',
    details: [
      'Tiềm ẩn nguy cơ bạo loạn bất cứ lúc nào',
      'Vẫn kiểm soát một số khu vực',
      'Có thể liên kết với các thế lực thù địch',
      'Tạo bất ổn về an ninh quốc phòng'
    ],
    icon: ShieldAlert,
    color: 'from-blue-500 to-blue-700'
  }
]

// (Dữ liệu invasionForces giữ nguyên)
const invasionForces: PredecessorOrg[] = [
  {
    id: 'chinese-nationalist-army',
    name: '20 vạn quân Tưởng Giới Thạch',
    foundedDate: 'Tháng 9/1945',
    founder: 'Chính quyền Trung Hoa Dân Quốc',
    location: 'Bắc Bộ (vĩ tuyến 16 trở lên)',
    description: 'Quân đội Trung Quốc Quốc dân đảng với danh nghĩa giải giáp quân Nhật nhưng thực chất muốn kiểm soát Việt Nam',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'british-army',
    name: '1 vạn quân Anh',
    foundedDate: 'Tháng 9/1945',
    founder: 'Chính quyền Anh',
    location: 'Nam Bộ (vĩ tuyến 16 trở xuống)',
    description: 'Quân đội Anh chiếm Nam Bộ, tạo điều kiện cho thực dân Pháp quay trở lại xâm lược Việt Nam',
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'japanese-army',
    name: 'Hơn 6 vạn quân Nhật',
    foundedDate: 'Từ trước 1945',
    founder: 'Đế quốc Nhật Bản',
    location: 'Toàn quốc',
    description: 'Quân đội Nhật Bản vẫn chưa giải giáp hoàn toàn, tiềm ẩn nguy cơ bạo loạn và bất ổn',
    color: 'from-blue-500 to-blue-700'
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  const steps = [
    'Thù trong, giặc ngoài',
    'Các thế lực ngoại xâm',
    'Bao vây bốn phía',
    'Hệ quả nghiêm trọng'
  ]

  // ✅ Đã BỎ hàm getBorderColor

  const renderHistoricalContext = () => {
    // ✅ Helper render icon
    const Icon = (props: { id: string }) => {
      const context = externalChallenges.find(c => c.id === props.id)
      if (!context) return null
      const IconComponent = context.icon
      return <IconComponent className="w-10 h-10 text-yellow-300" />
    }

    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">Những Khó Khăn Ngoại Tại - &quot;Thù Trong, Giặc Ngoài&quot;</h2>
          <p className="text-yellow-200 text-lg">
            Các thế lực nước ngoài đe dọa nền độc lập non trẻ của Việt Nam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {externalChallenges.map((context, index) => (
            <motion.div
              key={context.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              // ✅ SỬA ĐỔI: Bỏ viền màu, chỉ dùng viền vàng khi click
              className={`bg-black/20 backdrop-blur-sm border-4 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedContext === context.id
                ? 'border-yellow-400' // Khi click
                : 'border-transparent' // Trạng thái thường
                }`}
              onClick={() => setSelectedContext(selectedContext === context.id ? null : context.id)}
            >
              <div className="mb-4">
                <Icon id={context.id} />
              </div>
              <h3 className="text-xl font-bold text-yellow-50 mb-2">{context.title}</h3>
              <p className="text-yellow-200 text-sm mb-4">{context.description}</p>

              <AnimatePresence>
                {selectedContext === context.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {context.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-yellow-100 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
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
  }

  const renderPredecessorOrgs = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">Các Thế Lực Ngoại Xâm</h2>
        <p className="text-yellow-200 text-lg">
          Những lực lượng quân sự nước ngoài đe dọa nền độc lập non trẻ
        </p>
      </motion.div>

      <div className="space-y-6">
        {invasionForces.map((org, index) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            // ✅ SỬA ĐỔI: Bỏ viền màu, chỉ dùng viền vàng khi click
            className={`bg-black/20 backdrop-blur-sm border-4 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${selectedOrg === org.id
              ? 'border-yellow-400' // Khi click
              : 'border-transparent' // Trạng thái thường
              }`}
            onClick={() => setSelectedOrg(selectedOrg === org.id ? null : org.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-yellow-50 mb-2">{org.name}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-yellow-200">
                    <Calendar className="w-4 h-4 mr-2" />
                    {org.foundedDate}
                  </div>
                  <div className="flex items-center text-yellow-200">
                    <Users className="w-4 h-4 mr-2" />
                    {org.founder}
                  </div>
                  <div className="flex items-center text-yellow-200">
                    <MapPin className="w-4 h-4 mr-2" />
                    {org.location}
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {selectedOrg === org.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 p-4 bg-black/30 rounded-lg overflow-hidden"
                >
                  <p className="text-yellow-100">{org.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // (Step 3: renderBesiegedStep giữ nguyên vì các màu sắc
  // trong đó là để minh họa, không phải để click)
  const renderBesiegedStep = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">Bao vây bốn phía</h2>
        <p className="text-yellow-200 text-lg">
          Tình thế hiểm nghèo của Việt Nam Dân Chủ Cộng Hòa (1945-1946)
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/20 backdrop-blur-sm border border-yellow-600/50 rounded-2xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <Map className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-yellow-50 mb-4">Bản Đồ Cát Cứ</h3>
            <p className="text-yellow-200">
              Lãnh thổ Việt Nam bị chia cắt và kìm kẹp bởi nhiều thế lực thù địch cùng một lúc.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-black/20 rounded-lg p-6 flex items-start"
            >
              <MapPin className="w-6 h-6 mr-4 text-red-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-yellow-50 mb-2">Miền Bắc (Từ vĩ tuyến 16)</h4>
                <p className="text-yellow-200">
                  <strong className="text-red-400">20 vạn quân Tưởng</strong>, theo sau là các tổ chức phản động Việt Quốc, Việt Cách.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-black/20 rounded-lg p-6 flex items-start"
            >
              <MapPin className="w-6 h-6 mr-4 text-orange-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-yellow-50 mb-2">Miền Nam (Từ vĩ tuyến 16)</h4>
                <p className="text-yellow-200">
                  <strong className="text-orange-400">Quân Anh</strong>, tạo điều kiện cho <strong className="text-orange-400">Quân Pháp</strong> quay lại tái chiếm, gây hấn ở Nam Bộ.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-black/20 rounded-lg p-6 flex items-start"
            >
              <ShieldAlert className="w-6 h-6 mr-4 text-blue-500 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-yellow-50 mb-2">Toàn quốc</h4>
                <p className="text-yellow-200">
                  <strong className="text-blue-400">Hơn 6 vạn quân Nhật</strong> tuy đã đầu hàng nhưng vẫn còn vũ khí, sẵn sàng chờ thời cơ.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // (Step 4: renderHistoricalSignificance giữ nguyên)
  const renderHistoricalSignificance = () => {
    const significanceItems = [
      {
        title: 'Chủ quyền bị xâm phạm',
        description: 'Nhiều lực lượng nước ngoài cùng tồn tại trên lãnh thổ.',
        icon: AlertTriangle,
      },
      {
        title: 'Chính trị bất ổn',
        description: 'Các phe phái phản động nội dậy, quấy phá.',
        icon: Building,
      },
      {
        title: 'Kinh tế kiệt quệ',
        description: 'Bị kiềm kẹp, vơ vét bởi cả Nhật, Tưởng và Pháp.',
        icon: Banknote,
      },
      {
        title: 'An ninh - Xã hội',
        description: 'Nạn đói vẫn đe dọa, trật tự xã hội rối loạn.',
        icon: Globe,
      }
    ]

    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent">Hệ quả nghiêm trọng</h2>
          <p className="text-yellow-200 text-lg">
            Tình thế &quot;Ngàn cân treo sợi tóc&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {significanceItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/20 backdrop-blur-sm border border-yellow-600/30 rounded-xl p-6"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-yellow-300" />
                </div>
                <h3 className="text-xl font-bold text-yellow-50 mb-2">{item.title}</h3>
                <p className="text-yellow-200">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-xl p-6 mt-8"
        >
          <div className="text-center">
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold text-yellow-50 mb-4">Lời Chủ tịch Hồ Chí Minh</h3>
            <blockquote className="text-yellow-200 text-lg italic font-medium">
              &quot;Lúc này, thời vận của dân tộc ta như ngàn cân treo sợi tóc...&quot;
            </blockquote>
          </div>
        </motion.div>
      </div>
    )
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderHistoricalContext()
      case 1:
        return renderPredecessorOrgs()
      case 2:
        return renderBesiegedStep()
      case 3:
        return renderHistoricalSignificance()
      default:
        return renderHistoricalContext()
    }
  }

  // (Phần JSX return bên dưới giữ nguyên)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] p-6 text-yellow-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            Khó Khăn Ngoại Tại
          </h1>
          {/* ✅ SỬA ĐỔI: Sửa quote */}
          <p className="text-yellow-100 text-xl">
            &quot;Thù trong, giặc ngoài&quot; - Các thế lực đe dọa từ bên ngoài (1945-1946)
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 bg-black/30 rounded-full p-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 m-1 md:m-0 ${currentStep === index
                  ? 'bg-yellow-600 text-[#3b2f05]'
                  : 'text-yellow-100 hover:text-white hover:bg-white/10'
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
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-4 md:space-y-0">
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

          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`flex items-center px-8 py-3 rounded-full border font-semibold transition-all duration-300
      ${currentStep === 0
                  ? "bg-gradient-to-r from-gray-500 to-gray-600 text-yellow-100 border-gray-400 opacity-50 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#8b5e2a] to-[#b98a3c] hover:from-[#9c622f] hover:to-[#d2a34b] text-yellow-100 border-[#e9c27c] shadow-[0_0_12px_rgba(233,194,124,0.3)] hover:shadow-[0_0_18px_rgba(233,194,124,0.5)]"
                }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2 text-[#3b2f05]" />
              Bước trước
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() =>
                  setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
                }
                className="flex items-center px-8 py-3 
        bg-gradient-to-r from-[#b98a3c] to-[#8b5e2a] 
        hover:from-[#d2a34b] hover:to-[#9c622f]
        text-yellow-100 font-semibold rounded-full 
        border border-[#e9c27c]
        shadow-[0_0_12px_rgba(233,194,124,0.3)]
        hover:shadow-[0_0_18px_rgba(233,194,124,0.5)]
        transition-all duration-300"
              >
                Bước tiếp
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
                Tiếp theo: Dòng thời gian
                <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}