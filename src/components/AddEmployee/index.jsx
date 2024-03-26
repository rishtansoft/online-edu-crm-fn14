import styles from './index.module.css'


function AddEmployee() {
  return (
    <div className={styles.add_employee}>
        <header className={styles.add_employee_header}>
                <h4 className={styles.add_employee_title}>Xodim qo‘shish</h4>
                <p className={styles.add_employee_text}>Yangi xodim qo‘shishingiz mumkin</p>
            </header>
         <div className={styles.add_employee_wrapper}>
            <form className={styles.add_employee_form}>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="name">Xodim ismi</label>
                    <input className={styles.add_employee_input} type="text" id="name" placeholder="Ism kiriting..." />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="surname">Xodim familiyasi</label>
                    <input className={styles.add_employee_input} type="text" id="surname" placeholder="Familiya kiriting..." />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="fathername">Otasining ismi</label>
                    <input className={styles.add_employee_input} type="text" id="fathername" placeholder="Otasining ismini kiriting..." />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="address">Manzili</label>
                    <input className={styles.add_employee_input} type="text" id="address" placeholder="Manzilini kiriting..." />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="dateOfBirth">Tug‘ilgan sanasi</label>
                    <input className={styles.add_employee_input} type="date" id="dateOfBirth"/>
                </div>
            </form>
         </div>
    </div>
  )
}

export default AddEmployee