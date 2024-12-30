# 📑 프로젝트 소개

SEEWHAT 웹 애플리케이션은 KOPIS(공연예술통합 전산망) API를 활용하여 뮤지컬 정보 및 리뷰를 제공하는 플랫폼입니다. 뮤지컬 덕후들을 위한 종합적인 정보를 제공합니다.

<br>

# 👨‍👩‍👧‍👦 Our Team

| 김민후                                | 김문식                           | 김지은                                | 한다영                                     | 최진실                                           |
| ------------------------------------- | -------------------------------- | ------------------------------------- | ------------------------------------------ | ------------------------------------------------ |
| [@minhoo](https://github.com/Noonsae) | [@zi0w](https://github.com/zi0w) | [@minhoo](https://github.com/kminhoo) | [@minji7901](https://github.com/minji7901) | [@Choi-kanggun](https://github.com/Choi-kanggun) |

<br>

## 🕹️ 프로젝트 기능

### 1. **페이지 구성**

- **홈페이지 (`/`)** : ISR 렌더링 방식, 날짜별 뮤지컬 정보 동적 업데이트
- **뮤지컬 리스트 페이지 (`/musical-list`)** : ISR 렌더링 방식, 날짜별 뮤지컬 목록 동적 업데이트
- **뮤지컬 상세 페이지 (`/musical-list/[id]`)** : SSR 렌더링 방식, 개별 뮤지컬 상세 정보 제공
- **장소 리스트 페이지 (`/theater-list `)** : SSG 렌더링 방식, 목 데이터 기반 극장 목록 제공
- **장소 상세 페이지 (`/theater-list/[id]`)** : SSR 렌더링 방식, 개별 극장 상세 정보 제공
- **마이 페이지 (`/login`)** : CSR 렌더링 방식, 사용자 개인화 정보 제공
- **로그인 페이지 (`/login`)** : SSG 렌더링 방식
- **회원가입 페이지 (`/sign-up`)** : SSG 렌더링 방식

### 2. **상세 기능**

- Swiper 기반의 슬라이드 캐러셀 기능
- 섹션별 뮤지컬 컨텐츠 분류
- Tanstack Query를 활용한 데이터 페칭
- useInfiniteQuery 훅을 사용하여 무한스크롤 구현

## ⚙️ 기술 스택

### **프레임워크 및 라이브러리 코어**

- Next.js
- React
- TypeScript

### **상태 관리 및 데이터 페칭**

- Tanstack Query
- supabase

### **폼, 유효성 검사**

- React Hook Form
- Zod

### **UI/UX**

- Tailwind css
- Swiper
- React Kakao Maps sdk
- React intersection obsever

### **유틸리티 및 기타 개발 도구**

- xml2js
- date-fns
- eslint
- prettier

### **기타 도구 및 설정**

- ESLint 및 Prettier로 코드 스타일 관리
- vercel을 통한 배포

<br>

# 🌳 프로젝트 구조

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂features
 ┃ ┣ 📂layout
 ┃ ┣ 📂shared
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┗ 📂signup
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂detail
 ┃ ┣ 📂home
 ┃ ┣ 📂profile
 ┃ ┣ 📂search
 ┃ ┣ 📂signin
 ┃ ┗ 📂signup
 ┣ 📂store
 ┣ 📂supabase
 ┣ 📂utils
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
