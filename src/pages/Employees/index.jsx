import  styles from './index.module.css';
import Card from '../../components/Card';
import addBtn from '../../assets/add_btn.svg'
import DeleteModal from '../../components/DeleteModal';
import AddEmployee from '../../components/AddEmployee';
function Employees() {
  return (
    <div className={styles.employees}>
        <div className={styles.key_employees}>
            <h1 className={styles.key_employees_title}>Xodimlar</h1>
            <div className={styles.key_employees_list}>
                 <Card/>
                 <Card/>
                 <Card/>
            </div>
        </div>
        <div className={styles.teachers}></div>
        <h1 className={styles.teachers_title}>O`qituvchilar</h1>
        <div className={styles.teachers_list}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>

        <button className={styles.add_btn}><img src={addBtn} alt="add" /></button>
        <DeleteModal />
        <AddEmployee />
    </div>
  )
}

export default Employees