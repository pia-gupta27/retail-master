import { updateOutlet } from '@/app/lib/actions';
import { fetchOutlet } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/outlets/singleOutlet/singleOutlet.module.css'


const SingleOutletPage = async ({params}) => {

    const {id} = params;
    const outlet = await fetchOutlet(id);

    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {outlet.name}
            </div>
            <div className={styles.formContainer}>
            <form action={updateOutlet} className={styles.form}>
            <input type='hidden' name='id' value={outlet.id}/>
                <label >Outlet Name</label>
                <input type='text' name='name' placeholder={outlet.name}/>

                <label >Identifier</label>
                <input type='text' name='identifier' placeholder={outlet.identifier}/>

                <label >Est-Year</label>
                <input type='number' name='est' placeholder={outlet.est}/>
                
                <label >Size</label>
                <select name='size' id='size' defaultValue={outlet.size}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>

                <label >Location</label>
                <select name='location' id='location' defaultValue={outlet.location}>
                    <option value='Tier 1'>Tier 1</option>
                    <option value='Tier 2'>Tier 2</option>
                    <option value='Tier 3'>Tier 3</option>
                </select>

                <label >Outlet Type</label>
                <select name='type' id='type' defaultValue={outlet.type}>
                    <option value='Supermarket 1'>Supermarket 1</option>
                    <option value='Grocery store'>Grocery Store</option>
                    <option value='Supermarket 2'>Supermarket 2</option>
                    <option value='Supermarket 3'>Supermarket 3</option>
                </select>

                <button>Update</button>
            </form>
            </div>
        </div>
    )
}

export default SingleOutletPage