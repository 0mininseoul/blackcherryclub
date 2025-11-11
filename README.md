# 블랙체리클럽 (Black Cherry Club) - Official Website

얼터너티브 R&B 기반의 대한민국 인디 밴드 블랙체리클럽 공식 웹사이트

## 🚀 빠른 시작

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 🎨 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Liquid Glass CSS
- **Background**: Iridescence (WebGL)
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
blackcherryclub/
├── app/
│   ├── layout.tsx          # 메인 레이아웃 + Iridescence 배경
│   ├── page.tsx            # HOME 페이지 (디스코그래피 + 라이브 영상)
│   ├── about/
│   │   └── page.tsx        # ABOUT 페이지 (밴드 소개 + 멤버)
│   └── globals.css         # 리퀴드 글래스 스타일
├── components/
│   ├── Iridescence.tsx     # WebGL 배경 컴포넌트
│   └── Header.tsx          # 네비게이션 헤더
├── public/
│   └── images/             # 이미지 파일 (교체 필요)
└── PRD.md                  # 프로젝트 요구사항 문서
```

## 🖼️ 이미지 교체 가이드

현재 Placeholder 이미지를 실제 이미지로 교체하세요:

1. `/public/images/` 폴더에 이미지 추가
2. 파일명 규칙:
   - `album-cherrish.jpg` - 앨범 커버 (600x600px)
   - `band-main.jpg` - 밴드 사진 (1200x800px)
   - `member-jooha.jpg` - 허주하 (400x400px)
   - `member-youngmin.jpg` - 박영민 (400x400px)
   - `member-heesung.jpg` - 김희성 (400x400px)
   - `member-younghwan.jpg` - 장영환 (400x400px)

자세한 내용은 `/public/images/IMAGE_GUIDE.md` 참고

## 🎵 콘텐츠 업데이트

### 음원 플랫폼 링크 수정
`app/page.tsx` 파일의 `MUSIC_PLATFORMS` 배열 수정

### 라이브 영상 수정
`app/page.tsx` 파일의 `LIVE_VIDEOS` 객체 수정

### 밴드 정보 수정
`app/about/page.tsx` 파일의 `BAND_INFO`, `MEMBERS`, `SOCIAL_LINKS` 수정

## 🎨 디자인 특징

### Liquid Glass UI
- iOS 스타일 반투명 블러 효과
- `liquid-glass-button` - 버튼 스타일
- `liquid-glass-card` - 카드 스타일
- `liquid-glass-toggle` - 네비게이션 탭

### Iridescence 배경
- Red 계열 RGB(1.0, 0.1, 0.3)
- 마우스 인터랙션 지원
- WebGL 기반 부드러운 애니메이션

## 📱 반응형 디자인

- **Mobile**: 320px ~ 767px
- **Tablet**: 768px ~ 1023px
- **Desktop**: 1024px ~

모든 디바이스에서 최적화된 경험 제공

## 🚀 배포 (Vercel)

1. GitHub에 푸시
2. Vercel에서 프로젝트 import
3. 자동 배포 완료

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

## 📝 라이선스

Copyright © 2025 블랙체리클럽 (Black Cherry Club)

## 📧 문의

- Email: blackcherryclub123@gmail.com
- Instagram: [@blackcherry_club](https://www.instagram.com/blackcherry_club)
- YouTube: [@blackcherryclub](https://www.youtube.com/@blackcherryclub)
