import { addTransaction } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/transactions/addTransaction/addTransaction.module.css'

const AddTransactionPage = () => {
    return(
        <div className={styles.container}>
            <form action={addTransaction} className={styles.form}>
                <input type='text' placeholder='customer name' name='cust' required/>
                <input type='email' placeholder='email' name='email'/>
                <input type='text' placeholder='phone' name='phone'/>
                <input type='number' placeholder='transaction amount' name='amount'/>
               
                <input type='date' placeholder='date' name='date'/>
                <select name='status' id='status'>
                <option value='general'>Choose transaction status</option>
                    <option value='Pending'>Pending</option>
                    <option value='Done'>Done</option>
                    <option value='Cancelled'>Cancelled</option>
                </select>
                <input type='text' placeholder='products bought' name='products'/>
                

                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default AddTransactionPage