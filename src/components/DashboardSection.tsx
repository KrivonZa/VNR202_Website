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
    color: 'from-[#b98a3c] to-[#e2b75d]',
  },
  {
    id: 'timeline',
    title: 'Dòng thời gian tương tác',
    description: 'Khám phá hành trình hình thành Đảng qua các mốc thời gian',
    icon: Clock,
    color: 'from-[#8c6334] to-[#d6a85b]',
  },
  {
    id: 'party-formation',
    title: 'Khó Khăn Ngoại Tại',
    description: 'Tìm hiểu chi tiết về sự ra đời và hợp nhất các tổ chức cộng sản',
    icon: Users,
    color: 'from-[#a1743b] to-[#e0b45a]',
  },
  {
    id: 'platform',
    title: 'Khó Khăn Nôi Tại',
    description: 'Khám phá nội dung cương lĩnh đầu tiên của Đảng Cộng sản Việt Nam',
    icon: BookOpen,
    color: 'from-[#b98a3c] to-[#f0c66d]',
  },
  {
    id: 'historical-significance',
    title: 'Biện Pháp Vượt Qua Khó Khăn',
    description: 'Tìm hiểu ý nghĩa lịch sử sâu sắc của việc thành lập Đảng',
    icon: Star,
    color: 'from-[#8a6029] to-[#d6a85b]',
  },
  {
    id: 'inevitability',
    title: 'Kết Quả và Ý Nghĩa Lịch Sử',
    description: 'Phân tích tính tất yếu khách quan của sự ra đời Đảng Cộng sản Việt Nam',
    icon: BookOpen,
    color: 'from-[#b98a3c] to-[#e2b75d]',
  },
  {
    id: 'breakthrough',
    title: 'Bước ngoặt vĩ đại',
    description: 'Khẳng định sự ra đời của Đảng là bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam',
    icon: Star,
    color: 'from-[#d6a85b] to-[#f5cc70]',
  },
  {
    id: 'quiz',
    title: 'Kiểm tra kiến thức',
    description: 'Thử sức với bài quiz để củng cố hiểu biết của bạn',
    icon: Brain,
    color: 'from-[#e6b24c] to-[#f4cd78]',
  },
  {
    id: 'sharing',
    title: 'Chia sẻ cảm nghĩ',
    description: 'Ghi lại và chia sẻ cảm nhận của bạn sau khi hoàn thành hành trình học tập',
    icon: Heart,
    color: 'from-[#b77e3b] to-[#e2b75d]',
  },
]

const tools = [
  {
    name: 'ChatGPT',
    description: 'Tóm tắt ý chính từ giáo trình để chuẩn bị nội dung thuyết trình',
    icon: Bot,
    color: 'from-[#d6a85b] to-[#f0c66d]',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Padlet',
    description: 'Nơi chia sẻ ý tưởng, đánh giá công việc, trao đổi với nhau,...',
    icon: Share2,
    color: 'from-[#b98a3c] to-[#e2b75d]',
    url: 'https://padlet.com'
  },
  {
    name: 'ClaudeAI',
    description: 'Fix bug, logic code',
    icon: MessageCircle,
    color: 'from-[#8a6029] to-[#d6a85b]',
    url: 'https://claude.ai'
  },
  {
    name: 'Gemini',
    description: 'Tóm tắt ý chính từ giáo trình để chuẩn bị nội dung câu hỏi',
    icon: Bot,
    color: 'from-[#d1a464] to-[#f1c86d]',
    url: 'https://gemini.google.com'
  }
]

export default function DashboardSection({ onBack, onRestart, onNavigateToSection }: DashboardSectionProps) {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] text-white overflow-hidden">
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

      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#d6a85b] to-[#f1c86d] bg-clip-text text-transparent mb-4">
            Bảng Điều Khiển
          </h1>
          <p className="text-lg text-yellow-100 max-w-3xl mx-auto">
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
          <h2 className="text-2xl font-bold text-center mb-8 text-yellow-300">Các Phần Học Tập</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                  onClick={() => onNavigateToSection(section.id)}
                >
                  <div
                    className="h-full w-full min-h-[230px] flex flex-col justify-between bg-white/10 backdrop-blur-lg 
                               rounded-2xl p-6 border border-white/20 hover:border-yellow-300/50 
                               transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(214,168,91,0.3)]"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} 
                                      flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300">
                        {section.title}
                      </h3>
                      <p className="text-yellow-50 text-sm mb-4 line-clamp-2">
                        {section.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-yellow-300 text-sm font-medium group-hover:text-yellow-200 transition-colors duration-300">
                      <Play className="w-4 h-4 mr-1" />
                      Học ngay
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
          <h2 className="text-2xl font-bold text-center mb-8 text-yellow-300">Công Cụ Phụ Lục</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group cursor-pointer h-full"
                  onClick={() => window.open(tool.url, '_blank')}
                >
                  <div
                    className="h-full w-full min-h-[180px] flex flex-col justify-between bg-white/10 backdrop-blur-lg 
                               rounded-2xl p-6 border border-white/20 hover:border-yellow-300/50 
                               transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(214,168,91,0.3)]"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} 
                                      flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300">
                          {tool.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-yellow-200 group-hover:text-yellow-300 transition-colors duration-300" />
                      </div>

                      <p className="text-yellow-50 text-sm">{tool.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-yellow-300">Thành Viên Nhóm 3</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Trần Giang Khánh', id: 'SE182983' },
                { name: 'Nguyễn Hoàng An', id: 'HE176690' },
                { name: 'Trương Tấn Dũng', id: 'SE183087' },
                { name: 'Nguyễn Hoàng Phát', id: 'SE170421' }
              ].map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-r from-[#d6a85b]/20 to-[#f1c86d]/20 rounded-xl p-4 border border-yellow-400/40 hover:border-yellow-300/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d6a85b] to-[#f1c86d] flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-yellow-100 text-sm">{member.name}</h3>
                      <p className="text-yellow-200 text-xs font-mono">{member.id}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-yellow-100 text-sm italic">
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
            className="bg-gradient-to-r from-[#8b5e2a] to-[#5c3b14] hover:from-[#a06a32] hover:to-[#70471a]
                       text-white px-6 py-3 rounded-full font-bold cursor-pointer flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </motion.button>

          <motion.button
            onClick={onRestart}
            className="bg-gradient-to-r from-[#b98a3c] to-[#e2b75d] hover:from-[#d8a94c] hover:to-[#f1c86d]
                       text-[#3b2f05] px-6 py-3 rounded-full font-bold cursor-pointer"
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
