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

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.kinescope.io/v1/videos/5o1o7855WXEWDcETxN7CKc/posters", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, []);

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
                    <div className={styles.videoImage}>
                        <div style={{ position: "relative", paddingTop: "100%", width: "100%" }}>
                            {error ? (
                                <p>Error: {error}</p>
                            ) : (
                                <pre>{JSON.stringify(videoData, null, 2)}</pre>
                            )}
                        </div>
                    </div>
                    <div className={styles.homeworkRating}>
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                <li>
                                    <a onClick={handleHomework} href="/home">
                                        Tasnif
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleRating} href="/homes">
                                        Dars reytingi
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {isHomework ? (
                            <div className={styles.homework}>
                                <p>Bu yerda dars haqida tasnif</p>
                                <br />
                            </div>
                        ) : (
                            <div className={styles.rating}>
                                <p>Rating</p>
                                <br />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.fixed}>
                <div className={styles.lessonList}>
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className={styles.lesson}>
                            <p>1-dars</p>
                            <h5>Dars sanasi: 23 Fev, 2024</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Video;
