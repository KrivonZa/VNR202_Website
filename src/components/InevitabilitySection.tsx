"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Users,
  ChevronRight,
  ChevronLeft,
  Star,
  Award,
  Crown,
  BookOpen,
  Flag,
  Landmark,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import React from "react";

interface SignificanceFactor {
  id: string;
  title: string;
  description: string;
  details: string[];
  evidence: string[];
  icon: React.ElementType;
  color?: string;
}

const resultsAndSignificance: SignificanceFactor[] = [
  {
    id: "preserve-independence",
    title: "Giữ vững nền độc lập non trẻ",
    description:
      "Bảo vệ thành quả Cách mạng Tháng Tám trong hoàn cảnh cực kỳ hiểm nghèo",
    details: [
      'Vượt qua được giai đoạn "Ngàn cân treo sợi tóc"',
      "Không để mất nền độc lập vừa giành được",
      "Chống lại các thế lực thù địch từ nhiều phía",
      "Duy trì được chính quyền cách mạng",
    ],
    evidence: [
      "Chính quyền cách mạng được duy trì từ 1945-1946",
      "Không bị lật đổ dù áp lực rất lớn",
      "Dân tộc đoàn kết xung quanh chính quyền",
      "Chuẩn bị được lực lượng cho kháng chiến",
    ],
    icon: Flag,
  },
  {
    id: "build-institutions",
    title: "Xây dựng bộ máy nhà nước",
    description:
      "Thành lập được hệ thống chính quyền, hiến pháp, quân đội đầu tiên",
    details: [
      "Tổ chức Tổng tuyển cử đầu tiên (6/1/1946)",
      "Thành lập Chính phủ chính thức (2/3/1946)",
      "Ban hành Hiến pháp đầu tiên (9/11/1946)",
      "Xây dựng lực lượng vũ trang nhân dân",
    ],
    evidence: [
      "333 đại biểu Quốc hội được bầu",
      "Hồ Chí Minh làm Chủ tịch nước",
      "Hiến pháp dân chủ đầu tiên của Việt Nam",
      "Quân đội nhân dân được thành lập",
    ],
    icon: Landmark,
  },
  {
    id: "mobilize-people",
    title: "Huy động sức mạnh toàn dân",
    description:
      'Phát huy tinh thần "Tự lực – Đoàn kết – Hy sinh – Kiên cường"',
    details: [
      'Phong trào "Ngày đồng tâm" lan rộng',
      "Tuần lễ vàng thu được 370kg vàng",
      "Phong trào xóa mù chữ toàn quốc",
      "Tinh thần yêu nước, tự lực tự cường",
    ],
    evidence: [
      "2,5 triệu người được xóa mù chữ",
      "Sản lượng nông nghiệp tăng gấp 4 lần",
      "60 triệu đồng đóng góp cho quỹ quốc gia",
      "Toàn dân đoàn kết chống khó khăn",
    ],
    icon: Users,
  },
  {
    id: "foundation-resistance",
    title: "Nền móng cho kháng chiến",
    description:
      "Đặt nền móng vững chắc cho cuộc kháng chiến chống Pháp và xây dựng đất nước",
    details: [
      "Chuẩn bị về chính trị, tư tưởng",
      "Tạo được sức mạnh tinh thần toàn dân",
      "Có kinh nghiệm tổ chức và lãnh đạo",
      "Tích lũy được bài học quý báu",
    ],
    evidence: [
      "Kháng chiến chống Pháp (1946-1954) thành công",
      "Giải phóng miền Bắc, tiến tới thống nhất",
      "Kinh nghiệm xây dựng nhà nước dân chủ",
      "Bài học về sự nghiệp giải phóng dân tộc",
    ],
    icon: Award,
  },
];

interface ResultsSignificanceSectionProps {
  onNext: () => void;
  onBack: () => void;
  onGoToDashboard?: () => void;
}

export default function ResultsSignificanceSection({
  onNext,
  onBack,
  onGoToDashboard,
}: ResultsSignificanceSectionProps) {
  const [selectedFactor, setSelectedFactor] = useState<string | null>(null);
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
          Những Kết Quả Quan Trọng
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Các thành tựu chính đạt được trong giai đoạn 1945-1946
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {resultsAndSignificance.map((factor, index) => {
          const Icon = factor.icon;
          return (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                selectedFactor === factor.id ? "ring-4 ring-[#f9e4b7]/50" : ""
              }`}
              onClick={() =>
                setSelectedFactor(
                  selectedFactor === factor.id ? null : factor.id
                )
              }
            >
              <div className="mb-4">
                <Icon className="w-10 h-10 text-[#f8e1a1]" />
              </div>
              <h3 className="text-xl font-bold text-[#3b2a0c] mb-2">
                {factor.title}
              </h3>
              <p className="text-[#4a3511] text-sm">{factor.description}</p>
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
          Phân Tích Chi Tiết
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Đi sâu vào từng kết quả và bằng chứng lịch sử
        </p>
      </motion.div>

      <div className="space-y-8">
        {resultsAndSignificance.map((factor, index) => {
          const Icon = factor.icon;
          return (
            <motion.div
              key={factor.id}
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
                    {factor.title}
                  </h3>
                  <p className="text-[#4a3511] mb-4">{factor.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#3b2a0c] mb-3">
                    Nội dung chính:
                  </h4>
                  <div className="space-y-2">
                    {factor.details.map((detail, idx) => (
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
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#3b2a0c] mb-3">
                    Bằng chứng cụ thể:
                  </h4>
                  <div className="space-y-2">
                    {factor.evidence.map((evidence, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 + 0.2 }}
                        className="bg-[#f8f1da]/80 rounded-lg p-3 border border-[#b38b46]/40"
                      >
                        <div className="flex items-center text-[#3b2a0c] text-sm">
                          <Star className="w-4 h-4 mr-2 text-[#b38b46] flex-shrink-0" />
                          {evidence}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
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
          Ý Nghĩa Lịch Sử To Lớn
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Những bài học và giá trị cốt lõi đúc kết từ giai đoạn 1945-1946
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 mb-8 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <div className="text-center">
          <Crown className="w-16 h-16 text-[#f8e1a1] mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-[#ffdf80] mb-4">
            Bài Học Vô Giá Về Xây Dựng Đất Nước
          </h3>
          <p className="text-[#f3e3c3] text-lg max-w-4xl mx-auto">
            Giai đoạn 1945-1946 là &quot;lửa thử vàng&quot;, chứng minh sức mạnh
            của khối đại đoàn kết dân tộc và đường lối lãnh đạo sáng suốt, đặt
            nền móng cho mọi thắng lợi sau này.
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
            <Target className="w-10 h-10 text-[#f8e1a1]" />
          </div>
          <h3 className="text-xl font-bold text-[#ffdf80] mb-4">
            Khẳng Định Sức Mạnh Nội Lực
          </h3>
          <ul className="text-[#f3e3c3] space-y-2">
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Chứng minh đường lối &quot;Tự lực cánh sinh&quot; là hoàn toàn
              đúng đắn.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Khơi dậy và phát huy cao độ tinh thần yêu nước, đoàn kết của toàn
              dân.
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
            <BookOpen className="w-10 h-10 text-[#f8e1a1]" />
          </div>
          <h3 className="text-xl font-bold text-[#ffdf80] mb-4">
            Nền Tảng Cho Kháng Chiến
          </h3>
          <ul className="text-[#f3e3c3] space-y-2">
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Là cuộc &quot;tổng diễn tập&quot;, rèn luyện đầu tiên của chính
              quyền non trẻ.
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#b38b46] flex-shrink-0" />
              Tạo ra cơ sở vật chất và tinh thần để tự tin bước vào cuộc kháng
              chiến trường kỳ.
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
            Khẳng Định Của Lịch Sử
          </h3>
          <blockquote className="text-[#f3e3c3] text-lg italic font-medium max-w-4xl mx-auto">
            Thắng lợi trong giai đoạn 1945-1946 là một trong những thành tựu vĩ
            đại nhất của dân tộc, là minh chứng cho khát vọng độc lập và khả
            năng tự cường phi thường của nhân dân Việt Nam.
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
            Kết Quả và Ý Nghĩa Lịch Sử
          </h1>
          <p className="text-[#f4e3b7] text-xl italic">
            Những thành tựu đạt được và ý nghĩa to lớn của việc vượt qua khó
            khăn
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
              Bước trước
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
                  bg-gradient-to-r from-[#f8f1da] to-[#e8cc8f] 
                  hover:from-[#e8cc8f] hover:to-[#d9b06a]
                  text-[#3b2a0c] font-semibold rounded-full 
                  border border-[#c1a775]/60 shadow-md transition-all duration-300"
              >
                Hoàn thành
                <CheckCircle className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
