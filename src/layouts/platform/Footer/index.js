
import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './index.less';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{padding:0,paddingBottom: 10}} className={styles.footer}>
    <Icon type="github" /> <a style={{color: '#333',opacity: 0.6}} href="https://github.com/hanyueqiang/doraemon" target="_blank">https://github.com/hanyueqiang/doraemon</a>    
  </Footer>
);
export default FooterView;
