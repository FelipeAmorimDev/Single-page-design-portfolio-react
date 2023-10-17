import Button from "../Button/Button";
import style from "./Header.module.scss";

import { Logo } from "./Logo";

const HeaderTop = () => {
  return (
    <div className={style.HeaderTop}>
      <Logo />
      <Button value="Free Consultation" classN="ButtonPrimary" />
    </div>
  );
};

export default HeaderTop;
