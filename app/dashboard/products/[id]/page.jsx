import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from "next/image";

const SingleProductPage = async ({params}) => {

    const {id} = params;
    const product = await fetchProduct(id);

    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={product.img || '/noproduct.jpg'} alt='' fill/>
                </div>
                {product.item}
            </div>
            <div className={styles.formContainer}>
            <form action={updateProduct} className={styles.form}>
            <input type='hidden' name='id' value={product.id}/>
                <label >Item</label>
                <input type='text' name='item' placeholder={product.item}/>

                <label >Category</label>
                <select name='cat' id='cat' defaultValue={product.cat}>
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

                <label >Fat Content</label>
                <select name='fat' id='fat' defaultValue={product.fat}>
                    <option value='Regular'>Regular</option>
                    <option value='Low fat'>Low Fat</option>
                </select>
                <label >Identifier</label>
                <input type='text' name='identifier' placeholder={product.identifier}/>
                <label >Price</label>
                <input type='number' name='price' placeholder={product.price}/>
                <label >Stock</label>
                <input type='number' name='stock' placeholder={product.stock}/>
                <label >Weight</label>
                <input type='text' name='weight' placeholder={product.weight}/>
                
            
                <button>Update</button>
            </form>
            </div>
        </div>
    )
}

export default SingleProductPage