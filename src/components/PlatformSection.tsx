'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ArrowRight, BookOpen, Target, Users, Globe, Lightbulb } from 'lucide-react'

interface PlatformSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function PlatformSection({ onNext, onBack, onGoToDashboard }: PlatformSectionProps) {
  const socialPoints = [
    'Dân chúng được tự do tổ chức',
    'Nam nữ bình quyền',
    'Phổ thông giáo dục theo công nông hóa'
  ]

  const economicPoints = [
    'Thủ tiêu hết các thứ quốc trái, thâu hết sản nghiệp lớn của tư bản đế quốc chủ nghĩa Pháp để giao cho Chính phủ công nông binh quản lí',
    'Thâu hết ruộng đất của đế quốc chủ nghĩa chia cho dân cày nghèo, bỏ sưu thuế',
    'Mở mang công nông nghiệp',
    'Thi hành luật ngày làm tám giờ'
  ]

  const conclusionPoints = [
    'Phản ánh súc tích luận điểm cơ bản của cách mạng Việt Nam',
    'Thể hiện bản lĩnh chính trị độc lập, tự chủ, sáng tạo',
    'Đánh giá đúng mâu thuẫn cơ bản và chủ yếu của dân tộc Việt Nam',
    'Đánh giá đúng thái độ các giai tầng trong xã hội',
    'Thỏa mãn nhu cầu phát triển của thực tiễn cách mạng'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 mr-3 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cương lĩnh chính trị đầu tiên của Đảng
            </h1>
          </div>
          <p className="text-gray-300">
            Văn kiện nền tảng định hướng cách mạng Việt Nam (2/1930)
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <img
            src="/images/ccvt.png"
            alt="Chánh cương vắn tắt và Sách lược vắn tắt (2/1930)"
            className="w-full rounded-2xl border border-white/20 shadow-lg"
          />
          <p className="text-center text-gray-400 mt-3 italic">
            Chánh cương vắn tắt và Sách lược vắn tắt (2/1930)
          </p>
        </motion.div>

        {/* Mục tiêu chiến lược + Nhiệm vụ chủ yếu */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Mục tiêu chiến lược
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Mâu thuẫn giữa dân tộc Việt Nam với đế quốc ngày càng gay gắt cần phải giải quyết.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                ⇒ Xác định đường lối chiến lược của cách mạng Việt Nam: “chủ trương làm tư sản dân quyền c.m và thổ địa c.m để đi tới xã hội cộng sản”.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-red-400 mb-4">Nhiệm vụ chủ yếu trước mắt</h2>
            <div className="text-gray-200 leading-relaxed">
              “Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam hoàn toàn độc lập”.
            </div>
          </motion.div>
        </div>

        {/* Phương diện xã hội + kinh tế */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-green-400 mb-4">Phương diện xã hội</h3>
            <ul className="space-y-3 text-gray-200">
              {socialPoints.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">Phương diện kinh tế</h3>
            <ul className="space-y-3 text-gray-200">
              {economicPoints.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Lực lượng cách mạng */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-10"
        >
          <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Lực lượng cách mạng
          </h3>
          <p className="text-gray-200 mb-4">
            Phải đoàn kết công nhân, nông dân - đây là lực lượng cơ bản, trong đó giai cấp công nhân lãnh đạo; đồng thời chủ trương đoàn kết tất cả giai cấp, các lực lượng tiến bộ, yêu nước để tập trung chống đế quốc và tay sai.
          </p>
          <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-xl p-4 text-sm text-emerald-100">
            ⇒ Đảng “phải thu phục cho được đại bộ phận giai cấp mình ... đại bộ phận dân cày, ... hết sức liên lạc với tiểu tư sản, trí thức và trung nông ... để kéo họ đi vào phe vô sản giai cấp. Còn đối với bọn phú nông, trung, tiểu địa chủ và tư bản An Nam mà chưa rõ mặt phản c.m thì phải lợi dụng, ít lâu mới làm cho họ đứng trung lập”.
          </div>
        </motion.div>

        {/* Phương pháp, quốc tế, vai trò Đảng */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-orange-400 mb-3 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Phương pháp cách mạng
            </h3>
            <p className="text-gray-200">
              Bạo lực cách mạng của quần chúng, không thỏa hiệp trong bất cứ hoàn cảnh nào.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              Đoàn kết quốc tế
            </h3>
            <p className="text-gray-200">
              Cách mạng Việt Nam là một bộ phận của cách mạng vô sản thế giới.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-bold text-pink-400 mb-3">Vai trò lãnh đạo của Đảng</h3>
            <p className="text-gray-200">
              “Đảng là đội tiên phong của vô sản giai cấp phải thu phục cho được đại bộ phận giai cấp mình, phải làm cho giai cấp mình lãnh đạo được dân chúng”.
            </p>
          </motion.div>
        </div>

        {/* Kết luận */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-600/30 to-red-600/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">Kết luận</h3>
          <ul className="space-y-3 text-gray-200">
            {conclusionPoints.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-between items-center mt-12"
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
            Tiếp theo
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}