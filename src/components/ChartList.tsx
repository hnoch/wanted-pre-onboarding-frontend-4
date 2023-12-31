import {
  Area,
  Bar,
  Cell,
  ComposedChart,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { MockData } from '../types/mock'
import { RANGE_AREA, RANGE_BAR } from '../constants/constant'
import CustomizedTooltip from './CustomizedTooltip'

type PropsType = {
  data: MockData[]
  selected: string
}

const ChartList = ({ data, selected }: PropsType) => {
  return (
    <ResponsiveContainer width={1100} height={500}>
      <ComposedChart width={1100} height={500} data={data}>
        <XAxis dataKey={'time'} scale={'band'} />
        <YAxis yAxisId={'value_area'} dataKey={'value_area'} orient="left" domain={RANGE_AREA}>
          <Label value="area" offset={0} angle={-90} position="insideLeft" />
        </YAxis>
        <YAxis dataKey={'value_bar'} orientation="right" domain={RANGE_BAR}>
          <Label value="bar" offset={0} angle={-90} position="insideRight" />
        </YAxis>
        <Tooltip content={<CustomizedTooltip />} />
        <Legend />
        <Bar dataKey={'value_bar'} barSize={20} stroke="#FFF" fill="#9ea1ff">
          {data.map((entry, idx) => {
            return <Cell key={`cell-${idx}`} fill={entry.id === selected ? 'blue' : '#9ea1ff'} />
          })}
        </Bar>
        <Area
          yAxisId={'value_area'}
          type="monotone"
          dataKey={'value_area'}
          stroke="#E74C3C"
          fill="#ed8091"
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default ChartList
