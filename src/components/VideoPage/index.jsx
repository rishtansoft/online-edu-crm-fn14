import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

function Video() {
    const [isHomework, setIsHomework] = useState(true);
    const [videoData, setVideoData] = useState(null);
    const [error, setError] = useState(null);

    function handleHomework() {
        setIsHomework(true);
    }

    function handleRating() {
        setIsHomework(false);
    }

    // useEffect(() => {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch("https://api.kinescope.io/v1/videos?page=1&per_page=1&order=created_at.desc,title.asc", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }, []);

    return (
        <div className={styles.main}>
            <div className={styles.video}>
                <div className={styles.themeBack}>
                    <div className={styles.lessonNumber}>
                        <h4>7-8-Dars Mavzusi</h4>
                    </div>
                    <NavLink className={styles.backButton} to="/">
                        Qaytish
                    </NavLink>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageFrame}>
                        <iframe
                            src="https://kinescope.io/embed/anrBNqaBNZsyFvsmtLxQAN"
                        ></iframe>
                    </div>
                    <div className={styles.homeworkRating}>
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                <li onClick={handleHomework} style={isHomework ? { borderBottom: "2px solid #929acc", color: "#929acc" } : { borderBottom: "none" }}>
                                    Tasnif
                                </li>
                                <li onClick={handleRating} style={isHomework ? { borderBottom: "none" } : { borderBottom: "2px solid #929acc", color: "#929acc" }}>
                                    Dars reytingi
                                </li>
                            </ul>
                        </nav>

                        {isHomework ? (
                            <div className={styles.homework} >
                                <p>Bu yerda dars haqida tasnif</p>
                                <br />
                            </div>
                        ) : (
                            <div className={styles.rating} >
                                <p>Rating</p>
                                <br />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.fixed}>
                <div className={styles.lessonList}>
                    <div className={styles.lesson}>
                        <p>1-dars</p>
                        <h5>Dars sanasi: 23 Fev, 2024</h5>
                    </div>
                    <div className={styles.lesson}>
                        <p>2-dars</p>
                        <h5>Dars sanasi: 23 Fev, 2024</h5>
                    </div>
                    <div className={styles.lesson}>
                        <p>3-dars</p>
                        <h5>Dars sanasi: 23 Fev, 2024</h5>
                    </div>
                    <div className={styles.lesson}>
                        <p>4-dars</p>
                        <h5>Dars sanasi: 23 Fev, 2024</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
