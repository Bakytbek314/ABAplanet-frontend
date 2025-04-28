"use client";

import { useCurrentUser } from "@/shared/lib/useCurrentUser";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./tabBar.module.scss";

const TabBar = () => {
  const { user } = useCurrentUser();
  const pathname = usePathname();

  return (
    <section className={styles.tab_bar}>
      <ul>
        <li>
          <Link
            href="/account"
            className={pathname === "/account" ? styles.active : ""}
          >
            <i className="pi pi-home"></i>
          </Link>
        </li>
        <li>
          <Link
            href="/account/schedule"
            className={pathname === "/account/schedule" ? styles.active : ""}
          >
            <i className="pi pi-calendar-clock"></i>
          </Link>
        </li>
        <li>
          {user?.role === "PATIENT" && (
            <Link
              href="/account/results"
              className={pathname === "/account/results" ? styles.active : ""}
            >
              <i className="pi pi-chart-line"></i>
            </Link>
          )}
          {user?.role === "SPECIALIST" && (
            <Link
              href="/account/my-patients"
              className={pathname === "/account/my-patients" ? styles.active : ""}
            >
              <i className="pi pi-users"></i>
            </Link>
          )}
        </li>
        <li>
          <Link
            href="/account/profile"
            className={pathname === "/account/profile" ? styles.active : ""}
          >
            <i className="pi pi-user"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TabBar;