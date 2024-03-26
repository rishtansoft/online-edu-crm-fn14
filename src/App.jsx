import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Video from './components/VideoPage';
import Lesson from './components/Lessons';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}></div>
      <div className={styles.headerMain}>
        <header className={styles.header}>
          <h2>Darslar Ro'yxati</h2>
        </header>
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<Lesson />} />
            <Route path="/videoPage" element={<Video />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
