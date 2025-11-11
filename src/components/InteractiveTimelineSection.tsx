"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, ChevronLeft, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface InteractiveTimelineSectionProps {
  onNext: () => void;
  onBack: () => void;
  onGoToDashboard?: () => void;
}

export default function InteractiveTimelineSection({
  onNext,
  onBack,
  onGoToDashboard,
}: InteractiveTimelineSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Đảm bảo render client-only
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    {
      year: "2/9/1945",
      title: "Tuyên bố độc lập - Nước Việt Nam Dân chủ Cộng hòa ra đời",
      location: "Ba Đình, Hà Nội",
      description:
        "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa - nhà nước công nông đầu tiên ở Đông Nam Á.",
      significance:
        "Đất nước độc lập nhưng vô cùng mong manh, chưa được quốc tế công nhận.",
      imageSrc: "/images/1929.webp",
      imageAlt: "Hình ảnh 2/9/1945 - Tuyên bố độc lập",
    },
    {
      year: "9/1945",
      title: "Quân Tưởng Giới Thạch và Anh xâm nhập",
      location: "Bắc Bộ và Nam Bộ",
      description:
        "20 vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ với danh nghĩa giải giáp quân Nhật. 1 vạn quân Anh kéo vào Nam Bộ, tạo điều kiện cho Pháp quay lại.",
      significance: "Đất nước bị bao vây bốn phía, không có đồng minh quốc tế.",
      imageSrc: "/images/quan-tuong-1945.webp",
      imageAlt: "Hình ảnh tháng 9/1945 - Quân nước ngoài xâm nhập",
    },
    {
      year: "11/1945",
      title: "Thành lập các tổ chức cứu đói và giáo dục",
      location: "Toàn quốc",
      description:
        "Thành lập Hội Cứu đói, Ủy ban tối cao tiếp tế và Nha Bình dân học vụ để chống 'giặc đói' và 'giặc dốt'.",
      significance: "Những biện pháp cấp bách để giải quyết nạn đói và mù chữ.",
      imageSrc: "/images/cuu-doi-1945.jpg",
      imageAlt: "Hình ảnh tháng 11/1945 - Các tổ chức cứu đói",
    },
    {
      year: "25/11/1945",
      title: "Chỉ thị 'Kháng chiến kiến quốc'",
      location: "Hà Nội",
      description:
        "Ban hành chỉ thị với khẩu hiệu 'Dân tộc trên hết - Tổ quốc trên hết', xác định kẻ thù chính là thực dân Pháp xâm lược.",
      significance: "Định hướng đường lối kháng chiến và xây dựng đất nước.",
      imageSrc: "/images/khang-chien-kien-quoc.jpg",
      imageAlt: "Hình ảnh 25/11/1945 - Chỉ thị Kháng chiến kiến quốc",
    },
    {
      year: "6/1/1946",
      title: "Tổng tuyển cử đầu tiên",
      location: "Toàn quốc",
      description:
        "Tổ chức Tổng tuyển cử bầu ra 333 đại biểu Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
      significance:
        "Củng cố chính quyền cách mạng, thể hiện ý chí dân chủ của nhân dân.",
      imageSrc: "/images/tong-tuyen-cu-1946.jpg",
      imageAlt: "Hình ảnh 6/1/1946 - Tổng tuyển cử đầu tiên",
    },
    {
      year: "6/3/1946",
      title: "Hiệp định Sơ bộ Pháp-Việt",
      location: "Hà Nội",
      description:
        "Ký hiệp định với Pháp theo đường lối 'Hòa để tiến' - nhân nhượng có nguyên tắc để tránh thế 'một cổ hai tròng' và chuẩn bị lực lượng.",
      significance:
        "Ngoại giao mềm dẻo, kéo dài thời gian chuẩn bị kháng chiến.",
      imageSrc: "/images/hiep-dinh-so-bo-1946.jpg",
      imageAlt: "Hình ảnh 6/3/1946 - Hiệp định Sơ bộ Pháp-Việt",
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Background giấy cũ */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      />

      {/* Overlay cổ điển ấm */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b2b17]/80 via-[#5b3c1a]/60 to-[#2c1c0f]/90 mix-blend-multiply" />

      {/* Hiệu ứng hạt ánh sáng */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-yellow-200/30 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: 0.1,
              }}
              animate={{
                x: [
                  Math.random() * windowSize.width,
                  Math.random() * windowSize.width,
                ],
                y: [
                  Math.random() * windowSize.height,
                  Math.random() * windowSize.height,
                ],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 25 + i * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 mr-3 text-amber-200 drop-shadow-md" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#f9e4b7] via-[#e0b86d] to-[#b07a2a] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,228,181,0.4)] leading-[1.2]">
              Dòng Thời Gian Khó Khăn
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[#fff6d8] italic">
            Giai đoạn “Ngàn cân treo sợi tóc” (1945–1946)
          </p>
        </motion.div>

        {/* Thanh tiến trình */}
        <div className="relative w-full h-3 bg-[#ffffff22] rounded-full mb-12">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f6d47b] via-[#e6b34a] to-[#b57923] rounded-full shadow-[0_0_12px_rgba(255,230,150,0.6)]"
            initial={{ width: 0 }}
            animate={{
              width: `${((selectedEvent + 1) / events.length) * 100}%`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>

        {/* Nội dung chính */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Thông tin sự kiện */}
            <div className="bg-[#ffffff13] backdrop-blur-lg rounded-2xl p-8 border border-[#f8e4b2]/20 shadow-[0_0_25px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl font-bold text-[#fce89c] mb-2">
                {events[selectedEvent].year}
              </h2>
              <h3 className="text-xl text-[#fff7da] mb-4">
                {events[selectedEvent].title}
              </h3>

              <div className="flex items-center text-[#f8e4b2] mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {events[selectedEvent].location}
              </div>

              <Image
                src={events[selectedEvent].imageSrc}
                alt={events[selectedEvent].imageAlt}
                width={800}
                height={450}
                className="w-full h-64 object-cover rounded-xl border border-[#f9e4b7]/30 mb-6 shadow-[0_0_15px_rgba(255,228,181,0.2)]"
                unoptimized
              />

              <p className="text-[#fff8e1] leading-relaxed mb-6">
                {events[selectedEvent].description}
              </p>

              <div className="bg-gradient-to-r from-[#a4743c]/20 to-[#8b5e2a]/20 rounded-lg p-4 border border-[#f4d88a]/40">
                <h4 className="font-semibold text-[#f8e4b2] mb-2">
                  Ý nghĩa lịch sử:
                </h4>
                <p className="text-[#fffbe6] text-sm">
                  {events[selectedEvent].significance}
                </p>
              </div>
            </div>

            {/* Timeline bên phải */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#f4d88a] via-[#d6a85b] to-[#8b5e2a]" />
              <div className="space-y-8">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center cursor-pointer transition-transform ${
                      index === selectedEvent ? "scale-110" : "scale-100"
                    }`}
                    onClick={() => setSelectedEvent(index)}
                    whileHover={{ scale: index === selectedEvent ? 1.1 : 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-[#fff8e1] transition-all duration-300 ${
                        index === selectedEvent
                          ? "bg-gradient-to-r from-[#ffe082] to-[#f6c14b] shadow-[0_0_12px_rgba(255,230,150,0.8)]"
                          : index < selectedEvent
                          ? "bg-[#d6a85b]"
                          : "bg-[#5a3e1d] opacity-70"
                      }`}
                    />
                    <div
                      className={`${
                        index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                      } w-5/12 p-4 rounded-lg ${
                        index === selectedEvent
                          ? "bg-[#fffbe6]/15 border border-[#f4d88a]/40 shadow-[0_0_10px_rgba(255,230,150,0.3)]"
                          : "bg-[#00000033] hover:bg-[#fffbe6]/10"
                      }`}
                    >
                      <div className="font-semibold text-[#fce89c]">
                        {event.year}
                      </div>
                      <div className="text-sm text-[#fff7da]">
                        {event.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nút điều hướng */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-between items-center mt-8"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-[#9b7a4d] to-[#5b4223]
                         hover:from-[#b48c5e] hover:to-[#6e5430]
                         text-[#fff8e1] font-semibold rounded-full
                         border border-[#d2b27a]/50 shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2 text-[#fff3c9]" />
              Quay lại
            </button>

            {onGoToDashboard && (
              <button
                onClick={onGoToDashboard}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-[#f6d47b] to-[#e6b34a]
                           hover:from-[#ffe39b] hover:to-[#e0b76a]
                           text-[#3b2f05] font-semibold rounded-full
                           border border-[#f4d88a]/50 shadow-md transition-all duration-300"
              >
                📊 Bảng điều khiển
              </button>
            )}
          </div>

          <button
            onClick={onNext}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-[#f6d47b] to-[#e6b34a]
                       hover:from-[#ffe39b] hover:to-[#e0b76a]
                       text-[#3b2f05] font-semibold rounded-full
                       border border-[#f4d88a]/60 shadow-md transition-all duration-300"
          >
            Tiếp theo: Khó khăn ngoại tại
            <ArrowRight className="w-5 h-5 ml-2 text-[#3b2f05]" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
