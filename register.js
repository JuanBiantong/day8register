let buttonRegist = document.getElementById('submit');
buttonRegist.addEventListener('click', function () {
    // event.preventDefault();
    let fullName = document.getElementById('full-name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    //console.log(fullName);
    let dataRegist = {
        fullName, phone, email, password
    }
    alert (`${dataRegist.fullName} \n
    ${dataRegist.phone} \n
    ${dataRegist.email} \n
    ${dataRegist.password} \n
    `)
    // console.log(fullName);
    // console.log(phone);
    // console.log(email);
    // console.log(password);
});