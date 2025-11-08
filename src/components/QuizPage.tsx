'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// ✅ 1. THÊM ICON "Check" VÀ "X"
import {
  ChevronLeft, RotateCcw, Share2, Trophy, ClipboardCheck,
  Check, X
} from 'lucide-react'

interface QuizPageProps {
  onNext?: () => void
  onBack: () => void
  onRestart: () => void
  onGoToDashboard?: () => void
}

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

// (Dữ liệu questions giữ nguyên)
const questions: Question[] = [
  {
    id: 1,
    question: "Nước Việt Nam Dân chủ Cộng hòa được tuyên bố thành lập vào ngày nào?",
    options: [
      "2/9/1945",
      "19/8/1945",
      "25/8/1945",
      "30/8/1945"
    ],
    correctAnswer: 0,
    explanation: "Nước Việt Nam Dân chủ Cộng hòa được tuyên bố thành lập ngày 2/9/1945 tại Quảng trường Ba Đình, Hà Nội."
  },
  {
    id: 2,
    question: 'Cụm từ nào mô tả chính xác tình thế của Việt Nam sau khi giành độc lập?',
    options: [
      '"Ngàn cân treo sợi tóc"',
      '"Độc lập tự do"',
      '"Hòa bình thống nhất"',
      '"Dân giàu nước mạnh"'
    ],
    correctAnswer: 0,
    explanation: 'Cụm từ "Ngàn cân treo sợi tóc" phản ánh chính xác tình thế hiểm nghèo của Việt Nam sau khi giành độc lập.'
  },
  {
    id: 3,
    question: "Có bao nhiêu vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ sau năm 1945?",
    options: [
      "10 vạn",
      "15 vạn",
      "20 vạn",
      "25 vạn"
    ],
    correctAnswer: 2,
    explanation: "20 vạn quân Tưởng Giới Thạch tràn vào Bắc Bộ với danh nghĩa giải giáp quân Nhật."
  },
  {
    id: 4,
    question: "Ngân khố quốc gia Việt Nam sau khi độc lập chỉ còn bao nhiêu tiền?",
    options: [
      "500.000 đồng Đông Dương",
      "1,2 triệu đồng Đông Dương",
      "2 triệu đồng Đông Dương",
      "5 triệu đồng Đông Dương"
    ],
    correctAnswer: 1,
    explanation: "Ngân khố quốc gia trống rỗng, chỉ còn khoảng 1,2 triệu đồng Đông Dương, quá nửa là tiền rách."
  },
  {
    id: 5,
    question: "Tỷ lệ dân số mù chữ ở Việt Nam năm 1945 là bao nhiêu?",
    options: [
      "Hơn 70%",
      "Hơn 80%",
      "Hơn 90%",
      "Gần 100%"
    ],
    correctAnswer: 2,
    explanation: "Hơn 90% dân số mù chữ, do chính sách ngu dân của thực dân Pháp."
  },
  {
    id: 6,
    question: "6 nhiệm vụ cấp bách được xác định ngay sau ngày độc lập bao gồm những gì?",
    options: [
      "Chống giặc đói, chống giặc dốt, chống giặc ngoại xâm",
      "Xây dựng quân đội, phát triển kinh tế, giáo dục",
      "Thành lập chính phủ, ban hành hiến pháp, tổ chức bầu cử",
      "Đối ngoại, quốc phòng, an ninh"
    ],
    correctAnswer: 0,
    explanation: "6 nhiệm vụ cấp bách bao gồm: chống giặc đói, chống giặc dốt, chống giặc ngoại xâm, củng cố chính quyền, giải quyết tài chính, ngoại giao mềm dẻo."
  },
  {
    id: 7,
    question: "Phong trào 'Ngày đồng tâm' có ý nghĩa gì?",
    options: [
      "Mỗi người nhịn một bữa cơm để cứu đói",
      "Toàn dân đóng góp vàng cho quỹ quốc gia",
      "Mọi người cùng học xóa mù chữ",
      "Cả nước cùng kháng chiến"
    ],
    correctAnswer: 0,
    explanation: "Phong trào 'Ngày đồng tâm' có nghĩa là mỗi người nhịn một bữa cơm để cứu đói cho người khó khăn."
  },
  {
    id: 8,
    question: "Tuần lễ vàng đã thu được bao nhiêu vàng cho Quỹ Độc lập?",
    options: [
      "270kg vàng",
      "370kg vàng",
      "470kg vàng",
      "570kg vàng"
    ],
    correctAnswer: 1,
    explanation: "Tuần lễ vàng đã thu được 370kg vàng, 20 triệu đồng cho Quỹ Độc lập và 40 triệu đồng cho Quỹ bảo vệ Tổ quốc."
  },
  {
    id: 9,
    question: "Tổng tuyển cử đầu tiên của Việt Nam diễn ra vào ngày nào?",
    options: [
      "6/1/1946",
      "2/3/1946",
      "6/3/1946",
      "9/11/1946"
    ],
    correctAnswer: 0,
    explanation: "Tổng tuyển cử đầu tiên diễn ra ngày 6/1/1946, bầu ra 333 đại biểu Quốc hội đầu tiên."
  },
  {
    id: 10,
    question: "Ý nghĩa lịch sử của việc vượt qua giai đoạn 'Ngàn cân treo sợi tóc' là:",
    options: [
      "Chỉ giữ được nền độc lập",
      "Đặt nền móng vững chắc cho kháng chiến và xây dựng đất nước",
      "Chỉ xây dựng được bộ máy nhà nước",
      "Chỉ huy động được sức mạnh toàn dân"
    ],
    correctAnswer: 1,
    explanation: "Việc vượt qua khó khăn đã đặt nền móng vững chắc cho cuộc kháng chiến chống Pháp và sự nghiệp xây dựng đất nước sau này."
  }
]


export default function QuizPage({ onNext, onBack, onRestart, onGoToDashboard }: QuizPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showResult, setShowResult] = useState(false)
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentQuestionIndex])

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newAnswers)
    setShowAnswerFeedback(true)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowAnswerFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setShowAnswerFeedback(selectedAnswers[currentQuestionIndex - 1] !== -1)
    }
  }

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    setShowAnswerFeedback(selectedAnswers[index] !== -1)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score
    }, 0)
  }

  const getScoreMessage = (score: number) => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "Xuất sắc! 🎉"
    if (percentage >= 80) return "Rất tốt! 👏"
    if (percentage >= 70) return "Tốt! 👍"
    if (percentage >= 60) return "Khá! 📚"
    return "Cần cố gắng thêm! 💪"
  }


  // (Màn hình Kết quả (showResult) giữ nguyên)
  if (showResult) {
    const score = calculateScore()
    return (
      <div className="h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-200 rounded-full"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 11.7) % 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: (i % 10) * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-600/30 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{
                rotateZ: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {score >= questions.length * 0.8 ? <Trophy className="w-16 h-16 mx-auto text-yellow-400" /> : <ClipboardCheck className="w-16 h-16 mx-auto text-yellow-300" />}
            </motion.div>

            <h1 className="text-3xl font-bold text-yellow-50 mb-4">
              Kết Quả Kiểm Tra Kiến Thức
            </h1>

            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 mb-3">
              {score}/{questions.length}
            </div>

            <p className="text-xl text-yellow-200 mb-6">
              {getScoreMessage(score)}
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={onBack}
                className="flex items-center px-6 py-3 bg-black/20 hover:bg-black/30 text-yellow-100 rounded-full font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 mr-1" /> Quay lại
              </motion.button>

              <motion.button
                onClick={onRestart}
                className="flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-[#3b2f05] rounded-full font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw className="w-5 h-5 mr-2" /> Làm lại quiz
              </motion.button>

              {onNext && (
                <motion.button
                  onClick={onNext}
                  className="flex items-center px-6 py-3 bg-yellow-700 hover:bg-yellow-600 text-[#3b2f05] rounded-full font-bold cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5 mr-2" /> Chia sẻ cảm nghĩ
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // (Phần Màn hình Quiz chính)
  return (
    <div className="h-screen bg-gradient-to-br from-[#4b2e05] via-[#8b5e2a] to-[#d2a679] relative overflow-hidden text-yellow-100">
      {/* (Các nút Navigation top-left/right giữ nguyên) */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-4">
        <motion.button
          onClick={onBack}
          className="flex items-center justify-center px-6 py-3 min-w-[180px]
      bg-gradient-to-r from-[#8b5e2a] to-[#5c3b14]
      hover:from-[#a06a32] hover:to-[#70471a]
      text-white font-semibold rounded-full
      border border-[#d6a85b]
      shadow-[0_0_10px_rgba(214,168,91,0.3)]
      hover:shadow-[0_0_15px_rgba(214,168,91,0.5)]
      transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ChevronLeft className="w-5 h-5 mr-2 text-white" />
          <span className="text-sm font-bold">Quay lại</span>
        </motion.button>

        {/* Nút Bảng điều khiển */}
        {onGoToDashboard && (
          <motion.button
            onClick={onGoToDashboard}
            className="flex items-center justify-center px-6 py-3 min-w-[180px]
        bg-gradient-to-r from-[#b98a3c] to-[#8b5e2a]
        hover:from-[#d2a34b] hover:to-[#9c622f]
        text-yellow-100 font-semibold rounded-full
        border border-[#e9c27c]
        shadow-[0_0_10px_rgba(233,194,124,0.3)]
        hover:shadow-[0_0_15px_rgba(233,194,124,0.5)]
        transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-lg mr-2">📊</span>
            <span className="text-sm font-bold">Bảng điều khiển</span>
          </motion.button>
        )}

      </div>
      <div className="absolute top-4 right-4 z-20 bg-black/30 px-4 py-2 rounded-full font-bold text-yellow-100 text-sm">
        Câu {currentQuestionIndex + 1}/{questions.length}
      </div>
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              delay: (i % 10) * 0.2,
            }}
          />
        ))}
      </div>


      <div className="flex items-center justify-center h-full px-4">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-600/30 shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Question */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-yellow-50 mb-4 leading-tight">
                  Câu {currentQuestion.id}. {currentQuestion.question}
                </h2>
              </div>

              {/* ✅ 2. BẢNG CÂU HỎI ĐÃ CẬP NHẬT LOGIC */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {questions.map((q, index) => {
                  const isCurrent = index === currentQuestionIndex;
                  const isAnswered = selectedAnswers[index] !== -1;
                  // Thêm biến kiểm tra Đúng/Sai
                  const isCorrect = isAnswered && selectedAnswers[index] === questions[index].correctAnswer;

                  let buttonStyle = 'bg-black/20 text-yellow-100 hover:bg-black/40 border-transparent'; // Default

                  if (isCurrent) {
                    buttonStyle = 'bg-yellow-500 text-[#3b2f05] ring-2 ring-yellow-100 border-transparent'; // Current
                  } else if (isAnswered && isCorrect) {
                    // Style cho câu ĐÃ TRẢ LỜI ĐÚNG
                    buttonStyle = 'bg-green-600/30 text-green-300 border-green-500/50';
                  } else if (isAnswered && !isCorrect) {
                    // Style cho câu ĐÃ TRẢ LỜI SAI
                    buttonStyle = 'bg-red-600/30 text-red-300 border-red-500/50';
                  }

                  return (
                    <motion.button
                      key={q.id}
                      onClick={() => handleJumpToQuestion(index)}
                      className={`w-8 h-8 rounded-full font-bold transition-all duration-300 flex items-center justify-center border ${buttonStyle}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Hiển thị V (Check) hoặc X thay vì số */}
                      {isAnswered && isCorrect ? <Check className="w-4 h-4" /> :
                        isAnswered && !isCorrect ? <X className="w-4 h-4" /> :
                          <span className="text-xs">{index + 1}</span>
                      }
                    </motion.button>
                  )
                })}
              </div>
              {/* (Kết thúc bảng câu hỏi) */}


              {/* (Phần Options và các Nút điều hướng bên dưới giữ nguyên) */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === index
                  const isCorrectAnswer = index === currentQuestion.correctAnswer
                  const optionLetter = String.fromCharCode(65 + index) // A, B, C, D

                  let buttonStyle = 'bg-black/10 border-yellow-600/30 text-yellow-100 hover:bg-black/20 hover:border-yellow-600/50'

                  if (showAnswerFeedback) {
                    if (isCorrectAnswer) {
                      buttonStyle = 'bg-green-600/50 border-green-400 text-white'
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonStyle = 'bg-red-600/50 border-red-400 text-white'
                    } else {
                      buttonStyle = 'bg-black/10 border-yellow-600/20 text-yellow-300 opacity-60'
                    }
                  } else if (isSelected) {
                    buttonStyle = 'bg-yellow-600/50 border-yellow-400 text-white'
                  }

                  return (
                    <motion.button
                      key={index}
                      onClick={() => !showAnswerFeedback && handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${buttonStyle} ${showAnswerFeedback ? 'cursor-default' : 'cursor-pointer'
                        }`}
                      whileHover={!showAnswerFeedback ? { scale: 1.02 } : {}}
                      whileTap={!showAnswerFeedback ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-start space-x-4">
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${showAnswerFeedback && isCorrectAnswer
                          ? 'bg-green-500 text-white'
                          : showAnswerFeedback && isSelected && !isCorrectAnswer
                            ? 'bg-red-500 text-white'
                            : isSelected
                              ? 'bg-yellow-500 text-[#3b2f05]'
                              : 'bg-black/20'
                          }`}>
                          {showAnswerFeedback && isCorrectAnswer ? '✓' :
                            showAnswerFeedback && isSelected && !isCorrectAnswer ? '✗' :
                              optionLetter}
                        </span>
                        <span className="text-base">{option}</span>
                        {showAnswerFeedback && isCorrectAnswer && (
                          <span className="ml-auto text-green-400 font-bold flex-shrink-0">👉 Đáp án đúng</span>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {showAnswerFeedback && (
                <motion.div
                  className="mb-5 p-3 rounded-xl bg-black/20 border border-yellow-600/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
                    <div className="flex items-center space-x-2 text-green-400">
                      <span className="text-xl">🎉</span>
                      <span className="font-bold">Chính xác! {currentQuestion.explanation}</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-red-400">
                      <span className="text-xl">❌</span>
                      <span className="font-bold">Sai. {currentQuestion.explanation}</span>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="flex justify-between items-center">
                <motion.button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${currentQuestionIndex === 0
                    ? 'bg-black/10 text-yellow-100 opacity-50 cursor-not-allowed'
                    : 'bg-black/20 text-yellow-100 hover:bg-black/30 cursor-pointer'
                    }`}
                  whileHover={currentQuestionIndex > 0 ? { scale: 1.05 } : {}}
                  whileTap={currentQuestionIndex > 0 ? { scale: 0.95 } : {}}
                >
                  ← Câu trước
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestionIndex] === -1}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${selectedAnswers[currentQuestionIndex] === -1
                    ? 'bg-black/10 text-yellow-100 opacity-50 cursor-not-allowed'
                    : 'bg-yellow-600 text-[#3b2f05] hover:bg-yellow-500 cursor-pointer'
                    }`}
                  whileHover={selectedAnswers[currentQuestionIndex] !== -1 ? { scale: 1.05 } : {}}
                  whileTap={selectedAnswers[currentQuestionIndex] !== -1 ? { scale: 0.95 } : {}}
                >
                  {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp →'}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}