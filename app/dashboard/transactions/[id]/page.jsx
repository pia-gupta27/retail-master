import { updateTransaction } from '@/app/lib/actions';
import { fetchTransaction } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/transactions/singleTransaction/singleTransaction.module.css'
import Image from 'next/image';

const SingleTransactionPage = async ({params}) => {

    const {id} = params;
    const transaction = await fetchTransaction(id);

    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                    <Image src={transaction.img || '/noavatar.png'} alt='' fill/>
                </div>
                {transaction.cust}
            </div>
            <div className={styles.formContainer}>
            <form action={updateTransaction} className={styles.form}>
            <input type='hidden' name='id' value={transaction.id}/>
                <label >Customer Name</label>
                <input type='text' name='cust' placeholder={transaction.cust}/>
                <label >Phone</label>
                <input type='text' name='phone' placeholder={transaction.phone}/>
                <label >Email</label>
                <input type='email' name='email' placeholder={transaction.email}/>
                <label >Transaction Amount</label>
                <input type='number' name='amount' placeholder={transaction.amount}/>
                <label >Transaction Date</label>
                <input type='date' name='date' defaultValue={new Date(transaction.date).toISOString().split('T')[0]}/>

                <label >Products Bought</label>
                <input type='text' name='products' placeholder={transaction.products}/>
                

                <label >Transaction Status</label>
                <select name='status' id='status' defaultValue={transaction.status}>
                    <option value='Pending'>Pending</option>
                    <option value='Done'>Done</option>
                    <option value='Cancelled'>Cancelled</option>
                </select>
               
            
                
            
                <button>Update</button>
            </form>
            </div>
        </div>
    )
}

export default SingleTransactionPage