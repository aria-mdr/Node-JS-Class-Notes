
window.addEventListener('load',()=>{

})
const url ='http://localhost:3003/api/users/register'	

const regForm = document.querySelector("#regForm")

regForm.addEventListener('submit', async e => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value


		// const formData = new FormData(regForm)
        const user = JSON.stringify({"email":email,"password":password})
  
		fetch(url, {
			method: "POST",
			body: user,
            headers: {
                    "Content-type": "application/json; charset=UTF-8",
			}
		}).then(response => response.json())
        .then(data=>{
            //do what you want
            window.location('login.html')
        })
	
  })
