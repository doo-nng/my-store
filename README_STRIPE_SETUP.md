# Stripe 결제 시스템 설정 가이드

## 1. Stripe 계정 생성 및 API 키 발급

1. [Stripe 대시보드](https://dashboard.stripe.com/register)에서 계정 생성
2. 로그인 후 [API Keys 페이지](https://dashboard.stripe.com/apikeys)로 이동
3. **테스트 모드**에서 "Publishable key"와 "Secret key" 복사

## 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

**중요**: `.env.local` 파일은 Git에 커밋되지 않습니다 (`.gitignore`에 포함됨)

## 3. Vercel 배포 시 환경 변수 설정

1. [Vercel 대시보드](https://vercel.com/dashboard) 접속
2. 프로젝트 선택 → Settings → Environment Variables
3. 다음 변수들을 추가:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe Publishable key
   - `STRIPE_SECRET_KEY`: Stripe Secret key

## 4. 테스트 결제

Stripe 테스트 카드 번호:
- 카드 번호: `4242 4242 4242 4242`
- 만료일: 미래 날짜 (예: 12/25)
- CVC: 임의의 3자리 숫자 (예: 123)
- 우편번호: 임의의 5자리 숫자 (예: 12345)

## 5. 실제 결제 활성화

실제 결제를 받으려면:
1. Stripe 대시보드에서 계정 인증 완료
2. **라이브 모드**로 전환
3. 라이브 모드의 API 키로 환경 변수 업데이트
4. `pk_live_...` (Publishable key)
5. `sk_live_...` (Secret key)

## 주의사항

- 테스트 모드에서는 실제 결제가 발생하지 않습니다
- 라이브 모드로 전환하기 전에 반드시 계정 인증을 완료해야 합니다
- Secret key는 절대 공개되지 않도록 주의하세요
