import styles from "./index.module.css";
import closeBtn from '../../assets/close-fill.svg'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeeSlicer";

function AddEmployee({setShowModal}) {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const surnameRef = useRef();
  const fathernameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const birthDateRef = useRef();
  const telegramRef = useRef();
  const phone2Ref = useRef();
  const loginRef = useRef();
  const passwordRef = useRef();

  function validate() {
    if (
      nameRef.current.value === "" &&
      surnameRef.current.value === "" &&
      fathernameRef.current.value === "" &&
      addressRef.current.value === "" &&
      phoneRef.current.value === "" &&
      birthDateRef.current.value === "" &&
      telegramRef.current.value === "" &&
      phone2Ref.current.value === "" &&
      loginRef.current.value === "" &&
      passwordRef.current.value === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(validate()) {
      const employee = {
        id: Date.now(),
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        fathername: fathernameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        birthDate: birthDateRef.current.value,
        telegram: telegramRef.current.value,
        phone2: phone2Ref.current.value,
        login: loginRef.current.value,
        password: passwordRef.current.value,
      };
      console.log(employee);
      setShowModal(false);
    }
  }
  return (
    <div className={styles.add_employee}>
      <header className={styles.add_employee_header}>
        <div className={styles.add_employee_actions}>
        <h4 className={styles.add_employee_title}>Xodim qo‘shish</h4>
        <button onClick={() => setShowModal(false)} className={styles.add_employee_closeBtn}>
        <img src={closeBtn} alt="close" />
        </button>
        </div>
        <p className={styles.add_employee_text}>
          Yangi xodim qo‘shishingiz mumkin
        </p>
      </header>
      <div className={styles.add_employee_wrapper}>
        <form onSubmit={handleSubmit} className={styles.add_employee_form}>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="name">
              Xodim ismi
            </label>
            <input
              className={styles.add_employee_input}
              type="text"
              id="name"
              placeholder="Ism kiriting..."
              ref={nameRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="surname">
              Xodim familiyasi
            </label>
            <input
              className={styles.add_employee_input}
              type="text"
              id="surname"
              placeholder="Familiya kiriting..."
              ref={surnameRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="fathername">
              Otasining ismi
            </label>
            <input
              className={styles.add_employee_input}
              type="text"
              id="fathername"
              placeholder="Otasining ismini kiriting..."
              ref={fathernameRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="address">
              Manzili
            </label>
            <input
              className={styles.add_employee_input}
              type="text"
              id="address"
              placeholder="Manzilini kiriting..."
              ref={addressRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="dateOfBirth">
              Tug‘ilgan sanasi
            </label>
            <input
              className={styles.add_employee_input}
              type="date"
              id="dateOfBirth"
              ref={birthDateRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="gender">
              Jinsi
            </label>
            <select className={styles.add_employee_input} id="gender">
              <option defaultValue="" disabled hidden>
                Jinsini tanlang
              </option>
              <option value="male">Erkak</option>
              <option value="female">Ayol</option>
            </select>
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="phone">
              Xodim tel raqami
            </label>
            <input
              className={styles.add_employee_input}
              type="tel"
              id="phone"
              placeholder="+998"
              ref={phoneRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="phone2">
              Qo‘shimcha tel raqam
            </label>
            <input
              className={styles.add_employee_input}
              type="tel"
              id="phone2"
              placeholder="+998"
              ref={phone2Ref}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="telegram">
              Telegram ID
            </label>
            <input
              className={styles.add_employee_input}
              type="text"
              id="telegram"
              placeholder="@username"
              ref={telegramRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="role">
              Xodim vazifasi
            </label>
            <select className={styles.add_employee_input} id="role">
              <option value="" disabled hidden>
                Xodim vazifasini tanlang
              </option>
              <option value="CEO">Bosh direktor (CEO)</option>
              <option value="admin">Administrator</option>
              <option value="accountant">Hisobchi</option>
              <option value="teacher">O‘qituvchi</option>
            </select>
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="login">
              Xodim logini
            </label>
            <input
              className={styles.add_employee_input}
              type="text"
              id="login"
              placeholder="ceo_1"
              ref={loginRef}
            />
          </div>
          <div className={styles.add_employee_form_group}>
            <label className={styles.add_employee_label} htmlFor="password">
              Paroli
            </label>
            <input
              className={styles.add_employee_input}
              type="password"
              id="password"
              placeholder="******"
              ref={passwordRef}
            />
          </div>
          <button type="submit" className={styles.btn}>Qo‘shish</button>
        </form>
       
      </div>
    </div>
  );
}

export default AddEmployee;
