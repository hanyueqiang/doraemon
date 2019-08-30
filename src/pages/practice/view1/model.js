
import * as api from './service';

export default {
  namespace: 'view1',
  state: {
    dataSource: [
      // {
      //   name: 'zhang san',
      //   age: 20,
      //   love: 'sport'
      // },
      // {
      //   name: '李四',
      //   age: 25,
      //   love: '篮球'
      // },
    ]
  },
  effects: {
    *getView1({ payload }, { call, put }) {
      const result = yield call(api.getView1, { ...payload });
      const { data, status } = result;
      if (status === 0) {
        yield put({
          type: 'save',
          payload: {
            dataSource: data
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
