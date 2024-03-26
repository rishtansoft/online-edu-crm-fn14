import styles from './index.module.css'
import trash from '../../assets/modal_trash-Icon.svg'

function DeleteModal() {
  return (
    <div className={styles.modal}>
        <div className={styles.modal_wrapper}>
        <div className={styles.modal_icon}>
            <img src={trash} alt="trash" />
        </div>

        <p className={styles.modal_text}>Rostdan ham ushbu “narsa”ni o‘chirmoqchimisiz?</p>

        <div className={styles.modal_actions}>
            <button className={styles.cancel_btn}>Yo‘q</button>
            <button className={styles.confirm_btn}>Ha</button>
        </div>
        </div>
        </div>
  )
}

export default DeleteModal