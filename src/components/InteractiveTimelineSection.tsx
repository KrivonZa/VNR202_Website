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
      year: "1911",
      title: "Nguyễn Ái Quốc ra đi tìm đường cứu nước",
      location: "Sài Gòn - Paris",
      description: "Nguyễn Tất Thành (sau này là Hồ Chí Minh) rời Việt Nam, bắt đầu hành trình tìm hiểu các tư tưởng cách mạng tiến bộ trên thế giới.",
      significance: "Khởi đầu cho việc tiếp thu tư tưởng Mác-Lênin",
      color: "from-blue-500 to-cyan-500",
      icon: <MapPin className="w-6 h-6" />,
      imageSrc: "/images/1911.jpg",
      imageAlt: "Hình ảnh năm 1911 - Nguyễn Ái Quốc ra đi tìm đường cứu nước"
    },
    {
      year: "1920",
      title: "Tham gia Đảng Cộng sản Pháp",
      location: "Paris, Pháp",
      description: "Nguyễn Ái Quốc trở thành một trong những người sáng lập Đảng Cộng sản Pháp, chính thức theo chủ nghĩa Mác-Lênin.",
      significance: "Bước ngoặt trong tư tưởng cách mạng",
      color: "from-red-500 to-pink-500",
      icon: <Star className="w-6 h-6" />,
      imageSrc: "/images/1920.jpg",
      imageAlt: "Hình ảnh năm 1920 - Tham gia Đảng Cộng sản Pháp"
    },
    {
      year: "1925",
      title: "Thành lập Hội Việt Nam Cách mạng Thanh niên",
      location: "Quảng Châu, Trung Quốc",
      description: "Tổ chức tiền thân của Đảng Cộng sản Việt Nam được thành lập, đào tạo cán bộ cách mạng cho Việt Nam.",
      significance: "Chuẩn bị lực lượng cho việc thành lập Đảng",
      color: "from-green-500 to-emerald-500",
      icon: <Users className="w-6 h-6" />,
      imageSrc: "/images/1925.jpeg",
      imageAlt: "Hình ảnh năm 1925 - Thành lập Hội Việt Nam Cách mạng Thanh niên"
    },
    {
      year: "1929",
      title: "Ba tổ chức cộng sản xuất hiện",
      location: "Việt Nam",
      description: "23/12/1929: Nguyễn Ái Quốc - với tư cách là phái viên quốc tế của Cộng Sản đến Hồng Kông triệu tập đại biểu của Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng đến hợp tại Cửu Long tiến hành hội nghị hợp nhất các tổ chức cộng sản thành một chính đảng duy nhất của Việt Nam (6/1 - 7/2/1930) (sau này Đảng quyết định lấy ngày 3 tháng 2 dương lịch làm ngày kỷ niệm thành lập Đảng)",
      significance: "24/2/1930 Hoàn thành thống nhất thành một chính đảng duy nhất, chấp nhận Đông Dương Cộng sản liên đoàn gia nhập Đảng Cộng sản Việt Nam",
      color: "from-yellow-500 to-orange-500",
      icon: <Calendar className="w-6 h-6" />,
      imageSrc: "/images/1929.webp",
      imageAlt: "Hình ảnh năm 1929 - Ba tổ chức cộng sản xuất hiện"
    },
    {
      year: "3/2/1930",
      title: "Hội nghị thống nhất tại Hồng Kông",
      location: "Hồng Kông",
      description: "Nguyễn Ái Quốc chủ trì hội nghị thống nhất ba tổ chức cộng sản thành Đảng Cộng sản Việt Nam.",
      significance: "Ngày thành lập Đảng Cộng sản Việt Nam",
      color: "from-purple-500 to-indigo-500",
      icon: <Star className="w-6 h-6" />,
      imageSrc: "/images/3_2_1930.jpg",
      imageAlt: "Hình ảnh 3/2/1930 - Hội nghị thống nhất tại Hồng Kông"
    },
    {
      year: "10/1930",
      title: "Đổi tên thành Đảng Cộng sản Đông Dương",
      location: "Việt Nam",
      description: "Theo chỉ thị của Quốc tế Cộng sản, Đảng đổi tên để phù hợp với phạm vi hoạt động rộng lớn hơn.",
      significance: "Mở rộng tầm ảnh hưởng ra toàn Đông Dương",
      color: "from-teal-500 to-blue-500",
      icon: <Clock className="w-6 h-6" />,
      imageSrc: "/images/10_1930.webp",
      imageAlt: "Hình ảnh 10/1930 - Đổi tên thành Đảng Cộng sản Đông Dương"
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
              Timeline Tương Tác
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Hành trình hình thành Đảng Cộng sản Việt Nam (1911-1930)
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
            Tiếp theo: Kiểm tra kiến thức
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}