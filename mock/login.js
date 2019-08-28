
module.exports = {
    [`POST /login`](req, res) {
        debugger
        const { body } = req;
        const { password, username } = body;
        if (password === 'admin' && username === 'admin') {
            res.status(200).json({
                data: {
                    alertDesc: '登录成功！'
                },
                status: 0
            });
        } else {
            res.status(200).json({
                data: {
                    alertDesc: '账号或密码错误！'
                },
                status: -1
            });
        }
    },
};