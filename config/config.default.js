'use strict';
module.exports = appInfo => {
  const config = (exports) = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521540418984_9365';
  // add your config here


  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // 白名单
    domainWhiteList: [ 'http://localhost:7001','http://localhost:8080']
  };

  //配置cors
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials:true,
    origin: '*'
  };


  config.mysql = {
    client: {
      host: '120.27.125.78', //host
      port: '3306',//端口号
      user: 'admin',//用户名
      password: 'admin',//密码
      database: 'test'//数据库名
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false // 是否加载到 agent 上，默认关闭
  };

  config.middleware = [];

  return config;
};
