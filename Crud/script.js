const API_URL = "https://reqres.in/api/users";

const userName = document.getElementById("userName");
const position = document.getElementById("position");
const usersContainer = document.getElementById("usersContainer");
const userRegisterForm = document.getElementById("userRegisterForm");
const submitButton = document.getElementById("submitButton");
const successMessage = document.getElementById("success_message");
const errorMessage = document.getElementById("error_message");


userRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.innerHTML = "Loading....."

    console.log(userName.name, userName.value);
    const userData = {
        [userName.name]: userName.value,
        [position.name]: position.value,
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
    })
    .then( () => {
        submitButton.innerHTML = "Create User";
        successMessage.style.display = "block";
        setTimeout( () => {
          successMessage.style.display = "none"; 
        }, 2000);
    })
    .catch( (error) => {
        submitButton.innerHTML = "Create User";
        errorMessage.style.display = "block";
        setTimeout( () => {
            errorMessage.style.display = "none"; 
        }, 2000);
    })
})


