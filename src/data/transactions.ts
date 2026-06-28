import type { Transaction } from '../type'

export const TRANSACTIONS: Transaction[] = [
  { id:'t1', merchant:'AWS',            category:'Software',   cardholder:'Sarah Chen',    date:'2024-03-18', amountCents:284500,  status:'approved' },
  { id:'t2', merchant:'Delta Airlines', category:'Travel',     cardholder:'Marcus Webb',   date:'2024-03-17', amountCents:89200,   status:'pending'  },
  { id:'t3', merchant:'Salesforce',     category:'Software',   cardholder:'Sarah Chen',    date:'2024-03-16', amountCents:1200000, status:'approved' },
  { id:'t4', merchant:'Uber Eats',      category:'Meals',      cardholder:'Jordan Park',   date:'2024-03-15', amountCents:4750,    status:'declined' },
  { id:'t5', merchant:'WeWork',         category:'Office',     cardholder:'Marcus Webb',   date:'2024-03-14', amountCents:350000,  status:'approved' },
  { id:'t6', merchant:'Notion',         category:'Software',   cardholder:'Jordan Park',   date:'2024-03-13', amountCents:16000,   status:'pending'  },
  { id:'t7', merchant:'Stripe',         category:'Software',   cardholder:'Sarah Chen',    date:'2024-03-12', amountCents:0,       status:'approved' },
  { id:'t8', merchant:'Airbnb',         category:'Travel',     cardholder:'Priya Nair',    date:'2024-03-11', amountCents:234000,  status:'declined' },
  { id:'t9', merchant:'DoorDash',       category:'Meals',      cardholder:'Priya Nair',    date:'2024-03-10', amountCents:3200,    status:'approved' },
  { id:'t10',merchant:'Google Ads',     category:'Marketing',  cardholder:'Marcus Webb',   date:'2024-03-09', amountCents:750000,  status:'approved' },
];