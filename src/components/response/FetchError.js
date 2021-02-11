import styled from "styled-components"

export const FetchError = () => {
    return (
        <StyledFetchError>
            <p>UPS... ERROR LOADING DATA</p>
            Try again by refresh.
        </StyledFetchError>
    )
}

const StyledFetchError = styled.div`
    color: #B80f0A;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;