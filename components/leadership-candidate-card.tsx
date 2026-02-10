"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, User, ChevronDown, ChevronUp, Eye } from "lucide-react"
import Image from "next/image"
import type { LeadershipCandidate } from "@/data/leadership-voting-data"

interface LeadershipCandidateCardProps {
  candidate: LeadershipCandidate
  index: number
  isSelected?: boolean
  onSelect?: (candidate: LeadershipCandidate) => void
  onViewDetail?: (candidate: LeadershipCandidate) => void
  showVoteButton?: boolean
}

export function LeadershipCandidateCard({ 
  candidate, 
  index, 
  isSelected = false,
  onSelect,
  onViewDetail,
  showVoteButton = false
}: LeadershipCandidateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleClick = () => {
    // Mở modal chi tiết khi click vào card
    if (onViewDetail) {
      onViewDetail(candidate)
    }
  }

  const handleVoteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onSelect) {
      onSelect(candidate)
    }
  }

  const achievements = candidate.achievements || [candidate.achievement]
  const hasMultipleAchievements = achievements.length > 1
  const displayedAchievements = isExpanded ? achievements : achievements.slice(0, 1)

  return (
    <Card 
      className={`
        nominee-card group overflow-hidden border-2 bg-white/95 backdrop-blur-sm shadow-xl 
        transition-all duration-300 cursor-pointer hover:shadow-2xl
        ${isSelected 
          ? 'border-[#f97316] ring-2 ring-[#f97316] ring-offset-2' 
          : 'border-transparent hover:border-[#1e40af]/30'
        }
      `}
      onClick={handleClick}
    >
      <div className="relative aspect-square overflow-hidden">
        {candidate.img ? (
          <Image
            src={`https://drive.usercontent.google.com/download?id=${candidate.img}`}
            alt={candidate.name}
            layout="fill"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center">
            <User className="h-24 w-24 text-white/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute top-4 right-4">
            <div className="bg-[#f97316] text-white rounded-full p-2 shadow-lg">
              <Award className="h-5 w-5" />
            </div>
          </div>
        )}
        
        {/* Candidate number */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-[#1e40af] border-0 font-bold">
            #{index + 1}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 text-balance">
          {candidate.name}
        </h3>
        <p className="text-sm text-[#1e40af] font-medium mb-1">{candidate.position}</p>
        <p className="text-sm text-gray-600 mb-4">{candidate.department}</p>

        {/* Achievements section */}
        <div className="space-y-2">
          <div className="p-3 bg-gradient-to-r from-[#f97316]/10 to-[#fbbf24]/10 rounded-lg">
            <div className="space-y-2">
              {displayedAchievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Award className="h-4 w-4 text-[#f97316] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
            
            {/* Expand/Collapse button */}
            {hasMultipleAchievements && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="mt-2 flex items-center gap-1 text-xs text-[#1e40af] hover:text-[#1e3a8a] font-medium transition-colors"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-3 w-3" />
                    Thu gọn
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-3 w-3" />
                    Xem thêm {achievements.length - 1} thành tích
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* View Detail Button */}
        <button
          onClick={handleClick}
          className="mt-3 w-full py-2 px-4 rounded-lg font-medium text-sm text-[#1e40af] bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
        >
          <Eye className="h-4 w-4" />
          Xem chi tiết
        </button>

        {showVoteButton && (
          <button
            onClick={handleVoteClick}
            className={`
              mt-2 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300
              ${isSelected 
                ? 'bg-[#f97316] text-white shadow-lg shadow-orange-500/25' 
                : 'bg-gray-100 text-gray-700 hover:bg-[#1e40af] hover:text-white'
              }
            `}
          >
            {isSelected ? '✓ Đã chọn bình chọn' : 'Bình chọn'}
          </button>
        )}
      </CardContent>
    </Card>
  )
}
