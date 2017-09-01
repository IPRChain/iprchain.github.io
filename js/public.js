/**
 * Created by jojopoper on 2017/08/25.
 */


function GetUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return decodeURI(r[2]);
    return null; //返回参数值
}

function GetExplorerLanguage() {
    lang = 'en';
    if (navigator.userLanguage) {
        lang = navigator.userLanguage.substring(0,2).toLowerCase();
    } else {
        lang = navigator.language.substring(0,2).toLowerCase();
    }
    return lang;
}

function GetLanguage(){
    // 先读取cookie
    mLanguage = $.cookie("language");
    if(mLanguage == undefined || mLanguage == null || mLanguage == '') {
        // 再读取连接参数
        mLanguage = GetUrlParam('l');
        if(mLanguage == undefined || mLanguage == null || mLanguage == '') {
            // 再读取浏览器语言
            mLanguage = GetExplorerLanguage();
            if(mLanguage == 'zh') {
                mLanguage = 'cn';
            } else {
                mLanguage = 'en';
            }
        }
    }
}

function CheckInputPositiveFloat(oInput) {
    if( ! /^\d+\.?\d{0,8}$/.test(oInput.value)) {
        var s = oInput.value;
        oInput.value = s.substring(0,s.length-1);
    }
}

function CheckInputPositiveInt(oInput) {
    if( ! /^\d+$/.test(oInput.value)) {
        var s = oInput.value;
        oInput.value = s.substring(0,s.length-1);
    }
}