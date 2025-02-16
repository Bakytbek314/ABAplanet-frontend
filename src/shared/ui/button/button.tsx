import classNames from "classnames";
import {ButtonProps} from "./button.props";
import TextType from "@text/"
import styles from "./button.module.scss";
const Button = ({size, color, align = "center", children, onClick, className, type}: ButtonProps ) => {

    const classNameGenerator = classNames(
        size && styles[size],
        color && styles[color],
        styles["btn"],
        className
    )

    return (
        <button className={classNameGenerator} onClick={onClick} type={type}>
            <TextType variant={"mediumP"} align={align}>
                {children}
            </TextType>
        </button>
    )
}

export default Button;