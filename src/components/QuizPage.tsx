"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  RotateCcw,
  Share2,
  Trophy,
  ClipboardCheck,
  Check,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface QuizPageProps {
  onNext?: () => void;
  onBack: () => void;
  onRestart: () => void;
  onGoToDashboard?: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "Nước Việt Nam Dân chủ Cộng hòa được tuyên bố thành lập vào ngày nào?",
    options: ["2/9/1945", "19/8/1945", "25/8/1945", "30/8/1945"],
    correctAnswer: 0,
    explanation:
      "Nước Việt Nam Dân chủ Cộng hòa được tuyên bố thành lập ngày 2/9/1945 tại Quảng trường Ba Đình, Hà Nội.",
  },
  {
    id: 2,
    question:
      "Cụm từ nào mô tả chính xác tình thế của Việt Nam sau khi giành độc lập?",
    options: [
      '"Ngàn cân treo sợi tóc"',
      '"Độc lập tự do"',
      '"Hòa bình thống nhất"',
      '"Dân giàu nước mạnh"',
    ],
    correctAnswer: 0,
    explanation:
      'Cụm từ "Ngàn cân treo sợi tóc" phản ánh chính xác tình thế hiểm nghèo của Việt Nam sau khi giành độc lập.',
  },
  {
    id: 3,
    question:
      "Có bao nhiêu vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ sau năm 1945?",
    options: ["10 vạn", "15 vạn", "20 vạn", "25 vạn"],
    correctAnswer: 2,
    explanation:
      "20 vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ với danh nghĩa giải giáp quân Nhật.",
  },
  {
    id: 4,
    question:
      "Ngân khố quốc gia Việt Nam sau khi độc lập chỉ còn bao nhiêu tiền?",
    options: [
      "500.000 đồng Đông Dương",
      "1,2 triệu đồng Đông Dương",
      "2 triệu đồng Đông Dương",
      "5 triệu đồng Đông Dương",
    ],
    correctAnswer: 1,
    explanation:
      "Ngân khố quốc gia trống rỗng, chỉ còn khoảng 1,2 triệu đồng Đông Dương, quá nửa là tiền rách.",
  },
  {
    id: 5,
    question: "Tỷ lệ dân số mù chữ ở Việt Nam năm 1945 là bao nhiêu?",
    options: ["Hơn 70%", "Hơn 80%", "Hơn 90%", "Gần 100%"],
    correctAnswer: 2,
    explanation:
      "Hơn 90% dân số mù chữ, do chính sách ngu dân của thực dân Pháp.",
  },
  {
    id: 6,
    question:
      "6 nhiệm vụ cấp bách được xác định ngay sau ngày độc lập bao gồm những gì?",
    options: [
      "Chống giặc đói, chống giặc dốt, chống giặc ngoại xâm",
      "Xây dựng quân đội, phát triển kinh tế, giáo dục",
      "Thành lập chính phủ, ban hành hiến pháp, tổ chức bầu cử",
      "Đối ngoại, quốc phòng, an ninh",
    ],
    correctAnswer: 0,
    explanation:
      "6 nhiệm vụ cấp bách bao gồm: chống giặc đói, chống giặc dốt, chống giặc ngoại xâm, củng cố chính quyền, giải quyết tài chính, ngoại giao mềm dẻo.",
  },
  {
    id: 7,
    question: "Phong trào 'Ngày đồng tâm' có ý nghĩa gì?",
    options: [
      "Mỗi người nhịn một bữa cơm để cứu đói",
      "Toàn dân đóng góp vàng cho quỹ quốc gia",
      "Mọi người cùng học xóa mù chữ",
      "Cả nước cùng kháng chiến",
    ],
    correctAnswer: 0,
    explanation:
      "Phong trào 'Ngày đồng tâm' có nghĩa là mỗi người nhịn một bữa cơm để cứu đói cho người khó khăn.",
  },
  {
    id: 8,
    question: "Tuần lễ vàng đã thu được bao nhiêu vàng cho Quỹ Độc lập?",
    options: ["270kg vàng", "370kg vàng", "470kg vàng", "570kg vàng"],
    correctAnswer: 1,
    explanation:
      "Tuần lễ vàng đã thu được 370kg vàng, 20 triệu đồng cho Quỹ Độc lập và 40 triệu đồng cho Quỹ bảo vệ Tổ quốc.",
  },
  {
    id: 9,
    question: "Tổng tuyển cử đầu tiên của Việt Nam diễn ra vào ngày nào?",
    options: ["6/1/1946", "2/3/1946", "6/3/1946", "9/11/1946"],
    correctAnswer: 0,
    explanation:
      "Tổng tuyển cử đầu tiên diễn ra ngày 6/1/1946, bầu ra 333 đại biểu Quốc hội đầu tiên.",
  },
  {
    id: 10,
    question:
      "Ý nghĩa lịch sử của việc vượt qua giai đoạn 'Ngàn cân treo sợi tóc' là:",
    options: [
      "Chỉ giữ được nền độc lập",
      "Đặt nền móng vững chắc cho kháng chiến và xây dựng đất nước",
      "Chỉ xây dựng được bộ máy nhà nước",
      "Chỉ huy động được sức mạnh toàn dân",
    ],
    correctAnswer: 1,
    explanation:
      "Việc vượt qua khó khăn đã đặt nền móng vững chắc cho cuộc kháng chiến chống Pháp và sự nghiệp xây dựng đất nước sau này.",
  },
];

export default function QuizPage({
  onNext,
  onBack,
  onRestart,
  onGoToDashboard,
}: QuizPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );
  const [showResult, setShowResult] = useState(false);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowAnswerFeedback(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowAnswerFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowAnswerFeedback(selectedAnswers[currentQuestionIndex - 1] !== -1);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setShowAnswerFeedback(selectedAnswers[index] !== -1);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Xuất sắc!";
    if (percentage >= 80) return "Rất tốt!";
    if (percentage >= 70) return "Tốt!";
    if (percentage >= 60) return "Khá!";
    return "Cần cố gắng thêm!";
  };

  // MÀN HÌNH KẾT QUẢ
  if (showResult) {
    const score = calculateScore();
    return (
      <div
        className="min-h-screen bg-cover bg-center relative overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: "url('/images/background.jpeg')" }}
      >
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

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-8 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{
                rotateZ: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {score >= questions.length * 0.8 ? (
                <Trophy className="w-20 h-20 mx-auto text-[#f8e1a1]" />
              ) : (
                <ClipboardCheck className="w-20 h-20 mx-auto text-[#f8e1a1]" />
              )}
            </motion.div>

            <h1 className="text-3xl font-bold text-[#ffdf80] mb-4">
              Kết Quả Kiểm Tra Kiến Thức
            </h1>

            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9e4b7] via-[#e8c77e] to-[#b8860b] mb-3">
              {score}/{questions.length}
            </div>

            <p className="text-xl text-[#f3e3c3] mb-6 font-medium">
              {getScoreMessage(score)}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
                Làm lại
              </motion.button>

              {onNext && (
                <motion.button
                  onClick={onNext}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f]
                           hover:from-[#e8cc8f] hover:to-[#d9b06a]
                           text-[#3b2a0c] font-semibold rounded-full
                           border border-[#c1a775]/60 shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Chia sẻ
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // MÀN HÌNH CHÍNH
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

      {/* Navigation */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-4">
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
      </div>

      <div className="absolute top-4 right-4 z-20 bg-[#f8f1da]/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-[#3b2a0c] text-sm border border-[#d8c7a2]/40">
        Câu {currentQuestionIndex + 1}/{questions.length}
      </div>

      <div className="flex items-center justify-center h-screen px-6">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              className="bg-[#f8f1da]/20 backdrop-blur-md rounded-2xl p-6 border border-[#d8c7a2]/40 shadow-[0_0_30px_rgba(193,167,117,0.15)]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Câu hỏi */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-[#3b2a0c] mb-4 leading-tight">
                  Câu {currentQuestion.id}. {currentQuestion.question}
                </h2>
              </div>

              {/* Thanh tiến trình câu hỏi */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {questions.map((q, index) => {
                  const isCurrent = index === currentQuestionIndex;
                  const isAnswered = selectedAnswers[index] !== -1;
                  const isCorrect =
                    isAnswered &&
                    selectedAnswers[index] === questions[index].correctAnswer;

                  let buttonStyle =
                    "bg-[#f8f1da]/40 text-[#3b2a0c] hover:bg-[#f8f1da]/60 border-[#b38b46]/40";

                  if (isCurrent) {
                    buttonStyle =
                      "bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] text-[#3b2a0c] ring-2 ring-[#f9e4b7]/50 shadow-md";
                  } else if (isAnswered && isCorrect) {
                    buttonStyle =
                      "bg-[#d4edda]/60 text-[#155724] border-[#c3e6cb]";
                  } else if (isAnswered && !isCorrect) {
                    buttonStyle =
                      "bg-[#f8d7da]/60 text-[#721c24] border-[#f5c6cb]";
                  }

                  return (
                    <motion.button
                      key={q.id}
                      onClick={() => handleJumpToQuestion(index)}
                      className={`w-9 h-9 rounded-full font-bold transition-all duration-300 flex items-center justify-center border ${buttonStyle}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isAnswered && isCorrect ? (
                        <Check className="w-5 h-5 text-[#155724]" />
                      ) : isAnswered && !isCorrect ? (
                        <X className="w-5 h-5 text-[#721c24]" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Các lựa chọn */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected =
                    selectedAnswers[currentQuestionIndex] === index;
                  const isCorrectAnswer =
                    index === currentQuestion.correctAnswer;
                  const optionLetter = String.fromCharCode(65 + index);

                  let buttonStyle =
                    "bg-[#f8f1da]/40 border-[#b38b46]/40 text-[#3b2a0c] hover:bg-[#f8f1da]/60";

                  if (showAnswerFeedback) {
                    if (isCorrectAnswer) {
                      buttonStyle =
                        "bg-[#d4edda]/80 border-[#28a745] text-[#155724]";
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonStyle =
                        "bg-[#f8d7da]/80 border-[#dc3545] text-[#721c24]";
                    } else {
                      buttonStyle =
                        "bg-[#f8f1da]/20 border-[#b38b46]/20 text-[#4a3511] opacity-60";
                    }
                  } else if (isSelected) {
                    buttonStyle =
                      "bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] border-[#c1a775] text-[#3b2a0c]";
                  }

                  return (
                    <motion.button
                      key={index}
                      onClick={() =>
                        !showAnswerFeedback && handleAnswerSelect(index)
                      }
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${buttonStyle} ${
                        showAnswerFeedback ? "cursor-default" : "cursor-pointer"
                      }`}
                      whileHover={!showAnswerFeedback ? { scale: 1.02 } : {}}
                      whileTap={!showAnswerFeedback ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-start space-x-4">
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                          ${
                            showAnswerFeedback && isCorrectAnswer
                              ? "bg-[#28a745] text-white"
                              : showAnswerFeedback &&
                                isSelected &&
                                !isCorrectAnswer
                              ? "bg-[#dc3545] text-white"
                              : isSelected
                              ? "bg-[#f2deb4] text-[#3b2a0c]"
                              : "bg-[#f8f1da]/60 text-[#3b2a0c]"
                          }`}
                        >
                          {showAnswerFeedback && isCorrectAnswer
                            ? "✓"
                            : showAnswerFeedback &&
                              isSelected &&
                              !isCorrectAnswer
                            ? "X"
                            : optionLetter}
                        </span>
                        <span className="text-base font-medium">{option}</span>
                        {showAnswerFeedback && isCorrectAnswer && (
                          <span className="ml-auto text-[#28a745] font-bold flex-shrink-0">
                            Đáp án đúng
                          </span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Phản hồi */}
              {showAnswerFeedback && (
                <motion.div
                  className="mb-5 p-4 rounded-xl bg-[#f8f1da]/40 border border-[#b38b46]/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {selectedAnswers[currentQuestionIndex] ===
                  currentQuestion.correctAnswer ? (
                    <div className="flex items-center space-x-2 text-[#155724]">
                      <Check className="w-6 h-6" />
                      <span className="font-bold text-base">
                        {currentQuestion.explanation}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-[#721c24]">
                      <X className="w-6 h-6" />
                      <span className="font-bold text-base">
                        {currentQuestion.explanation}
                      </span>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Điều hướng */}
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300
                    ${
                      currentQuestionIndex === 0
                        ? "bg-[#f8f1da]/20 text-[#4a3511] opacity-50 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#b38b46] to-[#705629] hover:from-[#c09757] hover:to-[#7c6138] text-[#fff5dc] border border-[#a68c5c]/60 shadow-md"
                    }`}
                  whileHover={currentQuestionIndex > 0 ? { scale: 1.05 } : {}}
                  whileTap={currentQuestionIndex > 0 ? { scale: 0.95 } : {}}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Câu trước
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestionIndex] === -1}
                  className={`flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300
                    ${
                      selectedAnswers[currentQuestionIndex] === -1
                        ? "bg-[#f8f1da]/20 text-[#4a3511] opacity-50 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#f2deb4] to-[#e8cc8f] hover:from-[#e8cc8f] hover:to-[#d9b06a] text-[#3b2a0c] border border-[#c1a775]/60 shadow-md"
                    }`}
                  whileHover={
                    selectedAnswers[currentQuestionIndex] !== -1
                      ? { scale: 1.05 }
                      : {}
                  }
                  whileTap={
                    selectedAnswers[currentQuestionIndex] !== -1
                      ? { scale: 0.95 }
                      : {}
                  }
                >
                  {isLastQuestion ? "Hoàn thành" : "Câu tiếp"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
