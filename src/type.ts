export type Status = 'pending' | 'approved' | 'declined';
export type SortKey = 'date' | 'amount';
export type SortDir = 'asc' | 'desc';

export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  cardholder: string;
  date: string; // ISO date string
  amountCents: number;
  status: Status;
}