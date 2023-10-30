import styled from 'styled-components';

export const FriendContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(5)};
    width: 400px;
    margin: 0 auto;
`;
