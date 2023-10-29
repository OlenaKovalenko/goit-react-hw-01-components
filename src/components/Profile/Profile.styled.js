import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${p => p.theme.spacing(5)};
    padding-bottom: ${p => p.theme.spacing(5)};
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.md};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;

`;

export const ProfileDescription = styled.div`
    padding: ${p => p.theme.spacing(4)};

`;

export const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    padding: ${p => p.theme.spacing(1)};
    margin-bottom: ${p => p.theme.spacing(4)};
    border: 2px solid ${p => p.theme.colors.accent};
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const ProfileName = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: ${p => p.theme.spacing(2)};
`;

export const ProfileTag = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${p => p.theme.colors.grey};
    margin-bottom: ${p => p.theme.spacing(2)};
`;

export const ProfileLocation = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${p => p.theme.colors.grey};
`;

export const ProfileListStats = styled.ul`
    display: flex;
    background-color: #0900114a;
    justify-content: center;
`;

export const ProfileItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(400px / 3);
    gap: ${p => p.theme.spacing(2)};
    border: 1px solid ${p => p.theme.colors.black};
    padding: ${p => p.theme.spacing(3)};
`;

export const ProfileLabel = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${p => p.theme.colors.black};
`;

export const ProfileQuantity = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: ${p => p.theme.colors.black};
`;
