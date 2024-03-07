var p=document.getElementsByClassName("q");
        for(var i=0;i<p.length;i++){
            p[i].disabled = true;
        }
        var p=document.getElementsByClassName("t");
        for(var i=0;i<p.length;i++){
            p[i].disabled = true;
        }
        var user_key=localStorage.getItem("k");
        var text_key=[];
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        text_key.push("hypertext markup language");text_key.push("javascript");
        var key=[]; key.push(".BCD");key.push(".B..");key.push(".B");key.push(".B");key.push(".B");key.push("A...");key.push("...D");key.push("..C.");key.push("...D");key.push("..C.");key.push(".B..");
        key.push("..C.");key.push("..C.");key.push("..C.");key.push("AB..");key.push(".B");key.push("A.C.");key.push(".B..");key.push(".B..");key.push(".B..");
        text_key.push("111");text_key.push("123");
        var count=document.getElementsByClassName("list-group-item").length+document.getElementsByClassName("text").length,grade=0;

        function exitPage(){
            window.location.href="index.html";
        }

            var check=document.getElementsByClassName("alert alert-success")
            var index=0;
            var k=document.getElementsByClassName("question-form");
            for(var i=0;i<k.length;i++){
                var key_string="";
                var temp=key[i].length;
                var c=k[i].children;
                for(var j=0;j<c.length;j++){
                    if(temp==0) break;
                    if(c[j].tagName=="INPUT"){
                        key_string+=user_key[index++];
                        temp--;
                    }
                }
                if(key[i]===key_string){
                    grade++;
                }
            
            }
            var tcheck=document.getElementsByClassName("text-success");
            var textUserKey=localStorage.getItem("t").split(".");
            var text_question=document.getElementsByClassName("t");
            for(var i=0;i<text_question.length;i++){
                if(textUserKey[i]==text_key[i]){
                    grade++;
                } 
            }
            
        function showGrade(){
            document.getElementById("show").style.display="block";
            var check=document.getElementsByClassName("alert alert-success")
            var index=0;
            var k=document.getElementsByClassName("question-form");
            for(var i=0;i<k.length;i++){
                var key_string="";
                var temp=key[i].length;
                
                var c=k[i].children;
                for(var j=0;j<c.length;j++){
                    if(temp==0) break;
                    if(c[j].tagName=="INPUT"){
                        key_string+=user_key[index++];
                        temp--;
                    }
                }
                
                check[i].style.display="";
                check[i].style.fontSize="20px";
                check[i].style.fontWeight="bold";

                var ss=key_string.replaceAll(".","")
                var node=document.createElement("div");
                node.style.marginTop="10px";
                node.style.fontSize="16px";
                node.style.fontWeight="normal";

                if(ss.length==0) ss="Bạn chưa chọn đáp án nào."
                node.textContent="Đáp án bạn chọn: "+ss;
                check[i].innerHTML="Đáp án là: "+key[i].replaceAll("."," ").trim()
                check[i].appendChild(node)
                if(key[i]===key_string){
                }
                else node.className="alert alert-danger"
            
            }

            var textUserKey=localStorage.getItem("t").toLocaleLowerCase().split(".");
            var text_question=document.getElementsByClassName("t");
            for(var i=0;i<text_question.length;i++){
                tcheck[i].style.display="";
                tcheck[i].style.fontSize="20px";
                tcheck[i].style.fontWeight="bold";

                var ss=textUserKey[i].trim()
                var node=document.createElement("div");
                node.style.marginTop="10px";
                node.style.fontSize="16px";
                node.style.fontWeight="normal";

                if(ss.length==0) ss="Bạn chưa trả lời câu hỏi này."
                node.textContent="Đáp án bạn chọn: "+ss;
                tcheck[i].innerHTML="Đáp án là: "+text_key[i].trim()
                tcheck[i].appendChild(node)
                
                if(textUserKey[i]===text_key[i]){
                }
                else node.className="alert alert-danger"
            }
            var u=document.getElementById("user");
            u.textContent="Kết quả của "+localStorage.getItem("user").toUpperCase()+" ngày sinh: "+localStorage.getItem("birth") 
            u.style.display="";
            var x=document.getElementById("grade");
            x.textContent="Số câu trả lời đúng: " +grade+"/"+count;
            var c=document.getElementById("grade_10")
            c.textContent="Bạn đạt được: "+Math.round(grade/count*1000)/100 +" điểm";
            document.getElementsByClassName("submit-section")[0].disabled=true

        }
