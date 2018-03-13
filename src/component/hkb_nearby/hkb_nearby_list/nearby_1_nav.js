/**
 * Created by ZHUANGYI on 2017/7/27.
 */

var nearBy = {

    //----sort list tab 切换
    clickTab: function(changeClass,fatherEle,e) {

        var evt=e||window.event;

        var thisTargetEle=evt.srcElement||evt.target;//事件委托
        // 从父元素找到下面的子元素



        if(thisTargetEle !=fatherEle){ //如果点击空白处

            if( document.getElementsByClassName(changeClass)[0]){

                document.getElementsByClassName(changeClass)[0].className="";

            }

            thisTargetEle.className= ''+changeClass;

        }


        if(thisTargetEle.tagName == 'SPAN'){ //若点击到箭头的话

            thisTargetEle.className = '';//清除span的class

            document.getElementById('allTab').className = ''+changeClass;//给‘全部’加上class
        }




    },


//----销量&评价切换
    otherTabRemove:function() {

        var otherTab = document.getElementsByClassName('tab');

        for (var i = 0;i<otherTab.length;i++){

            otherTab[i].addEventListener('click',function () {

                dropDownList.dropListRemove();

            },false)
        }

    },





}






