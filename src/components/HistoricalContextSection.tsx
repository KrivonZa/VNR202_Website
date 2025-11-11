"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, AlertTriangle, ChevronLeft } from "lucide-react";

interface HistoricalContextSectionProps {
  onNext: () => void;
  onBack: () => void;
  onGoToDashboard?: () => void;
}

export default function HistoricalContextSection({
  onNext,
  onBack,
  onGoToDashboard,
}: HistoricalContextSectionProps) {
  const vietnamSituation = [
    {
      name: "Nước Việt Nam Dân Chủ Cộng Hòa Ra Đời",
      date: "2/9/1945",
      description: "Nhà nước công nông đầu tiên ở Đông Nam Á",
      status: "Độc lập nhưng vô cùng mong manh",
    },
    {
      name: "Chưa Được Quốc Tế Công Nhận",
      date: "Sau 2/9/1945",
      description: "Không có nước nào công nhận ngoại giao",
      status: "Cô lập về mặt quốc tế",
    },
    {
      name: 'Tình Thế "Ngàn Cân Treo Sợi Tóc"',
      date: "1945-1946",
      description: "Chính quyền mới phải đối diện thử thách nghiêm trọng",
      status: "Mọi mặt của đời sống đều nguy kịch",
    },
  ];

  return (
    <div className="min-h-screen text-[#2a1e0e] overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] mix-blend-multiply" />

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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 mr-3 text-[#f8e1a1]" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,228,181,0.4)]">
              Bối Cảnh Lịch Sử
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[#f4e3b7] max-w-4xl mx-auto italic">
            Tình hình trong nước và quốc tế sau năm 1945
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[rgba(255,250,240,0.08)] backdrop-blur-md rounded-2xl p-8 mb-12 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 mr-3 text-[#f4e3b7]" />
            <h2 className="text-3xl font-bold text-[#f9e4b7]">
              Tình Hình Thế Giới Sau CTTG Thứ Hai
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-[#f8f2df]">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ffebc4]">
                Trật tự thế giới mới
              </h3>
              <ul className="space-y-3">
                <li>
                  🌍 Chiến tranh kết thúc (1945) - phe Đồng minh chiến thắng
                </li>
                <li>
                  💠 Liên Xô, Hoa Kỳ, Anh, Pháp, Trung Quốc chi phối thế giới
                </li>
                <li>🔥 Phong trào giải phóng dân tộc phát triển mạnh mẽ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ffebc4]">
                Chủ nghĩa thực dân
              </h3>
              <ul className="space-y-3">
                <li>
                  ⚔ Chủ nghĩa thực dân suy yếu nhưng vẫn tìm cách tái chiếm
                </li>
                <li>🇫🇷 Pháp nuôi tham vọng trở lại Việt Nam</li>
                <li>
                  🇬🇧 Anh và Tưởng Giới Thạch có ảnh hưởng lớn ở Đông Nam Á
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffdf80] drop-shadow-[0_0_10px_rgba(255,215,100,0.5)]">
            Tình Hình Việt Nam Sau Cách Mạng Tháng Tám
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {vietnamSituation.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl shadow-lg text-[#3b2a0c]
                 hover:scale-[1.03] transition-transform duration-300 
                 flex flex-col items-center text-center p-6 min-h-[310px]"
              >
                <p className="text-lg font-semibold text-[#3b2a0c] mb-2">
                  🕰 {situation.date}
                </p>
                <h3 className="text-lg font-bold mb-3">{situation.name}</h3>
                <p className="text-base text-[#4a3511] leading-relaxed mb-4">
                  {situation.description}
                </p>
                <div className="bg-[#f8f1da]/80 border border-[#b38b46] rounded-md px-3 py-2 shadow-inner w-[90%]">
                  <p className="text-sm text-[#704e1c]">
                    ⚠ <strong>Tình trạng:</strong> {situation.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 mb-12 border border-[#d8c7a2]/40 shadow-[0_0_25px_rgba(193,167,117,0.25)]"
        >
          <div className="text-center">
            <div className="text-6xl text-[#ffdf80] mb-4">&quot;</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffdf80] mb-6 italic">
              Ngàn Cân Treo Sợi Tóc
            </h2>
            <p className="text-xl text-[#f3e3c3] max-w-4xl mx-auto leading-relaxed">
              Cụm từ này phản ánh chính xác mức độ hiểm nghèo của Việt Nam sau
              ngày giành độc lập: Mọi mặt của đời sống chính trị, kinh tế, xã
              hội, quốc phòng đều trong tình trạng nguy kịch — chỉ cần một sai
              lầm nhỏ cũng có thể khiến nền độc lập non trẻ sụp đổ.
            </p>
            <div className="text-6xl text-[#ffdf80] rotate-180">&quot;</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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
                📊 Bảng điều khiển
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
            Tiếp theo: Dòng thời gian
            <ArrowRight className="w-5 h-5 ml-2 text-[#3b2a0c]" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
