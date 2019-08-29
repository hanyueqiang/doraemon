export const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        render: text => text || '-'
    },
    {
        title: '审核状态',
        dataIndex: 'reviewCaseStatus',
        render: (text) => {
            switch (parseFloat(text)) {
                case 0: return '待审核';
                case 1: return '审核中';
                case 2: return '通过';
                case 3: return '不通过';
                default: return '-';
            }
        }
    },
    {
        title: '缺陷状态',
        dataIndex: 'viciousStatus',
        render: text => {
            let content;
            if (text === 1) {
                content = '驳回';
            } else if (text === 2) {
                content = '疑问';
            } else if (text === 3) {
                content = '驳回&疑问';
            } else {
                content = '-';
            }
            return content;
        }
    },
    {
        title: '审核完成时间',
        dataIndex: 'reviewCaseTime',
        render: text => text || '-'
    }
];
export const reviewOptions = [
    {
        id: 0,
        name: '待审核'
    },
    {
        id: 1,
        name: '审核中'
    },
    {
        id: 2,
        name: '通过'
    },
    {
        id: 3,
        name: '不通过'
    },
];