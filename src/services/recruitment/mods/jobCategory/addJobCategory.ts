/**
 * @description 添加岗位类型
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = undefined;

export async function fetch(data = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await initRequest();
      const result = await request.post(
        backEndUrl + '/jobCategory/addJobCategory',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          data,
        },
      );
      if (result) {
        if (result.success) {
          resolve(result.data);
        } else {
          reject(new Error(JSON.stringify({ message: result.message })));
        }
      } else {
        reject(new Error(JSON.stringify({ message: '接口未响应' })));
      }
    } catch (error) {
      reject(error);
    }
  });
}
