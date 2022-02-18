/*
 * @Author: your name
 * @Date: 2022-02-16 17:51:13
 * @LastEditTime: 2022-02-16 17:51:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cost_server\app\controller\test.js
 */
/*
 * @Author: your name
 * @Date: 2022-02-15 13:57:42
 * @LastEditTime: 2022-02-16 17:29:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \egg-example\app\controller\home.js
 */
'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    await ctx.render('index.html', {
      title: 'zxj',
      id,
    });
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params;
    const result = await ctx.service.home.user(id);
    ctx.body = result;
  }
  async addUser() {
    const { ctx } = this;
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }
  async editUser() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      const result = await ctx.service.home.editUser(id, name);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '修改成功',
        data: null,
      };
    }
  }
  async delUser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      const result = await ctx.service.home.delUser(id);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '删除成功',
        data: null,
      };
    }
  }
}

module.exports = TestController;
