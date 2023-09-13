import { TooltipProps } from 'recharts'
import styled from 'styled-components'

const CustomizedTooltip: React.FC<TooltipProps<string, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const loadItem = payload[0].payload

    return (
      <TooltipWrap>
        <p>{`id : ${loadItem.id}`}</p>
        <p>{`value_area : ${loadItem.value_area}`}</p>
        <p>{`value_bar : ${loadItem.value_bar}`}</p>
      </TooltipWrap>
    )
  } else {
    return null
  }
}

export default CustomizedTooltip

const TooltipWrap = styled.div`
  background: white;
  padding: 8px 12px;
  border-radius: 10px;
  gap: 6px;

  & p {
    font-size: 14px;
    font-weight: 700;
    margin: 0px;
  }

  > :nth-child(1) {
    color: black;
  }

  > :nth-child(2) {
    color: #ed8091;
  }
  > :nth-child(3) {
    color: #9ea1ff;
  }
`
