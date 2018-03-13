/**
 * Created by ZHUANGYI on 2017/8/2.
 */
var payment = {

    paymentMethod :function() {


        document.getElementById('container_pay').addEventListener('click',function (e) {

            var evt=e||window.event;

            var thisTargetEle=evt.srcElement||evt.target;//事件委托
            // 从父元素找到下面的子元素

            if(document.getElementsByClassName('selected')[0]){ //如果页面上有 清楚所有页面上的selected

                document.getElementsByClassName('selected')[0].className = document.getElementsByClassName('selected')[0].className.replace(' selected','')
            }


            if(thisTargetEle.className == 'pay_contain'){ //如果点到是该元素本身

                thisTargetEle.className = 'pay_contain selected';

            }
            else {

                for(var i=0;i<thisTargetEle.length;i++){  //循环寻找父元素是不是pay_contain

                    if(thisTargetEle.parentElement.className.indexOf('pay_contain')>-1){

                        thisTargetEle.parentElement.className = 'pay_contain selected';

                        break;

                    }else {

                        thisTargetEle=thisTargetEle.parentElement;

                    }

                }

            }

            payShow.hide() //点击后收回弹框

        });



    }
}

