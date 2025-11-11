"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ArrowRight,
  BookOpen,
  Users,
  Globe,
  Lightbulb,
  Building,
  Shield,
  Banknote,
  Users2,
  Star,
} from "lucide-react";

interface PlatformSectionProps {
  onNext: () => void;
  onBack: () => void;
  onGoToDashboard?: () => void;
}

export default function PlatformSection({
  onNext,
  onBack,
  onGoToDashboard,
}: PlatformSectionProps) {
  const politicalChallenges = [
    "Chính quyền non trẻ, mới thành lập, chưa có kinh nghiệm quản lý",
    "Chưa có Quốc hội, Hiến pháp, các cơ quan hành chính còn rời rạc",
    'Đảng Cộng sản Đông Dương tự giải tán để tránh bị coi là "độc tài"',
    "Không có nước nào công nhận ngoại giao, kể cả Liên Xô hay Trung Quốc",
    "Nguy cơ bị lật đổ từ bên trong bởi các phe phái phản động",
  ];

  const militaryChallenges = [
    "Quân đội yếu, vũ khí thô sơ, chưa huấn luyện chính quy",
    "Các lực lượng vũ trang chỉ mới tổ chức sơ khai (dân quân tự vệ, Việt Minh)",
    "Không có hậu cần, không có đồng minh cung cấp vũ khí",
    "Bị bao vây quân sự từ cả Bắc lẫn Nam",
  ];

  const economicChallenges = [
    "Ngân khố quốc gia trống rỗng, chỉ còn khoảng 1,2 triệu đồng Đông Dương",
    "Đồng tiền mất giá, lạm phát cao, hàng hóa khan hiếm",
    "Sản xuất đình trệ do chiến tranh kéo dài và thiên tai",
    "Nạn đói năm 1945 vừa qua đi, hàng triệu người chết, ruộng đồng bỏ hoang",
    "Hệ thống thuế khóa và quản lý kinh tế cũ của Pháp - Nhật bị tan rã",
  ];

  const socialChallenges = [
    "Hơn 90% dân số mù chữ, do chính sách ngu dân của thực dân Pháp",
    "Tệ nạn xã hội, mê tín, phong kiến vẫn phổ biến",
    "Tâm lý hoang mang sau chiến tranh: dân đói, dân dốt, dân nghèo",
    "Các tàn dư chế độ cũ gây chia rẽ và bất ổn xã hội",
  ];

  return (
    <div className="min-h-screen text-[#2a1e0e] overflow-hidden relative">
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
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 mr-3 text-[#f8e1a1]" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,228,181,0.4)] leading-[1.2]">
              Khó Khăn Nội Tại
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[#f4e3b7] max-w-4xl mx-auto italic">
            Tình trạng trong nước sau khi giành được độc lập (1945-1946)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <div className="text-center">
            <div className="text-6xl text-[#ffdf80] mb-4">
              Ngàn Cân Treo Sợi Tóc
            </div>
            <h3 className="text-3xl font-bold text-[#ffdf80] mb-6 italic">
              Tình Thế &quot;Ngàn Cân Treo Sợi Tóc&quot;
            </h3>
            <p className="text-xl text-[#f3e3c3] max-w-4xl mx-auto leading-relaxed">
              &quot;Chỉ cần một sai lầm nhỏ cũng có thể khiến nền độc lập non
              trẻ sụp đổ&quot;
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Building className="w-6 h-6 mr-2 text-[#b38b46]" />
              Khó Khăn Chính Trị
            </h2>
            <ul className="space-y-3">
              {politicalChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start text-[#4a3511]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-[#b38b46]" />
              Khó Khăn Quân Sự
            </h2>
            <ul className="space-y-3">
              {militaryChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start text-[#4a3511]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Banknote className="w-6 h-6 mr-2 text-[#b38b46]" />
              Khó Khăn Kinh Tế - Tài Chính
            </h3>
            <ul className="space-y-3">
              {economicChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start text-[#4a3511]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users2 className="w-6 h-6 mr-2 text-[#b38b46]" />
              Khó Khăn Văn Hóa - Xã Hội
            </h3>
            <ul className="space-y-3">
              {socialChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start text-[#4a3511]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6 mb-12"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2 text-[#b38b46]" />
            Lực Lượng Cách Mạng
          </h3>
          <p className="text-[#4a3511] mb-4 leading-relaxed">
            Phải đoàn kết công nhân, nông dân - đây là lực lượng cơ bản, trong
            đó giai cấp công nhân lãnh đạo; đồng thời chủ trương đoàn kết tất cả
            giai cấp, các lực lượng tiến bộ, yêu nước để tập trung chống đế quốc
            và tay sai.
          </p>
          <div className="bg-[#f8f1da]/80 border border-[#b38b46] rounded-md px-4 py-3 shadow-inner">
            <p className="text-sm text-[#704e1c]">
              <strong>Lời Đảng:</strong> “Phải thu phục cho được đại bộ phận
              giai cấp mình ... đại bộ phận dân cày, ... hết sức liên lạc với
              tiểu tư sản, trí thức và trung nông ... để kéo họ đi vào phe vô
              sản giai cấp. Còn đối với bọn phú nông, trung, tiểu địa chủ và tư
              bản An Nam mà chưa rõ mặt phản c.m thì phải lợi dụng, ít lâu mới
              làm cho họ đứng trung lập”.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-[#b38b46]" />
              Phương Pháp Cách Mạng
            </h3>
            <p className="text-[#4a3511]">
              Bạo lực cách mạng của quần chúng, không thỏa hiệp trong bất cứ
              hoàn cảnh nào.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-[#b38b46]" />
              Đoàn Kết Quốc Tế
            </h3>
            <p className="text-[#4a3511]">
              Cách mạng Việt Nam là một bộ phận của cách mạng vô sản thế giới.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c] p-6"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <Star className="w-6 h-6 mr-2 text-[#b38b46]" />
              Vai Trò Lãnh Đạo Của Đảng
            </h3>
            <p className="text-[#4a3511]">
              “Đảng là đội tiên phong của vô sản giai cấp phải thu phục cho được
              đại bộ phận giai cấp mình, phải làm cho giai cấp mình lãnh đạo
              được dân chúng”.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-[#d8c7a2]/40 shadow-[0_0_25px_rgba(193,167,117,0.25)]"
        >
          <h3 className="text-2xl font-bold text-[#ffdf80] mb-6 text-center">
            Tổng Kết Tình Thế
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#f4e3b7] mb-3">
                Mức Độ Nghiêm Trọng:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start text-[#f3e3c3]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mọi mặt đời sống đều trong tình trạng nguy kịch
                </li>
                <li className="flex items-start text-[#f3e3c3]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Nền độc lập non trẻ có thể sụp đổ bất cứ lúc nào
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#f4e3b7] mb-3">
                Ý Nghĩa Lịch Sử:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start text-[#f3e3c3]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thử thách lớn nhất từ khi giành độc lập
                </li>
                <li className="flex items-start text-[#f3e3c3]">
                  <span className="w-2 h-2 bg-[#b38b46] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cần biện pháp cấp bách và khẩn trương
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-between items-center mt-12"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-[#b38b46] to-[#705629]
                         hover:from-[#c09757] hover:to-[#7c6138]
                         text-[#fff5dc] font-semibold rounded-full
                         border border-[#a68c5c]/60 shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2 text-[#fff3d0]" />
              Quay lại
            </button>

            {onGoToDashboard && (
              <button
                onClick={onGoToDashboard}
                className="flex items-center px-6 py-3 
               bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f]
               hover:from-[#e8cc8f] hover:to-[#d9b06a]
               text-[#3b2a0c] font-semibold rounded-full
               border border-[#c1a775]/60 shadow-md transition-all duration-300"
              >
                Bảng điều khiển
              </button>
            )}
          </div>

          <button
            onClick={onNext}
            className="flex items-center px-8 py-3 
             bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] 
             hover:from-[#e8cc8f] hover:to-[#d9b06a]
             text-[#3b2a0c] font-semibold rounded-full 
             border border-[#c1a775]/60 shadow-md transition-all duration-300"
          >
            Tiếp theo: Biện Pháp Vượt Qua Khó Khăn
            <ArrowRight className="w-5 h-5 ml-2 text-[#3b2a0c]" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
