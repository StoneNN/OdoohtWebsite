//基本布局

import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import GlobalNavi from '../component/GlobalNavi';
import styles from './BasicLayout.css'
import logoPic from '../assets/logo.jpg';
import logIn from '../assets/logIn.png';
import logOut from '../assets/logOut.png';
import * as routes from '../common/navigationRoutes';
import { Link } from 'dva/router';

const {Header, Footer, Content} = Layout;
const { naviRoutes } = routes;



class BasicLayout extends Component{
    

    render(){
        
        const { history: { location: { pathname } } } = this.props;
        const headerRouter = '/' + pathname.split('/')[1];
        return(
            <Layout>
                <Header className={styles.header}>
                  <Row>
                     <Col xs={18} sm={12} xl={12} xxl={8}>
                       <img className={styles.logo} src={logoPic} />
                     </Col> 
                     <Col xs={6} sm={12} xl={12} xxl={16} className={styles.userCol}>
                       <Link to="user/login">
                         <img className={styles.userPic} src={logOut}/> 
                       </Link>
                       
                     </Col>
                  </Row>
                </Header>
                <Content>
                    <Row style={{backgroundColor:'white'}}>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <GlobalNavi
                                naviRoutes={naviRoutes}
                                pathName={headerRouter}
                            />
                            { this.props.children }
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                </Content>
                <Footer 
                className={styles.footer}
                  style={{ 
                        }}
                >
                   <div className={styles.copyRight}>智赛棋牌版权所有</div>
                   <div className={styles.copyRight}>北京欧德慧通信息技术有限公司提供技术支持</div>
                </Footer>
            </Layout>
        );
    }
}


export default BasicLayout;