"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  MapPin,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Anchor,
  ShieldAlert,
  Globe,
  Map,
  AlertTriangle,
  Building,
  Banknote,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import React from "react";

interface HistoricalContext {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  color: string;
}

interface PredecessorOrg {
  id: string;
  name: string;
  foundedDate: string;
  founder: string;
  location: string;
  description: string;
  color: string;
}

const externalChallenges: HistoricalContext[] = [
  {
    id: "chinese-forces",
    title: "Quân Tưởng Giới Thạch (Phía Bắc)",
    description: "20 vạn quân tràn vào với danh nghĩa giải giáp quân Nhật",
    details: [
      "Đi cùng các tổ chức Việt Quốc, Việt Cách",
      "Âm mưu lật đổ chính quyền cách mạng",
      "Kiểm soát các tuyến giao thông quan trọng",
      "Uy hiếp an ninh chính trị Bắc Bộ",
    ],
    icon: Users,
    color: "from-[#b38b46] to-[#705629]",
  },
  {
    id: "british-forces",
    title: "Quân Anh (Phía Nam)",
    description: "1 vạn quân kéo vào, tạo điều kiện cho Pháp quay lại",
    details: [
      "Xâm lược Nam Bộ trước tiên",
      "Hỗ trợ Pháp tái chiếm Đông Dương",
      "Kiểm soát các cảng biển quan trọng",
      "Thành lập chính quyền tay sai",
    ],
    icon: Anchor,
    color: "from-[#c09757] to-[#7c6138]",
  },
  {
    id: "japanese-forces",
    title: "Quân Nhật (Toàn quốc)",
    description: "Hơn 6 vạn quân vẫn chưa giải giáp hoàn toàn",
    details: [
      "Tiềm ẩn nguy cơ bạo loạn bất cứ lúc nào",
      "Vẫn kiểm soát một số khu vực",
      "Có thể liên kết với các thế lực thù địch",
      "Tạo bất ổn về an ninh quốc phòng",
    ],
    icon: ShieldAlert,
    color: "from-[#d9b06a] to-[#b38b46]",
  },
];

const invasionForces: PredecessorOrg[] = [
  {
    id: "chinese-nationalist-army",
    name: "20 vạn quân Tưởng Giới Thạch",
    foundedDate: "Tháng 9/1945",
    founder: "Chính quyền Trung Hoa Dân Quốc",
    location: "Bắc Bộ (vĩ tuyến 16 trở lên)",
    description:
      "Quân đội Trung Quốc Quốc dân đảng với danh nghĩa giải giáp quân Nhật nhưng thực chất muốn kiểm soát Việt Nam",
    color: "from-[#b38b46] to-[#705629]",
  },
  {
    id: "british-army",
    name: "1 vạn quân Anh",
    foundedDate: "Tháng 9/1945",
    founder: "Chính quyền Anh",
    location: "Nam Bộ (vĩ tuyến 16 trở xuống)",
    description:
      "Quân đội Anh chiếm Nam Bộ, tạo điều kiện cho thực dân Pháp quay trở lại xâm lược Việt Nam",
    color: "from-[#c09757] to-[#7c6138]",
  },
  {
    id: "japanese-army",
    name: "Hơn 6 vạn quân Nhật",
    foundedDate: "Từ trước 1945",
    founder: "Đế quốc Nhật Bản",
    location: "Toàn quốc",
    description:
      "Quân đội Nhật Bản vẫn chưa giải giáp hoàn toàn, tiềm ẩn nguy cơ bạo loạn và bất ổn",
    color: "from-[#d9b06a] to-[#b38b46]",
  },
];

interface PartyFormationSectionProps {
  onNext: () => void;
  onBack: () => void;
  onGoToDashboard?: () => void;
}

export default function PartyFormationSection({
  onNext,
  onBack,
  onGoToDashboard,
}: PartyFormationSectionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const steps = [
    "Thù trong, giặc ngoài",
    "Các thế lực ngoại xâm",
    "Bao vây bốn phía",
    "Hệ quả nghiêm trọng",
  ];

  const renderHistoricalContext = () => {
    const Icon = (props: { id: string }) => {
      const context = externalChallenges.find((c) => c.id === props.id);
      if (!context) return null;
      const IconComponent = context.icon;
      return <IconComponent className="w-10 h-10 text-[#3b2a0c]" />;
    };

    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
            Những Khó Khăn Ngoại Tại - &quot;Thù Trong, Giặc Ngoài&quot;
          </h2>
          <p className="text-[#f4e3b7] text-lg">
            Các thế lực nước ngoài đe dọa nền độc lập non trẻ của Việt Nam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {externalChallenges.map((context, index) => (
            <motion.div
              key={context.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                selectedContext === context.id ? "ring-4 ring-[#f9e4b7]/50" : ""
              }`}
              onClick={() =>
                setSelectedContext(
                  selectedContext === context.id ? null : context.id
                )
              }
            >
              <div className="mb-4">
                <Icon id={context.id} />
              </div>
              <h3 className="text-xl font-bold text-[#3b2a0c] mb-2">
                {context.title}
              </h3>
              <p className="text-[#4a3511] text-sm mb-4">
                {context.description}
              </p>

              <AnimatePresence>
                {selectedContext === context.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 space-y-2"
                  >
                    {context.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-[#3b2a0c] text-sm"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-[#b38b46]" />
                        {detail}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderPredecessorOrgs = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
          Các Thế Lực Ngoại Xâm
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Những lực lượng quân sự nước ngoài đe dọa nền độc lập non trẻ
        </p>
      </motion.div>

      <div className="space-y-6">
        {invasionForces.map((org, index) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className={`bg-gradient-to-br from-[#f2deb4]/90 via-[#e8cc8f]/90 to-[#d9b06a]/90 border-2 border-[#b38b46] rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
              selectedOrg === org.id ? "ring-4 ring-[#f9e4b7]/50" : ""
            }`}
            onClick={() =>
              setSelectedOrg(selectedOrg === org.id ? null : org.id)
            }
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#3b2a0c] mb-2">
                  {org.name}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-[#4a3511]">
                    <Calendar className="w-4 h-4 mr-2 text-[#b38b46]" />
                    {org.foundedDate}
                  </div>
                  <div className="flex items-center text-[#4a3511]">
                    <Users className="w-4 h-4 mr-2 text-[#b38b46]" />
                    {org.founder}
                  </div>
                  <div className="flex items-center bg-[#f8f1da]/80 border border-[#b38b46] rounded-2xl p-3 text-[#3b2a0c]">
                    <MapPin className="w-4 h-4 mr-2 text-[#b38b46]" />
                    <span>{org.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {selectedOrg === org.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 p-4 bg-[#f8f1da]/80 rounded-lg border border-[#b38b46]"
                >
                  <p className="text-[#3b2a0c]">{org.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderBesiegedStep = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
          Bao Vây Bốn Phía
        </h2>
        <p className="text-[#f4e3b7] text-lg">
          Tình thế hiểm nghèo của Việt Nam Dân Chủ Cộng Hòa (1945-1946)
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md border border-[#d8c7a2]/40 rounded-2xl p-8 mb-8 shadow-[0_0_25px_rgba(193,167,117,0.25)]"
        >
          <div className="text-center mb-8">
            <Map className="w-16 h-16 text-[#f8e1a1] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#ffdf80] mb-4">
              Bản Đồ Cát Cứ
            </h3>
            <p className="text-[#f3e3c3]">
              Lãnh thổ Việt Nam bị chia cắt và kìm kẹp bởi nhiều thế lực thù
              địch cùng một lúc.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#f8f1da]/10 rounded-lg p-6 flex items-start border border-[#b38b46]/40"
            >
              <MapPin className="w-6 h-6 mr-4 text-[#ffad20] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#ffdf80] mb-2">
                  Miền Bắc (Từ vĩ tuyến 16)
                </h4>
                <p className="text-[#f3e3c3]">
                  <strong className="text-[#ffad20]">20 vạn quân Tưởng</strong>,
                  theo sau là các tổ chức phản động Việt Quốc, Việt Cách.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#f8f1da]/10 rounded-lg p-6 flex items-start border border-[#b38b46]/40"
            >
              <MapPin className="w-6 h-6 mr-4 text-[#ffad20] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#ffdf80] mb-2">
                  Miền Nam (Từ vĩ tuyến 16)
                </h4>
                <p className="text-[#f3e3c3]">
                  <strong className="text-[#ffad20]">Quân Anh</strong>, tạo điều
                  kiện cho <strong className="text-[#ffad20]">Quân Pháp</strong>{" "}
                  quay lại tái chiếm.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-[#f8f1da]/10 rounded-lg p-6 flex items-start border border-[#b38b46]/40"
            >
              <ShieldAlert className="w-6 h-6 mr-4 text-[#ffad20] flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-[#ffdf80] mb-2">
                  Toàn quốc
                </h4>
                <p className="text-[#f3e3c3]">
                  <strong className="text-[#ffad20]">
                    Hơn 6 vạn quân Nhật
                  </strong>{" "}
                  tuy đã đầu hàng nhưng vẫn còn vũ khí.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderHistoricalSignificance = () => {
    const significanceItems = [
      {
        title: "Chủ quyền bị xâm phạm",
        description: "Nhiều lực lượng nước ngoài cùng tồn tại trên lãnh thổ.",
        icon: AlertTriangle,
      },
      {
        title: "Chính trị bất ổn",
        description: "Các phe phái phản động nội dậy, quấy phá.",
        icon: Building,
      },
      {
        title: "Kinh tế kiệt quệ",
        description: "Bị kiềm kẹp, vơ vét bởi cả Nhật, Tưởng và Pháp.",
        icon: Banknote,
      },
      {
        title: "An ninh - Xã hội",
        description: "Nạn đói vẫn đe dọa, trật tự xã hội rối loạn.",
        icon: Globe,
      },
    ];

    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent">
            Hệ Quả Nghiêm Trọng
          </h2>
          <p className="text-[#f4e3b7] text-lg">
            Tình thế &quot;Ngàn cân treo sợi tóc&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {significanceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#f8f1da]/20 backdrop-blur-md border border-[#d8c7a2]/40 rounded-xl p-6 shadow-[0_0_20px_rgba(193,167,117,0.15)]"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-[#f8e1a1\\\]" />
                </div>
                <h3 className="text-xl font-bold text-[#ffdf80] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#f3e3c3]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#f8f1da]/20 backdrop-blur-md rounded-xl p-6 mt-8 border border-[#d8c7a2]/40 shadow-[0_0_25px_rgba(193,167,117,0.25)]"
        >
          <div className="text-center">
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-[#f8e1a1]" />
            <h3 className="text-2xl font-bold text-[#ffdf80] mb-4">
              Lời Chủ tịch Hồ Chí Minh
            </h3>
            <blockquote className="text-[#f3e3c3] text-lg italic font-medium">
              &quot;Lúc này, thời vận của dân tộc ta như ngàn cân treo sợi
              tóc...&quot;
            </blockquote>
          </div>
        </motion.div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderHistoricalContext();
      case 1:
        return renderPredecessorOrgs();
      case 2:
        return renderBesiegedStep();
      case 3:
        return renderHistoricalSignificance();
      default:
        return renderHistoricalContext();
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,228,181,0.4)] leading-[1.2]">
            Khó Khăn Ngoại Tại
          </h1>
          <p className="text-[#f4e3b7] text-xl italic">
            &quot;Thù trong, giặc ngoài&quot; - Các thế lực đe dọa từ bên ngoài
            (1945-1946)
          </p>
        </motion.div>

        {/* Step Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-[#f8f1da]/10 backdrop-blur-md rounded-full p-2 border border-[#d8c7a2]/40">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentStep === index
                    ? "bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] text-[#3b2a0c] shadow-md"
                    : "text-[#f4e3b7] hover:text-[#ffdf80] hover:bg-[#f8f1da]/20"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentStep()}
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
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentStep === 0
                  ? "bg-gray-500/50 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#b38b46] to-[#705629] hover:from-[#c09757] hover:to-[#7c6138] text-[#fff5dc] border border-[#a68c5c]/60 shadow-md"
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Bước trước
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center px-8 py-3 
                  bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] 
                  hover:from-[#e8cc8f] hover:to-[#d9b06a]
                  text-[#3b2a0c] font-semibold rounded-full 
                  border border-[#c1a775]/60 shadow-md transition-all duration-300"
              >
                Bước tiếp
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
                Tiếp theo: Dòng thời gian
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
