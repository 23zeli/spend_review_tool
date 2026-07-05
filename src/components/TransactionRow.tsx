import type { Transaction } from "../type"
import StatusBadge from "./StatusBadge"

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function formatDate(iso: string) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });
}

interface Props {
    transaction: Transaction,
    query: string,
}

export function TransactionRow({ transaction: t, query } : Props) {

    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <StatusBadge />
            </td>
        </tr>
    )
}