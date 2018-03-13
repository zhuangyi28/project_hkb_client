/**
 * Created by ZHUANGYI on 2017/8/2.
 */
/*倒计时*/

     var InterValObj;
     var nums = 60;//设置秒
     var btn;//点击按钮
     var curCount;//当前剩余秒数

    function sendCode(thisBtn) {

        curCount = nums;
        btn = thisBtn;
        btn.disabled = true; //将按钮置为不可点击
        btn.value = '重新发送' + curCount + 's';
        InterValObj = setInterval(doLoop, 1000); //一秒执行一次
    }

    function doLoop() {

        if (curCount == 0) {
            window.clearInterval(InterValObj); //清除js定时器
            btn.disabled = false;
            btn.style.borderColor = '#f8c166';
            btn.value = '获取验证码';

        } else {
            curCount--;
            btn.value = '重新发送' + curCount + 's';
        }
    };




