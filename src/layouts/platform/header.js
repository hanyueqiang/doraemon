
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { PureComponent } from 'react';
import { Dropdown, Menu, Icon } from 'antd'
class Index extends PureComponent {
    handleLoadMore = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'global/getMessage',
            payload: {
                size: 10,
            },
        });
    }
    handleSetting = (param) => {
        const { dispatch } = this.props;
        const { key, item } = param;
        const { state } = item.props;
        if (key === 'logout') {
            dispatch({
                type: "global/logout",
                payload: {
                    ...state,
                },
            });
        } else {
            dispatch(routerRedux.push({
                pathname: key,
                state,
            }));
        }
    }
    render() {
        const { handleSetting = () => { }, userName = 'admin' } = this.props;
        const handleMenuClick = (param) => {
            handleSetting(param);
        };
        const menu = (<Menu onClick={handleMenuClick}>
            <Menu.Item key={"sys/user"} disabled>
                <Icon type="user" />  {'个人中心'}
            </Menu.Item>
            <Menu.Item key={"sys/settings"} disabled>
                <Icon type="setting" />  {'设置中心'}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">
                <Icon type="logout" />   {'退出'}
            </Menu.Item>
        </Menu>);
        return (
            <div style={{ width: 200, textAlign: 'right', height: '100%', paddingRight: 20 }}>
                <Dropdown overlay={menu} placement="bottomRight">
                    <span>
                        <Icon type="user" />{userName}
                    </span>
                </Dropdown>
            </div>
        );
    }
}
export default connect(({ global: { userInfo, message, notification } }) => {
    return {
        userInfo,
        message,
        notification
    };
})(Index);