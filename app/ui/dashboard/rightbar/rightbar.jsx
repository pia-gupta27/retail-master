/*import styles from './rightbar.module.css'
import { fetchProducts } from '@/app/lib/data'

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Current Products</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Stock</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.product}>
                            <img src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                            Pepsi
                            </div>
                        </td>
                        <td>35</td>
                    </tr>

                
                    
                </tbody>
            </table>
        </div>
    )
}

export default Rightbar*/


import styles from './rightbar.module.css';
import { fetchProducts } from '@/app/lib/data';

const Rightbar = async () => {
  try {

    const { products: productsPage1 } = await fetchProducts("", 1);

    const { products: productsPage2 } = await fetchProducts("", 2);

    // Combine the products from both pages
    const products = [...productsPage1, ...productsPage2];

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Current Products</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Item</td>
              <td>Stock</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <img
                      src={product.img || "/noproduct.jpg"}
                      alt={product.item}
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {product.item}
                  </div>
                </td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (err) {
    console.error("Error fetching products:", err);
    return (
      <div className={styles.error}>
        <p>Failed to load products.</p>
      </div>
    );
  }
};

export default Rightbar;
