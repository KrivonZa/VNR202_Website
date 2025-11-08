'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Clock, ChevronLeft, MapPin } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface InteractiveTimelineSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function InteractiveTimelineSection({ onNext, onBack, onGoToDashboard }: InteractiveTimelineSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState(0)

  const events = [
    {
      year: "2/9/1945",
      title: "Tuyên bố độc lập - Nước Việt Nam Dân chủ Cộng hòa ra đời",
      location: "Ba Đình, Hà Nội",
      description: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa - nhà nước công nông đầu tiên ở Đông Nam Á.",
      significance: "Đất nước độc lập nhưng vô cùng mong manh, chưa được quốc tế công nhận",
      imageSrc: "/images/1929.webp",
      imageAlt: "Hình ảnh 2/9/1945 - Tuyên bố độc lập"
    },
    {
      year: "9/1945",
      title: "Quân Tưởng Giới Thạch và Anh xâm nhập",
      location: "Bắc Bộ và Nam Bộ",
      description: "20 vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ với danh nghĩa giải giáp quân Nhật. 1 vạn quân Anh kéo vào Nam Bộ, tạo điều kiện cho Pháp quay lại.",
      significance: "Đất nước bị bao vây bốn phía, không có đồng minh quốc tế",
      imageSrc: "/images/quan-tuong-1945.webp",
      imageAlt: "Hình ảnh tháng 9/1945 - Quân nước ngoài xâm nhập"
    },
    {
      year: "11/1945",
      title: "Thành lập các tổ chức cứu đói và giáo dục",
      location: "Toàn quốc",
      description: "Thành lập Hội Cứu đói, Ủy ban tối cao tiếp tế và Nha Bình dân học vụ để chống 'giặc đói' và 'giặc dốt'.",
      significance: "Những biện pháp cấp bách để giải quyết nạn đói và mù chữ",
      imageSrc: "/images/cuu-doi-1945.jpg",
      imageAlt: "Hình ảnh tháng 11/1945 - Các tổ chức cứu đói"
    },
    {
      year: "25/11/1945",
      title: "Chỉ thị 'Kháng chiến kiến quốc'",
      location: "Hà Nội",
      description: "Ban hành chỉ thị với khẩu hiệu 'Dân tộc trên hết - Tổ quốc trên hết', xác định kẻ thù chính là thực dân Pháp xâm lược.",
      significance: "Định hướng đường lối kháng chiến và xây dựng đất nước",
      imageSrc: "/images/khang-chien-kien-quoc.jpg",
      imageAlt: "Hình ảnh 25/11/1945 - Chỉ thị Kháng chiến kiến quốc"
    },
    {
      year: "6/1/1946",
      title: "Tổng tuyển cử đầu tiên",
      location: "Toàn quốc",
      description: "Tổ chức Tổng tuyển cử bầu ra 333 đại biểu Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
      significance: "Củng cố chính quyền cách mạng, thể hiện ý chí dân chủ",
      imageSrc: "/images/tong-tuyen-cu-1946.jpg",
      imageAlt: "Hình ảnh 6/1/1946 - Tổng tuyển cử đầu tiên"
    },
    {
      year: "6/3/1946",
      title: "Hiệp định Sơ bộ Pháp-Việt",
      location: "Hà Nội",
      description: "Ký hiệp định với Pháp theo đường lối 'Hòa để tiến' - nhân nhượng có nguyên tắc để tránh thế 'một cổ hai tròng' và chuẩn bị lực lượng.",
      significance: "Ngoại giao mềm dẻo, kéo dài thời gian chuẩn bị kháng chiến",
      imageSrc: "/images/hiep-dinh-so-bo-1946.jpg",
      imageAlt: "Hình ảnh 6/3/1946 - Hiệp định Sơ bộ Pháp-Việt"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] text-white overflow-hidden relative">
      {/* Hiệu ứng khói */}
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
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

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
              Dòng Thời Gian Khó Khăn
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto">
            Giai đoạn &quot;Ngàn cân treo sợi tóc&quot; (1945–1946)
          </p>
        </motion.div>

        {/* Thanh tiến độ (Progress Bar) */}
        <div className="relative w-full h-3 bg-[#ffffff33] rounded-full mb-12 shadow-inner">
          <motion.div
            className="absolute top-0 left-0 h-full 
               bg-gradient-to-r from-[#f4d88a] via-[#ffd97a] to-[#cfa44d] 
               rounded-full shadow-[0_0_12px_rgba(255,230,150,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${((selectedEvent + 1) / events.length) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>

        {/* Event hiển thị */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, x: -50 }} // 👈 bắt đầu từ trái
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}     // 👈 đi ra sang phải
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Event Card */}
            <div className="bg-[#ffffff1a] backdrop-blur-lg rounded-2xl p-8 border border-[#ffffff33] shadow-[0_0_25px_rgba(0,0,0,0.2)]">
              <h2 className="text-3xl font-bold text-yellow-300 mb-2">{events[selectedEvent].year}</h2>
              <h3 className="text-xl text-yellow-100 mb-4">{events[selectedEvent].title}</h3>
              <div className="flex items-center text-yellow-200 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {events[selectedEvent].location}
              </div>

              <Image
                src={events[selectedEvent].imageSrc}
                alt={events[selectedEvent].imageAlt}
                width={800}
                height={450}
                className="w-full h-64 object-cover rounded-xl border border-[#ffffff33] mb-6"
              />

              <p className="text-yellow-100 leading-relaxed mb-6">
                {events[selectedEvent].description}
              </p>

              <div className="bg-gradient-to-r from-[#b98a3c]/20 to-[#8b5e2a]/20 rounded-lg p-4 border border-[#e9c27c]/30">
                <h4 className="font-semibold text-[#f6d47b] mb-2">Ý nghĩa lịch sử:</h4>
                <p className="text-yellow-100 text-sm">{events[selectedEvent].significance}</p>
              </div>
            </div>

            {/* Timeline nhỏ */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#f4d88a] via-[#d6a85b] to-[#8b5e2a] shadow-[0_0_10px_rgba(255,230,150,0.4)]" />
              <div className="space-y-8">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center cursor-pointer ${index === selectedEvent ? 'scale-110' : 'scale-100'
                      }`}
                    onClick={() => setSelectedEvent(index)}
                    whileHover={{ scale: index === selectedEvent ? 1.1 : 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-[#fff8e1] z-10 transition-all duration-300 ${index === selectedEvent
                        ? 'bg-gradient-to-r from-[#ffe082] to-[#f6c14b] shadow-[0_0_15px_rgba(255,230,150,0.9)] scale-110'
                        : index < selectedEvent
                          ? 'bg-[#f1cd7a] shadow-[0_0_6px_rgba(255,230,150,0.4)]'
                          : 'bg-[#7a5a26] opacity-70'
                        }`}
                    />

                    <div
                      className={`${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                        } w-5/12 p-4 rounded-lg transition-all duration-300 ${index === selectedEvent
                          ? 'bg-[#fffbe6]/20 border border-[#f6d47b]/50 shadow-[0_0_10px_rgba(255,230,150,0.3)]'
                          : 'bg-[#00000033] hover:bg-[#fffbe6]/10'
                        }`}
                    >
                      <div className="font-semibold text-[#fff7da]">{event.year}</div>
                      <div className="text-sm text-[#fef0b5]">{event.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Điều hướng */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-between items-center mt-8"
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
            Tiếp theo: Khó khăn ngoại tại
            <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
