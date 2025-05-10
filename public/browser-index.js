fetch("http://localhost:3000/users", {
    method: "POST", 
    body: JSON.stringify({username: "data"}), 
    headers: {
        "Content-Type": "application/json",
        "token": "kunci"
    }
})
.then(res => {
    console.log(res, "Response")
})
.catch(err => {
    console.log(err)
})

