import { MdAttachMoney } from 'react-icons/md'
import styles from '@/app/ui/dashboard/cards/cards.module.css'

const Card_two = () => {
    return (
        <div className={styles.container}>
            <MdAttachMoney size={24}/>
            <div className={styles.texts}> 
                <span className={styles.title}>Total Transactions</span>
                <span className={styles.number}>289</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>10% </span>more than previous week
                </span>
            </div>
        </div>
    )
}

export default Card_two