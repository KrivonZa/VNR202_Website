"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  MessageCircle,
  Users,
  Heart,
  Star,
  ChevronLeft,
  Lightbulb,
  RotateCcw,
  RefreshCw,
} from "lucide-react";

interface SharingSectionProps {
  onBack: () => void;
  onNext?: () => void;
  onRestart: () => void;
  onGoToDashboard?: () => void;
}

const discussionPrompts = [
  "Điều gì làm bạn ấn tượng nhất trong giai đoạn 1945-1946?",
  'Bạn học được bài học gì từ tinh thần "Tuần lễ Vàng"?',
  'Biện pháp "chống giặc dốt" có ý nghĩa thế nào với ngày nay?',
  'Bạn cảm nhận gì về đường lối ngoại giao "hòa để tiến" của Bác?',
  "Nếu ở trong hoàn cảnh đó, bạn nghĩ khó khăn nào là lớn nhất?",
];

export default function SharingSection({
  onBack,
  onNext,
  onRestart,
  onGoToDashboard,
}: SharingSectionProps) {
  return (
    <div className="min-h-screen relative overflow-hidden text-[#2a1e0e]">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Share2 className="w-10 h-10 mr-3 text-[#f8e1a1]" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,228,181,0.4)]">
              Chia Sẻ Cảm Nghĩ
            </h1>
          </div>
          <p className="text-[#f4e3b7] text-xl md:text-2xl max-w-4xl mx-auto italic">
            Hãy chia sẻ suy nghĩ và cảm nhận của bạn về hành trình tìm hiểu lịch
            sử vượt qua khó khăn 1945-1946
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 text-center shadow-[0_0_20px_rgba(193,167,117,0.15)]">
            <MessageCircle className="w-12 h-12 text-[#f8e1a1] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#3b2a0c] mb-2">Thảo Luận</h3>
            <p className="text-[#4a3511] text-sm">
              Trao đổi ý kiến với bạn bè về những kiến thức đã học
            </p>
          </div>

          <div className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 text-center shadow-[0_0_20px_rgba(193,167,117,0.15)]">
            <Users className="w-12 h-12 text-[#f8e1a1] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#3b2a0c] mb-2">Cộng Đồng</h3>
            <p className="text-[#4a3511] text-sm">
              Kết nối với cộng đồng yêu thích lịch sử
            </p>
          </div>

          <div className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 text-center shadow-[0_0_20px_rgba(193,167,117,0.15)]">
            <Heart className="w-12 h-12 text-[#f8e1a1] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#3b2a0c] mb-2">Cảm Hứng</h3>
            <p className="text-[#4a3511] text-sm">
              Chia sẻ cảm hứng và động lực từ những bài học lịch sử
            </p>
          </div>
        </motion.div>

        {/* Padlet Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-3xl p-8 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(193,167,117,0.15)] mb-12"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-7 h-7 text-[#f8e1a1] mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
                Bảng Chia Sẻ Cộng Đồng
              </h2>
              <Star className="w-7 h-7 text-[#f8e1a1] ml-2" />
            </div>
            <p className="text-[#4a3511] mb-6 italic">
              Hãy để lại suy nghĩ, cảm nhận hoặc những điều bạn học được từ hành
              trình này
            </p>
          </div>

          {/* Gợi ý thảo luận */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <div className="bg-[#f8f1da]/40 backdrop-blur-sm rounded-xl p-6 border border-[#b38b46]/40">
              <h3 className="text-lg font-bold text-[#3b2a0c] mb-4 flex items-center">
                <Lightbulb className="w-6 h-6 mr-2 text-[#b8860b]" />
                Gợi ý thảo luận:
              </h3>
              <ul className="space-y-3 text-sm text-[#4a3511]">
                {discussionPrompts.map((prompt, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-[#b8860b] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span className="leading-relaxed">{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Padlet Embed Container */}
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#b38b46]/60 shadow-[0_0_30px_rgba(193,167,117,0.2)]"
            >
              <div className="relative aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-[#f8f1da]/10">
                <iframe
                  src="https://padlet.com/embed/y5uig6hxw15xx3ce"
                  frameBorder="0"
                  allow="camera;microphone;geolocation;display-capture;clipboard-write"
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  title="Bảng chia sẻ cộng đồng"
                />
              </div>
              <div className="text-center py-2 text-xs text-[#ffc664] bg-[#f8f1da]/30 border-t border-[#b38b46]/30 font-medium">
                Made with love using Padlet
              </div>
            </motion.div>
          </div>

          {/* Hướng dẫn */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8"
          >
            <div className="bg-[#f8f1da]/40 backdrop-blur-sm rounded-xl p-6 border border-[#b38b46]/40">
              <h3 className="text-lg font-bold text-[#3b2a0c] mb-4">
                Hướng dẫn chia sẻ:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-[#4a3511]">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#b8860b] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Nhấp vào bảng Padlet để thêm bài viết mới</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#b8860b] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Chia sẻ cảm nghĩ, kiến thức hoặc câu hỏi của bạn</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#b8860b] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Tương tác với bài viết của những người khác</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#b8860b] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Tạo nên một cộng đồng học tập tích cực</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
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
            <ChevronLeft className="w-5 h-5 mr-2" />
            Quay lại
          </motion.button>

          <div className="flex flex-wrap justify-center gap-4">
            {onGoToDashboard && (
              <motion.button
                onClick={onGoToDashboard}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f]
                           hover:from-[#e8cc8f] hover:to-[#d9b06a]
                           text-[#3b2a0c] font-semibold rounded-full
                           border border-[#c1a775]/60 shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bảng điều khiển
              </motion.button>
            )}

            <motion.button
              onClick={onRestart}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f]
                         hover:from-[#e8cc8f] hover:to-[#d9b06a]
                         text-[#3b2a0c] font-semibold rounded-full
                         border border-[#c1a775]/60 shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Học lại từ đầu
            </motion.button>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="bg-[#f8f1da]/30 backdrop-blur-md rounded-2xl p-8 border border-[#b38b46]/50 max-w-3xl mx-auto shadow-[0_0_30px_rgba(193,167,117,0.2)]">
            <h3 className="text-2xl font-bold text-[#ffd15e] mb-4">
              Cảm ơn bạn đã tham gia!
            </h3>
            <p className="text-[#4a3511] max-w-2xl mx-auto leading-relaxed">
              Hy vọng hành trình tìm hiểu về lịch sử vượt qua khó khăn 1945-1946
              đã mang lại cho bạn những kiến thức bổ ích và cảm hứng. Hãy tiếp
              tục chia sẻ và lan tỏa những giá trị tốt đẹp này!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
