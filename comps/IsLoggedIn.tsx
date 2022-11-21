import styles from "./IsLoggedIn.module.scss";
export const IsLoggedIn = () => {
  return (
    <div>
      <button className={`${styles.btnZ}`}>
        Sign up
        <span className={styles.top}></span>
        <span className={styles.right}></span>
        <span className={styles.left}></span>
        <span className={styles.bottom}></span>
      </button>
    </div>
  );
};
