import styled from 'styled-components'

export const Wrap = styled.div`
  margin-top: 20px;
`

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`

export const FilterButton = styled.button<{ $isSelect: boolean }>`
  padding: 6px 10px;
  border-radius: 10px;
  border: ${props => (props.$isSelect ? '2px solid blue' : '2px solid gray')};
  color: ${props => (props.$isSelect ? 'blue' : 'gray')};
  font-weight: ${props => (props.$isSelect ? 700 : 400)};
  font-size: 12px;
`
