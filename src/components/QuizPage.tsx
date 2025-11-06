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
    question: "Đảng Cộng sản Việt Nam được thành lập vào ngày nào?",
    options: [
      "3/2/1930",
      "19/5/1930", 
      "2/9/1945",
      "19/8/1945"
    ],
    correctAnswer: 0,
    explanation: "Đảng Cộng sản Việt Nam được thành lập ngày 3/2/1930 tại Hội nghị thống nhất ở Hồng Kông do Nguyễn Ái Quốc chủ trì."
  },
  {
    id: 2,
    question: "Ai là người chủ trì Hội nghị thống nhất thành lập Đảng Cộng sản Việt Nam?",
    options: [
      "Hồ Chí Minh",
      "Nguyễn Ái Quốc",
      "Trần Phú",
      "Lê Hồng Phong"
    ],
    correctAnswer: 1,
    explanation: "Nguyễn Ái Quốc (sau này là Hồ Chí Minh) đã chủ trì Hội nghị thống nhất ba tổ chức cộng sản thành Đảng Cộng sản Việt Nam."
  },
  {
    id: 3,
    question: "Cương lĩnh chính trị đầu tiên của Đảng được thông qua vào thời gian nào?",
    options: [
      "Tháng 2/1930",
      "Tháng 10/1930",
      "Tháng 3/1930",
      "Tháng 5/1930"
    ],
    correctAnswer: 0,
    explanation: "Cương lĩnh chính trị đầu tiên của Đảng được thông qua vào tháng 2/1930, ngay sau khi Đảng được thành lập."
  },
  {
    id: 4,
    question: "Ba tổ chức cộng sản tiền thân của Đảng Cộng sản Việt Nam là:",
    options: [
      "Đảng Cộng sản Việt Nam, Đảng Cộng sản Đông Dương, Đảng Cộng sản Đông Dương Liên hiệp",
      "Hội Việt Nam Cách mạng Thanh niên, Đảng Cộng sản Việt Nam, Đảng Cộng sản Đông Dương",
      "Đảng Cộng sản Đông Dương, Đảng Cộng sản Pháp, Đảng Cộng sản Việt Nam",
      "Hội Việt Nam Cách mạng Thanh niên, Đảng Cộng sản Đông Dương Liên hiệp, Đảng Cộng sản Pháp"
    ],
    correctAnswer: 0,
    explanation: "Ba tổ chức cộng sản được thống nhất là: Đảng Cộng sản Việt Nam, Đảng Cộng sản Đông Dương và Đảng Cộng sản Đông Dương Liên hiệp."
  },
  {
    id: 5,
    question: "Yếu tố nào KHÔNG phải là nguyên nhân khách quan dẫn đến sự ra đời của Đảng Cộng sản Việt Nam?",
    options: [
      "Sự phát triển của giai cấp công nhân Việt Nam",
      "Khủng hoảng về đường lối cứu nước của các phong trào yêu nước cũ",
      "Ảnh hưởng của Cách mạng Tháng Mười Nga",
      "Sự can thiệp của các nước phương Tây"
    ],
    correctAnswer: 3,
    explanation: "Sự can thiệp của các nước phương Tây không phải là nguyên nhân khách quan dẫn đến sự ra đời của Đảng."
  },
  {
    id: 6,
    question: "Đặc điểm nào KHÔNG phải của Cương lĩnh chính trị đầu tiên của Đảng?",
    options: [
      "Tính khoa học",
      "Tính dân tộc", 
      "Tính thời đại",
      "Tính khu vực"
    ],
    correctAnswer: 3,
    explanation: "Ba đặc điểm của Cương lĩnh chính trị đầu tiên là: tính khoa học, tính dân tộc và tính thời đại."
  },
  {
    id: 7,
    question: "Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?",
    options: [
      "1925",
      "1926",
      "1927", 
      "1929"
    ],
    correctAnswer: 0,
    explanation: "Hội Việt Nam Cách mạng Thanh niên được thành lập năm 1925 tại Quảng Châu, Trung Quốc."
  },
  {
    id: 8,
    question: "Nhiệm vụ cách mạng dân tộc dân chủ trong Cương lĩnh đầu tiên bao gồm:",
    options: [
      "Chỉ đánh đổ đế quốc Pháp",
      "Đánh đổ đế quốc Pháp và phong kiến Việt Nam, thành lập chính phủ công nông binh",
      "Chỉ thành lập chính phủ công nông binh",
      "Chỉ tịch thu ruộng đất của địa chủ"
    ],
    correctAnswer: 1,
    explanation: "Nhiệm vụ cách mạng dân tộc dân chủ bao gồm đánh đổ đế quốc Pháp và phong kiến Việt Nam, thành lập chính phủ công nông binh."
  },
  {
    id: 9,
    question: "Tháng 10/1930, Đảng Cộng sản Việt Nam đổi tên thành:",
    options: [
      "Đảng Cộng sản Đông Dương",
      "Đảng Lao động Việt Nam",
      "Đảng Cộng sản Việt Nam Đông Dương",
      "Đảng Cách mạng Việt Nam"
    ],
    correctAnswer: 0,
    explanation: "Tháng 10/1930, theo chỉ thị của Quốc tế Cộng sản, Đảng đổi tên thành Đảng Cộng sản Đông Dương."
  },
  {
    id: 10,
    question: "Ý nghĩa lịch sử của việc thành lập Đảng Cộng sản Việt Nam là:",
    options: [
      "Chỉ thống nhất các tổ chức cộng sản",
      "Bước ngoặt vĩ đại của cách mạng Việt Nam, mở ra kỷ nguyên mới",
      "Chỉ tạo ra tổ chức chính trị mới",
      "Chỉ có ý nghĩa với giai cấp công nhân"
    ],
    correctAnswer: 1,
    explanation: "Sự ra đời của Đảng là bước ngoặt vĩ đại của cách mạng Việt Nam, mở ra kỷ nguyên mới cho dân tộc Việt Nam."
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
              Kết quả Quiz
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
