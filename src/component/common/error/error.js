/**
 * Created by ZHUANGYI on 2017/8/18.
 */


var hkbErrorTips={

        errorShow:function(details){

            var _this=this;

            if(!details){//如果details未输入，则防止报错
                details={};
            }

            var thisText = details.text || 'null';

            thisText=thisText.toString().replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');//字符串转义

            var thisInnerHtml='<div class="error_main"><span class="error_icon">!</span> <span class="error_text">'+thisText+'</span></div>';

            _this.errorRemove();//先删除一次

            var thisInsertEle=addNode('div',thisInnerHtml,'top_error');

            setTimeout(function(){
                thisInsertEle.className="top_error show";
            },10);


            setTimeout(_this.errorRemove,3000);//3s后自动移除

            //插入元素
            function addNode(tag,innerHtml,className){

                var ele=document.createElement(tag);

                ele.innerHTML=innerHtml;

                ele.className=className;

                document.body.appendChild(ele);

                return ele;

            }

        },

        errorRemove:function(){

            var _this=this;

            if(document.getElementsByClassName('top_error')[0]){

                document.getElementsByClassName('top_error')[0].className="top_error";

                setTimeout(function(){
                    removeNode(document.getElementsByClassName('top_error')[0])
                },200)


            }

            //删除元素
            function removeNode(ele){

                var eleParentEle=ele.parentNode;

                if(eleParentEle){

                    eleParentEle.removeChild(ele)
                }

            }

        }



    };
