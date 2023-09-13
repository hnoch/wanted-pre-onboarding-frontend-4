import * as Cmn from '../styles/Cmn.style'
import * as Charts from '../styles/Chart.style'
import { Area, Bar, ComposedChart, Label, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { useGetMock } from '../hooks/useGetMock'

const Chart = () => {
  const { chartData } = useGetMock()

  return (
    <Cmn.Container>
      <Cmn.H1>지역별 분포 차트</Cmn.H1>

      {chartData.length === 0 ? (
        <div>차트정보가 없습니다.</div>
      ) : (
        <Charts.Wrap>
          <ComposedChart width={1200} height={800} data={chartData}>
            <XAxis dataKey={'time'} scale={'band'} />
            <YAxis yAxisId={'value_area'} dataKey={'value_area'} orient="left" domain={[0, 200]}>
              <Label value="area" offset={0} angle={-90} position="insideLeft" />
            </YAxis>
            <YAxis dataKey={'value_bar'} orientation="right" domain={[0, 20000]}>
              <Label value="bar" offset={0} angle={-90} position="insideRight" />
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey={'value_bar'} barSize={15} stroke="#FFF" fill="#9ea1ff" />
            <Area
              yAxisId={'value_area'}
              type="monotone"
              dataKey={'value_area'}
              stroke="#E74C3C"
              fill="#ed8091"
            />
          </ComposedChart>
        </Charts.Wrap>
      )}
    </Cmn.Container>
  )
}

export default Chart
