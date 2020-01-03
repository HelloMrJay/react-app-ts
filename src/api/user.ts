import { LoginFrom } from '../model/user';
import request from '../util/request';

export const login = async (params: LoginFrom): Promise<any> => {
  let res = await request.post('user/login', params);
  return res;
};
