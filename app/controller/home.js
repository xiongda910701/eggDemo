'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    //新增
    async adduser() {
        const { ctx ,service } = this;
        var params = ctx.request.body;
        const response = await service.home.adduser(params);
        ctx.body = response;
        ctx.status = 200;
    }
    //删除
    async deluser() {
        const { ctx, service } = this;
        var params = ctx.request.body;
        const response = await service.home.deluser(params);
        ctx.body = response;
        ctx.status = 200;
    }
    //编辑
    async edituser(){
        const { ctx ,service}= this;
        var params=ctx.request.body;
        const res=await service.home.edituser(params);
        ctx.body=res;
        ctx.status=200;
    }
    //查找
    async list() {
        const { ctx, service } = this;
        const response = await service.home.list();
        ctx.body = response;
        ctx.status = 200;
    }
    //详情
    async find() {
        const { ctx , service } = this;
        const params = ctx.request.body;
        const res = await service.home.find(params);
        ctx.body = res;
        ctx.status = 200;
    }
}

module.exports = HomeController;
