'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Share2, MessageCircle, Users, Heart, Star } from 'lucide-react'

interface SharingSectionProps {
  onBack: () => void
  onNext?: () => void
  onRestart: () => void
  onGoToDashboard?: () => void
}

export default function SharingSection({ onBack, onNext, onRestart, onGoToDashboard }: SharingSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Dashboard Button - Fixed Position */}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Share2 className="w-8 h-8 mr-3 text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Chia Sẻ Cảm Nghĩ
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Hãy chia sẻ suy nghĩ và cảm nhận của bạn về hành trình tìm hiểu lịch sử Đảng Cộng sản Việt Nam
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thảo Luận</h3>
            <p className="text-gray-300 text-sm">Trao đổi ý kiến với bạn bè về những kiến thức đã học</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cộng Đồng</h3>
            <p className="text-gray-300 text-sm">Kết nối với cộng đồng yêu thích lịch sử</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cảm Hứng</h3>
            <p className="text-gray-300 text-sm">Chia sẻ cảm hứng và động lực từ những bài học lịch sử</p>
          </div>
        </motion.div>

        {/* Padlet Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-12"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold">Bảng Chia Sẻ Cộng Đồng</h2>
              <Star className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            <p className="text-gray-300 mb-6">
              Hãy để lại suy nghĩ, cảm nhận hoặc những điều bạn học được từ hành trình này
            </p>
          </div>

          {/* Padlet Embed Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-8xl">
              <div className="padlet-embed" style={{border:'1px solid rgba(0,0,0,0.1)', borderRadius:'2px', boxSizing:'border-box', overflow:'hidden', position:'relative', width:'100%', background:'#F4F4F4'}}>
                <p style={{padding:0, margin:0}}>
                  <iframe 
                    src="https://padlet.com/embed/sspsxy2fk4y7gqav" 
                    frameBorder="0" 
                    allow="camera;microphone;geolocation;display-capture;clipboard-write" 
                    style={{width:'100%', height:'608px', display:'block', padding:0, margin:0}}
                    title="Bảng chia sẻ cộng đồng"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Hướng dẫn chia sẻ:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Nhấp vào bảng Padlet để thêm bài viết mới</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Chia sẻ cảm nghĩ, kiến thức hoặc câu hỏi của bạn</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Tương tác với bài viết của những người khác</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Tạo nên một cộng đồng học tập tích cực</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <button
            onClick={onBack}
            className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 border border-white/30"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại Quiz
          </button>
          
          <div className="flex gap-4">
            {onNext && (
              <button
                onClick={onNext}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full transition-all duration-300 font-semibold"
              >
                📊 Bảng điều khiển
              </button>
            )}
            
            <button
              onClick={onRestart}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full transition-all duration-300 font-semibold"
            >
              Học lại từ đầu
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full transition-all duration-300 font-semibold"
            >
              Làm mới trang
            </button>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Cảm ơn bạn đã tham gia!</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hy vọng hành trình tìm hiểu về lịch sử hình thành Đảng Cộng sản Việt Nam đã mang lại cho bạn 
              những kiến thức bổ ích và cảm hứng. Hãy tiếp tục chia sẻ và lan tỏa những giá trị tốt đẹp này!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}