import { useMemo, useState } from "react";
import useDebounce from "./useDebounce";
import type { SortDir, SortKey, Status } from "../type";
import { TRANSACTIONS } from "../data/transactions";

export default function useTableData () {
    const [query, setQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<Status | '' >('');
    const [sortKey, setSortKey] = useState<SortKey | null>(null);
    const [sortDir, setSortDir] =useState<SortDir>('asc');

    const debounceQuery = useDebounce(query, 500);

    const visibleRows = useMemo(()=>{
        let rows = TRANSACTIONS.filter(t => {
            const matchSearch = !debounceQuery || t.merchant.toLowerCase().includes(debounceQuery.toLowerCase());
            const matchStatus = !statusFilter || t.status === statusFilter;

            return matchSearch && matchStatus;
        });

        if (sortKey) {
            rows = [...rows].sort((a, b) => {
                const av = sortKey === 'amount' ? a.amountCents : a.date;
                const bv = sortKey === 'amount' ? b.amountCents : b.date;
                const cmp = av < bv ? -1 : av > bv ? 1 : 0;

                return sortDir === 'asc' ? cmp : -cmp;
            });
        }

        return rows;
    }, [TRANSACTIONS, debounceQuery, statusFilter, sortKey, sortDir]);

    const totalCents = useMemo(
        () => visibleRows.reduce((sum, r) => sum + r.amountCents, 0),
        [visibleRows]
    );

    function toggleSort(key: SortKey) {
        if(sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
        else{
            setSortKey(key);
            setSortDir('asc');
        }
    }

    return {
        query, setQuery,
        statusFilter, setStatusFilter,
        sortKey, sortDir, toggleSort,
        visibleRows,
        totalCents,
        debounceQuery,
    };
}