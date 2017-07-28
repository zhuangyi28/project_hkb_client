/**
 * Created by ZHUANGYI on 2017/7/28.
 */
function hkbDropDown() {

    var thisEle = document.getElementById('allTab');

    thisEle.addEventListener('click',function () {

        if(document.getElementsByClassName('show_list')[0]){//



            dropListRemove()
        }
        else {

            dropListShow()
        }

        //点击遮罩也可移除遮罩
        document.getElementsByClassName('drop_down_bg')[0].addEventListener('click',function () {
            dropListRemove()
        });


    },false);

}


function dropListShow() {//弹框出现

    if(document.getElementsByClassName('hkb_drop_down')[0].className.indexOf('show_list') == -1){

        //如果页面上没有show_list 则添加
        document.getElementsByClassName('hkb_drop_down')[0].className += ' show_list'


    }

}

function dropListRemove() { //弹框关闭


    //如果页面上有show_list,清楚页面上的class

    if(document.getElementsByClassName('hkb_drop_down')[0].className=='hkb_drop_down show_list'){

        document.getElementsByClassName('hkb_drop_down')[0].className = 'hkb_drop_down';

    }

}


