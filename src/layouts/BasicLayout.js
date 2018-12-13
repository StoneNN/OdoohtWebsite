//基本布局

import React, { Component } from 'react';
import { Layout, Row, Col, Menu, Dropdown, Button } from 'antd';
import GlobalNavi from '../component/GlobalNavi';
import styles from './BasicLayout.css'
import logoPic from '../assets/logo.jpg';
import logIn from '../assets/logIn.png';
import logOut from '../assets/logOut.png';
import * as routes from '../common/navigationRoutes';
import { Link } from 'dva/router';
import { dedent } from 'tslint/lib/utils';
import {connect} from 'dva';

const {Header, Footer, Content} = Layout;
const { naviRoutes } = routes;


class BasicLayout extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            avatar:this.props.loginForm.avatar,
            inOutState:this.props.loginForm.inOutState
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        this.props.dispatch({
            type:'login_m/logout',
            payload:{inOutState:false}
        });
    }
    componentWillMount(props){
        console.log('----------props-layout',this.props);
    }
    render(){
        console.log(this.state.inOutState);
        
        const { history: { location: { pathname } } } = this.props;
        const headerRouter = '/' + pathname.split('/')[1];
        console.log('--=-=-=-=-=-=-=-=-=-',this.state.inOutState === true);
        
        // alert(this.state.inOutState === true);

// 用户图标
        const menu = (
            <Menu className={styles.dropDownMenu}>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/" style = {{color:'#888888'}}>个人信息</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/" style = {{color:'#888888'}}>消息</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <Button style = {{color:'#444444'}} onClick={this.handleLogout}>退出登录</Button>
            </Menu.Item>
            </Menu>
        );
        const userAvatar = this.props.loginForm.inOutState === true ? 
        
        <Dropdown  className={styles.dropDown} overlay={menu} trigger={['hover']}>
            <a className="ant-dropdown-link" href="#">
                <img className={styles.userPic}  src={this.state.avatar}/>
            </a>
        </Dropdown>
        :
        <Link to="user/login">
          <img className={styles.userPic} src={logOut}/> 
        </Link> 
        return(
            <Layout>
{/* 页头 */}
                <Header className={styles.header}>
                  <Row>
                     <Col xs={18} sm={12} xl={12} xxl={8}>
                       <img className={styles.logo} src={logoPic} />
                     </Col> 
                     <Col xs={6} sm={12} xl={12} xxl={16} className={styles.userCol}>
                        {userAvatar} 
                     </Col>
                  </Row>
                </Header>
{/* 内容 */}
                <Content>
                    <Row style={{backgroundColor:'white'}}>
                        <Col span={1} xl={4}></Col>
                        <Col span={22} xl={16}>
                            <GlobalNavi
                                naviRoutes={naviRoutes}
                                pathName={headerRouter}
                                style={{backgroundColor:'white', marginBottom:'50%'}}
                            />
                            { this.props.children }
                        </Col>
                        <Col span={1} xl={4}></Col>
                    </Row>
                </Content>
{/* 页脚 */}
                <Footer 
                className={styles.footer}
                  style={{ 
                        }}
                >
                   <div className={styles.copyRight}>版权所有 © 2018 北京欧德慧通信息技术有限公司</div>
                   <div className={styles.copyRight}>京ICP备16000236号-1</div>
                   
                </Footer>
            </Layout>
        );
    }
}


// export default BasicLayout;

const mapStateToProps =({login_m}) =>{

    console.log('----- login_m ------',login_m)
    return{loginForm:login_m}
  }


export default connect(mapStateToProps)(BasicLayout);