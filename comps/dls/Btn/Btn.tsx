import styles from './Btn.module.scss'

const Btn = ({text}:{text:string}) => {
  return (
   <div className={styles.btnZ}>
          {text}
          <span className={styles.top}></span>
          <span className={styles.right}></span>
          <span className={styles.left}></span>
          <span className={styles.bottom}></span>
   </div>
  )
}
export default Btn
