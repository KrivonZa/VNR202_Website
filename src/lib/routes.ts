// Routes constants cho ứng dụng
export const ROUTES = {
  HOME: "/",
  HISTORICAL_CONTEXT: "/historical-context",
  TIMELINE: "/timeline",
  PARTY_FORMATION: "/party-formation",
  PLATFORM: "/platform",
  HISTORICAL_SIGNIFICANCE: "/historical-significance",
  INEVITABILITY: "/inevitability",
  QUIZ: "/quiz",
  SHARING: "/sharing",
  DASHBOARD: "/dashboard",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];

// Mapping từ section names sang routes
export const SECTION_TO_ROUTE: Record<string, RouteValue> = {
  landing: ROUTES.HOME,
  "historical-context": ROUTES.HISTORICAL_CONTEXT,
  timeline: ROUTES.TIMELINE,
  "party-formation": ROUTES.PARTY_FORMATION,
  platform: ROUTES.PLATFORM,
  "historical-significance": ROUTES.HISTORICAL_SIGNIFICANCE,
  inevitability: ROUTES.INEVITABILITY,
  quiz: ROUTES.QUIZ,
  sharing: ROUTES.SHARING,
  dashboard: ROUTES.DASHBOARD,
};

// Metadata cho từng trang
export const PAGE_METADATA = {
  [ROUTES.HOME]: {
    title: "Những Khó Khăn Của Việt Nam Sau Năm 1945",
    description:
      "Tìm hiểu về giai đoạn Ngàn cân treo sợi tóc - Những thử thách nghiêm trọng và cách vượt qua của dân tộc Việt Nam",
  },
  [ROUTES.HISTORICAL_CONTEXT]: {
    title: "Bối Cảnh Lịch Sử",
    description: "Tìm hiểu bối cảnh lịch sử Việt Nam sau năm 1945",
  },
  [ROUTES.TIMELINE]: {
    title: "Dòng Thời Gian Tương Tác",
    description: "Khám phá các sự kiện quan trọng qua dòng thời gian tương tác",
  },
  [ROUTES.PARTY_FORMATION]: {
    title: "Sự Hình Thành Đảng",
    description: "Tìm hiểu về quá trình hình thành Đảng Cộng sản Việt Nam",
  },
  [ROUTES.PLATFORM]: {
    title: "Cương Lĩnh Chính Trị",
    description: "Khám phá cương lĩnh và chính sách của Đảng",
  },
  [ROUTES.HISTORICAL_SIGNIFICANCE]: {
    title: "Ý Nghĩa Lịch Sử",
    description: "Tìm hiểu ý nghĩa lịch sử của giai đoạn này",
  },
  [ROUTES.INEVITABILITY]: {
    title: "Tính Tất Yếu",
    description: "Phân tích tính tất yếu của các sự kiện lịch sử",
  },
  [ROUTES.QUIZ]: {
    title: "Kiểm Tra Kiến Thức",
    description: "Kiểm tra kiến thức đã học qua bài thi trắc nghiệm",
  },
  [ROUTES.SHARING]: {
    title: "Chia Sẻ",
    description: "Chia sẻ kiến thức và kết quả học tập",
  },
  [ROUTES.DASHBOARD]: {
    title: "Bảng Điều Khiển",
    description: "Tổng quan và điều hướng qua các chương",
  },
} as const;
