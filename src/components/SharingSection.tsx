'use client'

import { motion } from 'framer-motion'
// ✅ Thêm icon cho các nút mới
import {
  ArrowLeft, Share2, MessageCircle, Users, Heart, Star, ChevronLeft,
  Lightbulb, // Cho Gợi ý
  RotateCcw, // Cho Học lại
  RefreshCw // Cho Làm mới
} from 'lucide-react'

interface SharingSectionProps {
  onBack: () => void
  onNext?: () => void
  onRestart: () => void
  onGoToDashboard?: () => void
}

// ✅ Thêm 5 câu hỏi gợi ý
const discussionPrompts = [
  'Điều gì làm bạn ấn tượng nhất trong giai đoạn 1945-1946?',
  'Bạn học được bài học gì từ tinh thần "Tuần lễ Vàng"?',
  'Biện pháp "chống giặc dốt" có ý nghĩa thế nào với ngày nay?',
  'Bạn cảm nhận gì về đường lối ngoại giao "hòa để tiến" của Bác?',
  'Nếu ở trong hoàn cảnh đó, bạn nghĩ khó khăn nào là lớn nhất?'
]

export default function SharingSection({ onBack, onNext, onRestart, onGoToDashboard }: SharingSectionProps) {
  return (
    // ✅ 1. Sửa Nền
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] text-yellow-100 overflow-hidden">
      {/* ✅ 1. Sửa Hiệu ứng nền */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-yellow-200 rounded-full" // Đổi màu
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
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
            {/* ✅ 2. Sửa màu Tiêu đề & Icon */}
            <Share2 className="w-8 h-8 mr-3 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
              Chia Sẻ Cảm Nghĩ
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-yellow-200 max-w-4xl mx-auto">
            Hãy chia sẻ suy nghĩ và cảm nhận của bạn về hành trình tìm hiểu lịch sử
            vượt qua khó khăn 1945-1946
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* ✅ 2. Sửa Thẻ 1 */}
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30 text-center">
            <MessageCircle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-50 mb-2">Thảo Luận</h3>
            <p className="text-yellow-200 text-sm">Trao đổi ý kiến với bạn bè về những kiến thức đã học</p>
          </div>

          {/* ✅ 2. Sửa Thẻ 2 */}
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30 text-center">
            <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-50 mb-2">Cộng Đồng</h3>
            <p className="text-yellow-200 text-sm">Kết nối với cộng đồng yêu thích lịch sử</p>
          </div>

          {/* ✅ 2. Sửa Thẻ 3 */}
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30 text-center">
            <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-50 mb-2">Cảm Hứng</h3>
            <p className="text-yellow-200 text-sm">Chia sẻ cảm hứng và động lực từ những bài học lịch sử</p>
          </div>
        </motion.div>

        {/* Padlet Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          // ✅ Sửa style Thẻ Lớn
          className="bg-black/20 backdrop-blur-lg rounded-3xl p-8 border border-yellow-600/30 mb-12"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-50">Bảng Chia Sẻ Cộng Đồng</h2>
              <Star className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            <p className="text-yellow-200 mb-6">
              Hãy để lại suy nghĩ, cảm nhận hoặc những điều bạn học được từ hành trình này
            </p>
          </div>

          {/* ✅ 4. THÊM MỤC GỢI Ý (Optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <div className="bg-black/20 rounded-xl p-6 border border-yellow-600/30">
              <h3 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Gợi ý thảo luận:
              </h3>
              <ul className="space-y-2 text-sm text-yellow-200">
                {discussionPrompts.map((prompt, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* (Kết thúc mục gợi ý) */}

          {/* Padlet Embed Container */}
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-yellow-600/40 
               bg-gradient-to-br from-[#3b2408]/60 via-[#8b5e2a]/40 to-[#d2a679]/20
               shadow-[0_0_20px_rgba(214,168,91,0.3)] backdrop-blur-lg"
            >
              <div className="relative aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]">
                <iframe
                  src="https://padlet.com/embed/y5uig6hxw15xx3ce"
                  frameBorder="0"
                  allow="camera;microphone;geolocation;display-capture;clipboard-write"
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  title="Bảng chia sẻ cộng đồng"
                />
              </div>

              {/* Footer nhỏ hiển thị chữ "Powered by Padlet" (tuỳ chọn, có thể bỏ) */}
              <div className="text-center py-2 text-[12px] text-yellow-300/60 bg-black/30 border-t border-yellow-600/20">
                Made with ❤️ using Padlet
              </div>
            </motion.div>
          </div>

          {/* Instructions (Đã bị ẩn bởi mục Gợi Ý, nhưng tôi vẫn sửa style) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 text-center"
          >
            {/* ✅ 2. Sửa Hướng dẫn */}
            <div className="bg-black/20 rounded-xl p-6 border border-yellow-600/30">
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">Hướng dẫn chia sẻ:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-200">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Nhấp vào bảng Padlet để thêm bài viết mới</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Chia sẻ cảm nghĩ, kiến thức hoặc câu hỏi của bạn</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Tương tác với bài viết của những người khác</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          {/* ✅ Nút 'Quay lại' (style của bạn đã đúng) */}
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

          <div className="flex flex-wrap justify-center gap-4">
            {/* ✅ Nút 'Bảng điều khiển' (style của bạn đã đúng) */}
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

            {/* ✅ 3. Sửa Nút 'Học lại' (Chính) */}
            <button
              onClick={onRestart}
              className="flex items-center px-6 py-3 
               bg-gradient-to-r from-[#b98a3c] to-[#8b5e2a]
               hover:from-[#d2a34b] hover:to-[#9c622f]
               text-yellow-100 font-semibold rounded-full
               border border-[#e9c27c]
               shadow-[0_0_10px_rgba(233,194,124,0.3)]
               hover:shadow-[0_0_15px_rgba(233,194,124,0.5)]
               transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Học lại từ đầu
            </button>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          {/* ✅ Style này đã hợp theme, chỉ sửa text */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Cảm ơn bạn đã tham gia!</h3>
            <p className="text-yellow-200 max-w-2xl mx-auto">
              Hy vọng hành trình tìm hiểu về lịch sử vượt qua khó khăn 1945-1946 đã mang lại cho bạn
              những kiến thức bổ ích và cảm hứng. Hãy tiếp tục chia sẻ và lan tỏa những giá trị tốt đẹp này!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}