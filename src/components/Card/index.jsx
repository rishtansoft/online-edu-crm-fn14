import styles from './index.module.css'
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit_icon.svg'
import calendar from '../../assets/calendar-clock .svg'
import phone from '../../assets/phone.svg' 
function Card() {
  return (
    <div className={styles.card_wrapper}>
        <div className={styles.card_options}>
            <h1 className={styles.employee_name}>Jamoliddin Ergashaliyev</h1>
            <div className={styles.actions}>
                  <button className={styles.action_button}><img src={edit} alt="edit" /></button>
                  <button className={styles.action_button}><img src={trash} alt="trash" /></button>
            </div>
        </div>
        <p className='employee_role'>Bosh direktor(CEO)</p>
        <div className={styles.employee_info}>
            <div className={styles.dateOfBirth}><img src={calendar} alt="" /><span>12.08.2000</span></div>
            <div className={styles.phone}><img src={phone} alt="" /><span>+998 99 99 99 99</span></div>
        </div>
    </div>
  )
}

export default Card