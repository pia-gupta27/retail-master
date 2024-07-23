import { addProduct } from '@/app/lib/actions'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
    return(
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type='text' placeholder='item' name='item' required/>
                <select name='cat' id='cat'>
                <option value='general'>Choose a Category</option>
                    <option value='Soft Drinks'>Soft Drinks</option>
                    <option value='Dairy'>Dairy</option>
                    <option value='Household'>Household</option>
                    <option value='Meat'>Meat</option>
                    <option value='Fruits and Vegetables'>Fruits and Vegetables</option>
                    <option value="Breads">Breads</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Canned">Canned</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Hard Drinks">Hard Drinks</option>
                    <option value="Health and Hygiene">Health and Hygiene</option>
                    <option value="Others">Others</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Snack Foods">Snack Foods</option>
                    <option value="Starchy Foods">Starchy Foods</option>
                </select>
                <select name='fat' id='fat'>
                <option value='general'>Choose Fat content</option>
                    <option value='low fat'>Low Fat</option>
                    <option value='regular'>Regular</option>
                </select>
                <input type='text' placeholder='identifier' name='identifier'/>
                <input type='number' placeholder='price' name='price'/>
                <input type='number' placeholder='stock' name='stock'/>
                <input type='text' placeholder='weight' name='weight'/>

                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default AddProductPage