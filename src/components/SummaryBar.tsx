const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

interface Props {
    count: number;
    totalCents: number;
}

export default function SummaryBar({ count, totalCents }: Props) {
    return(
        <div>
            <div>
                <div>Visible Transaction</div>
                <div>{count}</div>
            </div>
            <div>
                <div>Total Spend</div>
                <div>{fmt.format(totalCents/100)}</div>
            </div>
        </div>
    )
}