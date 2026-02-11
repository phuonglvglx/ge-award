// Dữ liệu các hạng mục bình chọn dành cho Lãnh đạo/Quản lý

export interface LeadershipVotingCategory {
  id: string;
  name: string;
  description: string;
  voters: string; // "Quản lý vote" hoặc "Ban điều hành (Anh Hiếu, Anh Linh, Anh Quế)"
  note: string;
  candidates: LeadershipCandidate[];
}

export interface LeadershipCandidate {
  id: number;
  name: any;
  position?: any;
  department?: any;
  achievement?: any; // Tiêu đề thành tích ngắn gọn
  achievements?: any[]; // Danh sách thành tích chi tiết
  img?: any;
}

export const employeeOfYearCandidates: LeadershipCandidate[] = [
  {
    id: 1,
    name: "Mai Thị Hồng Diễm",
    position: "Nhân viên Tư vấn tuyển sinh",
    department: "Phòng Tư vấn tuyển sinh 2",
    achievement:
      "Đạt 132.70% KPI năm với doanh thu cá nhân ấn tượng ~4.3 tỷ đồng.",
    achievements: [
      "Hiệu suất kinh doanh: Thực đạt 132.70% KPI năm 2025.",
      "Doanh số: Đóng góp ~4.3 tỷ đồng Cash Revenue cho đơn vị.",
      "Chỉ số ARPE: Duy trì mức trung bình 352 triệu/nhân sự.",
      "Vinh danh: Nhân viên kinh doanh/tuyển sinh xuất sắc Quý 2/2025.",
    ],
    img: "1J8L8Va_4XhGX3reIJ0kFCOYfG6ccEv4J",
  },
  {
    id: 2,
    name: "Vũ Thị Hoa",
    position: "Quản lý phòng vận hành mentor 1-1",
    department: "Mentor 1-1",
    achievement:
      "Đầu cầu vận hành đa nhiệm, xử lý dứt điểm dữ liệu tồn đọng và chuẩn hóa hệ thống 1-n.",
    achievements: [
      "Vận hành cốt lõi: Theo sát tiến độ các đầu việc trọng tâm, hỗ trợ liên bộ phận đảm bảo quy trình trơn tru.",
      "Cải tiến hệ thống: Chủ động đề xuất tối ưu hệ thống IT dựa trên thực tế vận hành, nâng cao chất lượng dịch vụ.",
      "Quản trị dữ liệu: Xử lý dứt điểm các lớp tồn đọng, làm sạch dữ liệu và chuẩn hóa quy tắc đối soát cùng Kế toán.",
      "Trách nhiệm: Đảm bảo tính lương gia sư chính xác, hỗ trợ gia sư mới và trực hỗ trợ sự cố bất kể giờ giấc.",
    ],
    img: "1VMCMROvC4iXFO4Ac3dLz-OymCCA1sZ8-",
  },
  {
    id: 3,
    name: "Hoàng Tùng",
    position: "Trưởng phòng Phát triển & Thử nghiệm",
    department: "Beta Lab",
    achievement:
      "Sáng lập BetaLab, triển khai thành công mô hình lớp học 1:n chia phòng và tool cá nhân hóa học tập.",
    achievements: [
      "R&D đột phá: Trực tiếp xây dựng BetaLab, biến các ý tưởng nghiên cứu thành công cụ hỗ trợ thực tế cho toàn công ty.",
      "Tối ưu vận hành: Duy trì hệ thống tinh gọn, quản lý 18.000 học sinh chỉ với 2-3 nhân sự.",
      "Dự án tiêu biểu: Thiết kế mô hình lớp 1:n chia phòng nhỏ giúp tăng tương tác và tỷ lệ chuyển đổi.",
      "Công nghệ: Tự học code và AI để xây dựng tool lộ trình học tập cá nhân hóa dựa trên năng lực từng học viên.",
    ],
    img: "1pqzjCIxyjipVeOeOZuj0v50b2oU014xC",
  },
  {
    id: 4,
    name: "Bùi Thị Thuỳ Linh",
    position: "Kế toán tổng hợp",
    department: "Kế toán",
    achievement:
      "Nhân sự nòng cốt vượt giai đoạn khó khăn, đảm nhận khối lượng việc của 2-3 người.",
    achievements: [
      "Sự bền bỉ: Đồng hành cùng team qua giai đoạn tài chính khó khăn nhất (2023-2024) với thái độ tích cực.",
      "Hiệu suất cao: Sẵn sàng handle khối lượng công việc của 2-3 nhân sự trong tình trạng thiếu người.",
      "Phẩm chất: Làm việc nhanh nhẹn, chính xác, trung thực và có ý chí tiến thủ cao.",
      "Vinh danh: Nhân viên hỗ trợ (BO) xuất sắc Quý 2/2025.",
    ],
    img: "1FLxlMG0irCwjX7lJBpOajO7fPdnGyY3h",
  },
  {
    id: 5,
    name: "Nguyễn Thị Nga",
    position: "Nhân viên tư vấn tuyển sinh",
    department: "Trung tâm tư vấn tuyển sinh HMO",
    achievement:
      "Duy trì phong độ ổn định nhất bộ phận với 150% KPI năm, doanh thu đạt 5.5 tỷ.",
    achievements: [
      "Hiệu suất kỷ lục: Đạt 150% KPI cả năm 2025 (mức cao nhất bộ phận).",
      "Doanh số: Mang về ~5.5 tỷ đồng Cash Revenue cá nhân.",
      "Chỉ số ARPE: Đạt mức 560 triệu, khẳng định kỹ năng tư vấn chuyên nghiệp.",
      "Đánh giá: Nhân sự nổi bật nhất bộ phận tuyển sinh với sự ổn định xuyên suốt các quý.",
    ],
    img: "16xd23qTeGkd2WRFQA8OCGo9ML9l34Ula",
  },
  {
    id: 6,
    name: "Hoàng Cẩm Linh",
    position: "Giám đốc vận hành",
    department: "Mentor 1-1",
    achievement:
      "Tiếp nhận và tối ưu thành công hệ thống vận hành phức tạp giữa ICT và Mentor 1-1.",
    achievements: [
      "Tổ chức & Điều phối: Tối ưu nhân sự và quy trình vận hành sản phẩm Gia sư/Lập trình Kids trong bối cảnh tăng trưởng nhanh.",
      "Thích nghi: Tiếp nhận và vận hành ổn định hệ thống ICT trong thời gian ngắn với nhiều thách thức về dữ liệu.",
      "Ownership: Chịu trách nhiệm cao nhất trong việc phân bổ nguồn lực, giữ nhịp hệ thống vững chắc.",
      "Vinh danh: Nhân viên Giáo vụ xuất sắc Quý 3/2025.",
    ],
    img: "1MQlbVbB3Jo6QhPEdFp9DJwvd6EaQU3BX",
  },
  {
    id: 7,
    name: "Nông Thị Hoài Anh",
    position: "Phó phòng quản lý giáo viên",
    department: "Quản trị giáo viên",
    achievement:
      "Tự phát triển hệ thống TMS giúp rút ngắn 90% thời gian tra cứu và quản lý chất lượng giáo viên.",
    achievements: [
      "Đột phá Tech: Đảm nhiệm vai trò BA kiêm Dev để xây dựng hệ thống TMS (Teacher Management System).",
      "Hiệu quả thực tế: Rút ngắn thời gian tra cứu dữ liệu từ 20 phút xuống 2 phút; thời gian chấm video GV giảm từ 60 phút xuống 20 phút.",
      "Quản trị tập trung: Hợp nhất 15 file lẻ vào 1 nền tảng duy nhất, cập nhật dữ liệu thời gian thực.",
      "Cảnh báo sớm: Hệ thống tự động phát hiện vi phạm của GV, giảm thiểu phản ánh tiêu cực từ phụ huynh.",
    ],
    img: "1LNGd3R-gr9oD65CO_e-vJxzWCJRqdFxl",
  },
  {
    id: 8,
    name: "Phùng Thúy Hằng",
    position: "Nhân viên tuyển dụng",
    department: "Quản trị nguồn nhân lực",
    achievement:
      "Hoàn thành 192 offer FT và 100% tuyển dụng CTV cho các dự án chiến lược ICC, Zeus.",
    achievements: [
      "Tuyển dụng: Đạt 192 offer fulltime, đóng góp lớn vào việc hoàn thành 80% KPI tuyển dụng toàn team.",
      "Dự án khẩn cấp: Tuyển 50 CTV vận hành ICC trong 1 tháng và đội ngũ chuyển đổi LMS Zeus kịp tiến độ.",
      "Đào tạo hội nhập: Đảm bảo 100% nhân viên mới được đào tạo văn hóa, giúp tăng tỷ lệ gắn bó.",
      "Gắn kết văn hóa: Host chính và thành viên BTC của nhiều sự kiện lớn (Sinh nhật HMO, Teambuilding, NYP).",
    ],
    img: "1gbjZ5n119AuuS5CaG-R3xcPyBWzuYAql",
  },
  {
    id: 9,
    name: "Nguyễn Thị Trang",
    position: "Nhân viên phát triển học viên",
    department: "Gia hạn ICANCONNECT",
    achievement:
      "TOP 1 Performance phòng Gia hạn với 147.39% KPI và tỷ lệ RR ấn tượng 51.48%.",
    achievements: [
      "Thành tích dẫn đầu: TOP 1 Performance năm toàn phòng Gia hạn.",
      "Chỉ số RR: Duy trì tỷ lệ giữ chân học viên (RR) trung bình đạt 51.48%.",
      "Dịch vụ khách hàng: Xử lý ticket đúng hạn 100%, phối hợp liên phòng ban hiệu quả.",
      "Vinh danh: Nhân viên kinh doanh/tuyển sinh xuất sắc Quý 4/2025.",
    ],
    img: "13YqGRXg1DkAcj2fF7wD8dlWrAASW3uQr",
  },
  {
    id: 10,
    name: "Lê Bảo Trâm",
    position: "Nhân viên phát triển chương trình",
    department: "FUNiX Ways",
    achievement:
      "Đóng góp chủ chốt trong việc xây dựng Roadmap cho dòng sản phẩm FUNiX Way 2.0.",
    achievements: [
      "Phát triển sản phẩm: Nỗ lực vượt bậc trong việc thiết kế lộ trình (Roadmap) cho các dòng sản phẩm thế hệ mới.",
      "Chuyên môn: Đảm bảo tính khoa học và thực tiễn trong nội dung chương trình học.",
      "Vinh danh: Nhân viên Giáo vụ xuất sắc Quý 4/2025.",
    ],
    img: "1XI7b-KTJJKkEYOy7CTrqiJnkmOT9Z2Vt",
  },
  {
    id: 11,
    name: "Bùi Ngọc Sơn",
    position: "Phó giám đốc trung tâm công nghệ",
    department: "Phát triển phần mềm",
    achievement:
      "Dẫn dắt chuyển dịch thành công sang ICan Learning Platform với hơn 40.000 ca học ổn định.",
    achievements: [
      "Lãnh đạo công nghệ: Dẫn dắt đội ngũ hoàn thành chuyển dịch nền tảng sang ICan Learning Platform an toàn, trơn tru.",
      "Độ ổn định hệ thống: Nền tảng phục vụ thành công hơn 40.000 ca học, đảm bảo tính minh bạch và đồng bộ.",
      "Tầm nhìn dữ liệu: Đặt nền móng cho việc quản trị và ra quyết định dựa trên dữ liệu (Data-driven).",
      "Vinh danh: Nhân viên Tech/Product xuất sắc Quý 4/2025.",
    ],
    img: "1kITqlqehwAxcwmP-m4hvrjkDQBjfcDa0",
  },
  {
    id: 12,
    name: "Đặng Thị Linh",
    position: "Nhân viên tiền lương và phúc lợi",
    department: "Quản trị nguồn nhân lực",
    achievement:
      "Handle 70% khối lượng operation của team, cải tiến quy trình báo cáo nhân sự hiệu quả.",
    achievements: [
      "Năng lực xử lý: Một mình đảm nhận 70% khối lượng công việc operation của team trong giai đoạn thiếu nhân sự.",
      "Cải tiến quy trình: Đề xuất công thức và form báo cáo ngắn gọn, tối ưu thời gian thực hiện báo cáo nhân sự.",
      "Coaching: Trực tiếp hướng dẫn và hỗ trợ nhân viên mới hòa nhập công việc nhanh chóng.",
      "Tâm thế phục vụ: Luôn hỗ trợ kịp thời các vấn đề phúc lợi, tạo sự an tâm cho đội ngũ nhân viên.",
    ],
    img: "1CXCUvxtJ6WAsPQDyF3RK6v9jTPWROY3A",
  },
];

// Danh sách đề cử cho Quản lý xuất sắc năm (sử dụng cùng 12 ứng cử viên)
export const managerOfYearCandidates: LeadershipCandidate[] = [
  {
    id: 1,
    name: "Mai Thị Hồng Diễm",
    position: "Nhân viên Tư vấn tuyển sinh",
    department: "Phòng Tư vấn tuyển sinh 2",
    achievement: "Nhân viên kinh doanh/tuyển sinh xuất sắc Quý 2",
    img: "1J8L8Va_4XhGX3reIJ0kFCOYfG6ccEv4J",
  },
  {
    id: 2,
    name: "Vũ Thị Hoa",
    position: "Quản lý phòng vận hành mentor 1-1",
    department: "Mentor 1-1",
    achievement: "Nhân viên Giáo vụ xuất sắc Quý 2",
    img: "1VMCMROvC4iXFO4Ac3dLz-OymCCA1sZ8-",
  },
  {
    id: 3,
    name: "Hoàng Tùng",
    position: "Trưởng phòng Phát triển & Thử nghiệm",
    department: "Phòng Phát triển & Thử nghiệm (Beta Lab)",
    achievement: "Nhân viên Tech/Product xuất sắc Quý 2",
    img: "1pqzjCIxyjipVeOeOZuj0v50b2oU014xC",
  },
  {
    id: 4,
    name: "Bùi Thị Thuỳ Linh",
    position: "Kế toán tổng hợp",
    department: "Kế toán",
    achievement: "Nhân viên hỗ trợ (BO) xuất sắc Quý 2",
    img: "1hf1v_WuGeiT6zldvX_pBvy-wZotmlIjh",
  },
  {
    id: 5,
    name: "Vũ Thị Hồng Nhung",
    position: "Nhân viên tư vấn tuyển sinh",
    department: "Trung tâm tư vấn tuyển sinh HMO",
    achievement: "Nhân viên kinh doanh/tuyển sinh xuất sắc Quý 3",
    img: "1vwOn1GkfaDNoG1GbwhsU6-8_-iHD0XkF",
  },
  {
    id: 6,
    name: "Hoàng Cẩm Linh",
    position: "Giám đốc vận hành",
    department: "Mentor 1-1",
    achievement: "Nhân viên Giáo vụ xuất sắc Quý 3",
    img: "1bWhvjgmSk1QhsTiP-p7ClB77r_Kl5Jqh",
  },
  {
    id: 7,
    name: "Nông Thị Hoài Anh",
    position: "Phó phòng quản lý giáo viên",
    department: "Quản trị giáo viên",
    achievement: "Nhân viên Tech/Product xuất sắc Quý 3",
    img: "1LNGd3R-gr9oD65CO_e-vJxzWCJRqdFxl",
  },
  {
    id: 8,
    name: "Phùng Thúy Hằng",
    position: "Nhân viên tuyển dụng",
    department: "Quản trị nguồn nhân lực",
    achievement: "Nhân viên hỗ trợ (BO) xuất sắc Quý 3",
    img: "12qEsPnRdU14BbUijGIu5txWwJSQPSbnS",
  },
  {
    id: 9,
    name: "Nguyễn Thị Trang",
    position: "Nhân viên phát triển học viên và khách hàng thân thiết",
    department: "Gia hạn ICANCONNECT",
    achievement: "Nhân viên kinh doanh/tuyển sinh xuất sắc Quý 4",
  },
  {
    id: 10,
    name: "Lê Bảo Trâm",
    position: "Nhân viên phát triển chương trình",
    department: "FUNiX Ways",
    achievement: "Nhân viên Giáo vụ xuất sắc Quý 4",
  },
  {
    id: 11,
    name: "Bùi Ngọc Sơn",
    position: "Phó giám đốc trung tâm công nghệ",
    department: "Phát triển phần mềm",
    achievement: "Nhân viên Tech/Product xuất sắc Quý 4",
  },
  {
    id: 12,
    name: "Đặng Thị Linh",
    position: "Nhân viên tiền lương và phúc lợi",
    department: "Quản trị nguồn nhân lực",
    achievement: "Nhân viên hỗ trợ (BO) xuất sắc Quý 4",
  },
];

// Danh sách đề cử cho Phòng ban/đơn vị xuất sắc năm (sử dụng cùng 12 ứng cử viên)
export const departmentOfYearCandidates: LeadershipCandidate[] = [
  {
    id: 1,
    name: "Test Prep",
    achievement:
      "Đạt ~147% KPI CI và 128% KPI Revenue, tối ưu 24 tỷ Selling Expense.",
    achievements: [
      "Kinh doanh: Đạt ~147% KPI CI và 128% KPI Revenue; Selling Expense tối ưu ~24b; Gross Profit cao hơn kế hoạch 5% nhờ tối ưu chi phí giáo viên.",
      "Truyền thông: Đạt hơn 800 triệu lượt tiếp cận; xây dựng đội ngũ 15 KOL Tiktok (40 triệu tiếp cận); đưa HOCMAIBOOK lọt Top 5 TikTok Shop ngày 12/12.",
      "Vận hành & Chuyên môn: 13 thủ khoa toàn quốc; 13/23 giáo viên ngôi sao; tổ chức 25 sự kiện lớn thu về 42.000 leads chi phí thấp.",
      "Văn hóa: Phối hợp liên phòng ban hiệu quả với tinh thần 'không việc nào quá nhỏ, không việc nào quá khó'; chủ động bán chéo sản phẩm tối đa hóa giá trị khách hàng.",
    ],
    img: "18LzeUTvFurFFtJC6QmT1QFPj_5LJbfOF",
  },
  {
    id: 3,
    name: "ICC Admission & ADC",
    achievement:
      "Vượt 158% KPI Cash English (158B), phát triển hệ thống 3.222 Agent mới.",
    achievements: [
      "Tăng trưởng quy mô: Đạt 158B doanh số English (158% KPI); thu hồi 2.199B công nợ từ GE Partnership Corporate.",
      "Mở rộng thị trường: Tỷ trọng học viên ngoài HN & HCM đạt 60% thông qua kênh Inhouse; phát triển 3.222 đại lý mới (vượt KPI 2000).",
      "Thương hiệu: Tổ chức chuỗi 10 Workshop Easy IELTS (peak 1600 người xem); chiến dịch School Summit tiếp cận 200 trường học với 20.000 học bổng.",
      "Tinh thần chuyển đổi: Tái cấu trúc đội ngũ Marketing đa năng; tối ưu nhân sự QTTT; duy trì đội ngũ Đại sứ Giáo dục ổn định nhất thị trường Edtech.",
    ],
    img: "1ia1UN8QLqIil-fXVK05KnA7VNLWqujTx",
  },
  {
    id: 7,
    name: "ICC Operations & Teaching",
    achievement:
      "Tự xây dựng hệ thống TMS tối ưu 80% thời gian quản lý và nâng cao chất lượng giảng dạy.",
    achievements: [
      "Chất lượng giảng dạy: Tăng tỷ lệ GV rank A (IELTS từ 15% lên 50%); giảm tỷ lệ phản hồi tiêu cực từ PH xuống còn 1-2%; tỷ lệ đầu ra HV tăng 18%.",
      "Đột phá công nghệ: Tự xây dựng hệ thống TMS (Teacher Management System) không tốn chi phí Tech/Công ty để quản lý tập trung toàn bộ quy trình GV.",
      "Hiệu suất vận hành: Rút ngắn thời gian tra cứu thông tin từ 20 phút xuống 2 phút; thời gian đánh giá video GV giảm từ 60 phút xuống 20 phút.",
      "Quản trị: Hoàn thiện bộ quy định, nội quy và cẩm nang quy chuẩn giao tiếp cho giáo viên toàn hệ thống.",
    ],
    img: "11ia1UN8QLqIil-fXVK05KnA7VNLWqujTx",
  },
  {
    id: 10,
    name: "Mentor 1-1 - Operations & Teaching",
    achievement:
      "Vận hành ổn định hệ thống với số buổi học tăng 40% (453.966 buổi) trong khi giữ nguyên nhân sự.",
    achievements: [
      "Quy mô vận hành: Số học viên tăng 28% (25.782 HV); số buổi học tăng 40% (hơn 450k buổi); tỷ lệ hài lòng đạt 99,4%.",
      "Hỗ trợ kinh doanh: Số lớp học thử tăng đột biến từ 664 lên 3.401 lớp; tỷ lệ chốt lớp đạt ~60% cho các kênh bán chéo.",
      "Tối ưu chi phí: Giảm chi phí tuyển dụng từ 500 triệu xuống 300 triệu; tiếp nhận và tối ưu toàn bộ mảng vận hành sản phẩm ICT.",
      "Cải tiến hệ thống: Ứng dụng Salework và Zalo OA vào Portal; tự động hóa cảnh báo tiến độ và tìm ghép gia sư.",
    ],
    img: "1YJYd6wXcBTT3YBfdHX-DE8cqFbKT8OoK",
  },
  {
    id: 13,
    name: "Tech & Product",
    achievement:
      "Hoàn thành dự án chiến lược Zeus, giúp tự động hóa 90% báo cáo và tập trung hóa dữ liệu.",
    achievements: [
      "Dự án chiến lược: Triển khai thành công hệ thống Zeus và BOS; quản lý song song gần 10 dự án lớn (Hocmai, Funix, LMS, EMS...).",
      "Vượt khó: Tái cơ cấu nguồn lực, làm việc overtime liên tục để tùy biến hệ thống Zeus theo nhu cầu thực tế.",
      "Tác động: Hệ thống Zeus giúp giảm 90% khối lượng báo cáo thủ công; tạo nền tảng tập trung cho học viên - giáo viên - phụ huynh.",
      "Cải thiện dịch vụ: Được các phòng ban ghi nhận về tốc độ hỗ trợ nhanh và tinh thần trách nhiệm cao ('bớt nghe BU complaint').",
    ],
    img: "1gWbHDU_YvTu6yaE0wREix8GGxlwQj5_J",
  },
  {
    id: 14,
    name: "Finance & Accounting",
    achievement:
      "Duy trì vận hành với 50% nhân sự, chuẩn hóa quy trình tài chính cho FUNiX.",
    achievements: [
      "Vượt khó nhân sự: Hoàn thành khối lượng công việc lớn với 5/9 headcount trong nhiều tháng liên tục.",
      "Chuẩn hóa hệ thống: Đưa quy trình thanh toán và kiểm soát chi phí GE vào FUNiX, đảm bảo tính tuân thủ và đồng bộ tập đoàn.",
      "Tối ưu tài chính: Đề xuất phương án xử lý doanh thu đúng luật, góp phần cải thiện chỉ số EBITDA 2025.",
      "Quản trị rủi ro: Đảm bảo bảo mật tài chính trong giai đoạn khó khăn; duy trì quan hệ tốt với cơ quan thuế và kiểm toán.",
    ],
    img: "1gWbHDU_YvTu6yaE0wREix8GGxlwQj5_J",
  },
];

// Danh sách đề cử cho Rising Star (sử dụng cùng 12 ứng cử viên)
export const risingStarCandidates: LeadershipCandidate[] = [
  {
    id: 1,
    name: "Nguyễn Việt Hải",
    department: "Test Prep",
    achievement:
      "Thực hiện solo/PO các dự án trọng điểm, giúp traffic Blog Hướng nghiệp tăng ~20% (600k/tháng).",
    achievements: [
      "Hiệu suất vượt kỳ vọng: Tự triển khai end-to-end (PO + Coding), build lại trang Hướng nghiệp đủ chức năng chỉ trong 4 tuần.",
      "Chủ động & Tiến bộ: Làm chủ n8n nâng cao sau 1 tháng; xử lý DB, API và automation phức tạp; sản xuất sách từ vựng bằng AI.",
      "Dự án trọng điểm: PO dự án Event Phá Kén 2k9 và Blog Hướng nghiệp; tối ưu SEO giúp duy trì traffic 600k lượt truy cập/tháng.",
      "Tiềm năng dài hạn: Tư duy ownership và hệ thống cực tốt, sẵn sàng nhận các scope lớn và bài toán khó của đơn vị.",
    ],
    img: "1LxrQlV6frJUZkhrFOfkwzyyzKWGMjsOC",
  },
  {
    id: 3,
    name: "Ngô Thị Hòa",
    department: "ICC Admission & ADC",
    achievement:
      "Đảm bảo workload của 2 nhân sự QTTT chỉ với 1 mình, làm chủ hệ thống dữ liệu ADC & ICC Acquisition.",
    achievements: [
      "Năng lực quản trị: Tiếp quản toàn bộ hệ thống báo cáo và dữ liệu của ADC và ICC Acquisition từ Quý 4/2025.",
      "Tối ưu nguồn lực: Đảm bảo toàn bộ timeline công việc của 2 vị trí QTTT diễn ra đúng tiến độ dù chỉ có 1 nhân sự đảm nhiệm.",
      "Tinh thần: Luôn chủ động tìm kiếm giải pháp xử lý vấn đề, thể hiện sự tích cực và tinh thần trách nhiệm cao với các mục tiêu của GE.",
    ],
    img: "1Qd-CvZZA57cbqo3_AyVaPZw_ilrwIOCS",
  },
  {
    id: 9,
    name: "Khê Thị Ngọc Liễu",
    department: "Mentor 1-1 - Admission",
    achievement:
      "Dẫn dắt phòng đạt tăng trưởng 183%, tuyển sinh gần 4.500 lớp Gia sư 1:1 trong năm 2025.",
    achievements: [
      "Lãnh đạo bản lĩnh: Ổn định đội ngũ sau tái cơ cấu (chỉ còn 10 người) và thúc đẩy sự phát triển mạnh mẽ của tập thể.",
      "Chỉ số ấn tượng: Tăng trưởng toàn năm đạt 183%; vận hành hơn 100.000 buổi học thực tế cho học viên.",
      "Bứt phá thần tốc: Giai đoạn cuối năm đạt hiệu suất 230% so với đầu năm, nhiều tháng liền đạt danh hiệu 'Tập thể TOP #1 Tăng trưởng'.",
      "Phong cách làm việc: Quyết chiến - Quyết liệt; luôn sẵn sàng đối mặt với mục tiêu cao và nhiệm vụ khó.",
    ],
    img: "1ay8BHBcCm6zaHDXi7RASfNqowUnKPA__",
  },
  {
    id: 12,
    name: "Vũ Phương Thảo",
    department: "ESL",
    achievement:
      "Trực hỗ trợ và điều phối sư phạm xuất sắc cho dự án OMO với tần suất 16 tiết/tuần.",
    achievements: [
      "Hỗ trợ dự án: Đảm nhiệm trực và điều phối sư phạm cho các lớp tiếng Anh tổng quát của dự án OMO từ tháng 10/2025.",
      "Tận tâm: Giám sát sát sao, hỗ trợ học sinh học tập với giáo viên nước ngoài một cách ân cần và gần gũi.",
      "Chuyên môn: Đảm bảo chất lượng các ca học diễn ra thông suốt, góp phần vào uy tín của dự án đối với các nhà trường hợp tác.",
    ],
    img: "1k6HnnoyTeOU901pu_gbtdaZhAUhDbs0P",
  },
  {
    id: 13,
    name: "Thiều Văn Thuận",
    department: "Tech & Product",
    achievement:
      "Hoàn thành 559 task dự án Zeus, commit hơn 100.000 dòng code và xây dựng giải pháp Virtual Classroom.",
    achievements: [
      "Năng suất vượt trội: Hoàn thành hơn 600 task trong năm cho 2 dự án BOS và Zeus; đảm nhiệm các module khó như cache, godmode và permission.",
      "Đóng góp kỹ thuật: Phát triển giải pháp Virtual Classroom trên trình duyệt với chất lượng tương đương app native; thực hiện thành công nhiều task R&D phức tạp.",
      "Sự trưởng thành: Từ nhân sự thực thi đã phát triển thành thành viên có tầm nhìn chiến lược kỹ thuật, chủ động tối ưu codebase từ giai đoạn khởi đầu.",
      "Thái độ: Cầu thị, nhiệt tình hỗ trợ đồng nghiệp và sẵn sàng làm việc ngoài giờ để đảm bảo tiến độ dự án.",
    ],
    img: "1alKpGvl205ZNb90AY9kxz1pFfyjzoEOX",
  },
  {
    id: 14,
    name: "Nguyễn Thị Thu Hằng",
    department: "Finance & Accounting",
    achievement:
      "Kiêm nhiệm nhiều vị trí trong giai đoạn biến động nhân sự, đảm bảo 100% deadline phòng Kế toán.",
    achievements: [
      "Thích nghi nhanh: Gia nhập tháng 3/2025 và ngay lập tức làm chủ khối lượng công việc lớn trong giai đoạn phòng biến động nhân sự.",
      "Hiệu suất: Không ngại kiêm nhiệm và làm thêm giờ để đảm bảo tiến độ báo cáo và thanh toán của công ty.",
      "Kỹ năng chuyên môn: Có kỹ năng lập báo cáo tốt, nắm bắt nhanh các hoạt động kinh doanh thực tế để áp dụng vào nghiệp vụ kế toán.",
      "Hỗ trợ đồng nghiệp: Nhiệt tình hỗ trợ các mảng Finance và đồng nghiệp trong phòng với tinh thần trách nhiệm cao.",
    ],
    img: "1A5PZhcgMFBNENh6_mJ7TVKf_Nj2RMcLg",
  },
];

// Danh sách đề cử cho Best Team Player (sử dụng cùng 12 ứng cử viên)
export const bestTeamPlayerCandidates: LeadershipCandidate[] = [
  {
    id: 1,
    name: "Nguyễn Phương Thảo",
    department: "Test Prep",
    achievement:
      "Dám nhận việc khó, tái cấu trúc đội ngũ TVTS và hỗ trợ CSKH vượt nghẽn hệ thống.",
    achievements: [
      "Lãnh đạo chuyển đổi: Chủ động tiếp nhận quản lý mảng TVTS khi thiếu hụt nhân sự, thực hiện tái cấu trúc đội ngũ để đảm bảo mục tiêu chung.",
      "Sáng tạo vận hành: Phối hợp đưa TVV lên livestream cùng giáo viên, phá bỏ lối mòn để tăng hiệu quả chuyển đổi.",
      "Hỗ trợ liên phòng ban: Chủ động hỗ trợ team CSKH xử lý lượng học viên tăng đột biến vào đầu năm học mới.",
      "Tinh thần đồng đội: Đặt lợi ích tổng thể lên trên chỉ số bộ phận, ưu tiên xử lý các điểm nghẽn của toàn hệ thống.",
    ],
    img: "16jnwBG7158S8gYrohlaYp8VWzklnp-W8",
  },
  {
    id: 3,
    name: "Bồ Quốc Tuấn",
    department: "ICC Admission & ADC",
    achievement:
      "Hình mẫu ứng dụng AI giúp doanh thu Đại sứ đạt 170% KPI (156 tỷ), mở rộng thị trường mới gấp 2 lần.",
    achievements: [
      "Tiên phong công nghệ: Ứng dụng AI tools (AI Certificate từ Google) để sản xuất nội dung truyền thông và báo cáo tức thì.",
      "Kết quả kinh doanh: Thúc đẩy doanh thu kênh Đại sứ đạt 156 tỷ (170% KPI); thu hút thành công 1.006 sellers mới.",
      "Mở rộng thị trường: Phát triển user thị trường mới đạt 3.981 (vượt gần 2 lần kế hoạch 2.000 user).",
      "Gắn kết hệ thống: Tổ chức 16 sự kiện vinh danh và 9 Talkshow Đại sứ, kết nối thông suốt giữa Marketing - Đại sứ - AS.",
    ],
    img: "1pqzjCIxyjipVeOeOZuj0v50b2oU014xC",
  },
  {
    id: 4,
    name: "Trần Huyền Trang",
    department: "ICC Retention",
    achievement:
      "Duy trì doanh số gia hạn đạt 99.67% KPI dù giá gói tăng 18%, quản lý đội ngũ 16 nhân sự.",
    achievements: [
      "Hiệu quả kinh doanh: Doanh số gia hạn đạt gần tuyệt đối KPI (99.67%) với tỷ lệ RR trung bình toàn năm đạt 41.95%.",
      "Tối ưu chi phí: Kiểm soát chi phí/doanh số ở mức ấn tượng 14.36% trong suốt năm 2025.",
      "Lãnh đạo dự án: Dẫn dắt đội ngũ 16 nhân sự và điều hành dự án CSS giúp nâng cao trải nghiệm học viên.",
      "Chuẩn hóa vận hành: Phối hợp liên phòng ban để chuẩn hóa SLA khối, đảm bảo tiến độ gia hạn ổn định.",
    ],
    img: "1hf1v_WuGeiT6zldvX_pBvy-wZotmlIjh",
  },
  {
    id: 9,
    name: "Hồ Thị Nhuần",
    department: "Mentor 1-1 - Admission",
    achievement:
      "Dẫn dắt phòng tăng trưởng doanh thu 140%, tuyển sinh thành công hơn 7.000 lớp Gia sư.",
    achievements: [
      "Thành tích ấn tượng: Tuyển sinh hơn 7.000 lớp Gia sư 1:1, triển khai 150.000 buổi học thực tế cho học viên.",
      "Tăng trưởng bền vững: Doanh thu phòng tăng trưởng vượt bậc 140% so với năm 2024.",
      "Kết nối đội ngũ: Xây dựng văn hóa làm việc đoàn kết, kỷ luật nhưng vẫn giàu tính hỗ trợ, không bỏ ai lại phía sau.",
      "Trợ lực tin cậy: Là đầu tàu sẵn sàng xông pha cho các nhiệm vụ chung của Trung tâm Tuyển sinh.",
    ],
    img: "1qlwuSP_L2sTeOWvHXRPC7UBhj0ZPf8nG",
  },
  {
    id: 12,
    name: "Nguyễn Huệ Chi",
    department: "ESL",
    achievement:
      "Điều phối xuất sắc các dự án OMO tại Thái Nguyên và hỗ trợ đào tạo IELTS cho nhà trường.",
    achievements: [
      "Triển khai dự án: Phối hợp triển khai thành công các lớp tiếng Anh tổng quát và IELTS tại khu vực Thái Nguyên.",
      "Hỗ trợ chuyên môn: Thực hiện đào tạo và phối hợp chặt chẽ với các nhà trường để đảm bảo chất lượng học thuật.",
      "Kết nối đa bộ phận: Phối hợp nhịp nhàng với Tech, CS và BD để vận hành lớp học OMO thông suốt.",
    ],
    img: "1F1qERCi5wodmd0u4K1N4DXfPquVfJB6P",
  },
  {
    id: 13,
    name: "Vũ Việt Anh",
    department: "Tech & Product",
    achievement:
      "Được mệnh danh 'Hoa hậu thân thiện', xử lý sự cố hệ thống Zeus 16h/ngày, cam kết hỗ trợ 5 phút.",
    achievements: [
      "Hỗ trợ không giới hạn: Làm việc 14-16 giờ/ngày giai đoạn ra mắt Zeus, sẵn sàng xử lý sự cố ngoài giờ trong vòng 5 phút.",
      "Cầu nối vận hành: Hỗ trợ chuyên sâu cho Giáo vụ, Kế toán và Bán hàng, giúp tối ưu quy trình và giảm rủi ro vận hành.",
      "Tư duy giải pháp: Không chỉ sửa lỗi mà còn phân tích nguyên nhân, dùng TeamViewer hỗ trợ trực tiếp để đảm bảo trải nghiệm khách hàng.",
      "Độ tin cậy cao: Được đồng nghiệp ghi nhận là 'bộ phận một cửa', luôn đồng hành và là chỗ dựa vững chắc cho các phòng ban.",
    ],
    img: "1jC2cZDejbDiOwF9QeoCcmw03Xk5OOJT9",
  },
  {
    id: 14,
    name: "Bùi Thị Thuỳ Linh",
    department: "Finance & Accounting",
    achievement:
      "Nhân sự trẻ triển vọng, đảm nhận khối lượng việc của 3 người trong giai đoạn khó khăn.",
    achievements: [
      "Nỗ lực vượt bậc: Đảm nhận khối lượng công việc gấp 2-3 lần (tương đương 3 headcount) khi phòng thiếu người.",
      "Độ chính xác cao: Làm việc nhanh nhẹn, chính xác tuyệt đối ngay cả trong giai đoạn tài chính công ty khó khăn nhất.",
      "Tiềm năng phát triển: Có ý chí tiến thủ, trung thực và tin cậy, được đánh giá là nhân tố triển vọng cho các vị trí cao hơn.",
      "Thái độ: Sẵn sàng nhận việc mới, làm việc cẩn thận và luôn hoàn thành đúng deadline được yêu cầu.",
    ],
    img: "1FLxlMG0irCwjX7lJBpOajO7fPdnGyY3h",
  },
];

// Các hạng mục bình chọn dành cho Lãnh đạo
export const leadershipVotingCategories: LeadershipVotingCategory[] = [
  {
    id: "ĐỀ CỬ_NHÂN VIÊN XUẤT SẮC",
    name: "Nhân Viên Xuất Sắc Năm (13 đề cử)",
    description: "",
    voters: "",
    note: "",
    candidates: employeeOfYearCandidates,
  },
  //   {
  //     id: "manager-of-year",
  //     name: "Quản lý xuất sắc năm",
  //     description: "Bình chọn quản lý xuất sắc năm 2024",
  //     voters: "Ban điều hành (Anh Hiếu, Anh Linh, Anh Quế)",
  //     note: "",
  //     candidates: managerOfYearCandidates,
  //   },
  {
    id: "ĐỀ CỬ_PHÒNG BAN XUẤT SẮC",
    name: "Phòng Ban/ Đơn Vị Xuất Sắc Năm (6 đề cử)",
    description: "",
    voters: "",
    note: "",
    candidates: departmentOfYearCandidates,
  },
  {
    id: "ĐỀ CỬ_RISING STAR",
    name: "Nhân Viên Trẻ Triển Vọng - Rising Star (6 đề cử)",
    description: "",
    voters: "",
    note: "",
    candidates: risingStarCandidates,
  },
  {
    id: "ĐỀ CỬ_BEST TEAM PLAYER",
    name: "Nhân Viên Có Tinh Thần Đồng Đội Tốt Nhất - Best Team Player (7 đề cử)",
    description: "",
    voters: "",
    note: "",
    candidates: bestTeamPlayerCandidates,
  },
];

// Kiểm tra xem voter có được phép vote cho category này không
export const canVote = (
  voterRole: "manager" | "executive",
  categoryId: string,
): boolean => {
  const category = leadershipVotingCategories.find((c) => c.id === categoryId);
  if (!category) return false;

  if (voterRole === "executive") {
    return category.voters.includes("Ban điều hành");
  }

  if (voterRole === "manager") {
    return category.voters.includes("Quản lý");
  }

  return false;
};
