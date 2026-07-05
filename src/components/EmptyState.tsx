export function EmptyState() {
    return(
        <tr>
            <td colSpan={6} style={{ textAlign: 'center', padding: '40px 0', color: '#aaa', fontSize: 13 }}>
                No transactions match your filters
            </td>
        </tr>
    )
}