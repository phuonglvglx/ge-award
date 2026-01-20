"use client"

import { Badge } from "@/components/ui/badge"

interface MonthData {
  value: string
  label: string
  nominees: any[]
}

interface MonthTabsProps {
  selectedMonth: string
  onMonthChange: (month: string) => void
  availableMonths: MonthData[]
  periodType?: "month" | "quarter"
}

export function MonthTabs({ selectedMonth, onMonthChange, availableMonths, periodType = "month" }: MonthTabsProps) {
  // Filter months based on period type
  const filteredMonths = periodType === "month" 
    ? availableMonths.filter(m => parseInt(m.value) <= 12)
    : availableMonths.filter(m => parseInt(m.value) > 12)

  // Split into two rows for better layout
  const row1Months = filteredMonths.filter((m, idx) => idx < Math.ceil(filteredMonths.length / 2))
  const row2Months = filteredMonths.filter((m, idx) => idx >= Math.ceil(filteredMonths.length / 2))

  const renderMonthButton = (month: MonthData) => (
    <button
      key={month.value}
      onClick={() => onMonthChange(month.value)}
      className={`
        relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105
        ${
          selectedMonth === month.value
            ? 'bg-[#f97316] text-white shadow-lg shadow-orange-500/25'
            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/50'
        }
      `}
    >
      <span>{month.label}</span>
      <Badge 
        variant="secondary"
        className={`
          text-xs font-semibold
          ${selectedMonth === month.value 
            ? 'bg-white/20 text-white border-white/30' 
            : 'bg-gray-200 text-gray-600'
          }
        `}
      >
        {month.nominees.length}
      </Badge>
      {selectedMonth === month.value && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-[#f97316] rotate-45"></div>
      )}
    </button>
  );

  if (filteredMonths.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 text-center">
          <p className="text-gray-500">Chưa có dữ liệu cho {periodType === "month" ? "các tháng" : "các quý"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2 flex flex-col gap-2">
        {row1Months.length > 0 && (
          <nav className="flex flex-wrap justify-center gap-2" aria-label="Tabs Row 1">
            {row1Months.map(renderMonthButton)}
          </nav>
        )}
        {row2Months.length > 0 && (
          <nav className="flex flex-wrap justify-center gap-2" aria-label="Tabs Row 2">
            {row2Months.map(renderMonthButton)}
          </nav>
        )}
      </div>
    </div>
  )
}
