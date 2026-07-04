import type { Status } from "../type";

export default function StatusBadge( {status} : {status: Status}) {

    const styles: Record<Status, React.CSSProperties> = {
        approved: {background: '#EAF3DE', color: '#27500A'},
        pending: {background: '#FAEEDA', color: '#633806'},
        declined: {background: '#FCEBEB', color: '#791F1F'},
    }

    return (
        <span
            style={{
                ...styles[status],
                fontSize: 11,
                fontWeight: 500,
                padding: '2px 8px',
                borderRadius: 20,
                display: 'inline-block',
            }}
        >
            {status}
        </span>
    );
};