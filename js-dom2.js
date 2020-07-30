window.addEventListener("load",function(){
    let notice = [
        {"id":"5", "title":"공지사항 5", "regDate":"2020-02-15", "writerId":"에너지밸리", "hit": "10"},
        {"id":"6", "title":"공지사항 6", "regDate":"2020-01-15", "writerId":"에너지밸리", "hit": "11"},
        {"id":"7", "title":"공지사항 7", "regDate":"2019-12-15", "writerId":"에너지밸리", "hit": "12"}
    ]

    const sec = document.getElementById("section2");

    let cloneButton = sec.querySelector(".clone-button");
    let templetButton = sec.querySelector(".templet-button");
    let table = sec.querySelector(".notice-list");
    let tbody = sec.querySelector("tbody");

    // copyElement.cloneNode(true or false);

    cloneButton.onclick = function(){
        let trNode = table.querySelector("tbody tr");

        let cloneNode = trNode.cloneNode(true);

        tbody.append(cloneNode);

    };

    templetButton.onclick = function(){
        let templet = sec.querySelector("template");
        console.dir(templet);

        let trNode = document.importNode(templet.content, true);
        let tds = trNode.querySelectorAll("td");

        tds[0].innerText = notice[0].id;
        tds[1].textContent = notice[0].title;
        tds[2].textContent = notice[0].regDate;
        tds[3].textContent = notice[0].writerId;
        tds[4].textContent = notice[0].hit;

        tbody.append(trNode);
    };
});

window.addEventListener("load",function(){
    let notice = [
        {"id":"5", "title":"공지사항 5", "regDate":"2020-02-15", "writerId":"에너지밸리", "hit": "10"},
        {"id":"6", "title":"공지사항 6", "regDate":"2020-01-15", "writerId":"에너지밸리", "hit": "11"},
        {"id":"7", "title":"공지사항 7", "regDate":"2019-12-15", "writerId":"에너지밸리", "hit": "12"}
    ]

    const sec = document.getElementById("section");

    let cloneButton = sec.querySelector(".clone-button");
    let templetButton = sec.querySelector(".templet-button");
    let table = sec.querySelector(".notice-list");
    let tbody = sec.querySelector("tbody");

    // copyElement.cloneNode(true or false);

    cloneButton.onclick = function(){
        let trNode = table.querySelector("tbody tr");

        let cloneNode = trNode.cloneNode(true);

        tbody.append(cloneNode);

    };
});