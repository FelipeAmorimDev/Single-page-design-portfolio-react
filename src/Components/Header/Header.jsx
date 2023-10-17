import style from "./Header.module.scss";
import HeaderTop from "./HeaderTop";
import HeaderDescription from "./HeaderDescription";

const Header = () => {
  return (
    <header className={style.HeaderContainer} aria-label="Header">
      <HeaderTop />
      <HeaderDescription />
    </header>
  );
};

export default Header;
