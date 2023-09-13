import styled from 'styled-components'

const LoadingSpinner = () => {
  return <SpinnerWrap></SpinnerWrap>
}

export default LoadingSpinner

const SpinnerWrap = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid gray;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
