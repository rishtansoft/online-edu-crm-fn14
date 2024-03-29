import React, { useState, useRef } from "react";
import styles from "./style.module.css";
import icon1 from "./images/icons1.png";
import icon2 from "./images/icons.png";

export default function GroupInfoPage() {
  const [rows, setRows] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isModalAction, setIsModalAction] = useState(false);
  const [isIndex, setIsIndex] = useState(null);
  

  const nameRef = useRef("");
  const fieldRef = useRef("");
  const amountRef = useRef("");
  const timeRef = useRef("");
  const beginningDateRef = useRef("");
  const finishingDateRef = useRef("");

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
      !timeRef.current.value ||
      !beginningDateRef.current.value ||
      !finishingDateRef.current.value
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
    const startingDateRef = beginningDateRef.current.value;
    const endingDateRef = finishingDateRef.current.value;

    if (!validation()) {
      alert("Fill all fields");
    } else {
      const newRow = {
        id: rows.length + 1,
        name: inputRef,
        field: fieldsRef,
        amount: amountsRef,
        time: timesRef,
        beginningDate: startingDateRef,
        finishingDate: endingDateRef,
      };
      setRows([...rows, newRow]);
      closeModal();
    }
  }

  function openModalAction() {
    setIsModalAction(true);
  }
  function closeModalAction() {
    setIsModalAction(false);
  }

  function handleActions(event, rowIndex) {
    setIsIndex(rowIndex);
    openModalAction();
  }

  function handleDelete() {
    if (isIndex !== null) {
      const newRows = rows.filter((row, index) => index !== isIndex);
      setRows(newRows);
    }
    closeModalAction();
  }

  function handleEdit(row) {
    const newIndex = rows.findIndex((el) => el.id == row.id);
    if (newIndex !== -1) {
      alert("hello");
    } else {
      alert("do not give up");
    }
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.cell}>ID</th>
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
          {rows.map((row, index) => (
            <tr key={row.id} className={styles.row}>
              <td className={styles.cell}>{row.id}</td>
              <td className={styles.cell}>
                <a href={row.name}>{row.name}</a>
              </td>
              <td className={styles.cell}>{row.field}</td>
              <td className={styles.cell}>{row.amount}</td>
              <td className={styles.cell}>{row.time}</td>
              <td className={styles.cell}>{row.beginningDate}</td>
              <td className={styles.cell}>{row.finishingDate}</td>
              <td className={styles.cell}>
                <span
                  onClick={(event) => handleActions(event, index)}
                  className={styles.actions}
                >
                  ...
                </span>
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
                <input
                  type="date"
                  placeholder="Guruhning ochilish sanasi"
                  ref={beginningDateRef}
                />
                <input
                  type="date"
                  placeholder="Taxminiy yopilish sanasi"
                  ref={finishingDateRef}
                />
                <button type="submit" onClick={handleSubmit}>
                  Qo'shish
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isModalAction && (
        <div className={styles.modalAction}>
          <div className={styles.modalActionContent}>
            <span onClick={closeModalAction} className={styles.closeAction}>
              &times;
            </span>
            <div className={styles.modalActionForm}>
              <div className={styles.deleteAction}>
                <img src={icon1} alt="as" />
                <span onClick={handleDelete} className={styles.delete}>
                  Delete
                </span>
              </div>
              <div className={styles.editAction}>
                <img src={icon2} alt="edit" />
                <span onClick={() => handleEdit(row)} className={styles.edit}>
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
