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
    setChartFilter(text)
  }

  return (
    <FilterContext.Provider value={{ chartFilter, changeChartFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
