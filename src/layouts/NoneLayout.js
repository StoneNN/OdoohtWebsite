import React, {Component} from 'react';
import styles from './NoneLayout.css';
import { Layout } from 'antd';

const{Content} = Layout;

class NoneLayout extends Component{

    render(){

        return(
            <Layout className={styles.layout}>
                <Content className={styles.content}>
                    { this.props.children }
                </Content>
            </Layout>
        );
    };
}

export default NoneLayout;