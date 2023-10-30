import styled from 'styled-components';

export const StatSection = styled.section`
    width: 400px;
    margin-bottom: 0;
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(4)};
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.md};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const StatTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(5)};
    text-transform: uppercase;
    color: ${p => p.theme.colors.black};

`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;

`; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

export const StatItem = styled.li`
    width: calc(400px / 5);
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};
    padding: ${p => p.theme.spacing(3)};
    background-color: ${getRandomHexColor};
    color: ${p => p.theme.colors.white};
`;

export const StatLabel = styled.span`
    font-style: 16px;
    font-weight: 400;
`;

export const StatPercentage = styled.span`
    font-size: 20px;
    font-weight: 600;
`;
