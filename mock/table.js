
module.exports = {
    [`POST /getTableList`](req, res) {
        res.status(200).json({
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    reviewCaseStatus: 1,
                    viciousStatus: 0,
                    reviewCaseTime: '2019-08-29',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    reviewCaseStatus: 2,
                    viciousStatus: 1,
                    reviewCaseTime: '2019-08-28',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    reviewCaseStatus: 3,
                    viciousStatus: 2,
                    reviewCaseTime: '2019-08-27',
                }
            ],
            status: 0
        });
    }
};