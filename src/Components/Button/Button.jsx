import style from "./Button.module.scss";

const Button = ({ value, classN }) => {
  return <button className={style[classN]}>{value}</button>;
};

export default Button;
