/**
 * Created by ZHUANGYI on 2017/8/2.
 */
/*倒计时*/

    var InterValObj;
    var nums = 60;
    var btn;
    function sendCode(thisBtn) {
        btn = thisBtn;
        btn.disabled = true; //将按钮置为不可点击
        btn.value = '重新发送' + nums + 's';
        InterValObj = setInterval(doLoop, 1000); //一秒执行一次
    }

    function doLoop() {

        if (nums == 0) {
            window.clearInterval(InterValObj); //清除js定时器
            btn.disabled = false;
            btn.style.borderColor = '#f8c166';
            btn.value = '获取验证码';

        } else {
            nums--;
            btn.value = '重新发送' + nums + 's';
        }
    };




