import React, { Component } from 'react';
import styles from './index.css';
import culturePic from '../../assets/culture.jpg';

class NewsBlock extends Component{

    render(){
        return(
            <React.Fragment>
                <img className={styles.culturePic} src={culturePic} alt="企业文化"/>
                <div class={styles.newsTitle}>
                    <span className={styles.newsEng}>NEWS CENTER</span>
                    <p><span className={styles.newsLine}>─────────</span><span className={styles.newsCn}>新闻中心</span><span className={styles.newsLine}>─────────</span></p>
                </div>
            </React.Fragment>  
        );
    }
}


export default NewsBlock;