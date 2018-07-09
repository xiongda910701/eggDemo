
initPage(); //调用初始化函数



 //定义初始化页面函数
function initPage(){
    var type=getQueryString("type");
    var id=getQueryString("id");
    if(type=="edit"){
        getInfo(id);
    }
}



//定义新增用户函数
function add(){
    var name=$("#name").val();
    var sex=$("#sex").val();
    var age=$("#age").val();
    var address=$("#address").val();
    var params={name: name,sex: sex,age: age,address: address};
    doAjaxPost(config.adduser,params,false,function(data){
        var input=$("#form input[type='text']");
        for(var i=0,len=input.length;i<len;i++){
            $(input[i]).val("");
        }
    })
}

//定义编辑用户函数
function edit(){
    var id=getQueryString("id");
    var name=$("#name").val();
    var sex=$("#sex").val();
    var age=$("#age").val();
    var address=$("#address").val();
    var params={id:id,name: name,sex: sex,age: age,address: address};
    doAjaxPost(config.edituser,params,false,function(data){
        console.log(data);
        alert("编辑成功!");
        window.location.href="index.html";
    })
}



function getInfo(id){
    var params={id:id};
    doAjaxPost(config.getDetail,params,false,function(data){
        console.log(data);
        var data=data[0];
        $("#title").text("编辑用户信息");
        $("#name").val(data.name);
        $("#sex").val(data.sex);
        $("#age").val(data.age);
        $("#address").val(data.address);
    })
}


//点击新增按钮
$("#add-btn").on("click",function(){
    var type=getQueryString("type");
    if(type=="add"){
        add();
    }else{
        edit();
    }
});