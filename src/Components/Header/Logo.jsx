import logo from "../../assets/logo.svg";
import style from "./Logo.module.scss";
export const Logo = () => {
  return (
    <a href="/" className={style.Logo}>
      <img src={logo} alt="Logo" />
    </a>
  );
};
