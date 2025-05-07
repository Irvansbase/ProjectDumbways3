function getData(event){
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('input').value;
    let message = document.getElementById('message').value;

    console.log(nama, email, phone, subject, message);
};
