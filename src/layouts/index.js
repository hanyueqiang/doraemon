import BasicLayout from './basic';
import PlatformLayout from './platform';

function Index(props) {
  const { location, children } = props;
  const { pathname } = location;
  if (
    pathname === '/' ||
    pathname === '/login' ||
    /^\/exception/.test(pathname)
  ) {
    return (<BasicLayout>{children}</BasicLayout>);
  }
  return (<PlatformLayout {...props}>{children}</PlatformLayout>);
}

export default Index;