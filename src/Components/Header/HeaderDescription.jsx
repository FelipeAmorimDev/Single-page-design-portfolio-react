import ServicesList from "./ServicesList";

import styleF from "../_fonts.module.scss";
import style from "./Header.module.scss";

const HeaderDescription = () => {
  return (
    <div className={style.HeaderDescription} aria-labelledby="description__title">
      <h1 className={styleF.fontL} id="description__title">Design solutions made easy</h1>
      <p className={styleF.fontB}>
        With over ten years of experience in various design disciplines, I’m
        your one-stop shop for your design needs.
      </p>
      <ServicesList />
    </div>
  );
};

export default HeaderDescription;
