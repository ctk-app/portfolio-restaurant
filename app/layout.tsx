import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "소반 | 정성을 담은 한 상",
  description: "매일 아침 직접 만드는 반찬, 제철 재료로 차린 정갈한 한 상. 합정역 3분.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>{children}</body>
    </html>
  );
}
