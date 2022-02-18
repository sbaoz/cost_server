/*
 * @Author: your name
 * @Date: 2022-02-15 13:57:42
 * @LastEditTime: 2022-02-17 17:46:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \egg-example\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.get('/', controller.test.index);
  router.get('/user/:id', controller.test.user);
  router.post('/add_user', controller.test.addUser);
  router.post('/edit_user', controller.test.editUser);
  router.post('/delete_user', controller.test.delUser);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/getUserInfo', _jwt, controller.user.getUserInfo);
};
