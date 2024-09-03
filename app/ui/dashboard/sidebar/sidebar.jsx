import { auth, signOut } from "@/app/auth";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdStore,
} from "react-icons/md";


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Outlets",
        path: "/dashboard/outlets",
        icon: <MdStore />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Prediction",
        path: "/dashboard/prediction",
        icon: <MdAnalytics />,
      },
      
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      
      
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {

  const {user} = await auth();

    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src={user.img || "/noavatar.png"} alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>{user.username}</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map(cat=>(
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item=>(
                            <MenuLink item={item} key={item.title}/>
                        ))}
                    </li>
                    
                ))}

            </ul>
            <form action={async () =>{
              "use server"
              await signOut();
            }}>
            <button className={styles.logout}>
                <MdLogout/>
                Logout
                </button>
                </form>
            
        </div>
    )
}

export default Sidebar;
