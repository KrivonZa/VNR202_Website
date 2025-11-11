"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Globe,
  ChevronRight,
  ChevronLeft,
  Star,
  BookOpen,
  Shield,
  Building,
  Banknote,
  Wheat,
  CheckCircle,
  Flag,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import React from "react";

interface SolutionMeasure {
  id: string;
  title: string;
  description: string;
  details: string[];
  quote?: string;
  icon: React.ElementType;
  color?: string;
}

const solutionMeasures: SolutionMeasure[] = [
  {
    id: "fight-hunger",
    title: "Chống giặc đói",
    description: 'Phát động phong trào "Ngày đồng tâm" và tăng gia sản xuất',
    details: [
      'Phong trào "Ngày đồng tâm": mỗi người nhịn một bữa cơm để cứu đói',
      "Thành lập Hội Cứu đói (2/11/1945)",
      "Ủy ban tối cao tiếp tế và cứu tế (28/11/1945)",
      "Khuyến khích tăng gia sản xuất, khai hoang, trồng trọt",
      "Giảm 20% thuế ruộng đất, miễn thuế cho vùng thiên tai",
    ],
    quote:
      "Chỉ sau vài tháng, sản lượng hoa màu tăng gấp 4 lần, nạn đói được đẩy lùi",
    icon: Wheat,
  },
  {
    id: "fight-ignorance",
    title: "Chống giặc dốt",
    description: "Phát động phong trào xóa mù chữ toàn quốc",
    details: [
      "Thành lập Nha Bình dân học vụ (8/9/1945)",
      "Phát động phong trào xóa mù chữ trên toàn quốc",
      "Mở hàng chục nghìn lớp học",
      "Chỉ sau 1 năm có gần 2,5 triệu người biết đọc, biết viết",
      "Cuộc cách mạng giáo dục đầu tiên trong lịch sử hiện đại Việt Nam",
    ],
    quote:
      "Đây là cuộc cách mạng giáo dục đầu tiên trong lịch sử hiện đại Việt Nam",
    icon: BookOpen,
  },
  {
    id: "resist-invasion",
    title: "Chống giặc ngoại xâm",
    description: 'Ban hành Chỉ thị "Kháng chiến kiến quốc"',
    details: [
      'Chỉ thị "Kháng chiến kiến quốc" (25/11/1945)',
      "Kẻ thù chính: Thực dân Pháp xâm lược",
      'Khẩu hiệu: "Dân tộc trên hết – Tổ quốc trên hết"',
      "Củng cố chính quyền, chống xâm lược",
      "Bài trừ nội phản, cải thiện đời sống nhân dân",
    ],
    quote: '"Dân tộc trên hết – Tổ quốc trên hết" - Khẩu hiệu kháng chiến',
    icon: Shield,
  },
  {
    id: "strengthen-government",
    title: "Củng cố chính quyền cách mạng",
    description: "Tổ chức Tổng tuyển cử và thành lập Chính phủ chính thức",
    details: [
      "Tổ chức Tổng tuyển cử (6/1/1946)",
      "Bầu ra 333 đại biểu Quốc hội",
      "Chính phủ chính thức thành lập (2/3/1946)",
      "Hồ Chí Minh làm Chủ tịch",
      "Hiến pháp đầu tiên (9/11/1946) ra đời",
    ],
    quote: "Bản hiến pháp dân chủ đầu tiên của Việt Nam",
    icon: Building,
  },
  {
    id: "financial-solution",
    title: 'Giải quyết khó khăn tài chính - "Tuần lễ vàng"',
    description: "Kêu gọi toàn dân đóng góp cho Quỹ Độc lập và Quỹ Quốc phòng",
    details: [
      "Thu được 370kg vàng",
      "20 triệu đồng cho Quỹ Độc lập",
      "40 triệu đồng cho Quỹ bảo vệ Tổ quốc",
      "Biểu tượng của tinh thần đoàn kết, yêu nước",
      "Thể hiện tinh thần tự lực của nhân dân Việt Nam",
    ],
    quote:
      "Biểu tượng của tinh thần đoàn kết, yêu nước, tự lực của nhân dân Việt Nam",
    icon: Banknote,
  },
  {
    id: "flexible-diplomacy",
    title: "Đường lối ngoại giao mềm dẻo",
    description: 'Nhân nhượng có nguyên tắc để tránh thế "một cổ hai tròng"',
    details: [
      'Với quân Tưởng: "Hoa – Việt thân thiện"',
      "Nhượng bộ kinh tế để giữ hòa bình",
      'Với Pháp: "Hòa để tiến" – nhân nhượng có nguyên tắc',
      "Ký Hiệp định Sơ bộ 6/3/1946 và Tạm ước 14/9/1946",
      "Kéo dài thời gian chuẩn bị cho kháng chiến lâu dài",
    ],
    quote:
      '"Hòa để tiến" - nhân nhượng có nguyên tắc, để tránh thế "một cổ hai tròng"',
    icon: Globe,
  },
];

interface SolutionMeasuresSectionProps {
  onNext: () => void;
  onBack: () => void;
  onGoToDashboard?: () => void;
}

export default function SolutionMeasuresSection({
  onNext,
  onBack,
  onGoToDashboard,
}: SolutionMeasuresSectionProps) {
  const [selectedSignificance, setSelectedSignificance] = useState<
    string | null
  >(null);
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const views = ["Tổng quan", "Chi tiết", "Kết luận"];

  const renderOverview = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
          6 Nhiệm Vụ Cấp Bách Của Chính Phủ
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Biện pháp ứng phó và vượt qua những khó khăn sau ngày giành độc lập
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionMeasures.map((measure, index) => {
          const Icon = measure.icon;
          return (
            <motion.div
              key={measure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                selectedSignificance === measure.id
                  ? "ring-4 ring-[#f9e4b7]/50"
                  : ""
              }`}
              onClick={() =>
                setSelectedSignificance(
                  selectedSignificance === measure.id ? null : measure.id
                )
              }
            >
              <div className="mb-4">
                <Icon className="w-10 h-10 text-[#f8e1a1]" />
              </div>
              <h3 className="text-xl font-bold text-[#3b2a0c] mb-2">
                {measure.title}
              </h3>
              <p className="text-[#4a3511] text-sm">{measure.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderDetails = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
          Chi Tiết Các Biện Pháp
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Phân tích sâu về 6 nhiệm vụ cấp bách (1945-1946)
        </p>
      </motion.div>

      <div className="space-y-8">
        {solutionMeasures.map((measure, index) => {
          const Icon = measure.icon;
          return (
            <motion.div
              key={measure.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 pt-1">
                  <Icon className="w-10 h-10 text-[#f8e1a1]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3b2a0c] mb-2">
                    {measure.title}
                  </h3>
                  <p className="text-[#4a3511] mb-4">{measure.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {measure.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="bg-[#f8f1da]/80 rounded-lg p-3 border border-[#b38b46]/40"
                  >
                    <div className="flex items-center text-[#3b2a0c] text-sm">
                      <ChevronRight className="w-4 h-4 mr-2 text-[#b38b46] flex-shrink-0" />
                      {detail}
                    </div>
                  </motion.div>
                ))}
              </div>

              {measure.quote && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="bg-[#f8f1da]/80 rounded-lg p-4 border-l-4 border-[#b38b46] shadow-inner"
                >
                  <p className="text-[#704e1c] italic text-sm">
                    {measure.quote}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderConclusion = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
          Kết Quả: Vượt Qua Cơn Hiểm Nghèo
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Những thắng lợi to lớn từ các biện pháp cấp bách (1945-1946)
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 mb-8 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-[#f8e1a1] mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-[#ffdf80] mb-4">
            Bảo Vệ Thành Công Chính Quyền
          </h3>
          <p className="text-[#f3e3c3] text-lg max-w-4xl mx-auto">
            Chỉ trong vòng 1 năm, nước Việt Nam Dân chủ Cộng hòa non trẻ đã vượt
            qua tình thế &quot;ngàn cân treo sợi tóc&quot;, chứng minh sức sống
            mãnh liệt của một dân tộc vừa giành được độc lập.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 shadow-[0_0_20px_rgba(193,167,117,0.15)]"
        >
          <div className="mb-4">
            <TrendingUp className="w-10 h-10 text-[#f8e1a1]" />
          </div>
          <h3 className="text-xl font-bold text-[#ffdf80] mb-4">
            Ổn định Đời sống Nhân dân
          </h3>
          <ul className="text-[#f3e3c3] space-y-2">
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Nạn đói được đẩy lùi về cơ bản.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Hơn 2.5 triệu người thoát nạn mù chữ.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Ngân quỹ quốc gia được xây dựng nhờ &quot;Tuần lễ Vàng&quot;.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 shadow-[0_0_20px_rgba(193,167,117,0.15)]"
        >
          <div className="mb-4">
            <Flag className="w-10 h-10 text-[#f8e1a1]" />
          </div>
          <h3 className="text-xl font-bold text-[#ffdf80] mb-4">
            Củng Cố Vị Thế Đất Nước
          </h3>
          <ul className="text-[#f3e3c3] space-y-2">
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Xây dựng được nền móng chính quyền (Quốc hội, Hiến pháp).
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Ngoại giao khôn khéo, đuổi được 20 vạn quân Tưởng về nước.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Kéo dài thời gian hòa hoãn với Pháp để chuẩn bị lực lượng.
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-[#f8f1da]/20 backdrop-blur-md rounded-xl p-8 mt-8 border border-[#d8c7a2]/40 shadow-[0_0_25px_rgba(193,167,117,0.25)]"
      >
        <div className="text-center">
          <Star className="w-10 h-10 mx-auto mb-4 text-[#f8e1a1]" />
          <h3 className="text-2xl font-bold text-[#ffdf80] mb-4">
            Ý Nghĩa To Lớn
          </h3>
          <blockquote className="text-[#f3e3c3] text-lg italic font-medium max-w-4xl mx-auto">
            Những thành tựu này là tiền đề quan trọng, tạo nên sức mạnh vật chất
            và tinh thần để dân tộc Việt Nam tự tin bước vào cuộc Kháng chiến
            toàn quốc chống Thực dân Pháp.
          </blockquote>
        </div>
      </motion.div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 0:
        return renderOverview();
      case 1:
        return renderDetails();
      case 2:
        return renderConclusion();
      default:
        return renderOverview();
    }
  };

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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,228,181,0.4)]">
            Biện Pháp Vượt Qua Khó Khăn
          </h1>
          <p className="text-[#f4e3b7] text-xl italic">
            6 nhiệm vụ cấp bách được xác định ngay sau ngày độc lập (3/9/1945)
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-[#f8f1da]/10 backdrop-blur-md rounded-full p-2 border border-[#d8c7a2]/40">
            {views.map((view, index) => (
              <button
                key={index}
                onClick={() => setCurrentView(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentView === index
                    ? "bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] text-[#3b2a0c] shadow-md"
                    : "text-[#f4e3b7] hover:text-[#ffdf80] hover:bg-[#f8f1da]/20"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView(Math.max(0, currentView - 1))}
              disabled={currentView === 0}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentView === 0
                  ? "bg-gray-500/50 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#b38b46] to-[#705629] hover:from-[#c09757] hover:to-[#7c6138] text-[#fff5dc] border border-[#a68c5c]/60 shadow-md"
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Phần trước
            </button>

            {currentView < views.length - 1 ? (
              <button
                onClick={() => setCurrentView(currentView + 1)}
                className="flex items-center px-8 py-3 
                  bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] 
                  hover:from-[#e8cc8f] hover:to-[#d9b06a]
                  text-[#3b2a0c] font-semibold rounded-full 
                  border border-[#c1a775]/60 shadow-md transition-all duration-300"
              >
                Phần tiếp
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={onNext}
                className="flex items-center px-8 py-3 
                  bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] 
                  hover:from-[#e8cc8f] hover:to-[#d9b06a]
                  text-[#3b2a0c] font-semibold rounded-full 
                  border border-[#c1a775]/60 shadow-md transition-all duration-300"
              >
                Tiếp theo: Kết quả và ý nghĩa lịch sử
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
