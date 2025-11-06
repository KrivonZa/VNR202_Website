'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Play, BookOpen, Clock, Users, Star, ExternalLink, MessageCircle, Bot, Share2, Brain, Heart } from 'lucide-react'

interface DashboardSectionProps {
  onBack: () => void
  onRestart: () => void
  onNavigateToSection: (section: string) => void
}

const sections = [
  {
    id: 'historical-context',
    title: 'Bối cảnh lịch sử',
    description: 'Tìm hiểu về bối cảnh lịch sử trước khi Đảng ra đời',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'timeline',
    title: 'Dòng thời gian tương tác',
    description: 'Khám phá hành trình hình thành Đảng qua các mốc thời gian',
    icon: Clock,
    color: 'from-purple-500 to-pink-500',

  },
  {
    id: 'party-formation',
    title: 'Quá trình thành lập Đảng',
    description: 'Tìm hiểu chi tiết về quá trình thành lập Đảng Cộng sản Việt Nam',
    icon: Users,
    color: 'from-green-500 to-emerald-500',

  },
  {
    id: 'platform',
    title: 'Cương lĩnh chính trị',
    description: 'Nghiên cứu cương lĩnh chính trị đầu tiên của Đảng',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500',

  },
  {
    id: 'historical-significance',
    title: 'Ý nghĩa lịch sử',
    description: 'Hiểu rõ ý nghĩa lịch sử của việc thành lập Đảng',
    icon: Star,
    color: 'from-indigo-500 to-purple-500',

  },
  {
    id: 'inevitability',
    title: 'Tính tất yếu',
    description: 'Phân tích tính tất yếu của sự ra đời Đảng Cộng sản Việt Nam',
    icon: BookOpen,
    color: 'from-teal-500 to-blue-500',

  },
  {
    id: 'breakthrough',
    title: 'Bước ngoặt vĩ đại',
    description: 'Chứng minh sự ra đời của Đảng là bước ngoặt vĩ đại của cách mạng Việt Nam',
    icon: Star,
    color: 'from-amber-500 to-yellow-500',

  },
  {
    id: 'quiz',
    title: 'Kiểm tra kiến thức',
    description: 'Làm bài quiz để kiểm tra hiểu biết về lịch sử thành lập Đảng',
    icon: Brain,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'sharing',
    title: 'Chia sẻ cảm nghĩ',
    description: 'Chia sẻ suy nghĩ và cảm nhận của bạn về hành trình học tập',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  }
]

const tools = [
  {
    name: 'ChatGPT',
    description: 'Tóm tắt ý chính từ giáo trình để chuẩn bị nội dung thuyết trình',
    icon: Bot,
    color: 'from-green-400 to-green-600',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Padlet',
    description: 'Nơi chia sẻ ý tưởng, đánh giá công việc, trao đổi với nhau,...',
    icon: Share2,
    color: 'from-pink-400 to-pink-600',
    url: 'https://padlet.com'
  },
  {
    name: 'ClaudeAI',
    description: 'Fix bug, logic code',
    icon: MessageCircle,
    color: 'from-purple-400 to-purple-600',
    url: 'https://claude.ai'
  },
  {
    name: 'Gemini',
    description: 'Tóm tắt ý chính từ giáo trình để chuẩn bị nội dung câu hỏi',
    icon: Bot,
    color: 'from-green-400 to-green-600',
    url: 'https://gemini.google.com'
  }
]

export default function DashboardSection({ onBack, onRestart, onNavigateToSection }: DashboardSectionProps) {
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Bảng Điều Khiển
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chọn phần bạn muốn học hoặc ôn tập lại. Mỗi phần được thiết kế để giúp bạn hiểu sâu hơn về lịch sử thành lập Đảng.
          </p>
        </motion.div>

        {/* Sections Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-400">Các Phần Học Tập</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => onNavigateToSection(section.id)}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {section.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                        <Play className="w-4 h-4 mr-1" />
                        Học ngay
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-400">Công Cụ Phụ Lục</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => window.open(tool.url, '_blank')}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    
                    <p className="text-gray-300 text-sm">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-green-400">Phụ Lục - Thành Viên Nhóm 1</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Nguyễn Duy Hưng', id: 'SE184681' },
                { name: 'Nguyễn Cong Trung', id: 'SE170145' },
                { name: 'Lê Quang Huy', id: 'QE180084' },
                { name: 'Nguyễn Minh Hiếu', id: 'SE182322' },
                { name: 'Trương Văn Phát', id: 'SE172155' }
              ].map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{member.name}</h3>
                      <p className="text-green-300 text-xs font-mono">{member.id}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-300 text-sm italic">
                Các thành viên đã đóng góp vào việc phát triển ứng dụng học tập này
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            onClick={onBack}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-full font-bold cursor-pointer flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </motion.button>

          <motion.button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🏠 Về trang chủ
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}