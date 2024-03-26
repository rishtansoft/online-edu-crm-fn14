import React, { useState, useRef } from "react";
import styles from "./style.module.css";

export default function GroupInfoPage() {
  const [rows, setRows] = useState([]);

  const nameRef = useRef("");
  const fieldRef = useRef("");
  const amountRef = useRef("");
  const timeRef = useRef("");

  const [isModal, setIsModal] = useState(false);

  const addRow = () => {
    openModal();
  };

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  function validation() {
    if (
      !nameRef.current.value ||
      !fieldRef.current.value ||
      !amountRef.current.value ||
      !timeRef.current.value
    ) {
      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const inputRef = nameRef.current.value;
    const fieldsRef = fieldRef.current.value;
    const amountsRef = amountRef.current.value;
    const timesRef = timeRef.current.value;

    if (!validation()) {
      alert("Fill all fields");
    } else {
      const newRow = {
        id: rows.length + 1,
        name: inputRef,
        field: fieldsRef,
        amount: amountsRef,
        time: timesRef,
      };
      setRows([...rows, newRow]);
      closeModal();
    }
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.cell}>Number</th>
            <th className={styles.cell}>Guruh nomi</th>
            <th className={styles.cell}>Yo'nalishi</th>
            <th className={styles.cell}>O'quvchilar soni</th>
            <th className={styles.cell}>Dars vaqtlari</th>
            <th className={styles.cell}>Guruh ochilgan sana</th>
            <th className={styles.cell}>Taxminiy yopilish sanasi</th>
            <th className={styles.cell}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className={styles.row}>
              <td className={styles.cell}>{row.id}</td>
              <td className={styles.cell}><a href={row.name}>{row.name}</a></td>
              <td className={styles.cell}>{row.field}</td>
              <td className={styles.cell}>{row.amount}</td>
              <td className={styles.cell}>{row.time}</td>
              <td className={styles.cell}>{row.beginningDate}</td>
              <td className={styles.cell}>{row.finishingDate}</td>
              <td className={styles.cell}>
                <span>...</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.addButton} onClick={addRow}>
        Add
      </button>
      {isModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <div className={styles.modalForm}>
              <form>
                <input type="text" placeholder="Guruh nomi" ref={nameRef} />
                <input type="text" placeholder="Yo'nalishi" ref={fieldRef} />
                <input
                  type="number"
                  placeholder="O'quvchilar soni"
                  ref={amountRef}
                />
                <input type="time" placeholder="Dars vaqti" ref={timeRef} />
                <input type="date" placeholder="Guruhning ochilish sanasi" />
                <input type="date" placeholder="Taxminiy yopilish sanasi" />
                <button type="submit" onClick={handleSubmit}>
                  Qo'shish
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
