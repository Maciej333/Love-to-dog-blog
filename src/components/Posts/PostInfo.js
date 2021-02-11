import React from 'react';
import styled from 'styled-components';

export const PostInfo = (props) => {

    const { tags, date } = props;

    return (
        <StyledPostInfo>
            <span>{tags.map((tag) => `#${tag} `)}</span>
            <span>{date}</span>
        </StyledPostInfo>
    )
}

const StyledPostInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;