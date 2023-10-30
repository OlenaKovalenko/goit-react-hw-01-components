import styled from 'styled-components';

export const Table = styled.table`
    width: 400px;
    margin: 0 auto;
    background-color: ${p => p.theme.colors.white};
    border: 1px solid ${p => p.theme.colors.grey};
    border-radius: ${p => p.theme.radii.sm};

`;

export const TableHead = styled.thead`
    height: 40px;
    background-color: ${p => p.theme.colors.blue};
    padding-top: 50px;
    padding-bottom: 50px;
    color: ${p => p.theme.colors.white};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-transform: uppercase;
`;

export const TableRow = styled.tr`
    height: 30px;
    color: ${p => p.theme.colors.black};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:nth-child(even) {
        background-color: ${p => p.theme.colors.lightGrey};
    };
`;
