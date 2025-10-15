import { LogoIcon } from "@shared/assets/icons/logo";
import styles from "./header.module.scss";
import TextType from "@/shared/ui/textType/textType";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className={styles.navigation}>
            <div className={styles.logo}>
              <LogoIcon />
            </div>
            <div className={styles.links}>
              <div className={styles.list}>
                <ul>
                  <li>
                    <Link href={"/auth"}>
                      <TextType variant="mediumP">Войти</TextType>
                      <i className="pi pi-sign-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
