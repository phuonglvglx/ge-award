"use client"

import { CheckCircle, X, User, Mail, Building, Award, Users } from "lucide-react"
import { useEffect, useState } from "react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  voterInfo: {
    name: string
    email: string
    department: string
  }
  categoryName: string
  candidateNames: string[]
}

export function SuccessModal({
  isOpen,
  onClose,
  voterInfo,
  categoryName,
  candidateNames
}: SuccessModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div 
        className={`
          relative w-full max-w-md bg-white rounded-2xl shadow-2xl mx-4 overflow-hidden
          transform transition-all duration-500 ease-out
          ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
      >
        {/* Header with success animation */}
        <div className="relative py-8 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-center">
          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-white/10 rounded-full animate-pulse delay-150" />
          </div>
          
          {/* Success icon */}
          <div className="relative">
            <div className={`
              inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 
              backdrop-blur-sm mb-4 mx-auto
              ${isAnimating ? 'animate-bounce' : ''}
            `}>
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Bình chọn thành công!</h2>
            <p className="text-white/80 mt-2">Cảm ơn bạn đã tham gia bình chọn</p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Voter info */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Thông tin người bình chọn
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-700">
                <User className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">{voterInfo.name}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{voterInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Building className="w-4 h-4 text-emerald-500" />
                <span>{voterInfo.department}</span>
              </div>
            </div>
          </div>

          {/* Vote details */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Chi tiết bình chọn
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-700">
                <Award className="w-4 h-4 text-orange-500" />
                <span className="font-medium">{categoryName}</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <Users className="w-4 h-4 text-orange-500 mt-0.5" />
                <div>
                  {candidateNames.map((name, index) => (
                    <span key={index} className="font-semibold text-gray-900">
                      {name}
                      {index < candidateNames.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 transform hover:scale-[1.02]"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  )
}
