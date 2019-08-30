
import * as api from './service';

export default {
    namespace: 'table',
    state: {
        dataSource: [],
        tableSource: [],
        review: '',
        deleteKey: ''
    },
    effects: {
        *getTableList({ payload }, { call, put }) {
            const result = yield call(api.getTableList,{...payload});
            const { data, status } = result;
            if (status === 0) {
                yield put({
                    type: 'save',
                    payload: {
                        dataSource: data,
                        tableSource: data
                    }
                });
            }
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
