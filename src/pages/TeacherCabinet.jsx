import React, { useState, useEffect } from 'react';
import styles from './teacherCabinet.module.css';
import edit from '../assets/images/edit.svg';
import trash from '../assets/images/delete.svg';
import phone from '../assets/images/phone.svg';
import date from '../assets/images/date.svg';

function TeacherCabinet() {
    const [newGroup, setNewGroup] = useState(null);
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
        setNewGroup({});
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
        if (!newGroup.name) {
            newErrors.name = 'Nomi kerak';
        }
        if (!newGroup.lessonStartTime) {
            newErrors.lessonStartTime = 'Boshlanish vaqti kerak';
        }
        if (!newGroup.lessonEndTime) {
            newErrors.lessonEndTime = 'Tugallanish vaqti kerak';
        }
        if (!newGroup.direction) {
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
            setNewGroup(null);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <>
            {/* ustoz cabineti */}
            <div className={styles.teacherCabinet}>
                <h1 className={styles.rolesInfo}>O'qituvchilar</h1>
                <button className={styles.studentAddBtn} onClick={handleAddGroup}>+</button>
                <div className={styles.teachers}>
                    <div className={styles.teacherInfo}>
                        <div className={styles.teacherChangesMenu}>
                            {/*ustozning asosan ism familyasi */}
                            <div className="teacherName">
                                <h2 className={styles.teacherNameText}>Kamoliddinov Ibrohimjon</h2>
                            </div>
                            {/* ustozning ma'lumotlarini o'chirish yoki o'zgartirish */}
                            <div className="teacherChange">
                                <button className={styles.changeButtons}><img src={edit} /></button>
                                <button className={styles.changeButtons}><img src={trash} /></button>
                            </div>
                        </div>
                        {/* uztozning guruhi, yo'nalishi */}
                        <div className="teacherDirection">
                            <span className={styles.teacherDirectionText}>Frontend ReactJS</span>
                        </div>
                        <div className={styles.teacherLittleInfo}>
                            <div className="teacherStartDate">
                                <span className={styles.startDate}><img src={date} /><p>13.08.2024</p></span>
                            </div>
                            <div className={styles.teacherPhone}>
                                <span className={styles.phone}><img src={phone} /><a className={styles.teacherPhone} href="tel:+998915555555">91 555 55 55</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Guruh qismi */}
                <div className={styles.teacherGroup}>
                    <h1 className={styles.rolesInfoStudents}>Guruhlar</h1>
                    {newGroup && (
                        <div className={styles.addGroupForm}>
                            <input
                                className={`${styles.groupAdd} ${errors.name && styles.errorInput}`}
                                type="text"
                                name="name"
                                placeholder="Nomi"
                                onChange={handleGroupInputChange}
                            />
                            {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                            <input
                                className={`${styles.groupAdd} ${errors.lessonStartTime && styles.errorInput}`}
                                type="time"
                                name="lessonStartTime"
                                placeholder="Boshlanish vaqti"
                                onChange={handleGroupInputChange}
                            />
                            {errors.lessonStartTime && <p className={styles.errorMessage}>{errors.lessonStartTime}</p>}
                            <input
                                className={`${styles.groupAdd} ${errors.lessonEndTime && styles.errorInput}`}
                                type="time"
                                name="lessonEndTime"
                                placeholder="Tugallanish vaqti"
                                onChange={handleGroupInputChange}
                            />
                            {errors.lessonEndTime && <p className={styles.errorMessage}>{errors.lessonEndTime}</p>}
                            <input
                                className={`${styles.groupAdd} ${errors.direction && styles.errorInput}`}
                                type="text"
                                name="direction"
                                placeholder="Yo'nalishi"
                                onChange={handleGroupInputChange}
                            />
                            {errors.direction && <p className={styles.errorMessage}>{errors.direction}</p>}
                            <button onClick={handleSaveNewGroup}>Saqlash</button>
                        </div>
                    )}
                    {/* Display existing groups */}
                    <div className={styles.allGroups}>
                        <div className={styles.groupProcedure}>
                            <span>ID</span>
                            <span>Nomi</span>
                            <span>Boshlanish vaqti</span>
                            <span>Tugallanish vaqti</span>
                            <span>Yo'nalishi</span>
                        </div>
                        {groups.map(group => (
                            <div key={group.id} className={styles.group}>
                                <div className={styles.groupId}>
                                    <span>{group.id}</span>
                                </div>
                                <div className={styles.groupName}>
                                    <span>{group.name}</span>
                                </div>
                                <div className={styles.groupLessonTime}>
                                    <span>{group.lessonStartTime} - {group.lessonEndTime}</span>
                                </div>
                                <div className={styles.groupDirection}>
                                    <span>{group.direction}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeacherCabinet;
