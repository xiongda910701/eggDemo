

getInfo();


function getInfo(){
    var id=parseInt(getQueryString("id"));
    var params={id:id};
    doAjaxPost(config.getDetail,params,false,function(data){
        renderHtml(data[0]);//渲染页面函数
    })
}

function renderHtml(data){
    console.log(data);
    var html=template("info-template",data);
    $("#info-box").html(html);
}