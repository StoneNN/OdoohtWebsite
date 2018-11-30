import React, { Component }from 'react';
import {Menu, Row, Col} from 'antd';
import styles from './index.css';


const SubMenu = Menu.SubMenu;

// console.log('------home ------',props);
class NavigationBar extends Component{

  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      // <Row style={{backgroundColor:'white'}}>
      //   <Col span={1}></Col>
      //   <Col span={22}>
      //     <Menu
      //       onClick={this.handleClick}
      //       selectedKeys={[this.state.current]}
      //       mode="horizontal"
      //     >
      //       <Menu.Item key="home">
      //         首页
      //       </Menu.Item>
      //       <Menu.Item key="news" >
      //         新闻
      //       </Menu.Item>
      //       <Menu.Item key="game">
      //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">赛事</a>
      //       </Menu.Item>
      //       <Menu.Item key="mine" >
      //         我们
      //       </Menu.Item>
      //     </Menu>
      //   </Col>
      //   <Col span={1}></Col>
      // </Row>
      <div>首页</div>
    );
  }
} 



export default function() {
  return (
     <NavigationBar/>
  );
}
