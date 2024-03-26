  import React, { useState } from "react";
  import Style from "../../Tabs.module.css";
  import StudentsList from "../StudentList/StudentList";
  import LessonsList from "../LessonList/LessonList";

  const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

    const info = [
      {
        id: 16345,
        name: "Yahyobek",
        surname: "Abduganiyev",
        phone: "+998914998419",
        status: "active",
      },
      {
        id: 14895,
        name: "Javohir",
        surname: "Nabijonov",
        phone: "+998334092109",
        status: "inactive",
      },
      {
        id: 17856,
        name: "Nargiza",
        surname: "Asqarova",
        phone: "+9989149669",
        status: "active",
      },

      {
        id: 12356,
        name: "Mirsaid",
        surname: "Qodirov",
        phone: "+998914998419",
        status: "inactive",
      },
      {
        id: 18956,
        name: "Samandar",
        surname: "Qahhorov",
        phone: "+998914998419",
        status: "active",
      },
      {
        id: 11234,
        name: "Nigora",
        surname: "Arslanova",
        phone: "+998914998419",
        father: "998914998419",
        mother: "+998914998419",
        status: "inactive",
      },
      {
        id: 11244,
        name: "Shahzod",
        surname: "Arslanov",
        phone: "+998914998419",
        status: "active",
      },
      {
        id: 11844,
        name: "Otabek",
        surname: "Ma'murjonov",
        phone: "+998914998419",
        status: "active",
      },
      
    ];

    const darslar = [
      {
        id: 1235,
        title: "Javascriptda massivlar bilan ishlash",
        video:"https://picsum.photos/200/300",
        date: "18.04.2024",
      },
      {
        id: 1236,
        title: "Javascriptda obyeklar bilan ishlash",
        video:"https://picsum.photos/200/300",
        date: "19.04.2024",
      },
      {
        id: 1237,
        title: "React JSga kirish",
        video:"https://picsum.photos/200/300",
        date: "22.04.2024",
      },
      {
        id: 1238,
        title: "React Js props orqali malumot uzatish",
        video:"https://picsum.photos/200/300",
        date: "24.04.2024",
      },
      {
        id: 1239,
        title: "React Redux",
        video:"https://picsum.photos/200/300",
        date: "25.04.2024",
      },
      {
        id: 1240,
        title: "React Fragment",
        video:"https://picsum.photos/200/300",
        date: "25.04.2024",
      },
      {
        id: 1241,
        title: "React js style bilan ishlash",
        video:"https://picsum.photos/200/300",
        date: "25.04.2024",
      },

    ];

    function handleLesson(item) {
      console.log(item);
    }

    function handleClick(student) {
      alert(`
      ID: ${student.id}
      Ismi: ${student.name},
      Familiyasi: ${student.surname},
      Tel raqami: ${student.phone},
      Holati: ${student.status}
      `);
      console.log(student);
    }

    return (
      <div className={Style.StudentWrapper}>
        <div className={Style["tab-buttons"]}>
          <button
            onClick={() => handleTabClick("tab1")}
            className={activeTab === "tab1" ? Style.active : ""}
          >
            O'quvchilar
          </button>
          <button
            onClick={() => handleTabClick("tab2")}
            className={activeTab === "tab2" ? Style.active : ""}
          >
            Darslar
          </button>
        </div>

        <div className={Style["tab-content"]}>
          {activeTab === "tab1" && <StudentsList info={info} handleClick={handleClick} />}
          {activeTab === "tab2" && <LessonsList darslar={darslar} handleLesson={handleLesson} />}
        </div>
      </div>
    );
  };

  export default Tabs;
