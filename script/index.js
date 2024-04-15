const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const [input1, input2] = e.target;
    const userData = {
        [input1.name]: input1.value,
        [input2.name]: input2.value
    }
    fetch("url", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then( (resp) => {
        console.log(resp);
    })
    .catch( (error) => {
        console.log(error);
    })
});