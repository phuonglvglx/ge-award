"use client"

interface PeriodTabsProps {
  selectedPeriod: "month" | "year" | "quarter"
  onPeriodChange: (period: "month" | "year" | "quarter") => void
}

export function PeriodTabs({ selectedPeriod, onPeriodChange }: PeriodTabsProps) {
  const periods = [
    { value: "month" as const, label: "Tháng" },
    { value: "quarter" as const, label: "Quý" },
    { value: "year" as const, label: "Năm" },
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2">
        <nav className="flex gap-2" aria-label="Period tabs">
          {periods.map((period) => (
            <button
              key={period.value}
              onClick={() => onPeriodChange(period.value)}
              className={`
                flex-1 relative px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105
                ${
                  selectedPeriod === period.value
                    ? 'bg-[#f97316] text-white shadow-lg shadow-orange-500/25'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/50'
                }
              `}
            >
              {period.label}
              {selectedPeriod === period.value && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-[#f97316] rotate-45"></div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
