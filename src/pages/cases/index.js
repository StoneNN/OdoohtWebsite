import React, { Component } from 'react';
import styles from './index.css';
import culturePic from '../../assets/culture.jpg';


class GamesBlock extends Component{

    render(){

        return(
            <React.Fragment>
                <img className={styles.culturePic} src={culturePic} alt="企业文化"/>
                <div class={styles.caseTitle}>
                    <span className={styles.caseEng}>SUCCESSFUL CASE </span>
                    <p><span className={styles.caseLine}>─────────</span><span className={styles.caseCn}>产品案例</span><span className={styles.caseLine}>─────────</span></p>
                </div>
            </React.Fragment>
        );
    };
};


export default GamesBlock;