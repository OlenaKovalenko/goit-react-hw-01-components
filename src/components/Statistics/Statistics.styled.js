import styled from 'styled-components';

export const StatSection = styled.section`
    width: 400px;
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(4)};
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.md};

`;

export const StatTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(4)};
    text-transform: uppercase;
    color: ${p => p.theme.colors.black};

`;

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;

`; 

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    
`;
