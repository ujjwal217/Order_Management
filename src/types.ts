export interface Order {
  id: string;
  date: string;
  machine: string;
  customer: string;
  contact: string;
  amount: number;
  status: string;
}

export interface FilterOptions {
  dateFrom: string;
  dateTo: string;
  status: string;
  machines: string[];
}
