"use client";
import { usePathname, useRouter } from "next/navigation";
import { Ripple } from "primereact/ripple";
import { destroyCookie } from "nookies";
import Link from "next/link";
import TextType from "@shared/ui/textType/textType";
import styles from "./sidebar.module.scss";

const AdminSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", icon: "pi pi-home", href: "/admin" },
    { label: "Расписания", icon: "pi pi-calendar", href: "/admin/schedule" },
    { label: "Пациенты", icon: "pi pi-users", href: "/admin/patients" },
    { label: "Специалисты", icon: "pi pi-users", href: "/admin/specialists" },
    { label: "Пособия", icon: "pi pi-clipboard", href: "/admin/manuals" },
    { label: "Настройки", icon: "pi pi-cog", href: "/admin/settings" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
        <span className="inline-flex align-items-center gap-2">
          <TextType variant={"bigP"} color={"blue"}>
            ABA Планета
          </TextType>
        </span>
      </div>
      <div className="overflow-y-auto">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={pathName === item.href ? styles.active : ""}
            >
              <Link
                href={item.href}
                className={`p-ripple flex align-items-center cursor-pointer p-3 border-round transition-duration-150 transition-colors w-full`}
              >
                <i className={`${item.icon} mr-2`}></i>
                <span>
                  <TextType variant={"smallP"}>{item.label}</TextType>
                </span>
                <Ripple />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex align-items-center gap-2 mt-auto mx-auto cursor-pointer"
        onClick={() => {destroyCookie(null, "token"), router.push("/auth")}}
      >
        <i className="pi pi-sign-out"/>
        <TextType variant="mediumP">Выйти</TextType>
      </div>
    </aside>
  );
};

export default AdminSidebar;
