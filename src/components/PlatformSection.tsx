'use client'

import { motion } from 'framer-motion'
import {
  ChevronLeft, ArrowRight, BookOpen, Target, Users, Globe, Lightbulb,
  Building, // Thêm icon Chính trị
  Shield, // Thêm icon Quân sự
  Banknote, // Thêm icon Kinh tế
  Users2, // Thêm icon Xã hội
  Star
} from 'lucide-react'

interface PlatformSectionProps {
  onNext: () => void
  onBack: () => void
  onGoToDashboard?: () => void
}

export default function PlatformSection({ onNext, onBack, onGoToDashboard }: PlatformSectionProps) {
  const politicalChallenges = [
    'Chính quyền non trẻ, mới thành lập, chưa có kinh nghiệm quản lý',
    'Chưa có Quốc hội, Hiến pháp, các cơ quan hành chính còn rời rạc',
    'Đảng Cộng sản Đông Dương tự giải tán để tránh bị coi là "độc tài"',
    'Không có nước nào công nhận ngoại giao, kể cả Liên Xô hay Trung Quốc',
    'Nguy cơ bị lật đổ từ bên trong bởi các phe phái phản động'
  ]

  const militaryChallenges = [
    'Quân đội yếu, vũ khí thô sơ, chưa huấn luyện chính quy',
    'Các lực lượng vũ trang chỉ mới tổ chức sơ khai (dân quân tự vệ, Việt Minh)',
    'Không có hậu cần, không có đồng minh cung cấp vũ khí',
    'Bị bao vây quân sự từ cả Bắc lẫn Nam'
  ]

  const economicChallenges = [
    'Ngân khố quốc gia trống rỗng, chỉ còn khoảng 1,2 triệu đồng Đông Dương',
    'Đồng tiền mất giá, lạm phát cao, hàng hóa khan hiếm',
    'Sản xuất đình trệ do chiến tranh kéo dài và thiên tai',
    'Nạn đói năm 1945 vừa qua đi, hàng triệu người chết, ruộng đồng bỏ hoang',
    'Hệ thống thuế khóa và quản lý kinh tế cũ của Pháp - Nhật bị tan rã'
  ]

  const socialChallenges = [
    'Hơn 90% dân số mù chữ, do chính sách ngu dân của thực dân Pháp',
    'Tệ nạn xã hội, mê tín, phong kiến vẫn phổ biến',
    'Tâm lý hoang mang sau chiến tranh: dân đói, dân dốt, dân nghèo',
    'Các tàn dư chế độ cũ gây chia rẽ và bất ổn xã hội'
  ]

  return (
    // ✅ 1. Thay đổi Nền và Màu chữ mặc định
    <div className="min-h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] text-yellow-100 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center mb-4">
            {/* ✅ 2. Đồng bộ Icon và Tiêu đề */}
            <BookOpen className="w-8 h-8 mr-3 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
              Những Khó Khăn Nội Tại
            </h1>
          </div>
          <p className="text-yellow-200">
            Tình trạng trong nước sau khi giành được độc lập (1945-1946)
          </p>
        </motion.div>

        {/* Image / Highlight Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          {/* ✅ Giữ style đỏ-vàng này, rất hợp. Chỉ sửa viền và text */}
          <div className="text-center bg-gradient-to-r from-red-900/50 to-yellow-900/50 backdrop-blur-lg rounded-2xl p-8 border border-yellow-600/50">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">Tình Thế &quot;Ngàn Cân Treo Sợi Tóc&quot;</h3>
            <p className="text-xl text-yellow-200 italic">
              &quot;Chỉ cần một sai lầm nhỏ cũng có thể khiến nền độc lập non trẻ sụp đổ&quot;
            </p>
          </div>
        </motion.div>

        {/* Mục tiêu chiến lược + Nhiệm vụ chủ yếu */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h2 className="text-2xl font-bold text-yellow-50 mb-4 flex items-center">
              <Building className="w-6 h-6 mr-2" />
              Khó Khăn Chính Trị
            </h2>
            <ul className="space-y-3 text-yellow-200">
              {politicalChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h2 className="text-2xl font-bold text-yellow-50 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Khó Khăn Quân Sự
            </h2>
            <ul className="space-y-3 text-yellow-200">
              {militaryChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Khó khăn kinh tế + xã hội */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h3 className="text-xl font-bold text-yellow-50 mb-4 flex items-center">
              <Banknote className="w-6 h-6 mr-2" />
              Khó Khăn Kinh Tế - Tài Chính
            </h3>
            <ul className="space-y-3 text-yellow-200">
              {economicChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h3 className="text-xl font-bold text-yellow-50 mb-4 flex items-center">
              <Users2 className="w-6 h-6 mr-2" />
              Khó Khăn Văn Hóa - Xã Hội
            </h3>
            <ul className="space-y-3 text-yellow-200">
              {socialChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
          // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
          className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30 mb-10"
        >
          {/* ✅ 3. Đồng bộ màu sắc */}
          <h3 className="text-xl font-bold text-yellow-50 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Lực lượng cách mạng
          </h3>
          <p className="text-yellow-200 mb-4">
            Phải đoàn kết công nhân, nông dân - đây là lực lượng cơ bản, trong đó giai cấp công nhân lãnh đạo; đồng thời chủ trương đoàn kết tất cả giai cấp, các lực lượng tiến bộ, yêu nước để tập trung chống đế quốc và tay sai.
          </p>
          {/* ✅ 3. Đồng bộ màu sắc (cho khối quote) */}
          <div className="bg-black/20 border border-yellow-600/40 rounded-xl p-4 text-sm text-yellow-100">
            ⇒ Đảng “phải thu phục cho được đại bộ phận giai cấp mình ... đại bộ phận dân cày, ... hết sức liên lạc với tiểu tư sản, trí thức và trung nông ... để kéo họ đi vào phe vô sản giai cấp. Còn đối với bọn phú nông, trung, tiểu địa chủ và tư bản An Nam mà chưa rõ mặt phản c.m thì phải lợi dụng, ít lâu mới làm cho họ đứng trung lập”.
          </div>
        </motion.div>

        {/* Phương pháp, quốc tế, vai trò Đảng */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h3 className="text-xl font-bold text-yellow-50 mb-3 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Phương pháp cách mạng
            </h3>
            <p className="text-yellow-200">
              Bạo lực cách mạng của quần chúng, không thỏa hiệp trong bất cứ hoàn cảnh nào.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h3 className="text-xl font-bold text-yellow-50 mb-3 flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              Đoàn kết quốc tế
            </h3>
            <p className="text-yellow-200">
              Cách mạng Việt Nam là một bộ phận của cách mạng vô sản thế giới.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            // ✅ 3. Áp dụng style Thẻ (Card) thống nhất
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
          >
            {/* ✅ 3. Đồng bộ màu sắc */}
            <h3 className="text-xl font-bold text-yellow-50 mb-3 flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Vai trò lãnh đạo của Đảng
            </h3>
            <p className="text-yellow-200">
              “Đảng là đội tiên phong của vô sản giai cấp phải thu phục cho được đại bộ phận giai cấp mình, phải làm cho giai cấp mình lãnh đạo được dân chúng”.
            </p>
          </motion.div>
        </div>

        {/* Tổng kết về tình thế khó khăn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          // ✅ THAY ĐỔI: Áp dụng style thẻ thống nhất (bỏ gradient đỏ)
          className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30"
        >
          {/* ✅ THAY ĐỔI: Đổi màu tiêu đề */}
          <h3 className="text-2xl font-bold text-yellow-50 mb-4">Tổng Kết Tình Thế</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              {/* ✅ THAY ĐỔI: Đổi màu tiêu đề phụ */}
              <h4 className="text-lg font-semibold text-yellow-100 mb-3">Mức độ nghiêm trọng:</h4>
              <ul className="space-y-2 text-yellow-200">
                <li className="flex items-start">
                  {/* ✅ THAY ĐỔI: Đổi màu bullet point */}
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mọi mặt đời sống đều trong tình trạng nguy kịch
                </li>
                <li className="flex items-start">
                  {/* ✅ THAY ĐỔI: Đổi màu bullet point */}
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Nền độc lập non trẻ có thể sụp đổ bất cứ lúc nào
                </li>
              </ul>
            </div>
            <div>
              {/* ✅ THAY ĐỔI: Đổi màu tiêu đề phụ */}
              <h4 className="text-lg font-semibold text-yellow-100 mb-3">Ý nghĩa lịch sử:</h4>
              <ul className="space-y-2 text-yellow-200">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thử thách lớn nhất từ khi giành độc lập
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cần biện pháp cấp bách và khẩn trương
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-4">
            {/* ✅ 5. Áp dụng style Nút (Button) */}
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

          {/* ✅ 5. Áp dụng style Nút (Button) */}
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
            Tiếp theo: Biện Pháp Vượt Qua Khó Khăn
            <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}