import { MdOutlineSupervisedUserCircle } from 'react-icons/md'
import styles from '@/app/ui/dashboard/cards/cards.module.css'

const Card_one = () => {
    return (
        <div className={styles.container}>
            <MdOutlineSupervisedUserCircle size={24}/>
            <div className={styles.texts}> 
                <span className={styles.title}>Total Customers</span>
                <span className={styles.number}>250</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>12% </span>more than previous week
                </span>
            </div>
        </div>
    )
}

export default Card_one