import BasicLayout from './basic';
import PlatformLayout from './platform';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;
  if (
    pathname === '/' ||
    pathname === '/login' ||
    /^\/exception/.test(pathname)
  ) {
    return (<ConfigProvider locale={zhCN}><BasicLayout>{children}</BasicLayout></ConfigProvider>);
  }
  return (<ConfigProvider locale={zhCN}><PlatformLayout {...props}>{children}</PlatformLayout></ConfigProvider>);
}

export default Index;