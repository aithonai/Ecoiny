function initLocalStorage() {
	if (localStorage.getItem("balance")) {
		return
	} else {
		localStorage.setItem("balance", 0)
	}
}

export default initLocalStorage