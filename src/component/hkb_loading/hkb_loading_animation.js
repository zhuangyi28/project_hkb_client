/*loading的三种动画*/
var loadInnerHtml={

    'node':{

        'loadingSuccess':'<div class="loading_box"><div class="success_animation_right"><div class="swal2-icon swal2-success animate"><span class="line tip animate-success-tip"></span><span class="line long animate-success-long"></span><div class="placeholder"></div><div class="fix"></div></div></div></div><div class="success_animation_text showtext"></div>',

        'loading':'<div class="loading_box"><div class="jd_loading"><div class="loading_box jdshop_alignment_center"><div class="k-ball-holder3"><div class="k-ball7a"></div><div class="k-ball7b"></div><div class="k-ball7c"></div><div class="k-ball7d"></div> </div></div><div class="loading_animation_text showtext"></div></div></div>',

        'loadingFail':'<div class="loading_box"><div class="fail_animation_wrong"><div class="swal2-icon swal2-error animate-error-icon"><span class="x-mark animate-x-mark"><span class="line left"></span><span class="line right"></span></span></div></div></div></div><div class="fail_animation_text showtext"></div>',


        'loadingAttention':'<div class="loading_box"><div class="pay_attention"><div class="swal2-icon swal2-info animate-info-icon">i</div></div></div><div class="fail_animation_text showtext"></div>'

    }

};

var jfShowTips = {

    //loading方法
    //陈羽翔
    //2017.2.3
    loadingShow:function (details) {

        var _this=this;

        if(!details){//为空时初始化数据
            details={};
        }

        windowBanEvent.bundling();//页面禁止事件

        _this.loadingRemove();//先删除页面上loading元素

        var thisText = details.text || 'LOADING..';//显示文字

        var thisNode=details.thisNode||0;//传入动画html

        var otherClass=details.thisClass|| false;//loading添加特殊class,成功失败不需要添加为false

        var thisInnerHtml=thisNode;

        var thisBg = _this.addLoadingBg('tip_loading_bg');

        /*在背景上加禁止浏览器默认事件*/
        document.getElementById('tip_loading_bg').addEventListener('touchmove',windowBanEvent.Canceling);

        var thisAddELe=_this.addNode('div',thisInnerHtml,'tip_loading',otherClass);//增加节点

        document.getElementsByClassName('showtext')[0].innerHTML=_this.changeString(thisText);

        document.activeElement.blur();//页面控件失焦

        thisAddELe.focus();//loading元素获得焦点

    },

    addLoadingBg:function (thisId) {

        var _this=this;

        _this.removeBg();

        return _this.addNode('div','',thisId,'tip_loading_bg');//增加节点

    },

    //loading删除方法
    //陈羽翔
    //2017.2.3
    loadingRemove:function () {//卸载loading

        var _this=this;

        if (document.getElementById('tip_loading')) {//删除之前，先判断当前元素是否存在

            windowBanEvent.unbundling();//解绑页面禁止事件

            _this.remove(document.getElementById('tip_loading'));//删除该元素


        }
        _this.removeBg('tip_loading_bg');


    },
    //新建元素的方法
    addNode: function (tag, innerHtml, id, className) {

        var obj = document.createElement(tag);

        if (id) {

            obj.id = id;

        }

        if(className){

            obj.className=className

        }

        obj.innerHTML = innerHtml;

        document.body.appendChild(obj);

        return obj;


    },

    //增加背景
    //陈羽翔
    //2017.2.4
    addBg:function (thisId) {

        var _this=this;

        _this.removeBg();

        return _this.addNode('div','',thisId,'tip_bg');//增加节点

    },

    removeBg:function (thisId) {

        if(document.getElementById(thisId)){

            document.getElementById(thisId).click();

            this.remove(document.getElementById(thisId));

        }

    },

    //自动删除的方法
    remove: function (_element) {

        var _parentElement = _element.parentNode;//找到父元素，然后删除

        if (_parentElement) {

            _parentElement.removeChild(_element);

        }

    },

    //批量增加平滑过渡后监听方法
    transitionEndFn:function (thisEle,myFn) {

        thisEle.addEventListener("webkitTransitionEnd", myFn);

        thisEle.addEventListener("transitionend", myFn);

    },

    settimeoutFn:function(myFn){

        setTimeout(myFn,500);

    },

    //转义字符串
    changeString:function(node){

        var _this=this;

        var thisInsertHtml=node.toString().replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');

        return thisInsertHtml
    }

};

