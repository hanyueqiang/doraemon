import { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.less';
import Logo from './logo';
import FooterView from './Footer';
import MainMenu from './menus';
import ContentHeader from './header';

const { Header, Sider, Content } = Layout;

class Platform extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // 侧边栏状态
            collapsed: false,
            // 系统主题
            theme: 'light',
            // 菜单主题
            menuTheme: 'dark',
        };
    };

    componentDidMount() {
        // 判断是否登录
        const isLogin = sessionStorage.getItem('isLogin');
        if (isLogin === 'false') {
            router.push('/login?status=1');
            return;
        }
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.location !== prevProps.location) {
    //         window.scrollTo(0, 0);
    //     }
    // }

    componentWillUnmount() {

    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleSetting = (param) => {
        const { dispatch } = this.props;
        const { key, state } = param;
        if (key === 'logout') {
            dispatch({
                type: "global/logout",
                payload: {
                    ...state,
                },
            });
        }
    }

    render() {
        const { location } = this.props;
        return (
            <Layout className={styles.wrap}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
                    {/* LOGO */}
                    <Logo collapsed={this.state.collapsed} />
                    <MainMenu location={location} />
                </Sider>
                <Layout className={styles.container}>
                    <Header style={{ background: '#fff', padding: 0 }} className={styles.contentHeader}>
                        <div style={{ width: 100 }}>
                            <Icon
                                className={styles.trigger}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                        <ContentHeader handleSetting={this.handleSetting}/>
                    </Header>
                    <Content
                        className={styles.content}
                        style={{
                            margin: 16,
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        Content
              </Content>
                <FooterView />
                </Layout>
            </Layout>
        );
    }
}

export default connect(({ global, menu, }) => {
    return {
        ...global,
        menu
    };
})(Platform);