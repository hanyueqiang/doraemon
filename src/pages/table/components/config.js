
import { Divider, Popconfirm } from 'antd';

export const columns = context => ([
    {
        title: '患者姓名',
        dataIndex: 'name',
        render: text => text || '-'
    },
    {
        title: '审核状态',
        dataIndex: 'reviewCaseStatus',
        render: (text) => {
            switch (parseFloat(text)) {
                case 1: return '待审核';
                case 2: return '审核中';
                case 3: return '通过';
                case 4: return '不通过';
                default: return '-';
            }
        }
    },
    {
        title: '审核时间',
        dataIndex: 'reviewCaseTime',
        render: text => text || '-'
    },
    {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record) => (
            <span>
                <a onClick={context.editHandle.bind(context, record)}>编辑</a>
                <Divider type="vertical" />
                <Popconfirm title="确定删除?" onConfirm={context.deleteHandle.bind(context, record)}>
                    <a>删除</a>
                </Popconfirm>
            </span>
        ),
    },
]);
export const reviewOptions = [
    {
        id: 1,
        name: '待审核'
    },
    {
        id: 2,
        name: '审核中'
    },
    {
        id: 3,
        name: '通过'
    },
    {
        id: 4,
        name: '不通过'
    },
];