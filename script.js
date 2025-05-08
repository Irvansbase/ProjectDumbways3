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
                    <button class="w-50 btn btn-dark fw-semibold rounded border-0 ps-4 pe-4" onclick="getRemoveData(e)">delete</button>
                </div>
            </div>
        </div>
    `;

    // Tambahkan card ke dalam container tanpa menghapus yang lama
    dom.insertAdjacentHTML('beforeend', cardHTML);
}

function getRemoveData(event) {
    event.preventDefault();
    document.getElementById('konten').reset();
}