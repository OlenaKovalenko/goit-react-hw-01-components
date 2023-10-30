import { Table, TableHead, TableRow } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>

            <tbody>

                {items.map(({id, type, amount, currency}) => {
                    return (
                    <TableRow key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableRow>
                )
                })}
                
            </tbody>
        </Table>
    )
}