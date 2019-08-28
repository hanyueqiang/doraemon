import * as api from '../services';
import menusData from '../../config/menu.config';
export default {
    namespace: 'menu',
    state: {
        menusData: menusData,
        flattenMenuData: [],
        diffMenuData: [],
    },
    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
        },
    },

    effects: {
        *getMenuData(_, { call, put, select }) {
            const { data = [] } = yield call(api.getMenuData, {});
            yield put({
                type: 'save',
                payload: {
                    menusData: data
                }
            });
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        clear(state) {
            return {
                ...state,
                menusData: [],
                flattenMenuData: [],
                diffMenuData: [],
            };
        }
    },

};
