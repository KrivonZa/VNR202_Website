"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  BookOpen,
  Clock,
  Users,
  Star,
  ExternalLink,
  MessageCircle,
  Bot,
  Share2,
  Brain,
  Heart,
} from "lucide-react";

interface DashboardSectionProps {
  onBack: () => void;
  onRestart: () => void;
  onNavigateToSection: (section: string) => void;
}

const sections = [
  {
    id: "historical-context",
    title: "Bối Cảnh Lịch Sử 1945",
    description:
      "Tìm hiểu tình hình Việt Nam sau Cách mạng Tháng Tám và những thách thức ban đầu",
    icon: BookOpen,
    color: "from-[#f2deb4] to-[#e8cc8f]",
  },
  {
    id: "timeline",
    title: "Dòng Thời Gian Khó Khăn",
    description:
      "Khám phá các sự kiện quan trọng từ 1945-1946 qua dòng thời gian tương tác",
    icon: Clock,
    color: "from-[#e8cc8f] to-[#d9b06a]",
  },
  {
    id: "party-formation",
    title: "Khó Khăn Ngoại Tại",
    description:
      "Tìm hiểu về các thách thức từ bên ngoài: thực dân Pháp trở lại, quân Trung Hoa Dân Quốc",
    icon: Users,
    color: "from-[#f2deb4] to-[#d9b06a]",
  },
  {
    id: "platform",
    title: "Khó Khăn Nội Tại",
    description:
      "Khám phá các vấn đề nội bộ: nạn đói, dịch bệnh, mù chữ và tệ nạn xã hội",
    icon: Heart,
    color: "from-[#d9b06a] to-[#f2deb4]",
  },
  {
    id: "historical-significance",
    title: "Biện Pháp Vượt Qua",
    description:
      "Tìm hiểu các biện pháp khắc phục khó khăn của Chính phủ và nhân dân",
    icon: Star,
    color: "from-[#d9b06a] to-[#e8cc8f]",
  },
  {
    id: "inevitability",
    title: "Kết Quả Và Ý Nghĩa",
    description:
      "Phân tích kết quả đạt được và ý nghĩa lịch sử của việc vượt qua giai đoạn khó khăn",
    icon: BookOpen,
    color: "from-[#f2deb4] to-[#e8cc8f]",
  },
  {
    id: "quiz",
    title: "Kiểm Tra Kiến Thức",
    description:
      'Thử sức với bài quiz về giai đoạn "Ngàn cân treo sợi tóc" 1945-1946',
    icon: Brain,
    color: "from-[#e8cc8f] to-[#f2deb4]",
  },
  {
    id: "sharing",
    title: "Chia Sẻ Cảm Nghĩ",
    description:
      "Ghi lại và chia sẻ suy nghĩ về bài học lịch sử từ giai đoạn khó khăn này",
    icon: MessageCircle,
    color: "from-[#f2deb4] to-[#d9b06a]",
  },
];

const tools = [
  {
    name: "ChatGPT",
    description:
      "Tìm hiểu thêm về giai đoạn lịch sử khó khăn 1945-1946 và các sự kiện liên quan",
    icon: Bot,
    color: "from-[#f2deb4] to-[#e8cc8f]",
    url: "https://chat.openai.com",
  },
  {
    name: "Padlet",
    description:
      "Chia sẻ cảm nghĩ và thảo luận về bài học lịch sử từ giai đoạn khó khăn này",
    icon: Share2,
    color: "from-[#e8cc8f] to-[#d9b06a]",
    url: "https://padlet.com",
  },
  {
    name: "ClaudeAI",
    description:
      "Phân tích sâu hơn về các biện pháp vượt qua khó khăn và ý nghĩa lịch sử",
    icon: MessageCircle,
    color: "from-[#d9b06a] to-[#f2deb4]",
    url: "https://claude.ai",
  },
  {
    name: "Gemini",
    description:
      "Tìm kiếm tài liệu và nguồn thông tin bổ sung về lịch sử Việt Nam 1945-1946",
    icon: Bot,
    color: "from-[#f2deb4] to-[#d9b06a]",
    url: "https://gemini.google.com",
  },
];

export default function DashboardSection({
  onBack,
  onRestart,
  onNavigateToSection,
}: DashboardSectionProps) {
  return (
    <div className="min-h-screen relative text-[#2a1e0e] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] mix-blend-multiply" />

      {/* Hiệu ứng hạt lấp lánh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-100/30 rounded-full"
            initial={{
              x: Math.random() * 800,
              y: Math.random() * 400,
              opacity: 0.3,
            }}
            animate={{
              x: [Math.random() * 800, Math.random() * 800],
              y: [Math.random() * 500, Math.random() * 500],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,228,181,0.4)] mb-4">
            Bảng Điều Khiển
          </h1>
          <p className="text-[#f4e3b7] text-lg max-w-3xl mx-auto italic">
            Khám phá giai đoạn "Ngàn cân treo sợi tóc" - Những khó khăn nghiêm
            trọng của Việt Nam sau năm 1945 và cách vượt qua.
          </p>
        </motion.div>

        {/* HÀNH TRÌNH TÌM HIỂU */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
            Hành Trình Tìm Hiểu Khó Khăn 1945-1946
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer h-full"
                  onClick={() => onNavigateToSection(section.id)}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                >
                  <div className="h-full bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 shadow-[0_0_20px_rgba(193,167,117,0.15)] hover:shadow-[0_0_30px_rgba(193,167,117,0.25)] transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className="w-6 h-6 text-[#3b2a0c]" />
                      </div>
                      <Play className="w-5 h-5 text-[#3b2a0c] group-hover:text-[#f8e1a1] transition-colors duration-200" />
                    </div>

                    <h3 className="text-xl font-bold text-[#3b2a0c] mb-2 group-hover:text-[#f8e1a1] transition-colors duration-200">
                      {section.title}
                    </h3>
                    <p className="text-[#4a3511] text-sm line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CÔNG CỤ PHỤ LỤC */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
            Công Cụ Phụ Lục
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => window.open(tool.url, "_blank")}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                >
                  <div className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 shadow-[0_0_20px_rgba(193,167,117,0.15)] hover:shadow-[0_0_30px_rgba(193,167,117,0.25)] transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className="w-6 h-6 text-[#3b2a0c]" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-[#3b2a0c] group-hover:text-[#f8e1a1] transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-[#3b2a0c] mb-2 group-hover:text-[#f8e1a1] transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-[#4a3511] text-sm">{tool.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* THÀNH VIÊN NHÓM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
            Thành Viên Nhóm 3
          </h2>
          <div className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(193,167,117,0.15)] max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Trần Giang Khánh", id: "SE182983" },
                { name: "Nguyễn Hoàng An", id: "HE176690" },
                { name: "Trương Tấn Dũng", id: "SE183087" },
                { name: "Nguyễn Hoàng Phát", id: "SE170421" },
              ].map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-[#f8f1da]/40 backdrop-blur-sm rounded-xl p-4 border border-[#b38b46]/40 hover:border-[#c1a775] transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] flex items-center justify-center shadow-sm">
                      <Users className="w-5 h-5 text-[#3b2a0c]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#3b2a0c] text-sm">
                        {member.name}
                      </h3>
                      <p className="text-[#b38b46] text-xs font-mono">
                        {member.id}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-[#4a3c23] text-sm italic">
                Nhóm nghiên cứu và phát triển ứng dụng học tập về giai đoạn khó
                khăn 1945-1946
              </p>
            </div>
          </div>
        </motion.div>

        {/* NÚT ĐIỀU HƯỚNG */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <motion.button
            onClick={onBack}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-[#b38b46] to-[#705629]
                       hover:from-[#c09757] hover:to-[#7c6138]
                       text-[#fff5dc] font-semibold rounded-full
                       border border-[#a68c5c]/60 shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại
          </motion.button>

          <motion.button
            onClick={onRestart}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f]
                       hover:from-[#e8cc8f] hover:to-[#d9b06a]
                       text-[#3b2a0c] font-semibold rounded-full
                       border border-[#c1a775]/60 shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Về trang chủ
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
