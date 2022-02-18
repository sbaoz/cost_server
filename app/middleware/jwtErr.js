/*
 * @Author: your name
 * @Date: 2022-02-17 16:53:27
 * @LastEditTime: 2022-02-17 17:45:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cost_server\app\middleware\jwtErr.js
 */
'use strict';

module.exports = secret => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.authorization;
    if (token !== 'null' && token) {
      try {
        ctx.app.jwt.verify(token, secret);
        await next();
      } catch (error) {
        console.log('error', error);
        ctx.status = 200;
        ctx.body = {
          msg: 'token已过期，请重新登录',
          code: 401,
        };
        return;
      }
    } else {
      ctx.status = 200;
      ctx.body = {
        code: 401,
        msg: 'token不存在',
      };
      return;
    }
  };
};
