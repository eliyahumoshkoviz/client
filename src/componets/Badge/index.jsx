import style from './style.module.css'

export default function Badge({ children }) {
  return (
    <p className={style.main}>
      {children}
    </p>
  )
}
