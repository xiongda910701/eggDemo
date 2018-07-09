'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/api/add",controller.home.adduser);
  router.post("/api/del",controller.home.deluser);
  router.post("/api/edit",controller.home.edituser);
  router.post("/api/list",controller.home.list);
  router.post("/api/detail",controller.home.find);
};


