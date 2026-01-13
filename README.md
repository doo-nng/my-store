# My Store - 마케팅 랜딩 페이지

프리미엄 패션 브랜드의 마케팅용 상세 랜딩 페이지입니다.

## 기능

- 🎨 현대적이고 반응형 디자인
- 🌍 다국어 지원 (한국어, 영어, 일본어)
- 📱 모바일 최적화
- ⚡ Next.js 16 기반의 빠른 성능
- 🎯 마케팅 최적화된 레이아웃

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 배포

### Vercel (권장)

1. [Vercel](https://vercel.com)에 가입/로그인
2. GitHub에 프로젝트 푸시
3. Vercel 대시보드에서 "New Project" 클릭
4. GitHub 저장소 선택
5. 자동으로 배포 설정 감지 후 "Deploy" 클릭

또는 Vercel CLI 사용:

```bash
npm i -g vercel
vercel
```

### Netlify

1. [Netlify](https://www.netlify.com)에 가입/로그인
2. GitHub에 프로젝트 푸시
3. Netlify 대시보드에서 "Add new site" > "Import an existing project"
4. GitHub 저장소 선택
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. "Deploy site" 클릭

### 기타 옵션

- **Railway**: [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)
- **AWS Amplify**: [aws.amazon.com/amplify](https://aws.amazon.com/amplify)

## 프로젝트 구조

```
src/
├── app/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── lib/            # 유틸리티 및 설정
│   ├── page.tsx        # 메인 랜딩 페이지
│   └── layout.tsx      # 루트 레이아웃
```

## 기술 스택

- **Next.js 16** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **React 19** - UI 라이브러리
