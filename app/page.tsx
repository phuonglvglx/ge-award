"use client"

import { useState } from "react"
import { NominationHeader } from "@/components/nomination-header"
import { NomineeGrid } from "@/components/nominee-grid"
import { StatsSection } from "@/components/stats-section"
import { PeriodTabs } from "@/components/period-tabs"
import { NominationModal } from "@/components/nomination-modal"
import { dataNominee } from "@/data/data"

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
      return dataNominee.map(formatNomineeForDisplay)
    }
  })()

  return (
    <div className="min-h-screen">
      <NominationHeader
        selectedMonth={selectedPeriod}
        nomineeCount={currentNominees.length}
        onNominateClick={() => setIsNominationModalOpen(true)}
      />
      <StatsSection />
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

      <NominationModal
        isOpen={isNominationModalOpen}
        onClose={() => setIsNominationModalOpen(false)}
      />
    </div>
  );
}
