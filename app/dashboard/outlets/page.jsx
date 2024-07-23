import styles from '@/app/ui/dashboard/outlets/outlets.module.css'
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import {searchParams} from "next/navigation"
import { fetchOutlets } from '@/app/lib/data';
import { deleteOutlet } from '@/app/lib/actions';

const OutletsPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page || 1, 10);

  try {
    const { count, outlets } = await fetchOutlets(q, page);

    return (
        <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a outlet..." />
          <Link href="/dashboard/outlets/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td>Location</td>
              <td>Size</td>
              <td>Est Year</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {outlets.map((outlet)=>( 
            <tr key={outlet.id}>
              <td><div className={styles.outlet}>
                      {outlet.name}
                  </div>
              </td>
              <td>{outlet.type}</td>
              <td>{outlet.location}</td>
              <td>{outlet.size}</td>
              <td>{outlet.est}</td>
              <td>
                  <div className={styles.buttons}>
                      <Link href={`/dashboard/outlets/${outlet.id}`}>
                          <button className={`${styles.button} ${styles.view}`}>
                              View
                          </button>
                      </Link>
                      <form action={deleteOutlet}>
                      <input type='hidden' name='id' value={outlet.id}/>
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
  console.error("Error loading outlets:", err);
  return (
    <div className={styles.error}>
      <p>Failed to load outlets</p>
    </div>
  );
}

}
  
    
export default OutletsPage



