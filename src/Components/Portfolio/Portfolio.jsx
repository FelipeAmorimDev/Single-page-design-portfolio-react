import Slide from '../Slide/Slide'

import styleT from '../_fonts.module.scss'
import style from './Portfolio.module.scss'

const Portfolio = () => {
  return (
    <section className={style.PortFolioContainer}>
      <h2 className={styleT.fontS}>My Work</h2>
      <Slide />
    </section>
  )
}

export default Portfolio