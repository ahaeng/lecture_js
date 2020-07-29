window.addEventListener("load", function () {
    let sec = document.getElementById("sec1");

    let title = sec.querySelector(".title-input");
    let add = sec.querySelector(".add-button");
    let del = sec.querySelector(".del-button");

    let list = sec.querySelector(".list");

    add.onclick = function () {
        let txt = document.createTextNode(title.value);

        let addTxt = list.appendChild(txt);
        console.log(addTxt);
    };

    del.onclick = function () {
        // list.removeChild(list.childNodes[0]);
        console.dir(list);
        //textNode에 대해 removeChild는 적용됮 않음
        list.removeChild(list.children[0]); // error 발생
    };
});