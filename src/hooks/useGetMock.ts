import { useEffect, useState } from 'react'
import mock from '../assets/mock_data.json'
import { MockData } from '../types/mock'

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
