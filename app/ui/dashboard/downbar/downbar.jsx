import styles from './downbar.module.css'
import { fetchOutlets } from '@/app/lib/data'

const Downbar = async () => {
    try{

        const { outlets } = await fetchOutlets("",1);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Current Outlets</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                    </tr>
                </thead>
                <tbody>
                {outlets.map((outlet) => (
              <tr key={outlet.id}>
                <td>
                  <div className={styles.outlet}>
    
                    {outlet.name}
                  </div>
                </td>
                <td>{outlet.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (err) {
    console.error("Error fetching outlets:", err);
    return (
      <div className={styles.error}>
        <p>Failed to load outlets.</p>
      </div>
    );
  }
};

export default Downbar;
