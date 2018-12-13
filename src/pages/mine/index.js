import React, {Component} from 'react';
import styles from './index.css';
import culturePic from '../../assets/culture.jpg';


class MineBlock extends Component{

    render(){
        return(
            <React.Fragment>
                <img className={styles.culturePic} src={culturePic} alt="企业文化"/>
                <div class={styles.usTitle}>
                    <span className={styles.usEng}>ABOUT US</span>
                    <p><span className={styles.usLine}>─────────</span><span className={styles.usCn}>关于我们</span><span className={styles.usLine}>─────────</span></p>
                </div>
            </React.Fragment>
        );
    };
}


export default MineBlock;