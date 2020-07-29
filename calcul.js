window.addEventListener("load",
    function(){


    }
);







// window.addEventListener("load",
// function(){
//     let form = document.getElementById("frm");

//     let frmInput = frm.querySelector(".frm-input");

//     const frmBtn = form.querySelector(".frm-btn");
//     let img = form.querySelector(".frm-img");

//     var sel = form.querySelector(".select");

//     frmBtn.onclick = function(){
//         console.log(frmInput.value);
//         img.src = "img/"+sel.value;

//         // frmInput.style.border = "10px solid red";

//         img.style.width = "100px";
//         // img.style.border-color = "red";
//         img.style["border-color"] = "red";
//         img.style.borderColor = "violet";

//         console.dir(img.style);
//     };
// }
// );

// window.addEventListener("load",function(){
//     var sec4 = document.getElementById("sec4");
    
//     var input = sec4.querySelector(".input-box").children[0];
//     var btn = sec4.querySelector("input[type='button']");
//     var img = sec4.querySelector(".img");

//     var sel = sec4.querySelector(".select");

//     btn.onclick = function(){
        
//         img.src = "img/"+input.value;

//         // img.src = "img/"+sel.value;

        
//         console.log(input.value);

//     }
    
// }
// );

// window.addEventListener("load",function(){
//         var sec3 = document.getElementById("sec3");
        
//         var input = sec3.querySelector(".input-box").children[0];
//         var btn = sec3.querySelector("input[type='button']");
//         var img = sec3.querySelector(".img");

//         var sel = sec3.querySelector(".select");

        
//         var gl = sec3.getElementsByClassName("input-box");

//         btn.onclick = function(){
            
//             img.src = "img/"+input.value;

//             // img.src = "img/"+sel.value;

            
//             console.log(input.value);

//         }
        
//     }
// );

// window.addEventListener("load",function(){

//     var sec = document.getElementById("sec2");
//     var box = sec.querySelector(".box");

//     const input1 = box.childNodes[0];
//     const input2 = box.childNodes[1];
//     const input3 = box.childNodes[2];
//     const input4 = box.childNodes[3];

//     const inCh1 = box.children[0];
//     const inCh2 = box.children[1];


//     btn.onclick = function(){

//         console.log(input1.value);
//         console.log(input2.value);
//         console.log(input3.value);
//         console.log(input4.value);

//         console.log("inCh1 = "+inCh1.value);
//         console.log("inCh2 = "+inCh2.value);
    
//     };
// });

// window.addEventListener("load",function(){

//     var sec = document.getElementById("sec1");
//     // var arr = document.getElementsByTagName("input");

//     var x = sec.querySelectorAll("input");
//     var y = sec.querySelectorAll("input");
//     var btn = sec.querySelector("#btn-sum");
//     var rslt = sec.querySelector("#input-rslt");

//     // 1. x, y값 받기
//     // 2. btn의 클릭 이벤트 만들기
//     // 3. rslt 에 결과값 입력

//     var elIdX = document.getElementById("input-x")
//     var elClY = sec.getElementsByClassName("input-num")[0];
//     var num = sec.getElementsByTagName("input");
    

//     btn.onclick = function(){
//         x=parseInt(x.value);
//         y=parseInt(y.value);

//         console.log("x = "+x[0]);     //undefined
//         console.log("y = "+y.value);  //undefined
//         console.log("num = "+num[0].value);     //undefined
//         rslt.value = x+y;
//     };
// });
