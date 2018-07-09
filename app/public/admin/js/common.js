var server = "http://127.0.0.1:7001/";
var config = {
    getList: server + "api/list",
    adduser: server + "api/add",
    edituser:server+"api/edit",
    deluser:server+"api/del",
    getDetail:server+"api/detail"

};


//定义请求函数
function doAjaxPost(url, params, isLoading, callback) {
    $.ajax({
        url: url,
        type: 'POST',
        timeout: 30000,
        data: params,
        beforeSend: function () {
            if (isLoading) {
                var csrfToken = getCookie("csrfToken");
                //console.log(csrfToken);
            }
        },
        success: function (data) {
            Debugger.log("----------------------请求成功分隔线开始--------------------------------");
            Debugger.log("接口名:" + url);
            Debugger.log(params);
            Debugger.log("----------------------请求成功分隔线结束--------------------------------");
            callback(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            Debugger.log("----------------------请求失败分隔线开始--------------------------------");
            Debugger.log("接口名:" + url);
            Debugger.log(params);
            Debugger.log(XMLHttpRequest);
            Debugger.log(textStatus);
            Debugger.log(errorThrown);
            Debugger.log("----------------------请求失败分隔线结束--------------------------------");
        }
    });
}

//重写console.log()函数
var Debugger = function () {
};
//开关，是否显示输出
Debugger.switch = true;
Debugger.log = function (message) {
    try {
        if (Debugger.switch) {
            console.log(message);
        }
    } catch (exception) {
        return 'Error:the function  log is not exist.';
    }
};


//定义获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return null;
    }
}

//获取cookie
function getCookie(key) {
    var cookieArr = document.cookie.split('; ');
    for (var i = 0; i < cookieArr.length; i++) {
        var arr = cookieArr[i].split('=');
        if (arr[0] === key) {
            return arr[1];
        }
    }
    return false;
}


//重置表单
function formReset(id){

}
