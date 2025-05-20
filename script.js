function getData(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let sDate = document.getElementById('s-date').value;
    let eDate = document.getElementById('e-date').value;
    let message = document.getElementById('message').value;
    let nodeJs = document.getElementById('nodejs').checked;
    let reactJs = document.getElementById('reactjs').checked;
    let nextJs = document.getElementById('nextjs').checked;
    let typescript = document.getElementById('typescript').checked;
    let file = document.getElementById('file').files[0];
    let dom = document.getElementById('dom');

    let dateCard = `${sDate} - ${eDate}`;

    let techList = [];
    if (nodeJs) techList.push("Node Js");
    if (reactJs) techList.push("React Js");
    if (nextJs) techList.push("Next Js");
    if (typescript) techList.push("TypeScript");

    let imageURL = file ? URL.createObjectURL(file) : "/img/Logo.png";

    let cardHTML = `
        <div class="card shadow-lg mb-3" style="width: 18rem;" id="konten">
            <img src="${imageURL}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nama}</h5>
                <p>${dateCard}</p>
                <p>${techList.join(', ')}</p>
                <p class="card-text">${message}</p>
                <div class="d-flex justify-content-center gap-2">
                    <button class="w-50 btn btn-dark fw-semibold rounded border-0 ps-4 pe-4">edit</button>
                    <button class="w-50 btn btn-dark fw-semibold rounded border-0 ps-4 pe-4" onclick="getRemoveData(event)">delete</button>
                </div>
            </div>
        </div>
    `;
    dom.insertAdjacentHTML('beforeend', cardHTML);
}




function getRemoveData(event) {
    event.preventDefault();
    document.getElementById('konten').remove();
}

let dataCardHtml = {
    1: {
        imageURLfix: "https://cdn.prod.website-files.com/64dafa2aa16a8c8103ed6148/655c71368a82fdc826b0f0a1_YWOxnVoX3FCpF1rCQokcZCKBV20BX6CgOIJIA8Axf57_Xdd--zl2Ac-keZ_-C6JpgkBaSCVHzalMLLaAxThVKOgWE8VWoxj3Yro_EE-Og7u18wIDY9N_lP56b3hjZf8ZzNsZKQp6W1PGbTDXh8aR15M.png",
        namaFix: "Shopee Clone",
        dateCardfix: "2019-2020",
        messageFix: "Web Seperti Shopee Yang Keren",
    },

    2: {
        imageURLfix: "https://img2.beritasatu.com/cache/jakartaglobe/960x620-3/2016/07/Tokopedia.jpg",
        namaFix: "Tokopedia Clone",
        dateCardfix: "2019-2020",
        messageFix: "Web Seperti Tokopedia Yang Keren",
    },

    3: {
        imageURLfix: "https://img2.beritasatu.com/cache/jakartaglobe/960x620-3/2016/07/Tokopedia.jpg",
        namaFix: "Bukalapak Clone",
        dateCardfix: "2019-2020",
        messageFix: "Web Seperti Bukalapak Yang Keren",
    },
};


dom.innerHTML = Object.values(dataCardHtml).map(item => `<div class="card shadow-lg mb-3" style="width: 18rem;" id="konten">
            <img src="${item.imageURLfix}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${item.namaFix}</h5>
                <p>${item.dateCardfix}</p>
                <p>${item.techList}</p>
                <p class="card-text">${item.messageFix}</p>
                <div class="d-flex justify-content-center gap-2">
                    <button class="w-50 btn btn-dark fw-semibold rounded border-0 ps-4 pe-4">edit</button>
                    <button class="w-50 btn btn-dark fw-semibold rounded border-0 ps-4 pe-4" onclick="getRemoveData(event)">delete</button>
                </div>
            </div>
        </div>`).join('');