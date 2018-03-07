/**
 * Created by Qiaodan on 2017/9/21.
 */


//下拉刷新
var moveRefresh={

    init:function(details){

        var _this=this;

        if(!details){
            details={}
        }

        var moveEleClass=details.moveEleClass||'hkb_bill_content';

        var showEleClass=details.showEleClass||'hkb_refresh';

        var moveDis=details.moveDis||'60';

        var thisShowFn=details.fn||0;

        var firstTouchesClientY; //初次点击的位置

        var moveTouchesClientY;//移动一段距离后，停止点的位置

        var getDis;


        var moveEle=document.getElementsByClassName(moveEleClass)[0];

        var refreshText=document.getElementsByClassName(showEleClass)[0];

        moveEle.addEventListener('touchstart',startFn,false);

        moveEle.addEventListener('touchmove',moveFn,false);

        moveEle.addEventListener('touchend',endFn,false);

        moveEle.addEventListener('TransitionEnd',transitionEndFn,false);

        moveEle.addEventListener('webkitTransitionEnd',transitionEndFn,false);

        function startFn(event){

            var evt=event || window.event;

            if(this.className.indexOf('hkb_refresh_move')>-1||refreshText.className.indexOf('hkb_refresh_move')>-1){

                refreshText.className=""+showEleClass+"";

                this.className=""+moveEleClass+"";
            }

            firstTouchesClientY=evt.touches[0].clientY;
        }

        function moveFn(event){

            var evt=event || window.event;

            moveTouchesClientY=evt.touches[0].clientY;

            getDis=parseFloat(moveTouchesClientY)-parseFloat(firstTouchesClientY);//两次触摸之间的距离

            getDis=getDis/3;//下拉阻力


            if(moveEle.scrollTop<10 && getDis>=0){

                evt.preventDefault();

                var textDis=parseFloat(getDis)-50;

                refreshText.style.transform="translate3d(0," + textDis + "px,0)";

                refreshText.style.webkitTransform="translate3d(0," + textDis + "px,0)";

                this.style.transform="translate3d(0," + getDis + "px,0)";

                this.style.webkitTransform="translate3d(0," + getDis + "px,0)";


                if(getDis>moveDis){

                    refreshText.getElementsByClassName('icon')[0].style.transform="rotate(180deg)";

                }else {

                    refreshText.getElementsByClassName('icon')[0].style.transform="rotate(0)";
                }
            }

        }

        function endFn(){

            if(getDis>moveDis&&moveEle.scrollTop<10){

                if(thisShowFn){

                    thisShowFn();

                }
            }
            refreshText.className=""+showEleClass+" hkb_refresh_move";

            this.className=""+moveEleClass+" hkb_refresh_move";

            refreshText.style.transform="translate3d(0,-100%,0)";

            refreshText.style.webkitTransform="translate3d(0,-100%,0)";

            setTimeout(function(){

                refreshText.getElementsByClassName('icon')[0].style.transform="rotate(0)";

            },300);

            this.style.transform="translate3d(0,0,0)";

            this.style.webkitTransform="translate3d(0,0,0)";

            //初始化为0
            getDis = 0;



        }

        function transitionEndFn(){

            this.className=this.className.replace('hkb_refresh_move','');

            refreshText.className=refreshText.className.replace('hkb_refresh_move','');
        }


    }

};


//上拉加载


var jfLazyLoading = {


    /*异步加载*/
    ajaxLoadInit: function (details) {


        var _this = this;

        if (!details) {//如果details未输入，则防止报错
            details = {};
        }
        _this.ajaxLoadDistance = details.ajaxLoadDistance || '50';//元素未显示时距离底部的距离。触发加载的距离

        _this.fn = details.fn || 0;//默认执行的脚本

        //鼠标滚动事件
        document.getElementsByClassName('hkb_bill_content')[0].addEventListener("scroll", function () {

            _this.getAjaxLoadDistance();


        }, false)

    },

    //获取异步加载的触发距离
    getAjaxLoadDistance: function () {
        var _this = this;

        var thisScrollTop = document.getElementsByClassName('hkb_bill_content')[0].scrollTop;//获取滚动条的距离

        var thisDocumentHeight = document.getElementsByClassName('hkb_bill_content')[0].getElementsByClassName('hkb_bill_check')[0].offsetHeight;//获取当前文档的高度


        var thisWindowHeight = window.innerHeight;//屏幕可视窗口高度

        if (parseFloat(thisDocumentHeight) - parseFloat(thisScrollTop + thisWindowHeight) <= _this.ajaxLoadDistance) {//如果当前文档底部距离窗口底部的距离小于50，执行相应的脚本

            if (_this.fn) {

                _this.fn();
            }

        }

    },

    //异步加载的内容
    ajaxContentInit: function (details) {

        var _this = this;

        if (!details) {//如果details未输入，则防止报错
            details = {};
        }


        _this.listdata = details.listdata ||[

                {
                    "src": "../../images/recharge.png",
                    "billtext": '合村日本料理 快捷消费',
                    "time":'2017-05-23 18:00',
                    'pay':true,
                    "money": "-15.00",
                    'code':'2018022709235404099522',
                    "banlace": "10000"


                }];

        var thishtml='';

        /*for(var i = 0; i < _this.listdata.length; i++){

            thishtml='<div class="bill_check"><div class="bill_images"><img src='+ _this.listdata[i].src+'></div><div class="bill_check_text"><div class="bill_text">'+_this.listdata[i].billtext+'</div><div class="bill_time">'+_this.listdata[i].time+'</div></div></div><div class="bill_money">';

            if(_this.listdata[i].pay){

                thishtml+='<div class="check_cost">'+_this.listdata[i].money+'</div>'
            }else{
                thishtml+='<div class="check_cost_red">'+_this.listdata[i].money+'</div>'
            }

            thishtml+='<div class="check_balance">余额:'+_this.listdata[i].banlace+'</div></div>';


            _this.ajaxAddnode('div', thishtml, 'bill_check_all');//增加a标签

        }*/

        for(var i = 0; i < _this.listdata.length; i++){

            thishtml='<div class="bill_check"><div class="bill_images"><img src='+ _this.listdata[i].src+'></div><div class="bill_content"><div class="bill_check_text"><div class="bill_text">'+_this.listdata[i].billtext+'</div>';

            if(_this.listdata[i].pay){

                thishtml+='<div class="check_cost">'+_this.listdata[i].money+'</div></div>'
            }else{
                thishtml+='<div class="check_cost_red">'+_this.listdata[i].money+'</div></div>'
            }

            thishtml+='<div class="bill_code">流水号：'+_this.listdata[i].code+'</div><div class="bill_money"><div class="bill_time">'+_this.listdata[i].time+'</div><div class="check_balance">余额: '+_this.listdata[i].banlace+'</div></div></div></div>';


            _this.ajaxAddnode('div', thishtml, 'bill_check_all');//增加a标签

        }



    },

    //添加元素
    ajaxAddnode: function (tag, innerHtml, className) {

        var _this = this;

        var obj = document.createElement(tag);

        if (className) {

            obj.className = className
        }

        obj.innerHTML = innerHtml;


        document.getElementsByClassName('hkb_bill_content')[0].getElementsByClassName('hkb_bill_check')[0].appendChild(obj);

        return obj
    }
}




