import type { Metadata } from "next";
import "./globals.css";
import Iridescence from "@/components/Iridescence";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "블랙체리클럽 (Black Cherry Club) - Official Website",
  description: "얼터너티브 R&B 기반의 대한민국 인디 밴드 블랙체리클럽 공식 웹사이트",
  keywords: ["블랙체리클럽", "Black Cherry Club", "인디밴드", "얼터너티브 R&B", "한국 인디음악"],
  openGraph: {
    title: "블랙체리클럽 (Black Cherry Club)",
    description: "얼터너티브 R&B 기반의 대한민국 인디 밴드",
    url: "https://blackcherryclub.com",
    siteName: "블랙체리클럽",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        <Iridescence
          color={[1.0, 0.1, 0.3]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
