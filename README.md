# Wanted pre-onboarding 4주차 개인과제

## 주어진 데이터를 기반으로 시계열 차트 만들기


### 📔 요구사항

1. 시계열 차트 만들기
   - 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
   - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
   - Area 그래프의 기준값은 `value_area` 값을 이용해주세요
   - Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
   - 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)


2. 호버 기능 구현
    - 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요
3. 필터링 기능 구현
    - 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
    - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
    - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
    - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요


### 🏃🏻‍♂️ 프로젝트의 실행 방법

#### ENV
  - Node v20.5.0
  - npm v8.19.1
#### Frontend
  - `npm install & npm start`



### 📚 프로젝트 스택

<div style="display:flex;">
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">  
   <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>


- Recharts [공식문서](https://recharts.org/en-US)
  - 사용과 커스텀이 쉽습니다.
  - 간단한 애니메이션 기능이 있습니다.
  - 요구사항의 기능구현을 위해 적합한 라이브러리라고 판단하여 사용했습니다.


### 🎥 데모 영상

<table>
  <tr>
    <td>
      <img src="https://github.com/hnoch/wanted-pre-onboarding-frontend-4/assets/53362953/3d080634-682a-48d9-8b89-832f3e972d20" width="800" height="600"/>
    </td>
  </tr>
</table>


### 📃 배포 사이트
[배포사이트](https://wanted-pre-onboarding-frontend-chi-ten.vercel.app/)


### 🌳 디렉토리

```bash
├── App.tsx
├── assets
│   └── mock_data.json
├── components
│   ├── ChartFilter.tsx
│   ├── ChartList.tsx
│   ├── CustomizedTooltip.tsx
│   └── LoadingSpinner.tsx
├── constants
│   └── constant.ts
├── contexts
│   └── FilterContext.tsx
├── hooks
│   └── useGetMock.ts
├── index.css
├── main.tsx
├── pages
│   └── Chart.tsx
├── styles
│   ├── Chart.style.ts
│   └── Cmn.style.ts
└── types
    └── mock.ts
```

