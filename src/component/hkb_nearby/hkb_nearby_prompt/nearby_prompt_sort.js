/**
 * Created by ZHUANGYI on 2017/7/28.
 */

var dropDownList = {

    hkbDropDown:function() {

    var thisEle = document.getElementById('allTab');

    thisEle.addEventListener('click',function () {

        if(document.getElementsByClassName('show_list')[0]){

            dropDownList.dropListRemove();

            setTimeout(function () {//给全部按钮延迟 再删除元素
                document.getElementById('allTab').className = '';
            },10);

        }
        else {

            dropDownList.dropListShow();
        }

        //点击遮罩也可移除遮罩
        document.getElementsByClassName('drop_down_bg')[0].addEventListener('click',dropDownList.dropListRemove,false);

    });
},

    dropListShow:function () {//弹框出现

    //document.getElementsByClassName('hkb_drop_down')[0].style.display = 'block';

    setTimeout(function () {

        if(document.getElementsByClassName('hkb_drop_down')[0].className.indexOf('show_list') == -1){

            //如果页面上没有show_list 则添加
            document.getElementsByClassName('hkb_drop_down')[0].className += ' show_list';

        }
    },1);


    document.getElementsByClassName('drop_down_bg')[0].addEventListener('touchmove',windowBanEvent.Canceling);//给阴影绑定禁止事件

},

    dropListRemove:function() { //弹框关闭

    // document.getElementsByClassName('hkb_drop_down')[0].style.display = 'none';

    //如果页面上有show_list,清楚页面上的class

    setTimeout(function () {


        if(document.getElementsByClassName('hkb_drop_down')[0].className=='hkb_drop_down show_list'){

            document.getElementsByClassName('hkb_drop_down')[0].className = 'hkb_drop_down';

        }

        document.getElementById('allTab').className = '';

    },1);

    windowBanEvent.unbundling();//解绑页面禁止事件



},



}
