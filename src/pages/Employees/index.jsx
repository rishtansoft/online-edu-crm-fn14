import  styles from './index.module.css';
import Card from '../../components/Card';
import addBtn from '../../assets/add_btn.svg'
import DeleteModal from '../../components/DeleteModal';
import AddEmployee from '../../components/AddEmployee';
import { useState } from 'react';
function Employees() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.employees}>
        <div className={styles.key_employees}>
            <h1 className={styles.key_employees_title}>Xodimlar</h1>
            <div className={styles.key_employees_list}>
                 <Card/>
            </div>
        </div>
        <div className={styles.teachers}></div>
        <h1 className={styles.teachers_title}>O`qituvchilar</h1>
        <div className={styles.teachers_list}>
        <Card/>
        </div>

        <button onClick={() => setShowModal(true)} className={styles.add_btn}><img src={addBtn} alt="add" /></button>
        {
        showModal && <AddEmployee setShowModal={setShowModal}/>
        }
        <DeleteModal />
    </div>
  )
}

export default Employees