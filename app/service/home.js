"use strict";

const Service = require("egg").Service;
class HomeService extends Service {
    constructor(ctx){
        super(ctx);
    }
    //新增
    async adduser(params){
        const adduser=await this.app.mysql.insert("user",{
            name:params.name,
            sex:params.sex,
            age:params.age,
            address:params.address
        });
        return adduser;
    }
    //删除
    async deluser(params){
        const deluser=await this.app.mysql.delete("user",{
            id:params.id
        });
        return deluser;
    }
    //编辑
    async edituser(params){
        const row={name:params.name,sex:params.sex,age:params.age,address:params.address};
        const option={
            where:{id:params.id}
        };
        const res=await this.app.mysql.update("user",row,option);
        return res;
    }
    //查找
    async list() {
        const user = await this.app.mysql.select("user");
        return user;
    }
    //详情
    async find(params){
       const id=params.id;
        const res=await this.app.mysql.select("user",{
            where:{id:id}
        });
        return res;
    }
}

module.exports = HomeService;