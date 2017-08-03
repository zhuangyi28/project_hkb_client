/**
 * Created by ZHUANGYI on 2017/8/3.
 */

function inputChoose() {

    var clickTab = document.getElementsByClassName('pay_mode');

    for (var i = 0;i<clickTab.length;i++){

        clickTab[i].addEventListener('click',function () {

           var inputBox = document.getElementsByClassName('confirm_choose');

           for (var j = 0;j<inputBox.length;j++){

               inputBox[j].checked = false;

           }

            this.getElementsByTagName('input')[0].checked = true


        })
    }

}