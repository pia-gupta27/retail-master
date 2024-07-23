import styles from './latest_transactions.module.css'
import { fetchTransactions } from '@/app/lib/data'


const Transactions = async () => {

    try{
        const { transactions } = await fetchTransactions("",1);

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            return date.toLocaleDateString('en-US', options).replace(/, /g, ' ').replace(',', '');
          };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>
                  <div className={styles.transaction}>
                  <img
                      src={transaction.img || "/noavatar.png"}
                      alt={transaction.cust}
                      width={40}
                      height={40}
                      className={styles.transactionImage}
                    />
    
                    {transaction.cust}
                  </div>
                </td>
                <td>{transaction.status}</td>
                <td>{formatDate(transaction.date)}</td>
                <td>₹{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (err) {
    console.error("Error fetching transactions:", err);
    return (
      <div className={styles.error}>
        <p>Failed to load transactions.</p>
      </div>
    );
  }
};

export default Transactions;



