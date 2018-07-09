getList();

//定义获取列表数据函数
function getList() {
    var params = {};
    doAjaxPost(config.getList, params, true, function (data) {
        console.log(data);
        renderHtml(data);
    })
}

//定义删除用户函数
function deluser(id) {
    var params = {id: id};
    doAjaxPost(config.deluser, params, false, function (data) {
        getList();//删除成功刷新页面
    })
}


//定义渲染页面函数
function renderHtml(data) {
    var html = template("list-template", {list: data});
    $("#list-box").html(html);
    clickHandle();//页面加载完成后的点击事件函数
}




//定义页面加载完成之后的点击函数
function clickHandle() {
    //点击列表
    $("#list-box li").on("click", function (e) {
        var id = parseInt(e.currentTarget.id);
        window.location.href = "detailInfo.html?id=" + id;
    });


//点击编辑
    $("#list-box .edit").on("click", function (e) {
        e.stopPropagation();
        var id = parseInt(e.currentTarget.dataset.id);
        window.location.href = "add.html?id=" + id + "&type=edit";
    });

//点击删除
    $("#list-box .del").on("click", function (e) {
        e.stopPropagation();
        var id = parseInt(e.currentTarget.dataset.id);
        deluser(id);
    });
}




