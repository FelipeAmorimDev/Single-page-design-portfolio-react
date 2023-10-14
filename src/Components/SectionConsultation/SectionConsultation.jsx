import Button from "../Button/Button";

import hero from "../../assets/image-amy.webp";
import style from "./SectionConsultation.module.scss";
import styleF from "../_fonts.module.scss"

const SectionConsultation = () => {
  return (
    <section className={style.ConsultationContainer}>
      <img src={hero} alt="a woman" />
      <div>
        <h2 className={styleF.fontM}>I’m Amy, and I’d love to work on your next project</h2>
        <p className={styleF.fontB}>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button value="Free Consultation" classN={"ButtonSecondary"}/>
      </div>
    </section>
  );
};

export default SectionConsultation;
