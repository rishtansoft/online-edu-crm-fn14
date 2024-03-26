import React from 'react';
import styles from './index.module.css';
import deleteIcon from "../../assets/images/deleteIcon.svg";
import editIcon from "../../assets/images/editIcon.svg";
import { NavLink } from 'react-router-dom';

function Lesson() {
    return (
        <div className={styles.videos}>
            <h2>Frontend ReactJS (Stansart) FN14</h2>
            <h3>Videolar</h3>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>Video nomi</th>
                        <th>Dars nomi</th>
                        <th>Dars sanasi</th>
                        <th>Video hajmi</th>
                        <th>Amallar</th>
                    </tr>
                    <tr>
                        <td><NavLink to="/videoPage">7-dars videosi</NavLink></td>
                        <td>7-dars</td>
                        <td>20 mart, 2024</td>
                        <td>423 mb</td>
                        <td className={styles.actions}>
                            <img src={editIcon} alt="" />
                            <img src={deleteIcon} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><NavLink to="/videoPage">7-dars videosi</NavLink></td>
                        <td>7-dars</td>
                        <td>20 mart, 2024</td>
                        <td>423 mb</td>
                        <td className={styles.actions}>
                            <img src={editIcon} alt="" />
                            <img src={deleteIcon} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><NavLink to="/videoPage">7-dars videosi</NavLink></td>
                        <td>7-dars</td>
                        <td>20 mart, 2024</td>
                        <td>423 mb</td>
                        <td className={styles.actions}>
                            <img src={editIcon} alt="" />
                            <img src={deleteIcon} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td><NavLink to="/videoPage">7-dars videosi</NavLink></td>
                        <td>7-dars</td>
                        <td>20 mart, 2024</td>
                        <td>423 mb</td>
                        <td className={styles.actions}>
                            <img src={editIcon} alt="" />
                            <img src={deleteIcon} alt="" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Lesson;
