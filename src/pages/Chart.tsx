import * as Cmn from '../styles/Cmn.style'
import * as Charts from '../styles/Chart.style'

import { useGetMock } from '../hooks/useGetMock'
import ChartList from '../components/ChartList'
import ChartFilter from '../components/ChartFilter'
import { useFilter } from '../contexts/FilterContext'

const Chart = () => {
  const { chartData } = useGetMock()

  const filter = useFilter()

  return (
    <Cmn.Container>
      <Cmn.H1>지역별 분포 차트</Cmn.H1>

      {chartData.length === 0 ? (
        <Cmn.LoadingBox>차트정보를 불러오고 있습니다...</Cmn.LoadingBox>
      ) : (
        <Charts.Wrap>
          <ChartFilter selected={filter.chartFilter} selectedChange={filter.changeChartFilter} />
          <ChartList data={chartData} selected={filter.chartFilter} />
        </Charts.Wrap>
      )}
    </Cmn.Container>
  )
}

export default Chart
