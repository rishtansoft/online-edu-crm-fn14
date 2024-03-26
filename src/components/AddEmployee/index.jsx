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
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="gender">Jinsi</label>
                    <select className={styles.add_employee_input} id="gender">
                        <option value="" disabled selected hidden>Jinsini tanlang</option>
                        <option value="male">Erkak</option>
                        <option value="female">Ayol</option>
                    </select>
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="phone">Xodim tel raqami</label>
                    <input className={styles.add_employee_input} type="tel" id="phone" placeholder="+998" />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="phone2">Qo‘shimcha tel raqam</label>
                    <input className={styles.add_employee_input} type="tel" id="phone2" placeholder="+998" />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="telegram">Telegram ID</label>
                    <input className={styles.add_employee_input} type="text" id="telegram" placeholder="@username" />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="role">Xodim vazifasi</label>
                    <select className={styles.add_employee_input} id="role">
                        <option value="" disabled selected hidden>Xodim vazifasini tanlang</option>
                        <option value="CEO">Bosh direktor (CEO)</option>
                        <option value="admin">Administrator</option>
                        <option value="accountant">Hisobchi</option>
                        <option value="teacher">O‘qituvchi</option>
                    </select>
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="login">Xodim logini</label>
                    <input className={styles.add_employee_input} type="text" id="login" placeholder="ceo_1" />
                </div>
                <div className={styles.add_employee_form_group}>
                    <label className={styles.add_employee_label} htmlFor="password">Paroli</label>
                    <input className={styles.add_employee_input} type="password" id="password" placeholder="******" />
                </div>
            </form>
            <div className={styles.addBtn}>
            <button className={styles.btn}>Qo‘shish</button>
            </div>
            
         </div>
    </div>
  )
}

export default AddEmployee