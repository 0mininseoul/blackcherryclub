# 블랙체리클럽 웹페이지 PRD (Product Requirements Document)

## 1. 프로젝트 개요

### 1.1 목적
블랙체리클럽(Black Cherry Club) 인디밴드의 공식 웹페이지를 제작하여 밴드 소개, 디스코그래피, 라이브 영상, SNS 링크를 효과적으로 제공

### 1.2 목표
- 모바일 최적화된 반응형 웹사이트
- 밴드의 정체성을 표현하는 비주얼 디자인
- 사용자 친화적인 네비게이션
- 음원 및 영상 콘텐츠 접근성 극대화

### 1.3 레퍼런스
- URL: https://lnkpie.com/@zyxa_beam?tab=2
- 스타일: 다크 테마, 미니멀한 디자인, 탭 기반 네비게이션
- UI 스타일: **리퀴드 글래스 (Liquid Glass)** - iOS 스타일 블러 효과

---

## 2. 기술 스택

### 2.1 Frontend
- **Framework**: React (Next.js 추천)
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Framer Motion (선택적)
- **Language**: TypeScript

### 2.2 Background Effect
- **Component**: React Bits - Iridescence
- **Installation**: `npx shadcn@latest add @react-bits/Iridescence-TS-CSS`
- **Color Configuration**: RGB(1.0, 0.1, 0.3) - Red 계열

### 2.3 Deployment
- **Platform**: Vercel
- **Domain**: TBD

### 2.4 Dependencies
```json
{
  "dependencies": {
    "react": "^18.x",
    "next": "^14.x",
    "ogl": "latest",
    "tailwindcss": "^3.x"
  }
}
```

---

## 3. 페이지 구조

### 3.1 사이트 맵
```
블랙체리클럽 웹사이트
├── HOME (디스코그래피 & 라이브 영상)
└── ABOUT (밴드 소개 & 멤버)
```

### 3.2 네비게이션
- **위치**: 상단 고정 (Sticky Header)
- **구성**:
  - 로고/밴드명 (좌측)
  - HOME / ABOUT 탭 (중앙 또는 우측)
- **모바일**: 동일한 레이아웃 유지 (햄버거 메뉴 불필요)

---

## 4. HOME 페이지 상세

### 4.1 레이아웃
```
┌─────────────────────────────────────┐
│  Header (Logo + HOME/ABOUT Tabs)    │
├─────────────────────────────────────┤
│                                     │
│  [Iridescence Background]           │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Discography Section         │  │
│  │  - Album Cover               │  │
│  │  - Album Title & Date        │  │
│  │  - Platform Links (Grid)     │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Live Videos Section         │  │
│  │  - YouTube Embed (1 Full)    │  │
│  │  - YouTube Shorts (3)        │  │
│  └──────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

### 4.2 Discography Section

#### 4.2.1 앨범 정보
- **앨범명**: [Cherrish]
- **발매일**: 2025.07.31
- **커버 이미지**: Placeholder (추후 교체)

#### 4.2.2 음원 플랫폼 링크 버튼
다음 플랫폼 링크를 버튼 형태로 표시 (2열 또는 3열 그리드):

| 플랫폼 | URL |
|--------|-----|
| Spotify | https://open.spotify.com/album/3vBCDGbCdQhrwYId0JCNn1 |
| Apple Music | https://music.apple.com/us/album/cherrish-single/1828620757 |
| YouTube Music | https://music.youtube.com/playlist?list=OLAK5uy_ldBgbrcbzv6DoAPAyRUtE7zTYNkYo273o |
| Melon | https://www.melon.com/album/detail.htm?albumId=11969787 |
| Genie | https://www.genie.co.kr/detail/albumInfo?axnm=86545355 |
| Bugs | https://music.bugs.co.kr/album/20743106?wl_ref=list_ab_01_ar |

#### 4.2.3 버튼 디자인
- **스타일**: **리퀴드 글래스 버튼** - 블러 효과 + 반투명 배경
- **Class**: `.liquid-glass-button`
- **Hover**: 배경 밝아짐 + 살짝 위로 이동 효과
- **Active**: Scale 축소 + 그림자 감소
- **크기**: 모바일에서 터치하기 쉬운 크기 (min-height: 48px)
- **아이콘**: 각 플랫폼 로고 포함 (선택적)
- **특징**:
  - `backdrop-filter: blur(40px) saturate(180%)`
  - 0.5px 투명 테두리
  - Inset 하이라이트로 입체감

### 4.3 Live Videos Section

#### 4.3.1 Full Video (1개)
- **URL**: https://youtu.be/xvS7KgipJqU?si=VSzRRT8ohcEnkUk3
- **Display**: YouTube Embed (iframe)
- **Size**: 16:9 비율, 반응형

#### 4.3.2 YouTube Shorts (3개)
다음 Shorts를 그리드 형태로 배치:

1. https://youtube.com/shorts/QMVqcBOZ150?si=rEZfb9i4SwXZqtQJ
2. https://youtube.com/shorts/3uFcfCyd3ac?si=WKzBZe0eMWKkEmEy
3. https://youtube.com/shorts/1ESKio4-rwA?si=Zuu1FN5ZOCFwczr2

- **Display**: YouTube Embed (iframe) - 9:16 세로 비율
- **Layout**:
  - Desktop: 3열 가로 배치
  - Mobile: 1열 세로 배치 또는 가로 스크롤

---

## 5. ABOUT 페이지 상세

### 5.1 레이아웃
```
┌─────────────────────────────────────┐
│  Header (Logo + HOME/ABOUT Tabs)    │
├─────────────────────────────────────┤
│                                     │
│  [Iridescence Background]           │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Band Photo                  │  │
│  │  (Placeholder)               │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Band Description            │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Members Section             │  │
│  │  - 4 Member Cards            │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Contact & SNS Links         │  │
│  └──────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

### 5.2 밴드 사진
- **수량**: 1장 (메인 밴드 사진)
- **형태**: Placeholder 이미지
- **크기**: 반응형 (max-width 유지)

### 5.3 밴드 소개

#### 5.3.1 결성 연도
**2022년 9월 결성**

#### 5.3.2 소개 문구
```
블랙체리클럽은 얼터너티브 R&B 기반의 신선한 감성과 음악적 완성도를 동시에 제시하고 있는
대한민국 인디씬의 신예 밴드다. 장르에 구애받지 않는 자유로운 시도와 정교한 프로덕션을
보여주며 자신들만의 분명한 색깔을 드러내고 있다. 개성 있는 음악성과 확실한 비주얼로
점차 팬층을 넓혀가고 있으며, 각종 버스킹과 공연 무대에서도 활발히 활동 중이다.
```

### 5.4 멤버 소개

#### 5.4.1 멤버 구성
4명의 멤버를 카드 형태로 표시:

| 이름 | 포지션 |
|------|--------|
| 허주하 | Vocal |
| 박영민 | Guitar |
| 김희성 | Keyboard |
| 장영환 | Drums |

#### 5.4.2 멤버 카드 디자인
- **레이아웃**:
  - Desktop: 2x2 그리드 또는 1x4 가로 배치
  - Mobile: 세로 스택
- **구성**:
  - 멤버 사진 (Placeholder - 정사각형 또는 원형)
  - 이름
  - 포지션
- **스타일**: **리퀴드 글래스 카드**
- **Class**: `.liquid-glass-card`
- **특징**:
  - 반투명 배경 + 블러 효과
  - Hover 시 위로 살짝 이동 + 배경 밝아짐
  - 0.5px 투명 테두리

### 5.5 Contact & SNS

#### 5.5.1 이메일
- **Email**: blackcherryclub123@gmail.com
- **Display**: 클릭 시 mailto: 링크

#### 5.5.2 SNS 링크
버튼 또는 아이콘 형태로 표시:

| 플랫폼 | URL |
|--------|-----|
| Instagram | https://www.instagram.com/blackcherry_club |
| YouTube | https://www.youtube.com/@blackcherryclub |
| Spotify | https://open.spotify.com/artist/30JHqF9dcNMD6apw6vByVW |

#### 5.5.3 버튼 디자인
- **스타일**: **리퀴드 글래스 버튼**
- **Class**: `.liquid-glass-button`
- **크기**: 모바일 친화적 (min-height: 48px)
- **배치**: 가로 배열 (아이콘 형태) 또는 세로 배열 (버튼 형태)
- **특징**: 음원 플랫폼 버튼과 동일한 스타일

---

## 6. 디자인 시스템

### 6.1 리퀴드 글래스 UI 시스템

#### 6.1.0 핵심 개념
- **iOS 스타일 반투명 블러 효과** 적용
- Iridescence 배경 위에서 가독성과 아름다움을 동시에 확보
- 모든 카드, 버튼, 인터랙티브 요소에 리퀴드 글래스 적용

#### 6.1.1 리퀴드 글래스 클래스

##### `.liquid-glass` (기본)
```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(40px) saturate(180%);
border: 0.5px solid rgba(255, 255, 255, 0.18);
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
```

##### `.liquid-glass-button` (버튼)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(40px) saturate(180%);
border: 0.5px solid rgba(255, 255, 255, 0.22);
/* Hover: 배경 0.15, 위로 -1px 이동 */
/* Active: scale(0.98) */
```

##### `.liquid-glass-card` (카드)
```css
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(40px) saturate(180%);
border: 0.5px solid rgba(255, 255, 255, 0.16);
/* Hover: 배경 0.11, 위로 -2px 이동 */
```

##### `.liquid-glass-control` (재생 버튼 등)
```css
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(40px) saturate(180%);
border: 0.5px solid rgba(255, 255, 255, 0.24);
/* Hover: scale(1.05) */
/* Active: scale(0.98) */
```

##### `.liquid-glass-toggle` (선택 상태)
```css
background: rgba(255, 255, 255, 0.08);
/* Active 시: rgba(255, 255, 255, 0.18) + 외곽 링 */
```

#### 6.1.2 텍스트 가독성

##### `.text-over-prism` (어두운 텍스트 그림자)
```css
text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.5);
```

##### `.text-over-prism-light` (밝은 텍스트 그림자)
```css
text-shadow: 0 2px 12px rgba(255, 255, 255, 0.5), 0 0 4px rgba(255, 255, 255, 0.3);
```

### 6.2 Color Palette

#### 6.2.1 Primary Color (Red Theme)
- **Primary Red**: #DC2626 (Tailwind red-600)
- **Primary Red Dark**: #991B1B (Tailwind red-800)
- **Primary Red Light**: #FCA5A5 (Tailwind red-300)
- **Note**: 리퀴드 글래스 효과가 주요 스타일이므로, 레드는 포인트 색상으로만 사용

#### 6.2.2 Neutral Colors
- **Background**: #000000 (Black)
- **Surface**: rgba(255, 255, 255, 0.07) - 리퀴드 글래스
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: #A3A3A3 (Gray)

#### 6.2.3 Glass Surface Colors
- **Glass Level 1**: rgba(255, 255, 255, 0.07) - 카드
- **Glass Level 2**: rgba(255, 255, 255, 0.1) - 버튼
- **Glass Level 3**: rgba(255, 255, 255, 0.12) - 컨트롤
- **Glass Border**: rgba(255, 255, 255, 0.16 ~ 0.24)

### 6.3 Typography

#### 6.3.1 Font Family
- **Primary**: 'Pretendard', -apple-system, sans-serif
- **Fallback**: system-ui, 'Malgun Gothic', sans-serif

#### 6.3.2 Font Sizes
- **Heading 1**: 2.5rem (40px) - 밴드명
- **Heading 2**: 2rem (32px) - 섹션 제목
- **Heading 3**: 1.5rem (24px) - 앨범명, 멤버명
- **Body**: 1rem (16px) - 본문
- **Small**: 0.875rem (14px) - 부가 정보

#### 6.3.3 Font Weight
- **Bold**: 600 - 제목, 버튼
- **Regular**: 400 - 본문

### 6.4 Spacing
- **Section Gap**: 80px (Desktop) / 48px (Mobile)
- **Card Gap**: 24px
- **Button Padding**: 14px 24px
- **Container Max Width**: 1200px
- **Container Padding**: 24px (Mobile) / 48px (Desktop)

### 6.5 Border Radius
- **Buttons**: 12px (리퀴드 글래스 효과 강조)
- **Cards**: 16px (부드러운 느낌)
- **Images**: 16px
- **Small Elements**: 8px

### 6.6 Animation & Transitions

#### 6.6.1 Transition Timing
- **기본**: `all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **빠른 반응**: `all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

#### 6.6.2 Transform Effects
- **Hover (버튼)**: `translateY(-1px)`
- **Hover (카드)**: `translateY(-2px)`
- **Active (버튼)**: `scale(0.98)`
- **Hover (컨트롤)**: `scale(1.05)`

---

## 7. 컴포넌트 명세

### 7.1 Layout Components

#### 7.1.1 Header
```tsx
<Header>
  <Logo>블랙체리클럽</Logo>
  <Navigation>
    <Tab active>HOME</Tab>
    <Tab>ABOUT</Tab>
  </Navigation>
</Header>
```

#### 7.1.2 Background (Iridescence)
```tsx
<Iridescence
  color={[1.0, 0.1, 0.3]}
  mouseReact={true}
  amplitude={0.1}
  speed={1.0}
/>
```

### 7.2 Content Components

#### 7.2.1 AlbumCard
```tsx
<AlbumCard className="liquid-glass-card">
  <AlbumCover src="placeholder.jpg" alt="Cherrish" />
  <AlbumTitle className="text-over-prism">[Cherrish]</AlbumTitle>
  <ReleaseDate className="text-over-prism">2025.07.31</ReleaseDate>
  <PlatformLinks>
    <LinkButton className="liquid-glass-button" href="..." icon="spotify">
      Spotify
    </LinkButton>
    <LinkButton className="liquid-glass-button" href="..." icon="apple">
      Apple Music
    </LinkButton>
    {/* ... */}
  </PlatformLinks>
</AlbumCard>
```

#### 7.2.2 VideoEmbed
```tsx
<VideoEmbed
  type="youtube"
  videoId="xvS7KgipJqU"
  aspectRatio="16:9"
/>

<VideoEmbed
  type="youtube-shorts"
  videoId="QMVqcBOZ150"
  aspectRatio="9:16"
/>
```

#### 7.2.3 MemberCard
```tsx
<MemberCard className="liquid-glass-card">
  <MemberPhoto src="placeholder.jpg" alt="허주하" />
  <MemberName className="text-over-prism">허주하</MemberName>
  <MemberRole className="text-over-prism">Vocal</MemberRole>
</MemberCard>
```

#### 7.2.4 LinkButton
```tsx
<LinkButton
  className="liquid-glass-button"
  href="https://..."
  icon="spotify"
  variant="primary"
  external
>
  Spotify
</LinkButton>
```

#### 7.2.5 NavigationTab
```tsx
<NavigationTab className="liquid-glass-toggle" active>
  HOME
</NavigationTab>
<NavigationTab className="liquid-glass-toggle">
  ABOUT
</NavigationTab>
```

---

## 8. 반응형 디자인

### 8.1 Breakpoints
```css
/* Mobile First */
- Mobile: 320px ~ 767px
- Tablet: 768px ~ 1023px
- Desktop: 1024px ~
```

### 8.2 Layout Adaptations

#### 8.2.1 Mobile (< 768px)
- 싱글 컬럼 레이아웃
- 폰트 크기 축소 (0.9배)
- 버튼 Full-width 또는 2열 그리드
- YouTube Shorts 세로 스택 또는 가로 스크롤
- 섹션 간격 48px

#### 8.2.2 Tablet (768px ~ 1023px)
- 2열 그리드 (카드, 버튼)
- 폰트 크기 표준
- 섹션 간격 64px

#### 8.2.3 Desktop (1024px ~)
- 3열 그리드 (버튼, Shorts)
- 2x2 그리드 (멤버 카드)
- 섹션 간격 80px
- Max-width: 1200px (중앙 정렬)

---

## 9. 이미지 사양

### 9.1 Placeholder 이미지
- **도구**: https://placehold.co/ 또는 Unsplash
- **형식**: WebP (최적화)
- **대체 텍스트**: 모든 이미지에 alt 속성 필수

### 9.2 이미지 목록

| 이미지 | 크기 | 비율 | 설명 |
|--------|------|------|------|
| 앨범 커버 | 600x600px | 1:1 | Cherrish 앨범 커버 |
| 밴드 사진 | 1200x800px | 3:2 | ABOUT 페이지 메인 |
| 멤버 사진 (4장) | 400x400px | 1:1 | 각 멤버 프로필 |

### 9.3 교체 가이드
- 이미지 파일은 `/public/images/` 폴더에 저장
- 파일명 규칙:
  - `album-cherrish.jpg` (앨범 커버)
  - `band-main.jpg` (밴드 사진)
  - `member-jooha.jpg` (허주하)
  - `member-youngmin.jpg` (박영민)
  - `member-heesung.jpg` (김희성)
  - `member-younghwan.jpg` (장영환)

---

## 10. SEO & Meta Tags

### 10.1 Meta Information
```html
<title>블랙체리클럽 (Black Cherry Club) - Official Website</title>
<meta name="description" content="얼터너티브 R&B 기반의 대한민국 인디 밴드 블랙체리클럽 공식 웹사이트" />
<meta name="keywords" content="블랙체리클럽, Black Cherry Club, 인디밴드, 얼터너티브 R&B, 한국 인디음악" />
```

### 10.2 Open Graph
```html
<meta property="og:title" content="블랙체리클럽 (Black Cherry Club)" />
<meta property="og:description" content="얼터너티브 R&B 기반의 대한민국 인디 밴드" />
<meta property="og:image" content="/images/band-main.jpg" />
<meta property="og:url" content="https://blackcherryclub.com" />
```

### 10.3 Favicon
- 레드 계열 체리 또는 'BC' 로고
- 형식: favicon.ico, apple-touch-icon.png

---

## 11. 성능 최적화

### 11.1 이미지 최적화
- WebP 포맷 사용
- Lazy Loading 적용
- 적절한 크기로 리사이징

### 11.2 코드 최적화
- Code Splitting (Next.js 자동)
- CSS 번들 최소화
- 불필요한 라이브러리 제거

### 11.3 로딩 성능
- 초기 로딩 시간 < 3초 (Mobile 4G)
- Lighthouse Score 목표:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

---

## 12. 배포 및 유지보수

### 12.1 Vercel 배포 설정
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

### 12.2 환경 변수
- 필요시 `.env.local` 사용
- 현재는 환경 변수 불필요

### 12.3 업데이트 가이드

#### 12.3.1 이미지 교체
1. `/public/images/` 폴더에 새 이미지 업로드
2. 기존 파일명과 동일하게 유지하거나
3. 컴포넌트에서 import 경로 수정

#### 12.3.2 콘텐츠 수정
- 텍스트: 해당 컴포넌트 파일에서 직접 수정
- 링크: 상수 파일 (`constants/links.ts`) 관리 권장

#### 12.3.3 디스코그래피 추가
1. `/components/AlbumCard.tsx` 복사
2. 새 앨범 정보 입력
3. HOME 페이지에 추가

---

## 13. 접근성 (Accessibility)

### 13.1 키보드 네비게이션
- 모든 인터랙티브 요소 포커스 가능
- Tab 키로 순차 이동
- Enter/Space로 활성화

### 13.2 스크린 리더
- Semantic HTML 사용 (`<nav>`, `<main>`, `<article>`)
- alt 텍스트 모든 이미지 제공
- ARIA labels 필요시 추가

### 13.3 색상 대비
- WCAG AA 기준 준수 (4.5:1 이상)
- 레드 텍스트는 충분한 배경 대비 확보

---

## 14. 브라우저 지원

### 14.1 지원 브라우저
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### 14.2 Fallback
- Iridescence 미지원 시 단색 배경 표시
- WebP 미지원 시 JPEG/PNG Fallback

---

## 15. 개발 로드맵

### Phase 1: 프로젝트 셋업 (Day 1)
- [ ] Next.js 프로젝트 초기화
- [ ] Tailwind CSS 설정
- [ ] Iridescence 컴포넌트 통합
- [ ] 기본 레이아웃 구조 생성

### Phase 2: HOME 페이지 (Day 2)
- [ ] Header 컴포넌트 개발
- [ ] Discography 섹션 개발
- [ ] YouTube Embed 구현
- [ ] 플랫폼 링크 버튼 개발

### Phase 3: ABOUT 페이지 (Day 3)
- [ ] 밴드 소개 섹션
- [ ] 멤버 카드 컴포넌트
- [ ] Contact & SNS 링크

### Phase 4: 반응형 & 최적화 (Day 4)
- [ ] 모바일 레이아웃 조정
- [ ] 성능 최적화
- [ ] SEO 설정
- [ ] 접근성 검수

### Phase 5: 배포 & 테스트 (Day 5)
- [ ] Vercel 배포
- [ ] 크로스 브라우저 테스트
- [ ] 실제 이미지 교체 가이드 작성
- [ ] 최종 QA

---

## 16. 참고 자료

### 16.1 디자인 레퍼런스
- https://lnkpie.com/@zyxa_beam?tab=2 (직사광선)
- Linktree 스타일 페이지들

### 16.2 기술 문서
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Bits: https://reactbits.org/
- OGL (WebGL Library): https://github.com/oframe/ogl

### 16.3 Iridescence 컴포넌트
- Install: `npx shadcn@latest add @react-bits/Iridescence-TS-CSS`
- Props: color, mouseReact, amplitude, speed

### 16.4 리퀴드 글래스 CSS 레퍼런스
- 파일: `liquid-glass-reference.css`
- 위치: 프로젝트 루트 디렉토리
- 용도: global.css에 통합하여 사용

---

## 17. 리퀴드 글래스 구현 가이드

### 17.1 CSS 파일 구조
```
/app
  /globals.css (리퀴드 글래스 스타일 포함)
/components
  /ui
    /liquid-glass-button.tsx
    /liquid-glass-card.tsx
```

### 17.2 사용 예시

#### 17.2.1 기본 버튼
```tsx
<button className="liquid-glass-button px-6 py-3 rounded-xl">
  Click Me
</button>
```

#### 17.2.2 카드 컴포넌트
```tsx
<div className="liquid-glass-card p-6 rounded-2xl">
  <h3 className="text-over-prism">Card Title</h3>
  <p className="text-over-prism">Card content goes here...</p>
</div>
```

#### 17.2.3 네비게이션 탭
```tsx
<div className="liquid-glass-toggle px-4 py-2 rounded-lg active">
  HOME
</div>
```

### 17.3 모바일 최적화

#### 17.3.1 터치 피드백
- `:active` 상태에서 `scale(0.98)` 적용
- Transition 0.1s로 빠른 반응

#### 17.3.2 배경 밝기 조정
```css
@media (max-width: 768px) {
  .iridescence-container::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3); /* 모바일에서 배경 살짝 어둡게 */
    pointer-events: none;
  }
}
```

### 17.4 브라우저 호환성

#### 17.4.1 Backdrop Filter 지원
- Chrome 76+, Safari 9+, Edge 79+
- Firefox 103+ (기본 활성화)

#### 17.4.2 Fallback
```css
@supports not (backdrop-filter: blur(40px)) {
  .liquid-glass {
    background: rgba(255, 255, 255, 0.15); /* 더 불투명하게 */
  }
}
```

---

## 18. 연락처

### 프로젝트 문의
- **Band Email**: blackcherryclub123@gmail.com
- **Instagram**: @blackcherry_club

---

**문서 버전**: 1.1
**작성일**: 2025-11-12
**최종 수정일**: 2025-11-12
**주요 변경사항**: 리퀴드 글래스 UI 시스템 추가
