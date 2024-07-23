import styles from '@/app/ui/dashboard/outlets/addOutlet/addOutlet.module.css'
import { addOutlet } from '@/app/lib/actions'

const AddOutletPage = () => {
    return(
        <div className={styles.container}>
            <form action={addOutlet} className={styles.form}>
                <input type='text' placeholder='outlet name' name='name' required/>
                <input type='text' placeholder='identifier' name='identifier' required/>
                <input type='number' placeholder='est-year' name='est'/>
                <select name='size' id='size'>
                <option value='general'>Choose size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
                <select name='location' id='location'>
                <option value='general'>Choose location</option>
                    <option value='Tier 1'>Tier 1</option>
                    <option value='Tier 2'>Tier 2</option>
                    <option value='Tier 3'>Tier 3</option>
                </select>
                <select name='type' id='type'>
                <option value='general'>Choose outlet type</option>
                    <option value='Grocery store'>Grocery Store</option>
                    <option value='Supermarket 1'>Supermarket 1</option>
                    <option value='Supermarket 2'>Supermarket 2</option>
                    <option value='Supermarket 3'>Supermarket 3</option>
                </select>

                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default AddOutletPage