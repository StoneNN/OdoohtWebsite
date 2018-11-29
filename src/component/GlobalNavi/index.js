//全局首页
//lsy
//2-19-9-4
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

const GlobalNavi = props => {

    const { naviRoutes, pathName } = props;
    const HeaderMenu = naviRoutes.map(item => {
        return <Menu.Item key={item.path}> <Link to={item.path}>{item.name}</Link> </Menu.Item>
    }).filter((item)=>(item));
    return (
        <div className={styles.header}>
            <Menu
               theme='grey'
                mode="horizontal"
                defaultSelectedKeys={[pathName]}
                style={{ lineHeight: '64px' }}
            >
                {HeaderMenu}
            </Menu>
        </div>
    )
}

export default GlobalNavi;