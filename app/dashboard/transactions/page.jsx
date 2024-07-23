import styles from '@/app/ui/dashboard/transactions/transactions.module.css'
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import {searchParams} from "next/navigation"
import { fetchTransactions } from '@/app/lib/data';
import { deleteTransaction } from '@/app/lib/actions';

const TransactionsPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page || 1, 10);

  

  try {
    const { count, transactions } = await fetchTransactions(q, page);

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-US', options).replace(/, /g, ' ').replace(',', '');
    };
    
    return (
        <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a transaction..." />
          <Link href="/dashboard/transactions/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            
            <tr>
              <td>Customer</td>
              <td>Email</td>
              <td>Amount</td>
              <td>Date</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {transactions.map((transaction)=>(
             
             <tr key={transaction.id} className={styles[transaction.status.toLowerCase()]}>
              <td><div className={styles.transaction}>
              <img src={transaction.img || "/noavatar.png"} alt="" width={40} height={40} className={styles.transactionImage}/>
                      {transaction.cust}
                  </div>
              </td>
              <td>{transaction.email}</td>
              <td>₹{transaction.amount}</td>
              <td>{formatDate(transaction.date)}</td>
              <td>{transaction.status}</td>
              <td>
                  <div className={styles.buttons}>
                      <Link href={`/dashboard/transactions/${transaction.id}`}>
                          <button className={`${styles.button} ${styles.view}`}>
                              View
                          </button>
                      </Link>
                      <form action={deleteTransaction}>
                        <input type='hidden' name='id' value={transaction.id}/>
                          <button className={`${styles.button} ${styles.delete}`}>
                              Delete
                          </button>
                          </form>
                  </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count}/>
      </div>
    )
  } catch (err) {
    console.error("Error loading transactions:", err);
    return (
      <div className={styles.error}>
        <p>Failed to load transactions.</p>
      </div>
    );
  }
    
}
    
export default TransactionsPage;



