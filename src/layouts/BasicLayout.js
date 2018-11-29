//基本布局

import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import GlobalNavi from '../component/GlobalNavi';
import styles from './BasicLayout.css'
import logoPic from '../assets/logo.jpg';
import * as routes from '../common/navigationRoutes';


const {Header, Footer, Content} = Layout;
const { naviRoutes } = routes;



class BasicLayout extends Component{
    

    render(){
        
        const { history: { location: { pathname } } } = this.props;
        const headerRouter = '/' + pathname.split('/')[1];
        return(
            <Layout>
                <Header className={styles.header}>
                  {/* <Row>
                     <Col xl={8} xxl={8}> */}
                       <img src={logoPic} />
                     {/* </Col> 
                     <Col xl={16} xxl={16}></Col>
                  </Row> */}
                </Header>
                <Content>
                    <GlobalNavi
                      naviRoutes={naviRoutes}
                      pathName={headerRouter}
                    />
                    { this.props.children }
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