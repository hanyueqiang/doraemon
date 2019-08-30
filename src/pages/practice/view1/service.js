import { request } from '@utils';

export function getView1(payload) {
  return request('/getView1', {
    method: 'POST',
    data: {
      ...payload,
    }
  });
}