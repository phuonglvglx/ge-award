"use client"

import { Users, Vote } from "lucide-react"

interface VotingModeToggleProps {
  mode: "employee" | "leadership"
  onModeChange: (mode: "employee" | "leadership") => void
}

export function VotingModeToggle({ mode, onModeChange }: VotingModeToggleProps) {
  const modes = [
    { 
      value: "employee" as const, 
      label: "Danh sách Nhân viên/Tập thể xuất sắc",
      icon: Users,
      description: "Xem danh sách đề cử theo tháng, quý"
    },
    { 
      value: "leadership" as const, 
      label: "Bình chọn Lãnh đạo/Quản lý",
      icon: Vote,
      description: "Bình chọn các hạng mục năm 2024"
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2">
        <nav className="flex gap-2" aria-label="Voting mode toggle">
          {modes.map((modeItem) => {
            const Icon = modeItem.icon
            return (
              <button
                key={modeItem.value}
                onClick={() => onModeChange(modeItem.value)}
                className={`
                  flex-1 relative px-4 py-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02]
                  ${
                    mode === modeItem.value
                      ? 'bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/50'
                  }
                `}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{modeItem.label}</span>
                  <span className="sm:hidden">
                    {modeItem.value === "employee" ? "Nhân viên" : "Bình chọn"}
                  </span>
                </div>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
