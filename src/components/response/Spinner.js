import styled, { keyframes } from 'styled-components';

export const Spinner = () => {
    return (
        <StyledSpinnerWrapper>
            <StyledSpinner />
        </StyledSpinnerWrapper>
    )
}

const StyledSpinnerWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  content: " ";
  display: bloack;
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(118,9,121) transparent rgb(30, 205, 217) transparent ;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
`;