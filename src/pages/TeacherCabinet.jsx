import React, { useState, useEffect } from 'react';
import styles from './teacherCabinet.module.css';
import edit from '../assets/images/edit.svg';
import trash from '../assets/images/delete.svg';
import phone from '../assets/images/phone.svg';
import date from '../assets/images/date.svg';

function TeacherCabinet() {
    const [newGroup, setNewGroup] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [groups, setGroups] = useState([
        {
            id: 1,
            name: 'Frontend ReactJS (Standard)',
            lessonStartTime: '8:00',
            lessonEndTime: '10:00',
            direction: 'Dasturlash',
        }
    ]);

    useEffect(() => {
        const savedGroups = JSON.parse(localStorage.getItem('groups'));
        if (savedGroups) {
            setGroups(savedGroups);
        }
    }, []);

    const [errors, setErrors] = useState({});

    const handleAddGroup = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    const handleGroupInputChange = (event) => {
        const { name, value } = event.target;
        setNewGroup({
            ...newGroup,
            [name]: value,
        });
        setErrors({});
    };

    const handleSaveNewGroup = () => {
        const newErrors = {};
        if (!newGroup || !newGroup.name) {
            newErrors.name = 'Nomi kerak';
        }
        if (!newGroup || !newGroup.lessonStartTime) {
            newErrors.lessonStartTime = 'Boshlanish vaqti kerak';
        }
        if (!newGroup || !newGroup.lessonEndTime) {
            newErrors.lessonEndTime = 'Tugallanish vaqti kerak';
        }
        if (!newGroup || !newGroup.direction) {
            newErrors.direction = 'Yo\'nalishi kerak';
        } else if (/\d/.test(newGroup.direction)) {
            newErrors.direction = 'Raqam kiritilmaydi';
        }

        if (Object.keys(newErrors).length === 0) {
            const updatedGroups = [
                ...groups,
                {
                    id: groups.length + 1,
                    ...newGroup
                }
            ];
            localStorage.setItem('groups', JSON.stringify(updatedGroups));
            setGroups(updatedGroups);
            setModalOpen(false);
            setNewGroup(null);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className={styles.teacherCabinet}>
            <h1 className={styles.rolesInfo}>O'qituvchilar</h1>
            <button className={styles.groupAddBtn} onClick={handleAddGroup}>+</button>
            <div className={styles.teachers}>
                <div className={styles.teacherInfo}>
                    <div className={styles.teacherChangesMenu}>
                        <div className="teacherName">
                            <h2 className={styles.teacherNameText}>Kamoliddinov Ibrohimjon</h2>
                        </div>
                        <div className="teacherChange">
                            <button className={styles.changeButtons}><img src={edit} alt="Edit" /></button>
                            <button className={styles.changeButtons}><img src={trash} alt="Delete" /></button>
                        </div>
                    </div>
                    <div className="teacherDirection">
                        <span className={styles.teacherDirectionText}>Frontend ReactJS</span>
                    </div>
                    <div className={styles.teacherLittleInfo}>
                        <div className={styles.teacherStartDate}>
                            <span className={styles.startDate}><img src={date} alt="Date" /><p>13.08.2024</p></span>
                        </div>
                        <div className={styles.teacherPhone}>
                            <span className={styles.phone}><img src={phone} alt="Phone" /><a className={styles.teacherPhone} href="tel:+998915555555">91 555 55 55</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.teacherGroup}>
                <h1 className={styles.rolesInfoStudents}>Guruhlar</h1>
                <table className={styles.allGroups}>
                    <thead>
                        <tr className={styles.group}>
                            <th className={styles.ths}>ID</th>
                            <th className={styles.ths}>Nomi</th>
                            <th className={styles.ths}>Dars vaqti</th>
                            <th className={styles.ths}>Dars kunlari</th>
                            <th className={styles.ths}>Yo'nalishi</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {groups.map(group => (
                            <tr className={styles.tbodyTr} key={group.id}>
                                <td className={styles.groupId}>{group.id}</td>
                                <td className={styles.tds}>{group.name}</td>
                                <td className={styles.tds}>{group.lessonStartTime} - {group.lessonEndTime}</td>
                                <td className={styles.tds}>{group.direction}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Modal menyusi */}
            {modalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <span className={styles.closeBtn} onClick={handleCloseModal}>&times;</span>
                            <h2 className={styles.modalTitle}>Guruh qo'shish</h2>
                            <p className={styles.modalDesc}>Yangi guruhni qo'shing</p>
                        </div>
                        <div className={styles.modalHero}>
                            <div className={styles.modalInputs}>
                                <div className={styles.groupName}>
                                    <span>Guruh nomi</span>
                                    <input
                                        className={`${styles.groupAdd} ${errors.name && styles.errorInput}`}
                                        type="text"
                                        name="name"
                                        placeholder="Nomi"
                                        onChange={handleGroupInputChange}
                                    />
                                    {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                </div>
                                <div className={styles.groupTimeEnd}>
                                    <span>Dars kunlari</span>
                                    <select className={styles.groupDates}>
                                        <option value="Dushanba-Seshanba">Dushanba-Seshanba</option>
                                        <option value="Chorshanba-Payshanba">Chorshanba-Payshanba</option>
                                        <option value="Juma-Shanba">Juma-Shanba</option>
                                    </select>
                                    {errors.lessonEndTime && <span className={styles.errorMessage}>{errors.lessonEndTime}</span>}
                                </div>
                                <div className={styles.groupTimeStart}>
                                    <span>Darsining boshlanish vaqti</span>
                                    <input
                                        className={`${styles.groupAdd} ${errors.lessonStartTime && styles.errorInput}`}
                                        type="time"
                                        name="lessonStartTime"
                                        placeholder="Boshlanish vaqti"
                                        onChange={handleGroupInputChange}
                                    />
                                    {errors.lessonStartTime && <span className={styles.errorMessage}>{errors.lessonStartTime}</span>}
                                </div>
                                <div className={styles.groupTimeEnd}>
                                    <span>Darsining tugash vaqti</span>
                                    <input
                                        className={`${styles.groupAdd} ${errors.lessonEndTime && styles.errorInput}`}
                                        type="time"
                                        name="lessonEndTime"
                                        placeholder="Tugallanish vaqti"
                                        onChange={handleGroupInputChange}
                                    />
                                    {errors.lessonEndTime && <span className={styles.errorMessage}>{errors.lessonEndTime}</span>}
                                </div>
                                <div className={styles.groupDirection}>
                                    <span>Guruh yo'nalishi</span>
                                    <input
                                        className={`${styles.groupAdd} ${errors.direction && styles.errorInput}`}
                                        type="text"
                                        name="direction"
                                        placeholder="Yo'nalishi"
                                        onChange={handleGroupInputChange}
                                    />
                                    {errors.direction && <span className={styles.errorMessage}>{errors.direction}</span>}
                                </div>
                            </div>
                        </div>
                        <button className={styles.groupSaveBtn} onClick={handleSaveNewGroup}>Saqlash</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeacherCabinet;
