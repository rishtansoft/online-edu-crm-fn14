import React from "react";
import Style from "../../Tabs.module.css";

const StudentsList = ({ info, handleClick }) => {
  return (
    <div className={Style.students}>
      <h2 className={Style["student-title"]}>O'quvchilar ro'yhati</h2>
      <div>
        <table className={Style["rounded-table"]}>
          <thead className={Style.thead}>
            <tr>
              <th>TR</th>
              <th>ID</th>
              <th>Ismi</th>
              <th>Familiyasi</th>
              <th>Tel Raqami</th>
              <th>Holati</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item, index) => (
              <tr key={item.id} onClick={() => handleClick(item)}>
                <td>{index + 1}</td>
                <td className={Style["student-id"]}>
                  <a href="#">{item.id}</a>
                </td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
                <td
                  className={
                    item.status === "active" ? Style.active : Style.inactive
                  }
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;
