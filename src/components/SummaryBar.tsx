import type React from "react";

const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

interface Props {
    count: number;
    totalCents: number;
}

export default function SummaryBar({ count, totalCents }: Props) {
    return(
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14,}}>
            <div>
                <div style={cardStyle}>Visible Transaction</div>
                <div style={labelStyle}>{count}</div>
            </div>
            <div>
                <div style={cardStyle}>Total Spend</div>
                <div style={labelStyle}>{fmt.format(totalCents/100)}</div>
            </div>
        </div>
    )
}

const cardStyle: React.CSSProperties = {
    background: '#F5F5F3',
    padding: 8,
    borderRadius: '10px 14px',
}

const labelStyle: React.CSSProperties = {
    fontSize: 18,
    color: '#888',
    marginBottom: 4,
}