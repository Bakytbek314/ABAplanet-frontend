"use client";
import Link from "next/link";
import styles from "./tabBar.module.scss";
import { useCurrentUser } from "@/shared/lib/useCurrentUser";

const TabBar = () => {
  const { currentUser, user } = useCurrentUser();

  return (
    <section className={styles.tab_bar}>
      <ul>
        <li>
          <Link href={"/account"}>
            <i className="pi pi-home"></i>
          </Link>
        </li>
        <li>
          <Link href={"/account/schedule"}>
            <i className="pi pi-calendar-clock"></i>
          </Link>
        </li>
        <li>
          {user?.role === "PATIENT" && (
            <Link href={"/account/results"}>
              <i className="pi pi-chart-line"></i>
            </Link>
          )}
          {user?.role === "SPECIALIST" && (
            <Link href={"/account/my-patients"}>
              <i className="pi pi-users"></i>
            </Link>
          )}
        </li>
        <li>
          <Link href={"/account/profile"}>
            <i className="pi pi-user"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TabBar;
