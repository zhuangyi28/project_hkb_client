/**
 * Created by ZHUANGYI on 2017/10/10.
 */

var hkbLazyLoading = {


    /*异步加载*/
    ajaxLoadInit: function (details) {


        var _this = this;

        var moveNum = 0;//初始值为0

        if (!details) {//如果details未输入，则防止报错
            details = {};
        }
        _this.ajaxLoadDistance = details.ajaxLoadDistance || '50';//元素未显示时距离底部的距离。触发加载的距离

        _this.fn = details.fn || 0;//默认执行的脚本

        //鼠标滚动事件
        document.getElementsByClassName('nearby_list')[0].addEventListener("scroll", function () {

            if(moveNum==0 || moveNum==5 ){//降频

                _this.getAjaxLoadDistance();

                moveNum = 0
            }

            moveNum++;


        }, false)

    },

    //获取异步加载的触发距离
    getAjaxLoadDistance: function () {

        var _this = this;

        var thisScrollTop = document.getElementsByClassName('nearby_list')[0].scrollTop;//获取滚动条的距离

        var thisDocumentHeight = document.getElementsByClassName('nearby_list')[0].getElementsByClassName('nearby_list_content')[0].offsetHeight;//获取当前文档的高度


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
                    'data_href':'javascript:',
                    'shopname':'合村日本料理(虹桥路店)文案文案文案文案文案文案文案文案文案文案文案文案',
                    'picture':'../../images/merchant_test1.jpg',
                    'category':'美食',
                    'times':'100',
                    'star':'<div class="star"><span class="star_off"></span><span class="star_on"></span><span class="star_on"></span><span class="star_half"></span><span class="star_off"></span></div>',
                    'distance':'19.34km',
                    'discount':true,
                    'discount_text':'进店先购卡再消费更多优惠'


                }];

        var thishtml='';

        for(var i = 0; i < _this.listdata.length; i++){

            thishtml='<div class="business_pic"><img src='+_this.listdata[i].picture+'></div><div class="business_content"><div class="name">'+_this.listdata[i].shopname+'</div>'+_this.listdata[i].star+'<div class="hkb_alignment_center"><div><span class="sort">'+_this.listdata[i].category+'</span><span class="buy">已购<span>'+_this.listdata[i].times+'</span>次</span></div><div class="distance">'+_this.listdata[i].distance+'</div></div>';


            //判断有无有文案
            if(_this.listdata[i].discount){

                thishtml+='<div class="discount"><img src="../../images/nearby_good.png">'+_this.listdata[i].discount_text+'</div></div>'

            }


            var thisAddEle = _this.ajaxAddnode('a', thishtml, 'hkb_business hkb_alignment_top');//增加a标签

            thisAddEle.setAttribute('href',_this.listdata[i].data_href);//增加链接


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


        document.getElementsByClassName('nearby_list')[0].getElementsByClassName('nearby_list_content')[0].appendChild(obj);

        return obj
    }
};
