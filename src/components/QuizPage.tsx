'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  // Scroll to top when currentQuestionIndex changes
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
      // Check if previous question was already answered to show feedback
      setShowAnswerFeedback(selectedAnswers[currentQuestionIndex - 1] !== -1)
    }
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

  if (showResult) {
    const score = calculateScore()
    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
        {/* Background effects */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
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
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
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
              {score >= questions.length * 0.8 ? "🏆" : "📊"}
            </motion.div>

            <h1 className="text-3xl font-bold text-white mb-4">
              Kết Quả Kiểm Tra Kiến Thức
            </h1>

            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
              {score}/{questions.length}
            </div>

            <p className="text-xl text-gray-300 mb-6">
              {getScoreMessage(score)}
            </p>

            <div className="mb-6 flex gap-4 justify-center">
              <motion.button
                onClick={onBack}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-full font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔙 Quay lại
              </motion.button>

              <motion.button
                onClick={onRestart}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔄 Làm lại quiz
              </motion.button>

              {onNext && (
                <motion.button
                  onClick={onNext}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-bold cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✨ Chia sẻ cảm nghĩ
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-4">
        <motion.button
          onClick={onBack}
          className="bg-white/90 hover:bg-white text-blue-800 px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg">←</span>
          <span className="text-sm">Quay lại</span>
        </motion.button>

        {onGoToDashboard && (
          <motion.button
            onClick={onGoToDashboard}
            className="bg-purple-600/90 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center space-x-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-lg">📊</span>
            <span className="text-sm">Bảng điều khiển</span>
          </motion.button>
        )}
      </div>

      {/* Progress bar */}
      <div className="absolute top-4 right-4 z-20 bg-white/90 px-4 py-2 rounded-full font-bold text-blue-800 text-sm">
        Câu {currentQuestionIndex + 1}/{questions.length}
      </div>

      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Question */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  Câu {currentQuestion.id}. {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === index
                  const isCorrectAnswer = index === currentQuestion.correctAnswer
                  const optionLetter = String.fromCharCode(65 + index) // A, B, C, D

                  let buttonStyle = 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/40'

                  if (showAnswerFeedback) {
                    if (isCorrectAnswer) {
                      buttonStyle = 'bg-green-600/50 border-green-400 text-white'
                    } else if (isSelected && !isCorrectAnswer) {
                      buttonStyle = 'bg-red-600/50 border-red-400 text-white'
                    } else {
                      buttonStyle = 'bg-white/5 border-white/20 text-gray-400'
                    }
                  } else if (isSelected) {
                    buttonStyle = 'bg-blue-600/50 border-blue-400 text-white'
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
                            : 'bg-white/20'
                          }`}>
                          {showAnswerFeedback && isCorrectAnswer ? '✓' :
                            showAnswerFeedback && isSelected && !isCorrectAnswer ? '✗' :
                              optionLetter}
                        </span>
                        <span className="text-base">{option}</span>
                        {showAnswerFeedback && isCorrectAnswer && (
                          <span className="ml-auto text-green-400 font-bold">👉 Đáp án đúng</span>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Answer feedback */}
              {showAnswerFeedback && (
                <motion.div
                  className="mb-5 p-3 rounded-xl bg-white/10 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
                    <div className="flex items-center space-x-2 text-green-400">
                      <span className="text-xl">🎉</span>
                      <span className="font-bold">Chính xác! Bạn đã chọn đúng đáp án.</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-red-400">
                      <span className="text-xl">❌</span>
                      <span className="font-bold">Sai. Đáp án đúng là: {String.fromCharCode(65 + currentQuestion.correctAnswer)} - {currentQuestion.explanation}</span>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <motion.button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${currentQuestionIndex === 0
                    ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    : 'bg-white/20 text-white hover:bg-white/30 cursor-pointer'
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
                    ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 cursor-pointer'
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
