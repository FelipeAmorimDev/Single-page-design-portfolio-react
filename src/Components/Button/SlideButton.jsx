import style from './Button.module.scss'

const SlideButton = ({children, handleClick, aria}) => {
  return (
    <button className={style.SlideButton} onClick={handleClick} aria-label={aria}>
      {children}
    </button>
  )
}

export default SlideButton