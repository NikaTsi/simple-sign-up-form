const Name = document.querySelector("#name")
const lastName = document.querySelector("#lastName")
const mail = document.querySelector("#mail")
const password = document.querySelector("#password")
const repeatPassword = document.querySelector("#repeatPassword")
const form = document.querySelector("form")

const nameErr = document.querySelector(".nameErr")
const lastNameErr = document.querySelector(".lastNameErr")
const mailErr = document.querySelector(".mailErr")
const passwordErr = document.querySelector(".passwordErr")
const repeatPasswordErr = document.querySelector(".repeatPasswordErr")

const lettersRegex = /^[A-Za-z\s]+$/;
const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("click", (e) => {
    e.preventDefault()
    if (validationCheck()) {
        form.submit();
    }
});

function validationCheck(){
    errorRemover()
    
    let valid = true;

    if (Name.value.trim() == ""){
        Name.classList.add("err-img")
        nameErr.innerHTML = "First Name cannot be empty"
        nameErr.classList.add("active")
        Name.classList.add("err-box")
        valid = false
    }else if (!lettersRegex.test(Name.value)){
        Name.classList.add("err-img")
        nameErr.innerHTML = "Name must be only letters"
        nameErr.classList.add("active")
        Name.classList.add("err-box")
        valid = false
    }

    
    if (lastName.value.trim() == ""){
        lastName.classList.add("err-img")
        lastNameErr.innerHTML = "Last Name cannot be empty"
        lastNameErr.classList.add("active")
        lastName.classList.add("err-box")
        valid = false
    }else if (!lettersRegex.test(lastName.value)){
        lastName.classList.add("err-img")
        lastNameErr.innerHTML = "Last Name must be only letters"
        lastNameErr.classList.add("active")
        lastName.classList.add("err-box")
        valid = false
    }


    if (mail.value.trim() == ""){
        mail.classList.add("err-img")
        mailErr.innerHTML = "Email Address cannot be empty"
        mailErr.classList.add("active")
        mail.classList.add("err-box")
        valid = false
    }else if (!mailRegex.test(mail.value)){
        mail.classList.add("err-img")
        mailErr.innerHTML = "Looks like this is not an email"
        mailErr.classList.add("active")
        mail.classList.add("err-box")
        valid = false
    }


    if (password.value.trim() == ""){
        password.classList.add("err-img")
        passwordErr.innerHTML = "Password cannot be empty"
        passwordErr.classList.add("active")
        password.classList.add("err-box")
        valid = false
    }else if (password.value.trim() !== repeatPassword.value.trim()){
        password.classList.add("err-img")
        repeatPassword.classList.add("err-img")
        passwordErr.innerHTML = "Passwords don`t match"
        repeatPasswordErr.innerHTML = "Passwords don`t match"
        passwordErr.classList.add("active")
        repeatPasswordErr.classList.add("active")
        password.classList.add("err-box")
        repeatPassword.classList.add("err-box")
        valid = false
    }

    if (repeatPassword.value.trim() == ""){
        repeatPassword.classList.add("err-img")
        repeatPasswordErr.innerHTML = "Password cannot be empty"
        repeatPasswordErr.classList.add("active")
        repeatPassword.classList.add("err-box")
        valid = false
    }

    return valid;

}



function errorRemover(){
    nameErr.classList.remove("active")
    Name.classList.remove("err-box")
    Name.classList.remove("err-img")
    
    
    lastNameErr.classList.remove("active")
    lastName.classList.remove("err-box")
    lastName.classList.remove("err-img")
    
    mailErr.classList.remove("active")
    mail.classList.remove("err-box")
    mail.classList.remove("err-img")
    
    passwordErr.classList.remove("active")
    password.classList.remove("err-box")
    password.classList.remove("err-img")
    
    repeatPasswordErr.classList.remove("active")
    repeatPassword.classList.remove("err-box")
    repeatPassword.classList.remove("err-img")
}

