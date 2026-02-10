"use client"

import { useState } from "react"
import { NominationHeader } from "@/components/nomination-header"
import { NomineeGrid } from "@/components/nominee-grid"
import { StatsSection } from "@/components/stats-section"
import { PeriodTabs } from "@/components/period-tabs"
import { NominationModal } from "@/components/nomination-modal"
import { VotingModeToggle } from "@/components/voting-mode-toggle"
import { LeadershipVotingSection } from "@/components/leadership-voting-section"
import { SuccessModal } from "@/components/success-modal"
import { dataNominee } from "@/data/data"
import type { LeadershipCandidate } from "@/data/leadership-voting-data"
import { leadershipVotingCategories } from "@/data/leadership-voting-data"

// Chuyển đổi dữ liệu nominee thành format phù hợp với component hiện tại
const formatNomineeForDisplay = (nominee: any) => ({
  id: nominee.name + nominee.department, // Tạo id duy nhất
  name: nominee.name,
  department: nominee.department,
  image: nominee.img,
  achievements: [nominee.achive, nominee.title].filter(Boolean),
  description: nominee.desc || "",
});

export default function NominationPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"month" | "year" | "quarter">("month")
  const [isNominationModalOpen, setIsNominationModalOpen] = useState(false)
  const [votingMode, setVotingMode] = useState<"employee" | "leadership">("employee")
  
  // State cho Success Modal
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [successModalData, setSuccessModalData] = useState<{
    voterInfo: { name: string; email: string; department: string }
    categoryName: string
    candidateNames: string[]
  } | null>(null)

  // Lấy nominees theo period được chọn
  const currentNominees = (() => {
    if (selectedPeriod === "month") {
      // Hiển thị tất cả nominees của các tháng (month value <= 12)
      return dataNominee
        .filter(nominee => parseInt(nominee.month) <= 12)
        .map(formatNomineeForDisplay)
    } else if (selectedPeriod === "quarter") {
      // Hiển thị tất cả nominees của các quý (month value > 12: 13=Q1, 14=Q2, 15=Q3, 16=Q4)
      return dataNominee
        .filter(nominee => parseInt(nominee.month) > 12)
        .map(formatNomineeForDisplay)
    } else {
      // year: Hiển thị tất cả nominees (chưa có dữ liệu riêng cho năm)
      return []
    }
  })()

  // Xử lý khi gửi bình chọn từ luồng leadership
  const handleLeadershipVoteSubmit = (
    categoryId: string, 
    selectedCandidates: LeadershipCandidate[],
    voterInfo: { name: string; email: string; department: string }
  ) => {
    console.log(`Bình chọn cho ${categoryId}:`, selectedCandidates)
    console.log(`Người bình chọn:`, voterInfo)
    
    // Tìm tên hạng mục từ categoryId
    const category = leadershipVotingCategories.find(c => c.id === categoryId)
    const categoryName = category?.name || categoryId
    
    // Hiển thị modal thành công
    setSuccessModalData({
      voterInfo,
      categoryName,
      candidateNames: selectedCandidates.map(c => c.name)
    })
    setIsSuccessModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <NominationHeader
        selectedMonth={selectedPeriod}
        nomineeCount={currentNominees.length}
        onNominateClick={() => setIsNominationModalOpen(true)}
      />
      <StatsSection />
      
      {/* Toggle giữa 2 chế độ */}
      <div className="mx-auto max-w-7xl px-6 pt-12">
        <VotingModeToggle 
          mode={votingMode} 
          onModeChange={setVotingMode} 
        />
      </div>

      {/* Hiển thị nội dung dựa trên chế độ */}
      {votingMode === "employee" ? (
        <>
          <div className="mx-auto max-w-2xl text-center my-8">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
              Nhân viên và Tập thể xuất sắc
            </h2>
            <p className="mt-4 text-lg leading-8 text-white">
              Được đề cử dựa trên thành tích và đóng góp nổi bật trong tháng qua
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-6 py-12">
            <PeriodTabs
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </div>

          <NomineeGrid nominees={currentNominees} />
        </>
      ) : (
        <LeadershipVotingSection onSubmitVote={handleLeadershipVoteSubmit} />
      )}

      <NominationModal
        isOpen={isNominationModalOpen}
        onClose={() => setIsNominationModalOpen(false)}
      />

      {/* Success Modal */}
      {successModalData && (
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={() => {
            setIsSuccessModalOpen(false)
            setSuccessModalData(null)
          }}
          voterInfo={successModalData.voterInfo}
          categoryName={successModalData.categoryName}
          candidateNames={successModalData.candidateNames}
        />
      )}
    </div>
  );
}
