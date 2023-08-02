const form = document.querySelector("form")
const emailErrorMessage = document.querySelector(".email.errorMessage");
const phoneErrorMessage = document.querySelector(".phone.errorMessage");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const successMessage = document.querySelector(".successMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+7|8)[\d]{10}$/;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailErrorMessage.style.visibility = "hidden";
    phoneErrorMessage.style.visibility = "hidden";

    let isError = false;

    console.log(emailInput.value, phoneInput.value)

    if (!emailInput || !emailRegex.test(emailInput.value)) {
        emailErrorMessage.style.visibility = "visible";
        isError = true;
    }
    if (!phoneInput || !phoneRegex.test(phoneInput.value)) {
        phoneErrorMessage.style.visibility = "visible";
        isError = true;
    }

    if (isError) {
        successMessage.style.visibility = "hidden";
        form.style.borderColor = "red";
    } else {
        successMessage.style.visibility = "visible";
        form.style.borderColor = "green";
    }
})

emailInput.addEventListener("change", function () {
    successMessage.style.visibility = "hidden";
    form.style.borderColor = "black";
    emailErrorMessage.style.visibility = "hidden";
})

emailInput.addEventListener("click", function () {
    successMessage.style.visibility = "hidden";
    form.style.borderColor = "black";
    emailErrorMessage.style.visibility = "hidden";
})

phoneInput.addEventListener("change", function () {
    successMessage.style.visibility = "hidden";
    form.style.borderColor = "black";
    phoneErrorMessage.style.visibility = "hidden";
})

phoneInput.addEventListener("click", function () {
    successMessage.style.visibility = "hidden";
    form.style.borderColor = "black";
    phoneErrorMessage.style.visibility = "hidden";
})