import Link from "next/link";
import styles from "./sidebar.module.scss";

const AdminSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul>
                <li>
                    <Link href="/admin">Главная</Link>
                </li>
                <li>
                    <Link href="/admin/patients">Пациенты</Link>
                </li>
                <li>
                    <Link href="/admin/specialists">Специалисты</Link>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSidebar;