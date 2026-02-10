import type { LeadershipCandidate } from "@/data/leadership-voting-data";

// Thông tin người bình chọn
export interface VoterInfo {
  name: string;
  email: string;
  department: string;
}

// Dữ liệu gửi lên webhook khi bình chọn
export interface LeadershipVoteData {
  // Thông tin người bình chọn
  voterName: string;
  voterEmail: string;
  voterDepartment: string;

  // Thông tin hạng mục bình chọn
  categoryId: string;
  categoryName: string;

  // Thông tin ứng viên được chọn
  candidateId: number;
  candidateName: string;
  candidatePosition: string;
  candidateDepartment: string;
  candidateAchievement: string;
  candidateAchievements: string[]; // Danh sách tất cả thành tích

  // Metadata
  submittedAt: string;
  voteType: "leadership"; // Để phân biệt với luồng bình chọn cũ
}

export interface LeadershipVoteResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// URL Webhook cho bình chọn lãnh đạo - Thay đổi URL này theo webhook n8n của bạn
const LEADERSHIP_VOTE_WEBHOOK_URL =
  "https://n8n.ican.vn/webhook/2a2a510b-af60-4000-b250-323b7a1b3e0d";

export const submitLeadershipVote = async (
  categoryId: string,
  categoryName: string,
  candidate: LeadershipCandidate,
  voterInfo: VoterInfo
): Promise<LeadershipVoteResponse> => {
  const voteData: LeadershipVoteData = {
    // Thông tin người bình chọn
    voterName: voterInfo.name,
    voterEmail: voterInfo.email,
    voterDepartment: voterInfo.department,

    // Thông tin hạng mục
    categoryId: categoryId,
    categoryName: categoryName,

    // Thông tin ứng viên
    candidateId: candidate.id,
    candidateName: candidate.name,
    candidatePosition: candidate.position,
    candidateDepartment: candidate.department,
    candidateAchievement: candidate.achievement,
    candidateAchievements: candidate.achievements || [candidate.achievement],

    // Metadata
    submittedAt: new Date().toISOString(),
    voteType: "leadership",
  };

  try {
    const response = await fetch(LEADERSHIP_VOTE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voteData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Cố gắng parse JSON response, nếu không được thì vẫn coi là thành công
    try {
      await response.json();
    } catch {
      // Response không phải JSON, nhưng vẫn OK
    }

    return {
      success: true,
      message: "Bình chọn đã được gửi thành công!",
    };
  } catch (error) {
    console.error("Error submitting leadership vote:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi gửi bình chọn",
    };
  }
};

export type { LeadershipCandidate };
