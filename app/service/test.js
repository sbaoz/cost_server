/*
 * @Author: your name
 * @Date: 2022-02-15 14:47:51
 * @LastEditTime: 2022-02-16 17:08:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \egg-example\app\service\home.js
 */
'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async user(id) {
    const { app } = this;
    const QUERY_STR = 'id, name';
    const sql = `select ${QUERY_STR} from list ${id ? `where id = '${id}'` : ''}`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async addUser(name) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('list', { name });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async editUser(id, name) {
    const { app } = this;
    try {
      const result = await app.mysql.update('list', { name }, { where: {
        id,
      } });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async delUser(id) {
    const { app } = this;
    try {
      const result = await app.mysql.delete('list', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = TestService;
