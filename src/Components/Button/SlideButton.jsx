import style from './Button.module.scss'

const SlideButton = ({children, handleClick}) => {
  return (
    <button className={style.SlideButton} onClick={handleClick}>
      {children}
    </button>
  )
}

export default SlideButton