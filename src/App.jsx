import Button from "./Components/Button/Button";

import logo from "./assets/logo.svg";
import graphicDesigner from "./assets/pattern-graphic-design.svg";
import uiUx from "./assets/pattern-ui-ux.svg";
import appImg from "./assets/pattern-apps.svg";
import photography from "./assets/pattern-photography.svg";
import ilustrations from "./assets/pattern-illustrations.svg";
import motionGraphics from "./assets/pattern-motion-graphics.svg";
import styleF from "./Components/_fonts.module.scss";
import style from "./App.module.scss";

function App() {
  return (
    <div>
      <header className={style.HeaderContainer}>
        <div className={style.HeaderTop}>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <Button value="Free Consultation" classN="ButtonPrimary" />
        </div>
        <div className={style.HeaderDescription}>
          <h1 className={styleF.fontL}>Design solutions made easy</h1>
          <p className={styleF.fontB}>
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
          <ul className={style.ServicesList}>
            <li className={`${style.ServiceItem} ${style.GraphicDesign}`}>
              <img src={graphicDesigner} alt="Graphic Design" />
              <h2>Graphic Design</h2>
            </li>
            <li className={`${style.ServiceItem} ${style.UiUx}`}>
              <img src={uiUx} alt="UI/UX" />
              <h2>UI/UX</h2>
            </li>
            <li className={`${style.ServiceItem} ${style.Apps}`}>
              <img src={appImg} alt="Apps" />
              <h2>Apps</h2>
            </li>
            <li className={`${style.ServiceItem} ${style.Photography}`}>
              <img src={photography} alt="Photography" />
              <h2>Photography</h2>
            </li>
            <li className={`${style.ServiceItem} ${style.Ilustration}`}>
              <img src={ilustrations} alt="Illustrations" />
              <h2>Illustrations</h2>
            </li>
            <li className={`${style.ServiceItem} ${style.MotionGraphic}`}>
              <img src={motionGraphics} alt="Motion Graphics" />
              <h2>Motion Graphics</h2>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
