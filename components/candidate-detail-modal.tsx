"use client"

import { X, Award, User, Building, Briefcase } from "lucide-react"
import Image from "next/image"
import type { LeadershipCandidate } from "@/data/leadership-voting-data"

interface CandidateDetailModalProps {
  candidate: LeadershipCandidate | null
  isOpen: boolean
  onClose: () => void
  onSelect?: (candidate: LeadershipCandidate) => void
  isSelected?: boolean
  showVoteButton?: boolean
}

export function CandidateDetailModal({
  candidate,
  isOpen,
  onClose,
  onSelect,
  isSelected = false,
  showVoteButton = false,
}: CandidateDetailModalProps) {
  if (!isOpen || !candidate) return null

  const achievements = candidate.achievements || [candidate.achievement]

  const handleSelect = () => {
    if (onSelect && candidate) {
      onSelect(candidate)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl mx-4">
        {/* Header with image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
          {candidate.img ? (
            <Image
              src={`https://drive.usercontent.google.com/download?id=${candidate.img}`}
              alt={candidate.name}
              layout="fill"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center">
              <User className="h-32 w-32 text-white/50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-serif font-bold text-white mb-2">
              {candidate.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm">{candidate.position}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span className="text-sm">{candidate.department}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Achievements */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-[#f97316]" />
              Thành tích nổi bật
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#f97316]/10 to-[#fbbf24]/10 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#f97316] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vote button */}
          {showVoteButton && (
            <div className="flex gap-3 pt-4 border-t">
              <button
                onClick={onClose}
                className="flex-1 py-3 px-6 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  handleSelect()
                  onClose()
                }}
                className={`
                  flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300
                  ${
                    isSelected
                      ? "bg-[#f97316] text-white shadow-lg shadow-orange-500/25"
                      : "bg-[#1e40af] text-white hover:bg-[#1e3a8a]"
                  }
                `}
              >
                {isSelected ? "✓ Đã chọn bình chọn" : "Bình chọn ứng viên này"}
              </button>
            </div>
          )}

          {!showVoteButton && (
            <div className="pt-4 border-t">
              <button
                onClick={onClose}
                className="w-full py-3 px-6 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Đóng
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
