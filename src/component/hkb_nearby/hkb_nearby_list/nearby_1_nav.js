/**
 * Created by ZHUANGYI on 2017/7/27.
 */
//sort list tab 切换



function clickTab(changeClass,e) {

    var evt=e||window.event;

    var thisTargetEle=evt.srcElement||evt.target;//事件委托 从父元素找到下面的子元素

    if( document.getElementsByClassName(changeClass)[0]){//

        document.getElementsByClassName(changeClass)[0].className="";

    }
    thisTargetEle.className= ''+changeClass;



}


//销量&评价切换
function otherTabRemove() {

    var otherTab = document.getElementsByClassName('tab');

    for (var i = 0;i<otherTab.length;i++){

        otherTab[i].addEventListener('click',function () {

            dropListRemove();

        },false)
    }

}





