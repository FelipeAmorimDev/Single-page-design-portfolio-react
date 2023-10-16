import React from "react";
import Button from "../Button/Button";

import hero from "../../assets/image-amy.webp";
import style from "./SectionConsultation.module.scss";
import styleF from "../_fonts.module.scss";
import "./efeitos.css";
 
const SectionConsultation = () => {
  const elementosRefs = [];

  const adicionarRef = (ref) => {
    if (ref) {
      elementosRefs.push(ref);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        Array.from(entries).forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            if(entry.target.className == "Animate"){
              entry.target.classList.add("AnimateOff");
            }
            entry.target.classList.add("ScaleReset")
            
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    elementosRefs.forEach((element) => {
      observer.observe(element);
    });
  }, [elementosRefs]);

  return (
    <section className={style.ConsultationContainer}>
      <img src={hero} alt="a woman" ref={adicionarRef} />
      <div ref={adicionarRef} className="Animate">
        <h2 className={styleF.fontM} >
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className={styleF.fontB} >
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button value="Free Consultation" classN={"ButtonSecondary"} />
      </div>
    </section>
  );
};

export default SectionConsultation;
