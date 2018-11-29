import styles from './index.css';
import React from 'react';
import BasicLayout from './BasicLayout.js';



function Layout(props) {
  console.log('---------rootProps',props);
  const { location:{ pathname } } = props;

  if (pathname === '/login') {
    return(
        <BasicLayout { ...props }> {props.children} </BasicLayout>
    )
  } else if(pathname === '/home' ||pathname === '/news'||pathname === '/games'||pathname === '/mine') {
     return(
        <BasicLayout { ...props }> {props.children} </BasicLayout> 
     );
  }
}


export default Layout;
