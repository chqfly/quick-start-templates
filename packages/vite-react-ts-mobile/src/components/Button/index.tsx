import { PropsWithChildren, CSSProperties } from "react";
import cls from "classnames";
import styles from "./index.module.scss";

interface ButtonProps extends PropsWithChildren {
  type: "primary" | "default" | "error" | "warning";
  className?: string;
  style?: CSSProperties;
}

export default function Button(props: ButtonProps) {
  const { type, className, style, children } = props;

  console.log(type);

  return (
    <div
      className={cls(styles.button, className)}
      style={style}
    >
      {children}
    </div>
  );
}
