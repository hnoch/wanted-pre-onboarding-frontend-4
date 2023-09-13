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

---

### 🎥 Preview

<table>
   <tr>
      <th>1. 시계열 차트 만들기</th>
   </tr>
  <tr>
    <td>
      <img src="https://github.com/hnoch/wanted-pre-onboarding-frontend-4/assets/53362953/886e54cd-c04b-484c-8ea9-c277579ef9de" width="600" height="400"/>
    </td>
  </tr>
   <tr>
      <th>2. 호버 기능 구현</th>
   </tr>
  <tr>
    <td>
      <img src="https://github.com/hnoch/wanted-pre-onboarding-frontend-4/assets/53362953/09c8fccc-8c3f-4b40-8cbc-733edde9f0a3" width="600" height="400"/>
    </td>
  </tr>
   <tr>
      <th>3. 필터링 기능 구현</th>
   </tr>
  <tr>
    <td>
       <img src="https://github.com/hnoch/wanted-pre-onboarding-frontend-4/assets/53362953/6ad43eee-29b3-47c6-8b3c-d9689b6842ba" width="600" height="400"/>
    </td>
  </tr>
</table>

### 📃 배포 사이트

[배포 사이트로 이동하기](https://wanted-pre-onboarding-frontend-4-psi.vercel.app/)

---

### 🏃🏻‍♂️ 프로젝트의 실행 방법

#### ENV

- Node v20.5.0
- npm v8.19.1

#### Frontend

1.  해당 레포지토리를 클론합니다.

    ```bash
       git clone [레포지토리 주소]
    ```

2.  npm을 통한 패키지의 의존성을 설치합니다.
    ```bash
       npm install
    ```
3.  프로젝트를 실행합니다.
    ```bash
       npm run dev
    ```

### 🛠️ 기술 구현

#### json 파일

- 요구사항에서의 json 파일을 프로젝트 로컬에 저장하고 임포트하여 별도의 서버구현 없이 사용했습니다.

### hooks

- json 파일을 통해 새로운 배열을 만들어서 훅으로 사용했습니다.
  ```typescript
  export const useGetMock = () => {
    const mockKeys = Object.keys(mock.response)
    const mockValues = Object.values(mock.response)

    const [chartData, setChartData] = useState<MockData[]>([])

    useEffect(() => {
      setChartData([])

      mockValues.map((item, idx) => {
        setChartData(chartList => [
          ...chartList,
          {
            time: mockKeys[idx].split(' ')[1],
            id: item.id,
            value_area: item.value_area,
            value_bar: item.value_bar,
          },
        ])
      })
    }, [])

    return { chartData }
  }
  ```

#### Context API

- 선택된 필터값을 전역으로 설정해 사용할 수 있도록 했습니다.

  ```typescript
     import { createContext, useContext, useState } from 'react'

      interface IFilter {
        chartFilter: string
        changeChartFilter: (text: string) => void
      }

      const FilterContext = createContext<IFilter>({ chartFilter: '해제', changeChartFilter: () => {} })

      export const useFilter = () => useContext(FilterContext)

      export function FilterProvider({ children }: { children: React.ReactNode }) {
        const [chartFilter, setChartFilter] = useState('해제')

        const changeChartFilter = (text: string) => {
          // NOTE 같은 항목 선택 시 디폴트 설정
          setChartFilter(chartFilter === text ? '해제' : text)
        }

        return (
          <FilterContext.Provider value={{ chartFilter, changeChartFilter }}>
            {children}
          </FilterContext.Provider>
        )
      }

  ```

#### Recharts [공식문서](https://recharts.org/en-US)

- 사용과 커스텀이 쉽습니다.
- 간단한 애니메이션 기능이 있습니다.
- 요구사항의 기능구현을 위해 적합한 라이브러리라고 판단하여 사용했습니다.

---

### 📚 프로젝트 스택

<div style="display:flex;">
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">  
   <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

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
