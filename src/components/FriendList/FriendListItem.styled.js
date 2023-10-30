import styled from 'styled-components';

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing(8)};
    padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
    border: 1px solid ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    background-color: ${p => p.theme.colors.white};
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: ${p => p.theme.spacing(3)};
    background-color: ${p => p.$isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const FriendImg = styled.img`
    width: 64px;
    height: 64px;
    padding: ${p => p.theme.spacing(1)};
    border: 1px solid ${p => p.theme.colors.accent};
    border-radius: 25%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const FriendName = styled.p`
    font-size: 24px;
    font-weight: 600;
`;

