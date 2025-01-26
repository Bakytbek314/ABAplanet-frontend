import {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size?: "small" | "medium" | "large" | "full";
    color?: "red" | "grey" | "green";
    href?: string;
    className?: string;
    onClick?: () => void;
    align?: "left" | "center" | "right";
    children: ReactNode;
}