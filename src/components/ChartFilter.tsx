import * as Charts from '../styles/Chart.style'
import { FILTER_ARR } from '../constants/constant'

interface IChange {
  selected: string
  selectedChange: (text: string) => void
}

const ChartFilter = ({ selected, selectedChange }: IChange) => {
  return (
    <Charts.FilterWrap>
      {FILTER_ARR.map((item, idx) => (
        <Charts.FilterButton
          key={idx}
          type="button"
          onClick={() => selectedChange(item)}
          $isSelect={selected === item ? true : false}
        >
          {item}
        </Charts.FilterButton>
      ))}
    </Charts.FilterWrap>
  )
}

export default ChartFilter
