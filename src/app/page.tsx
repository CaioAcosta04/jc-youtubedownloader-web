import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <header className={styles.header}>
        <h1>Youtube Video Downloader</h1>
      </header>
      
      <div className={styles.body}>
        <div className={styles.addBarLeft}></div>
        
        <div className={styles.divForm}>
          <input type="text" placeholder="Cole a URL aqui" className={styles.inputUrl} />
          
          <div className={styles.formControls}>
            <select className={styles.selectBox}>
              <option value="mp4">MP4</option>
              <option value="mp3">MP3</option>
              <option value="avi">AVI</option>
            </select>
            
            <button className={styles.downloadButton}>Download Video</button>
          </div>
        </div>
        
        <div className={styles.addBarRight}></div>
      </div>
      
      <footer className={styles.addBarBottom}></footer>
    </div>
  );
}
