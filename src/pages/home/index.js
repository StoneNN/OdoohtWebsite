import React, { Component }from 'react';
import {Menu, Carousel } from 'antd';
import styles from './index.css';
import topPic1 from '../../assets/topPic1.jpg';
import timeM from '../../assets/time-manager.png';
import projectM from '../../assets/project-manager.png';
import key from '../../assets/key.png';
import webDesign from '../../assets/computer.png';


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
      <React.Fragment>
        <Carousel autoplay className={styles.toppicCarousel}>
          <img className={styles.toppic} src={topPic1}  alt="新闻图片-1" />
          <img className={styles.toppic} src={topPic1}  alt="新闻图片-1" />
          <img className={styles.toppic} src={topPic1}  alt="新闻图片-1" />
        </Carousel>

{/* 核心业务 */}
        <div className={styles.majorTitle}>核心业务</div>
        <div className={styles.majorList}>
          <div className={styles.majorDiv}>
            <img className={styles.majorPic} src={key}  alt="技术推广" />
            <div className={styles.majorName}>技术推广</div>
            <div className={styles.majorDescribe}>技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广技术推广</div>
          </div>
          <div className={styles.majorDiv}>
            <img className={styles.majorPic} src={projectM}  alt="方案策划" />
            <div className={styles.majorName}>方案策划</div> 
            <div className={styles.majorDescribe}>方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划方案策划</div>
          </div>
          <div className={styles.majorDiv}>
            <img className={styles.majorPic} src={webDesign}  alt="网站设计" />
            <div className={styles.majorName}>网站设计</div>
            <div className={styles.majorDescribe}>网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计网站设计</div>
          </div>
          <div className={styles.majorDiv}>
            <img className={styles.majorPic} src={timeM}  alt="ERP系统定制" />
            <div className={styles.majorName}>ERP系统定制</div>
            <div className={styles.majorDescribe}>ERP系统定制RP系统定制RP系统定制RP系统定制RP系统定制RP系统定制ERP系统定制ERP系统定制ERP系统定制ERP系统定制</div>

          </div>
        </div>
{/* 优秀案例 */}
        <div className={styles.caseTitle}>优秀案例</div>
        <div className={styles.caseList}>
          <img className={styles.casePic} src={topPic1}  alt="案例-1" />
          <img className={styles.casePic} src={topPic1}  alt="案例-1" />
          <img className={styles.casePic} src={topPic1}  alt="案例-1" />
        </div>
{/* 企业介绍 */}
        <div className={styles.companyInfoTitle}>企业介绍</div>
        <div className={styles.companyInfo}>
          <img className={styles.companyInfoPic} src={topPic1}  alt="公司LOGO" />
          <h2>北京欧德慧通信息技术有限公司</h2>
          <p>北京欧德慧通信息技术有限公司成立于2015年，注册资金100万，是一家有着丰富项目经验的IT产业公司。公司服务于各个行业，提供技术开发，技术推广，技术转让，技术咨询以及技术服务，销售公司自行开发的产品以及提供计算机系统服务，基础软件服务，应用软件服务。
          多年以来本着“诚实做人，踏实做事，用心服务”的宗旨，通过我们的专业水平和不懈努力,三年来，一直秉承以用户需求为核心，在专注互联网市场开拓的同时,为多家企业提供技术服务，优质、用心的服务赢得了众多企业的信赖和好评，逐渐树立起公司良好品牌。并且完善了售后服务体系。我们相信,通过我们的不断努力和追求，一定能够实现与各个企业的互利共赢。
</p>
        </div>
      </React.Fragment>
        


      // <div>首页</div>
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
    );
  }
} 



export default function() {
  return (
     <NavigationBar/>
  );
}
