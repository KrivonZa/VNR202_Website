'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Star, Clock, ChevronLeft } from 'lucide-react'
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
      color: "from-green-500 to-emerald-500",
      icon: <Star className="w-6 h-6" />,
      imageSrc: "/images/2-9-1945.jpg",
      imageAlt: "Hình ảnh 2/9/1945 - Tuyên bố độc lập"
    },
    {
      year: "9/1945",
      title: "Quân Tưởng Giới Thạch và Anh xâm nhập",
      location: "Bắc Bộ và Nam Bộ",
      description: "20 vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ với danh nghĩa giải giáp quân Nhật. 1 vạn quân Anh kéo vào Nam Bộ, tạo điều kiện cho Pháp quay lại.",
      significance: "Đất nước bị bao vây bốn phía, không có đồng minh quốc tế",
      color: "from-red-500 to-orange-500",
      icon: <MapPin className="w-6 h-6" />,
      imageSrc: "/images/quan-tuong-1945.jpg",
      imageAlt: "Hình ảnh tháng 9/1945 - Quân nước ngoài xâm nhập"
    },
    {
      year: "11/1945",
      title: "Thành lập các tổ chức cứu đói và giáo dục",
      location: "Toàn quốc",
      description: "Thành lập Hội Cứu đói (2/11/1945), Ủy ban tối cao tiếp tế (28/11/1945), và Nha Bình dân học vụ (8/9/1945) để chống 'giặc đói' và 'giặc dốt'.",
      significance: "Những biện pháp cấp bách để giải quyết nạn đói và mù chữ",
      color: "from-blue-500 to-cyan-500",
      icon: <Users className="w-6 h-6" />,
      imageSrc: "/images/cuu-doi-1945.jpg",
      imageAlt: "Hình ảnh tháng 11/1945 - Các tổ chức cứu đói"
    },
    {
      year: "25/11/1945",
      title: "Chỉ thị 'Kháng chiến kiến quốc'",
      location: "Hà Nội",
      description: "Ban hành chỉ thị với khẩu hiệu 'Dân tộc trên hết - Tổ quốc trên hết', xác định kẻ thù chính là thực dân Pháp xâm lược.",
      significance: "Định hướng đường lối kháng chiến và xây dựng đất nước",
      color: "from-purple-500 to-indigo-500",
      icon: <Calendar className="w-6 h-6" />,
      imageSrc: "/images/khang-chien-kien-quoc.jpg",
      imageAlt: "Hình ảnh 25/11/1945 - Chỉ thị Kháng chiến kiến quốc"
    },
    {
      year: "6/1/1946",
      title: "Tổng tuyển cử đầu tiên",
      location: "Toàn quốc",
      description: "Tổ chức Tổng tuyển cử bầu ra 333 đại biểu Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
      significance: "Củng cố chính quyền cách mạng, thể hiện ý chí dân chủ",
      color: "from-green-500 to-teal-500",
      icon: <Star className="w-6 h-6" />,
      imageSrc: "/images/tong-tuyen-cu-1946.jpg",
      imageAlt: "Hình ảnh 6/1/1946 - Tổng tuyển cử đầu tiên"
    },
    {
      year: "6/3/1946",
      title: "Hiệp định Sơ bộ Pháp-Việt",
      location: "Hà Nội",
      description: "Ký hiệp định với Pháp theo đường lối 'Hòa để tiến' - nhân nhượng có nguyên tắc để tránh thế 'một cổ hai tròng' và chuẩn bị lực lượng.",
      significance: "Ngoại giao mềm dẻo, kéo dài thời gian chuẩn bị kháng chiến",
      color: "from-yellow-500 to-orange-500",
      imageSrc: "/images/hiep-dinh-so-bo-1946.jpg",
      imageAlt: "Hình ảnh 6/3/1946 - Hiệp định Sơ bộ Pháp-Việt"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
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
            <Clock className="w-8 h-8 mr-3 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dòng Thời Gian Khó Khăn
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Giai đoạn "Ngàn cân treo sợi tóc" (1945-1946)
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {events.map((event, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedEvent(index)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${selectedEvent === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white'
                  : 'border-white/30 text-gray-300 hover:border-white/50'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {event.year}
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-white/20 rounded-full mb-8">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((selectedEvent + 1) / events.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Event Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Event Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className={`w-16 h-16 bg-gradient-to-r ${events[selectedEvent].color} rounded-xl flex items-center justify-center mb-6`}>
                {events[selectedEvent].icon}
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {events[selectedEvent].year}
                </h2>
                <h3 className="text-xl text-gray-300 mb-4">
                  {events[selectedEvent].title}
                </h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {events[selectedEvent].location}
                </div>
              </div>

              {/* Hình ảnh theo năm */}
              <Image
                src={events[selectedEvent].imageSrc}
                alt={events[selectedEvent].imageAlt}
                width={800}
                height={450}
                className="w-full h-64 object-cover rounded-xl border border-white/20 mb-6"
              />

              <p className="text-gray-300 leading-relaxed mb-6">
                {events[selectedEvent].description}
              </p>

              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-400/30">
                <h4 className="font-semibold text-blue-400 mb-2">Ý nghĩa lịch sử:</h4>
                <p className="text-gray-300 text-sm">
                  {events[selectedEvent].significance}
                </p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

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
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10 ${index === selectedEvent
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : index <= selectedEvent
                        ? 'bg-green-500'
                        : 'bg-gray-500'
                      }`}></div>

                    <div className={`${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-5/12 p-4 rounded-lg transition-all duration-300 ${index === selectedEvent
                      ? 'bg-white/20 border border-white/30'
                      : 'bg-white/5 hover:bg-white/10'
                      }`}>
                      <div className="font-semibold text-white">{event.year}</div>
                      <div className="text-sm text-gray-300">{event.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedEvent(Math.max(0, selectedEvent - 1))}
            disabled={selectedEvent === 0}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-all duration-300 border border-white/30"
          >
            Sự kiện trước
          </button>

          <button
            onClick={() => setSelectedEvent(Math.min(events.length - 1, selectedEvent + 1))}
            disabled={selectedEvent === events.length - 1}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-all duration-300 border border-white/30"
          >
            Sự kiện tiếp theo
          </button>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-between items-center"
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
            className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full transition-all duration-300 font-semibold"
          >
            Tiếp theo: Khó khăn ngoại tại
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}