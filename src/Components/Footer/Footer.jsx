import Button from "../Button/Button"
import { Logo } from "../Header/Logo"
import style from "./Footer.module.scss"
const Footer = () => {
  return (
    <footer className={style.FooterContainer} aria-label="Footer">
      <Logo />
      <Button value="Free Consultation" classN="ButtonPrimary"/>
    </footer>
  )
}

export default Footer