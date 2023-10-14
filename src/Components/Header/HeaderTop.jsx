import Button from "../Button/Button";
import style from "./Header.module.scss";
import logo from "../../assets/logo.svg";

const HeaderTop = () => {
  return (
    <div className={style.HeaderTop}>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <Button value="Free Consultation" classN="ButtonPrimary" />
    </div>
  );
};

export default HeaderTop;
