import type { Transaction } from "../type"
import StatusBadge from "./StatusBadge"

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function formatDate(iso: string) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });
}

function highlight(text: string, query: string) {
    if (!query) return <>{text}</>;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) return <>{text}</>;
    return(
        <>
            {text.slice(0, idx)}
            <mark style={{ background: '#FAEEDA', color: '#633806', padding: '0 1px', borderRadius: 2 }}>
                {text.slice(idx, idx + query.length)}
            </mark>
            {text.slice(idx + query.length)}
        </>
    )
}

interface Props {
    transaction: Transaction,
    query: string,
}

export function TransactionRow({ transaction: t, query } : Props) {

    return (
        <tr>
            <td>{highlight(t.merchant, query)}</td>
            <td>{t.category}</td>
            <td>{t.category}</td>
            <td>{formatDate(t.date)}</td>
            <td>
                {t.amountCents === 0
                    ? <span style={{ color: '#bbb' }}>-</span>
                    : fmt.format(t.amountCents / 100)
                }
            </td>
            <td>
                <StatusBadge />
            </td>
        </tr>
    )
}