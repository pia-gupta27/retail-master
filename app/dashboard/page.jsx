import Card_one from '../ui/dashboard/cards/card/card1'
import Card_two from '../ui/dashboard/cards/card/card2'
import Card_three from '../ui/dashboard/cards/card/card3'
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/latest_transactions/latest_transactions'
import Chart from '../ui/dashboard/chart/chart'
import Downbar from '../ui/dashboard/downbar/downbar'


const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>

                <div className={styles.cards}>
                    <Card_one/>
                    <Card_two/>
                    <Card_three/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
                <Downbar/>
            </div>
        </div>
    )
    
}
    
export default Dashboard