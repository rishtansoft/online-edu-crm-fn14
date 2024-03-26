import React from "react";
import Style from "../../Tabs.module.css";

const LessonsList = ({ darslar, handleLesson }) => {
  function handleLesson(el) {
    alert(`
        id: ${el.id}
        mavzu: ${el.title}
        video: ${el.video}
        sana: ${el.date}
    `);
  }
  return (
    <div>
      <h2 className={Style["lesson-title"]}>Darslar ro'yhati</h2>
      <button className={Style["lesson-start"]}>Darsni boshlash</button>
      <table className={Style["lesson-charts"]}>
        <thead className={Style["lesson-thead"]}>
          <tr>
            <th>TR</th>
            <th>Dars nomi</th>
            <th>Sanasi</th>
          </tr>
        </thead>
        <tbody>
          {darslar.map((dars, index) => (
            <tr key={dars.id} onClick={() => handleLesson(dars)}>
              <td>{index + 1}</td>
              <td className={Style["lesson-link"]}>
                <a href="#">{dars.title}</a>
              </td>
              <td>{dars.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonsList;
