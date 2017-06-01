/**
 * Created by lenovo on 2017/5/31.
 */

window.onload=function(){
        var input=document.getElementsByTagName('input')[0];
        var list=document.getElementById("list");
        var add=document.getElementById("add");
        add.onclick=function(){
            if(input.value!='')
            {
                var msg=document.createElement("div");
                var newLi = document.createElement("li");
                var btn = document.createElement("button");
                msg.className="clear";
                list.appendChild(msg);
                msg.appendChild(newLi);
                msg.appendChild(btn);
                newLi.className="float-l";
                btn.className="float-l";
                newLi.innerHTML=input.value;
                input.value="";
                btn.innerHTML="X";
                btn.onclick=function(){
                    reduce(btn);
                };
            }
            else{
                alert("请输入要添加的内容！");
            }
        };
        var clear=document.getElementsByClassName('clear');

        for(let i=0;i<clear.length;i++)
        {
            var butt=clear[i].getElementsByTagName("button");
            for(let j=0;j<butt.length;j++)
            {
                butt[j].onclick=function(){
                    reduce(this);
                }
            }

        }
        function reduce(el){
            var p1=el.parentNode;
            p1.parentNode.removeChild(p1);
        }
    };
