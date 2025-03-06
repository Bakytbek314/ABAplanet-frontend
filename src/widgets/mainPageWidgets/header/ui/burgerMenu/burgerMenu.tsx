import {useRef} from "react";
import {useClickOutSide} from "@/shared/lib/useClickOutSide";
import { FcContacts, FcGallery, FcBusinesswoman } from "react-icons/fc";
import {BurgerMenuProps} from "./burgerMenu.props";
import styles from "./burgerMenu.module.scss";

const BurgerMenu = ({ onMenuClose }: BurgerMenuProps) => {

    const burgerRef = useRef(null);
    useClickOutSide( burgerRef, () => onMenuClose() );

    return (
        <main className={styles.burger_popup}>
            <div className={styles.burger_menu} ref={burgerRef}>
                <ul>
                    <li>Контакты <FcContacts/> </li>
                    <li>Галерея <FcGallery/> </li>
                    <li>Наша команда <FcBusinesswoman/> </li>
                </ul>
            </div>
        </main>
    )
}

export default BurgerMenu;