import { PiMoneyFill } from 'react-icons/pi'
import styles from '@/app/ui/dashboard/cards/cards.module.css'

const Card_three = () => {
    return (
        <div className={styles.container}>
            <PiMoneyFill size={24}/>
            <div className={styles.texts}> 
                <span className={styles.title}>Total Sales</span>
                <span className={styles.number}>₹43 Lakhs</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>15% </span>more than previous week
                </span>
            </div>
        </div>
    )
}

export default Card_three