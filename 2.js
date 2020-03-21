function usernameCheck(user) {
	const validUser = /^[a-z]{5,7}$/;
	return validUser.test(user)
}

function passwordCheck(pass) {
 	const validPass = /^[a-zA-Z0-9@]{9}$/i;
	return validPass.test(pass)
}

console.log(usernameCheck("diandra"))
console.log(usernameCheck("Ebi"))
console.log(passwordCheck("Kint4m@ni"))
console.log(passwordCheck("p@ssW0rd!"))