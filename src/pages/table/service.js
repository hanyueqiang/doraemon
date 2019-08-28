import { request } from '../../utils';

export function getTableList(payload) {
  return request('/getTableList', {
    method: 'POST',
    data: {
      ...payload,
    }
  });
}