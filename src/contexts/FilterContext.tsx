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
