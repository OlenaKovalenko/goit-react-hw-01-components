import styled from 'styled-components';

export const FriendItem = styled.li`
    display: flex;
    gap: ${p => p.theme.spacing(20)};

`;

export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${p => p.$isOnline ? p.theme.colors.green : p.theme.colors.red};

`;