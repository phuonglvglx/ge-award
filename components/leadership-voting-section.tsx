"use client"

import { useState } from "react"
import { ChevronDown, Info, Award, Users, AlertCircle, User, Mail, Building } from "lucide-react"
import { LeadershipCandidateCard } from "./leadership-candidate-card"
import { CandidateDetailModal } from "./candidate-detail-modal"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  leadershipVotingCategories, 
  type LeadershipVotingCategory,
  type LeadershipCandidate 
} from "@/data/leadership-voting-data"
import { submitLeadershipVote, type VoterInfo } from "@/lib/services/leadership-vote"

interface LeadershipVotingSectionProps {
  onSubmitVote?: (categoryId: string, selectedCandidates: LeadershipCandidate[], voterInfo: VoterInfo) => void
}

export function LeadershipVotingSection({ onSubmitVote }: LeadershipVotingSectionProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("employee-of-year")
  const [selectedVotes, setSelectedVotes] = useState<Record<string, LeadershipCandidate[]>>({})
  const [submittedCategories, setSubmittedCategories] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  
  // Modal chi tiết ứng viên
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [selectedCandidateForDetail, setSelectedCandidateForDetail] = useState<LeadershipCandidate | null>(null)
  const [currentCategoryForDetail, setCurrentCategoryForDetail] = useState<string | null>(null)
  
  // Thông tin người bình chọn (dùng chung cho tất cả các hạng mục)
  const [voterInfo, setVoterInfo] = useState<VoterInfo>({
    name: "",
    email: "",
    department: ""
  })
  const [voterInfoSubmitted, setVoterInfoSubmitted] = useState(false)

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handleSelectCandidate = (categoryId: string, candidate: LeadershipCandidate) => {
    setSelectedVotes(prev => {
      const currentSelection = prev[categoryId] || []
      const isSelected = currentSelection.some(c => c.id === candidate.id)
      
      if (isSelected) {
        // Deselect
        return {
          ...prev,
          [categoryId]: currentSelection.filter(c => c.id !== candidate.id)
        }
      } else {
        // Select (chỉ cho phép chọn 1 người cho mỗi hạng mục)
        return {
          ...prev,
          [categoryId]: [candidate]
        }
      }
    })
  }

  const handleSubmitVote = async (categoryId: string) => {
    const selected = selectedVotes[categoryId]
    const category = leadershipVotingCategories.find(c => c.id === categoryId)
    
    if (selected && selected.length > 0 && voterInfoSubmitted && category) {
      setIsSubmitting(true)
      setSubmitMessage(null)
      
      try {
        // Gửi bình chọn lên webhook
        const response = await submitLeadershipVote(
          categoryId,
          category.name,
          selected[0], // Chỉ lấy 1 ứng viên được chọn
          voterInfo
        )
        
        if (response.success) {
          setSubmitMessage({ type: 'success', text: response.message || 'Bình chọn đã được gửi thành công!' })
          setSubmittedCategories(prev => [...prev, categoryId])
          onSubmitVote?.(categoryId, selected, voterInfo)
        } else {
          setSubmitMessage({ type: 'error', text: response.error || 'Có lỗi xảy ra khi gửi bình chọn' })
        }
      } catch (error) {
        setSubmitMessage({ type: 'error', text: 'Có lỗi xảy ra khi gửi bình chọn' })
      } finally {
        setIsSubmitting(false)
        // Tự động ẩn message sau 5 giây
        setTimeout(() => setSubmitMessage(null), 5000)
      }
    }
  }

  const handleViewCandidateDetail = (candidate: LeadershipCandidate, categoryId: string) => {
    setSelectedCandidateForDetail(candidate)
    setCurrentCategoryForDetail(categoryId)
    setDetailModalOpen(true)
  }

  const handleVoterInfoSubmit = () => {
    if (voterInfo.name && voterInfo.email && voterInfo.department) {
      setVoterInfoSubmitted(true)
    }
  }

  const isSubmitted = (categoryId: string) => submittedCategories.includes(categoryId)

  const isVoterInfoValid = voterInfo.name && voterInfo.email && voterInfo.department

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-12">
      {/* Submit Message */}
      {submitMessage && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg ${
          submitMessage.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <p className="font-medium">{submitMessage.text}</p>
        </div>
      )}
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] rounded-full text-white text-sm font-medium mb-4">
          <Award className="h-4 w-4" />
          Bình chọn dành cho Lãnh đạo/Quản lý
        </div>
        <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl mb-4">
          Bình chọn các hạng mục năm 2024
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Vui lòng xem xét kỹ và bình chọn cho các ứng cử viên xứng đáng trong từng hạng mục
        </p>
      </div>

      {/* Voter Info Form */}
      <div className="mb-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
        <div className="px-6 py-5 bg-gradient-to-r from-[#1e40af] to-[#3b82f6]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Thông tin người bình chọn</h3>
              <p className="text-sm text-white/80">Vui lòng nhập thông tin trước khi bình chọn</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {voterInfoSubmitted ? (
            <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <User className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{voterInfo.name}</p>
                  <p className="text-sm text-gray-600">{voterInfo.email} • {voterInfo.department}</p>
                </div>
              </div>
              <button
                onClick={() => setVoterInfoSubmitted(false)}
                className="text-sm text-[#1e40af] hover:underline font-medium"
              >
                Chỉnh sửa
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="voterName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Họ và tên *
                  </Label>
                  <Input
                    id="voterName"
                    value={voterInfo.name}
                    onChange={(e) => setVoterInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Nhập họ và tên"
                    className="mt-1 text-gray-900"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="voterEmail" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email *
                  </Label>
                  <Input
                    id="voterEmail"
                    type="email"
                    value={voterInfo.email}
                    onChange={(e) => setVoterInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="email@galaxy.edu.vn"
                    className="mt-1 text-gray-900"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="voterDepartment" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Phòng ban *
                  </Label>
                  <Input
                    id="voterDepartment"
                    value={voterInfo.department}
                    onChange={(e) => setVoterInfo(prev => ({ ...prev, department: e.target.value }))}
                    placeholder="Nhập tên phòng ban"
                    className="mt-1 text-gray-900"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleVoterInfoSubmit}
                  disabled={!isVoterInfoValid}
                  className={`
                    px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
                    ${isVoterInfoValid 
                      ? 'bg-[#1e40af] text-white hover:bg-[#1e3a8a] shadow-lg' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  Xác nhận thông tin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {leadershipVotingCategories.map((category) => (
          <CategoryAccordion
            key={category.id}
            category={category}
            isExpanded={expandedCategory === category.id}
            onToggle={() => toggleCategory(category.id)}
            selectedCandidates={selectedVotes[category.id] || []}
            onSelectCandidate={(candidate) => handleSelectCandidate(category.id, candidate)}
            onViewCandidateDetail={(candidate) => handleViewCandidateDetail(candidate, category.id)}
            onSubmitVote={() => handleSubmitVote(category.id)}
            isSubmitted={isSubmitted(category.id)}
            isSubmitting={isSubmitting}
            voterInfoSubmitted={voterInfoSubmitted}
          />
        ))}
      </div>

      {/* Candidate Detail Modal */}
      <CandidateDetailModal
        candidate={selectedCandidateForDetail}
        isOpen={detailModalOpen}
        onClose={() => {
          setDetailModalOpen(false)
          setSelectedCandidateForDetail(null)
        }}
        onSelect={(candidate) => {
          if (currentCategoryForDetail) {
            handleSelectCandidate(currentCategoryForDetail, candidate)
          }
        }}
        isSelected={
          currentCategoryForDetail && selectedCandidateForDetail
            ? (selectedVotes[currentCategoryForDetail] || []).some(c => c.id === selectedCandidateForDetail.id)
            : false
        }
        showVoteButton={voterInfoSubmitted && currentCategoryForDetail ? !isSubmitted(currentCategoryForDetail) : false}
      />
    </div>
  )
}

interface CategoryAccordionProps {
  category: LeadershipVotingCategory
  isExpanded: boolean
  onToggle: () => void
  selectedCandidates: LeadershipCandidate[]
  onSelectCandidate: (candidate: LeadershipCandidate) => void
  onViewCandidateDetail: (candidate: LeadershipCandidate) => void
  onSubmitVote: () => void
  isSubmitted: boolean
  isSubmitting: boolean
  voterInfoSubmitted: boolean
}

function CategoryAccordion({
  category,
  isExpanded,
  onToggle,
  selectedCandidates,
  onSelectCandidate,
  onViewCandidateDetail,
  onSubmitVote,
  isSubmitted,
  isSubmitting,
  voterInfoSubmitted
}: CategoryAccordionProps) {
  const hasVoted = selectedCandidates.length > 0
  const hasCandidates = category.candidates.length > 0
  const canSubmit = hasVoted && voterInfoSubmitted && !isSubmitting

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-xl">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Users className="h-4 w-4" />
                {category.voters}
              </span>
              {category.note && (
                <span className="text-sm text-[#f97316] font-medium flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {category.note}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {isSubmitted ? (
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              ✓ Đã gửi bình chọn
            </span>
          ) : hasVoted ? (
            <span className="px-3 py-1 bg-[#f97316]/10 text-[#f97316] rounded-full text-sm font-medium">
              Đã chọn {selectedCandidates.length} ứng viên
            </span>
          ) : null}
          
          <ChevronDown 
            className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          {/* Description */}
          <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
            <Info className="h-5 w-5 text-[#1e40af] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">{category.description}</p>
          </div>

          {/* Warning if voter info not submitted */}
          {!voterInfoSubmitted && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                Vui lòng nhập và xác nhận thông tin người bình chọn ở trên trước khi bình chọn.
              </p>
            </div>
          )}

          {/* Candidates Grid */}
          {hasCandidates ? (
            <>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.candidates.map((candidate, index) => (
                  <LeadershipCandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    index={index}
                    isSelected={selectedCandidates.some(c => c.id === candidate.id)}
                    onSelect={voterInfoSubmitted ? onSelectCandidate : undefined}
                    onViewDetail={() => onViewCandidateDetail(candidate)}
                    showVoteButton={!isSubmitted && voterInfoSubmitted}
                  />
                ))}
              </div>

              {/* Submit Button */}
              {!isSubmitted && (
                <div className="mt-8 flex flex-col items-center gap-2">
                  <button
                    onClick={onSubmitVote}
                    disabled={!canSubmit || isSubmitting}
                    className={`
                      px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform
                      ${canSubmit && !isSubmitting
                        ? 'bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-white shadow-lg shadow-orange-500/25 hover:scale-105' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    {isSubmitting ? 'Đang gửi...' : `Gửi bình chọn cho ${category.name}`}
                  </button>
                  {!voterInfoSubmitted && hasVoted && (
                    <p className="text-sm text-gray-500">Vui lòng xác nhận thông tin người bình chọn trước</p>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="mt-6 text-center py-12 bg-gray-50 rounded-xl">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Danh sách ứng cử viên sẽ được cập nhật sớm</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
