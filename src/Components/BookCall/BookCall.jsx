import Button from "../Button/Button";

import styleF from "../_fonts.module.scss";
import style from "./BookCall.module.scss";

const BookCall = () => {
  return (
    <section className={style.Container}>
      <div className={style.BookCallContainer}>
        <div>
          <h2 className={styleF.fontM}>Book a call with me</h2>
          <p className={styleF.fontB}>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <Button value="Free Consultation" classN="ButtonSecondary" />
      </div>
    </section>
  );
};

export default BookCall;
